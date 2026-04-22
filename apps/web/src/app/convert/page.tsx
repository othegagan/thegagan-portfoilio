'use client';

import { Button } from '@thegagan-portfoilio/ui/components/button';
import { cn } from '@thegagan-portfoilio/ui/lib/utils';
import { CheckIcon, CopyIcon, PlusIcon, Trash2Icon } from 'lucide-react';
import type React from 'react';
import type { CSSProperties } from 'react';
import { useCallback, useMemo, useState } from 'react';
import { ModeToggle } from '@/components/mode-toggle';

const TAX_IGST = 'igst' as const;
const TAX_SPLIT = 'cgst_sgst' as const;
type TaxMode = typeof TAX_IGST | typeof TAX_SPLIT;

interface LineRow {
    cgstPercent: string;
    id: string;
    igstPercent: string;
    kind: 'line';
    name: string;
    qty: string;
    sgstPercent: string;
    unitRate: string;
}

interface ExtraRow {
    amount: string;
    id: string;
    kind: 'extra';
    name: string;
}

type InvoiceRow = LineRow | ExtraRow;

function newId() {
    if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
        return crypto.randomUUID();
    }
    return `row-${String(Date.now())}-${String(Math.random()).slice(2, 9)}`;
}

function createLineRow(): LineRow {
    return {
        id: newId(),
        kind: 'line',
        name: '',
        qty: '',
        unitRate: '',
        igstPercent: '18',
        cgstPercent: '9',
        sgstPercent: '9'
    };
}

function createExtraRow(): ExtraRow {
    return { id: newId(), kind: 'extra', name: '', amount: '' };
}

/** Parses Indian-style amounts: commas are stripped; only digits are used. */
function parseIndianAmountInput(raw: string): number | null {
    const digitsOnly = raw.replaceAll(',', '').replace(/\D/g, '');
    if (digitsOnly === '') {
        return null;
    }
    const n = Number(digitsOnly);
    return Number.isFinite(n) ? n : null;
}

function parseDecimal(raw: string): number | null {
    const t = raw.trim().replaceAll(',', '');
    if (t === '' || t === '.') {
        return null;
    }
    const n = Number(t);
    return Number.isFinite(n) ? n : null;
}

function round2(n: number) {
    return Math.round(n * 100) / 100;
}

/** Indian locale grouping for whole rupee display (e.g. 5,83,100). */
function formatInr(n: number) {
    if (!Number.isFinite(n)) {
        return '—';
    }
    return new Intl.NumberFormat('en-IN', {
        maximumFractionDigits: 0,
        minimumFractionDigits: 0
    }).format(Math.round(n));
}

function numberToWords(num: number) {
    if (Number.isNaN(num) || num < 0) {
        return '';
    }
    if (num === 0) {
        return 'Zero Rupees Only';
    }

    const a = [
        '',
        'One',
        'Two',
        'Three',
        'Four',
        'Five',
        'Six',
        'Seven',
        'Eight',
        'Nine',
        'Ten',
        'Eleven',
        'Twelve',
        'Thirteen',
        'Fourteen',
        'Fifteen',
        'Sixteen',
        'Seventeen',
        'Eighteen',
        'Nineteen'
    ];
    const b = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];

    function numToWords(n: number, s: string) {
        let str = '';
        if (n > 19) {
            str += b[Math.floor(n / 10)] + (n % 10 ? ` ${a[n % 10]}` : '');
        } else {
            str += a[n];
        }
        if (n !== 0) {
            str += s;
        }
        return str;
    }

    let output = '';
    const sanitizedNum = Math.trunc(num);
    output += numToWords(Math.floor(sanitizedNum / 10_000_000), ' Crore ');
    output += numToWords(Math.floor((sanitizedNum / 100_000) % 100), ' Lakh ');
    output += numToWords(Math.floor((sanitizedNum / 1000) % 100), ' Thousand ');
    output += numToWords(Math.floor((sanitizedNum / 100) % 10), ' Hundred ');
    output += numToWords(sanitizedNum % 100, '');
    output = `${output.trim()} Rupees Only`;
    return output.replace(/\s+/g, ' ');
}

interface LineComputed {
    basic: number;
    cgstAmt: number;
    igstAmt: number;
    lineTotal: number;
    sgstAmt: number;
}

function computeLine(row: LineRow, taxMode: TaxMode): LineComputed {
    const qty = parseDecimal(row.qty) ?? 0;
    const rate = parseDecimal(row.unitRate) ?? 0;
    const basic = round2(qty * rate);
    if (taxMode === TAX_IGST) {
        const p = parseDecimal(row.igstPercent) ?? 0;
        const igstAmt = round2((basic * p) / 100);
        return { basic, igstAmt, cgstAmt: 0, sgstAmt: 0, lineTotal: round2(basic + igstAmt) };
    }
    const cp = parseDecimal(row.cgstPercent) ?? 0;
    const sp = parseDecimal(row.sgstPercent) ?? 0;
    const cgstAmt = round2((basic * cp) / 100);
    const sgstAmt = round2((basic * sp) / 100);
    return { basic, igstAmt: 0, cgstAmt, sgstAmt, lineTotal: round2(basic + cgstAmt + sgstAmt) };
}

interface GrandTotals {
    basic: number;
    cgst: number;
    grand: number;
    igst: number;
    qty: number;
    sgst: number;
}

function computeGrand(rows: InvoiceRow[], taxMode: TaxMode): GrandTotals {
    let qty = 0;
    let basic = 0;
    let igst = 0;
    let cgst = 0;
    let sgst = 0;
    let grand = 0;

    for (const r of rows) {
        if (r.kind === 'line') {
            const c = computeLine(r, taxMode);
            qty += parseDecimal(r.qty) ?? 0;
            basic += c.basic;
            if (taxMode === TAX_IGST) {
                igst += c.igstAmt;
            } else {
                cgst += c.cgstAmt;
                sgst += c.sgstAmt;
            }
            grand += c.lineTotal;
        } else {
            const extra = parseIndianAmountInput(r.amount) ?? 0;
            grand = round2(grand + extra);
        }
    }

    return {
        qty: round2(qty),
        basic: round2(basic),
        igst: round2(igst),
        cgst: round2(cgst),
        sgst: round2(sgst),
        grand: round2(grand)
    };
}

const SCOPE_VARS_CSS = `
.gst-scope {
    --gst-bg: #F7F6F2;
    --gst-surface: #FFFFFF;
    --gst-surface2: #F2F1EC;
    --gst-border: #E4E2D9;
    --gst-text: #1A1916;
    --gst-text-2: #6B6860;
    --gst-muted: #A8A6A0;
    --gst-accent: #C84B2F;
    --gst-accent-light: #FDF0ED;
    --gst-green: #276749;
    --gst-green-light: #EDF7F0;
    --gst-total-bg: #1A1916;
    --gst-total-text: #F7F6F2;
    --gst-pill-active-bg: #1A1916;
    --gst-pill-active-text: #F7F6F2;
    --gst-shadow-sm: 0 1px 3px rgba(26,25,22,0.06), 0 1px 2px rgba(26,25,22,0.04);
    --gst-shadow-md: 0 4px 16px rgba(26,25,22,0.08), 0 2px 6px rgba(26,25,22,0.04);
}
.dark .gst-scope {
    --gst-bg: #111110;
    --gst-surface: #1C1C1A;
    --gst-surface2: #252522;
    --gst-border: #2E2D2A;
    --gst-text: #F0EFE9;
    --gst-text-2: #9B9890;
    --gst-muted: #5C5A55;
    --gst-accent: #E8634A;
    --gst-accent-light: #2A1F1C;
    --gst-green: #6EE7A8;
    --gst-green-light: #1C2A22;
    --gst-total-bg: #C84B2F;
    --gst-total-text: #FDF0ED;
    --gst-pill-active-bg: #F0EFE9;
    --gst-pill-active-text: #111110;
    --gst-shadow-sm: 0 1px 3px rgba(0,0,0,0.3);
    --gst-shadow-md: 0 4px 16px rgba(0,0,0,0.4);
}
.gst-scope .gst-card {
    background: var(--gst-surface);
    border: 1px solid var(--gst-border);
    box-shadow: var(--gst-shadow-md);
}
.gst-scope .gst-input {
    background: var(--gst-surface2);
    border: 1.5px solid transparent;
    color: var(--gst-text);
    transition: border-color .15s, background .15s;
}
.gst-scope .gst-input::placeholder { color: var(--gst-muted); }
.gst-scope .gst-input:focus-visible {
    border-color: var(--gst-accent);
    background: var(--gst-surface);
    outline: none;
}
.gst-scope .gst-input:disabled { opacity: .45; cursor: not-allowed; }
.gst-scope .gst-pill {
    background: var(--gst-surface2);
    border: 1px solid var(--gst-border);
}
.gst-scope .gst-pill-btn {
    color: var(--gst-text-2);
    background: transparent;
    transition: all .18s;
}
.gst-scope .gst-pill-btn[data-active='true'] {
    background: var(--gst-pill-active-bg);
    color: var(--gst-pill-active-text);
    box-shadow: var(--gst-shadow-sm);
}
.gst-scope .gst-add-btn {
    border: 1.5px dashed var(--gst-border);
    color: var(--gst-text-2);
    transition: all .15s;
}
.gst-scope .gst-add-btn:hover {
    border-color: var(--gst-accent);
    color: var(--gst-accent);
    background: var(--gst-accent-light);
}
.gst-scope .gst-del-btn {
    color: var(--gst-muted);
    transition: all .15s;
}
.gst-scope .gst-del-btn:hover {
    background: rgba(220, 38, 38, 0.1);
    color: #DC2626;
}
.dark .gst-scope .gst-del-btn:hover {
    background: rgba(232, 99, 74, 0.15);
    color: var(--gst-accent);
}
.gst-scope .gst-summary {
    background: var(--gst-border);
    border: 1px solid var(--gst-border);
    box-shadow: var(--gst-shadow-sm);
}
.gst-scope .gst-summary-cell { background: var(--gst-surface); }
.gst-scope .gst-summary-cell--accent {
    background: var(--gst-accent-light);
    color: var(--gst-accent);
}
.gst-scope .gst-summary-cell--accent .gst-summary-value { color: var(--gst-accent); }
.gst-scope .gst-th {
    color: var(--gst-muted);
    border-bottom: 1px solid var(--gst-border);
}
.gst-scope .gst-td {
    border-bottom: 1px solid var(--gst-border);
    color: var(--gst-text);
}
.gst-scope tr.gst-row:last-child .gst-td { border-bottom: none; }
.gst-scope .gst-muted-text { color: var(--gst-muted); }
.gst-scope .gst-secondary-text { color: var(--gst-text-2); }
.gst-scope .gst-badge {
    background: var(--gst-accent-light);
    color: var(--gst-accent);
}
.gst-scope .gst-badge--green {
    background: var(--gst-green-light);
    color: var(--gst-green);
}
.gst-scope .gst-copy-btn {
    background: var(--gst-surface);
    color: var(--gst-muted);
    box-shadow: var(--gst-shadow-sm);
    transition: color .15s;
}
.gst-scope .gst-copy-btn:hover { color: var(--gst-accent); }
.gst-scope .gst-copy-btn[data-copied='true'] { color: var(--gst-green); }
.gst-scope .gst-card { animation: gstFade .3s ease both; }
.gst-scope .gst-card:nth-child(2) { animation-delay: .08s; }
@keyframes gstFade {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
}
@media (prefers-reduced-motion: reduce) {
    .gst-scope .gst-card { animation: none; }
}
`;

const thCls = 'gst-th px-0 py-3 text-left font-semibold text-[11px] uppercase tracking-[0.7px] whitespace-nowrap';
const thRight = `${thCls} text-right`;
const thCenter = `${thCls} text-center`;
const tdCls = 'gst-td px-0 py-2.5 align-middle';
const cellInputCls = 'gst-input w-full rounded-md px-2.5 py-1.5 text-sm font-sans outline-none focus:outline-none';
const numInputCls = `${cellInputCls} font-mono text-right tabular-nums`;
/** Tight field for 2-digit GST %; avoid `w-full` from numInputCls so the cell does not stretch. */
const pctInputCls =
    'gst-input w-8 min-w-8 shrink-0 rounded-md px-1 py-1.5 text-right font-mono text-sm tabular-nums outline-none focus:outline-none';
const cellNum = 'font-mono text-sm tabular-nums text-right';

interface PctInputProps {
    'aria-label': string;
    onChange: (v: string) => void;
    value: string;
}

function PctInput({ value, onChange, 'aria-label': ariaLabel }: PctInputProps) {
    return (
        <div className='flex shrink-0 items-center gap-0.5'>
            <input
                aria-label={ariaLabel}
                className={pctInputCls}
                inputMode='decimal'
                onChange={(e) => onChange(e.target.value)}
                type='text'
                value={value}
            />
            <span className='gst-muted-text shrink-0 text-[11px]'>%</span>
        </div>
    );
}

/** One physical cell spanning the tax header group so % and ₹ stay a tight pair. */
function TaxLinePair({
    'aria-label': ariaLabel,
    amount,
    onChangePct,
    pct
}: {
    'aria-label': string;
    amount: number;
    onChangePct: (v: string) => void;
    pct: string;
}) {
    const isZero = amount === 0;
    return (
        <td className={cn(tdCls, 'pr-2')} colSpan={2}>
            <div className='flex w-full min-w-0 items-center justify-end gap-2 sm:gap-3'>
                <PctInput aria-label={ariaLabel} onChange={onChangePct} value={pct} />
                <span className={cn(cellNum, 'shrink-0', isZero && 'gst-muted-text')}>{isZero ? '0' : formatInr(amount)}</span>
            </div>
        </td>
    );
}

function TaxExtraPairEmpty() {
    return (
        <td className={cn(tdCls, 'pr-2')} colSpan={2}>
            <div className='flex w-full min-w-0 items-center justify-end gap-2 sm:gap-3'>
                <span aria-hidden='true' className='cellNum gst-muted-text min-w-0 font-mono'>
                    —
                </span>
                <span className={cn(cellNum, 'gst-muted-text shrink-0 font-mono')}>—</span>
            </div>
        </td>
    );
}

function NumCell({ amount, muted }: { amount: number; muted?: boolean }) {
    const isZero = amount === 0;
    return <td className={cn(tdCls, cellNum, (muted || isZero) && 'gst-muted-text', 'pr-2')}>{isZero ? '0' : formatInr(amount)}</td>;
}

function DashCell() {
    return <td className={cn(tdCls, cellNum, 'gst-muted-text pr-2')}>—</td>;
}

function DeleteCell({ ariaLabel, onRemove }: { ariaLabel: string; onRemove: () => void }) {
    return (
        <td className={tdCls}>
            <button
                aria-label={ariaLabel}
                className='gst-del-btn ml-auto flex size-[30px] cursor-pointer items-center justify-center rounded-md bg-transparent'
                onClick={onRemove}
                type='button'>
                <Trash2Icon aria-hidden='true' className='size-3.5' />
            </button>
        </td>
    );
}

interface ExtraRowViewProps {
    index: number;
    onChange: (field: 'name' | 'amount', value: string) => void;
    onRemove: () => void;
    row: ExtraRow;
    taxMode: TaxMode;
}

function ExtraRowView({ row, index, taxMode, onChange, onRemove }: ExtraRowViewProps) {
    const no = index + 1;
    const extraAmt = parseIndianAmountInput(row.amount) ?? 0;
    return (
        <tr className='gst-row'>
            <td className={tdCls}>
                <span className='gst-muted-text font-mono text-[13px]'>{no}</span>
            </td>
            <td className={cn(tdCls, 'pr-2')}>
                <input
                    aria-label={`Extra line ${no} description`}
                    className={cellInputCls}
                    onChange={(e) => onChange('name', e.target.value)}
                    placeholder='Extra / one-time item'
                    type='text'
                    value={row.name}
                />
            </td>
            <td className={cn(tdCls, 'pr-2')}>
                <input aria-label='Qty (not applicable for extras)' className={numInputCls} disabled placeholder='—' type='text' value='' />
            </td>
            <td className={cn(tdCls, 'pr-2')}>
                <div className='gst-secondary-text flex items-center gap-1'>
                    <span>₹</span>
                    <input
                        aria-label={`Extra line ${no} amount`}
                        className={numInputCls}
                        inputMode='decimal'
                        onChange={(e) => onChange('amount', e.target.value)}
                        placeholder='0'
                        type='text'
                        value={row.amount}
                    />
                </div>
            </td>
            <DashCell />
            {taxMode === TAX_IGST ? (
                <TaxExtraPairEmpty />
            ) : (
                <>
                    <TaxExtraPairEmpty />
                    <TaxExtraPairEmpty />
                </>
            )}
            <td className={cn(tdCls, cellNum, 'pr-2')}>₹{formatInr(extraAmt)}</td>
            <DeleteCell ariaLabel={`Remove extra line ${no}`} onRemove={onRemove} />
        </tr>
    );
}

interface LineRowViewProps {
    index: number;
    onChange: (field: keyof Omit<LineRow, 'id' | 'kind'>, value: string) => void;
    onRemove: () => void;
    row: LineRow;
    taxMode: TaxMode;
}

function LineRowView({ row, index, taxMode, onChange, onRemove }: LineRowViewProps) {
    const no = index + 1;
    const c = computeLine(row, taxMode);
    return (
        <tr className='gst-row'>
            <td className={tdCls}>
                <span className='gst-muted-text font-mono text-[13px]'>{no}</span>
            </td>
            <td className={cn(tdCls, 'pr-2')}>
                <input
                    aria-label={`Line ${no} description`}
                    className={cellInputCls}
                    onChange={(e) => onChange('name', e.target.value)}
                    placeholder='Description'
                    type='text'
                    value={row.name}
                />
            </td>
            <td className={cn(tdCls, 'pr-2')}>
                <input
                    aria-label={`Line ${no} quantity`}
                    className={numInputCls}
                    inputMode='decimal'
                    onChange={(e) => onChange('qty', e.target.value)}
                    placeholder='0'
                    type='text'
                    value={row.qty}
                />
            </td>
            <td className={cn(tdCls, 'pr-2')}>
                <div className='gst-secondary-text flex items-center gap-1'>
                    <span>₹</span>
                    <input
                        aria-label={`Line ${no} unit rate`}
                        className={numInputCls}
                        inputMode='decimal'
                        onChange={(e) => onChange('unitRate', e.target.value)}
                        placeholder='0'
                        type='text'
                        value={row.unitRate}
                    />
                </div>
            </td>
            <NumCell amount={c.basic} />
            {taxMode === TAX_IGST ? (
                <TaxLinePair
                    amount={c.igstAmt}
                    aria-label={`Line ${no} IGST percent`}
                    onChangePct={(v) => onChange('igstPercent', v)}
                    pct={row.igstPercent}
                />
            ) : (
                <>
                    <TaxLinePair
                        amount={c.cgstAmt}
                        aria-label={`Line ${no} CGST percent`}
                        onChangePct={(v) => onChange('cgstPercent', v)}
                        pct={row.cgstPercent}
                    />
                    <TaxLinePair
                        amount={c.sgstAmt}
                        aria-label={`Line ${no} SGST percent`}
                        onChangePct={(v) => onChange('sgstPercent', v)}
                        pct={row.sgstPercent}
                    />
                </>
            )}
            <td className={cn(tdCls, cellNum, 'pr-2 font-semibold')}>₹{formatInr(c.lineTotal)}</td>
            <DeleteCell ariaLabel={`Remove line ${no}`} onRemove={onRemove} />
        </tr>
    );
}

interface InvoiceTableProps {
    onAddExtra: () => void;
    onAddLine: () => void;
    onExtraChange: (id: string, field: 'name' | 'amount', value: string) => void;
    onLineChange: (id: string, field: keyof Omit<LineRow, 'id' | 'kind'>, value: string) => void;
    onRemove: (id: string) => void;
    onTaxMode: (m: TaxMode) => void;
    rows: InvoiceRow[];
    taxMode: TaxMode;
}

function InvoiceCard({ rows, taxMode, onTaxMode, onLineChange, onExtraChange, onAddLine, onAddExtra, onRemove }: InvoiceTableProps) {
    const { basic, igst, cgst, sgst, grand } = useMemo(() => computeGrand(rows, taxMode), [rows, taxMode]);
    const grandInt = Math.trunc(Math.max(0, Math.round(grand)));
    const taxTotal = taxMode === TAX_IGST ? igst : cgst + sgst;
    const taxLabel = taxMode === TAX_IGST ? 'IGST Total' : 'CGST + SGST';
    const inWords = numberToWords(grandInt);
    const [inWordsCopied, setInWordsCopied] = useState(false);
    const copyInWords = useCallback(async () => {
        await navigator.clipboard.writeText(inWords);
        setInWordsCopied(true);
        setTimeout(() => setInWordsCopied(false), 1500);
    }, [inWords]);

    return (
        <section className='gst-card overflow-hidden rounded-[14px]'>
            <header className='flex flex-wrap items-start justify-between gap-4 px-5 pt-6 sm:px-7 sm:pt-7'>
                <div className='min-w-0'>
                    <h1
                        className='flex items-center gap-2.5 font-semibold text-[20px] tracking-[-0.4px]'
                        style={{ color: 'var(--gst-text)' }}>
                        GST Invoice
                        <span className='gst-badge rounded-full px-2 py-0.5 font-semibold text-[10px] uppercase tracking-[0.8px]'>
                            India
                        </span>
                    </h1>
                    <p className='gst-secondary-text mt-1.5 text-[13px] leading-normal'>
                        Qty × unit rate gives basic &nbsp;·&nbsp; Tax % is per line &nbsp;·&nbsp; Extras are flat amounts (no GST)
                    </p>
                </div>

                <fieldset className='m-0 flex flex-col items-start gap-1.5 border-0 p-0 sm:items-end'>
                    <legend className='gst-muted-text font-semibold text-[10px] uppercase tracking-[1px]'>Tax Type</legend>
                    <div className='gst-pill flex gap-0.5 rounded-full p-[3px]'>
                        <button
                            className='gst-pill-btn cursor-pointer rounded-full px-4 py-1.5 font-medium text-[13px]'
                            data-active={taxMode === TAX_IGST}
                            onClick={() => onTaxMode(TAX_IGST)}
                            type='button'>
                            IGST
                        </button>
                        <button
                            className='gst-pill-btn cursor-pointer rounded-full px-4 py-1.5 font-medium text-[13px]'
                            data-active={taxMode === TAX_SPLIT}
                            onClick={() => onTaxMode(TAX_SPLIT)}
                            type='button'>
                            CGST + SGST
                        </button>
                    </div>
                </fieldset>
            </header>

            <div className='mx-5 mt-6 h-px sm:mx-7' style={{ background: 'var(--gst-border)' }} />

            <div className='flex flex-wrap items-center justify-end gap-2.5 px-5 pt-4 sm:px-7'>
                <button
                    className='gst-add-btn inline-flex cursor-pointer items-center gap-1.5 rounded-lg bg-transparent px-3.5 py-2 font-medium text-[13px]'
                    onClick={onAddLine}
                    type='button'>
                    <PlusIcon aria-hidden='true' className='size-3.5' />
                    Add line
                </button>
                <span aria-hidden='true' className='gst-muted-text select-none'>
                    ·
                </span>
                <button
                    className='gst-add-btn inline-flex cursor-pointer items-center gap-1.5 rounded-lg bg-transparent px-3.5 py-2 font-medium text-[13px]'
                    onClick={onAddExtra}
                    type='button'>
                    <PlusIcon aria-hidden='true' className='size-3.5' />
                    One-time / extra
                </button>
            </div>

            <div className='overflow-x-auto px-5 pt-3 sm:px-7'>
                <table className='w-full min-w-[600px] border-collapse'>
                    <caption className='sr-only'>GST line items with quantities, rates, and tax</caption>
                    <thead>
                        <tr>
                            <th className={cn(thCls, 'w-8')} scope='col'>
                                #
                            </th>
                            <th className={cn(thCls, 'min-w-[160px]')} scope='col'>
                                Item / Description
                            </th>
                            <th className={cn(thRight, 'w-[72px]')} scope='col'>
                                Qty
                            </th>
                            <th className={cn(thRight, 'w-[108px]')} scope='col'>
                                Rate (₹)
                            </th>
                            <th className={cn(thRight, 'w-[92px]')} scope='col'>
                                Basic
                            </th>
                            {taxMode === TAX_IGST ? (
                                <th className={cn(thCenter, 'w-[104px]')} colSpan={2} scope='colgroup'>
                                    IGST
                                </th>
                            ) : (
                                <>
                                    <th className={cn(thCenter, 'w-[104px]')} colSpan={2} scope='colgroup'>
                                        CGST
                                    </th>
                                    <th className={cn(thCenter, 'w-[104px]')} colSpan={2} scope='colgroup'>
                                        SGST
                                    </th>
                                </>
                            )}
                            <th className={cn(thRight, 'w-[92px]')} scope='col'>
                                Total
                            </th>
                            <th className={cn(thCls, 'w-9')} scope='col'>
                                <span className='sr-only'>Actions</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map((row, index) => {
                            if (row.kind === 'extra') {
                                return (
                                    <ExtraRowView
                                        index={index}
                                        key={row.id}
                                        onChange={(f, v) => onExtraChange(row.id, f, v)}
                                        onRemove={() => onRemove(row.id)}
                                        row={row}
                                        taxMode={taxMode}
                                    />
                                );
                            }
                            return (
                                <LineRowView
                                    index={index}
                                    key={row.id}
                                    onChange={(f, v) => onLineChange(row.id, f, v)}
                                    onRemove={() => onRemove(row.id)}
                                    row={row}
                                    taxMode={taxMode}
                                />
                            );
                        })}
                        {rows.length === 0 && (
                            <tr>
                                <td className={cn(tdCls, 'gst-muted-text py-6 text-center')} colSpan={taxMode === TAX_IGST ? 10 : 12}>
                                    No lines. Add one above to get started.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            <div className='px-5 pt-4 sm:px-7'>
                <div className='gst-summary grid grid-cols-1 gap-px overflow-hidden rounded-[14px] sm:grid-cols-3'>
                    <div className='gst-summary-cell flex flex-col gap-1 px-5 py-4'>
                        <span className='gst-muted-text font-semibold text-[11px] uppercase tracking-[0.7px]'>Basic Total</span>
                        <span className='gst-summary-value font-medium font-mono text-[18px] tabular-nums'>₹{formatInr(basic)}</span>
                    </div>
                    <div className='gst-summary-cell flex flex-col gap-1 px-5 py-4'>
                        <span className='gst-muted-text font-semibold text-[11px] uppercase tracking-[0.7px]'>{taxLabel}</span>
                        <span className='gst-summary-value font-medium font-mono text-[18px] tabular-nums'>₹{formatInr(taxTotal)}</span>
                    </div>
                    <div className='gst-summary-cell gst-summary-cell--accent flex flex-col gap-1 px-5 py-4'>
                        <span className='font-semibold text-[11px] uppercase tracking-[0.7px]'>Grand Total</span>
                        <span className='gst-summary-value font-mono font-semibold text-[18px] tabular-nums'>₹{formatInr(grand)}</span>
                    </div>
                </div>
            </div>

            <footer className='flex flex-wrap items-center justify-end gap-3 px-5 pt-5 pb-6 sm:px-7'>
                <p className='gst-secondary-text min-w-0 text-[14px]'>
                    <span className='gst-muted-text select-none'>In words — </span>
                    <span className='font-medium' style={{ color: 'var(--gst-text)' }}>
                        {inWords}
                    </span>
                </p>
                <Button
                    aria-label={inWordsCopied ? 'Copied' : 'Copy amount in words'}
                    className='gst-copy-btn relative size-7 shrink-0 cursor-pointer rounded-md border-0'
                    data-copied={inWordsCopied}
                    onClick={copyInWords}
                    size='icon-xs'
                    type='button'
                    variant='ghost'>
                    <span
                        className={cn(
                            'inline-flex transition-opacity duration-150 motion-reduce:transition-none',
                            inWordsCopied ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                        )}>
                        <CheckIcon aria-hidden='true' size={13} />
                    </span>
                    <span
                        className={cn(
                            'absolute inline-flex transition-opacity duration-150 motion-reduce:transition-none',
                            inWordsCopied ? 'scale-0 opacity-0' : 'scale-100 opacity-100'
                        )}>
                        <CopyIcon aria-hidden='true' size={13} />
                    </span>
                </Button>
            </footer>
        </section>
    );
}

export default function ConvertPage() {
    const [taxMode, setTaxMode] = useState<TaxMode>(TAX_IGST);
    const [rows, setRows] = useState<InvoiceRow[]>(() => [createLineRow()]);

    const onLineChange = (id: string, field: keyof Omit<LineRow, 'id' | 'kind'>, value: string) => {
        setRows((prev) => prev.map((r) => (r.id === id && r.kind === 'line' ? { ...r, [field]: value } : r) as InvoiceRow));
    };

    const onExtraChange = (id: string, field: 'name' | 'amount', value: string) => {
        setRows((prev) => prev.map((r) => (r.id === id && r.kind === 'extra' ? { ...r, [field]: value } : r) as InvoiceRow));
    };

    const onAddLine = () => setRows((p) => [...p, createLineRow()]);
    const onAddExtra = () => setRows((p) => [...p, createExtraRow()]);
    const onRemove = (id: string) => setRows((p) => (p.length === 1 ? p : p.filter((r) => r.id !== id)));

    const [number, setNumber] = useState('');
    const [words, setWords] = useState('');
    const [copied, setCopied] = useState(false);

    const handleAmountWordsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setNumber(value);
        const parsed = parseIndianAmountInput(value);
        setWords(parsed === null ? '' : numberToWords(parsed));
        setCopied(false);
    };

    const handleCopy = async () => {
        if (!words) {
            return;
        }
        await navigator.clipboard.writeText(words);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
    };

    const pageStyle: CSSProperties = { background: 'var(--gst-bg)', color: 'var(--gst-text)' };

    return (
        <div className='gst-scope min-h-dvh w-full overflow-x-hidden' style={pageStyle}>
            {/* biome-ignore lint/security/noDangerouslySetInnerHtml: static, trusted CSS for scoped theme vars */}
            <style dangerouslySetInnerHTML={{ __html: SCOPE_VARS_CSS }} />

            <div className='fixed top-4 right-4 z-50'>
                <ModeToggle />
            </div>

            <main className='mx-auto flex w-full max-w-7xl flex-col gap-5 px-4 pt-10 pb-16 sm:px-5'>
                <InvoiceCard
                    onAddExtra={onAddExtra}
                    onAddLine={onAddLine}
                    onExtraChange={onExtraChange}
                    onLineChange={onLineChange}
                    onRemove={onRemove}
                    onTaxMode={setTaxMode}
                    rows={rows}
                    taxMode={taxMode}
                />

                <section className='gst-card overflow-hidden rounded-[14px]'>
                    <header className='px-5 pt-6 sm:px-7'>
                        <h2
                            className='flex items-center gap-2.5 font-semibold text-[17px] tracking-[-0.3px]'
                            style={{ color: 'var(--gst-text)' }}>
                            Amount in words
                            <span className='gst-badge gst-badge--green rounded-full px-2 py-0.5 font-semibold text-[10px] uppercase tracking-[0.8px]'>
                                Quick
                            </span>
                        </h2>
                        <p className='gst-secondary-text mt-1.5 text-[13px] leading-normal'>
                            Enter any amount using Indian-style grouping; the verbal form appears for copy.
                        </p>
                    </header>

                    <div className='flex flex-col gap-2.5 px-5 pt-5 pb-7 sm:px-7'>
                        <label className='gst-muted-text font-medium text-[12px] uppercase tracking-[0.7px]' htmlFor='quick-amount'>
                            Amount (Indian numbering)
                        </label>
                        <input
                            className='gst-input w-full rounded-lg px-3.5 py-3 font-mono text-[15px] tabular-nums'
                            id='quick-amount'
                            inputMode='numeric'
                            onChange={handleAmountWordsChange}
                            placeholder='e.g. 23,43,533'
                            type='text'
                            value={number}
                        />

                        <div
                            className='relative min-h-[52px] rounded-lg px-3.5 py-3.5 pr-12 font-medium text-[15px] leading-normal'
                            style={{
                                background: 'var(--gst-surface2)',
                                border: '1px solid var(--gst-border)',
                                color: 'var(--gst-text)'
                            }}>
                            {words ? (
                                words
                            ) : (
                                <span className='gst-muted-text font-normal text-[13px] italic'>Output will appear here…</span>
                            )}
                            <Button
                                aria-label={copied ? 'Copied' : 'Copy to clipboard'}
                                className='gst-copy-btn absolute right-2.5 bottom-2.5 size-7 cursor-pointer rounded-md border-0'
                                data-copied={copied}
                                disabled={!words}
                                onClick={handleCopy}
                                size='icon-xs'
                                type='button'
                                variant='ghost'>
                                <span
                                    className={cn(
                                        'inline-flex transition-opacity duration-150 motion-reduce:transition-none',
                                        copied ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                                    )}>
                                    <CheckIcon aria-hidden='true' size={13} />
                                </span>
                                <span
                                    className={cn(
                                        'absolute inline-flex transition-opacity duration-150 motion-reduce:transition-none',
                                        copied ? 'scale-0 opacity-0' : 'scale-100 opacity-100'
                                    )}>
                                    <CopyIcon aria-hidden='true' size={13} />
                                </span>
                            </Button>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
