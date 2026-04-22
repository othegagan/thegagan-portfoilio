'use client';

import { Button } from '@thegagan-portfoilio/ui/components/button';
import { cn } from '@thegagan-portfoilio/ui/lib/utils';
import { CheckIcon, CopyIcon } from 'lucide-react';
import type React from 'react';
import { useState } from 'react';

/** Parses Indian-style amounts: commas are stripped; only digits are used. */
function parseIndianAmountInput(raw: string): number | null {
    const digitsOnly = raw.replace(/,/g, '').replace(/\D/g, '');
    if (digitsOnly === '') {
        return null;
    }
    const n = Number(digitsOnly);
    return Number.isFinite(n) ? n : null;
}

// Helper function to convert number to words (Indian system)
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
        if (n !== 0) str += s;
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

export default function INRWordsConverter() {
    const [number, setNumber] = useState('');
    const [words, setWords] = useState('');
    const [copied, setCopied] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setNumber(value);
        const parsed = parseIndianAmountInput(value);
        setWords(parsed === null ? '' : numberToWords(parsed));
        setCopied(false);
    };

    const handleCopy = async () => {
        await navigator.clipboard.writeText(words);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
    };

    return (
        <div className='flex h-screen items-center justify-center gap-4 rounded-2xl p-6 shadow-lg'>
            <div className='flex h-[50dvh] min-h-[500px] w-full max-w-2/4 flex-col gap-4'>
                <label className='mb-2 font-semibold text-xl' htmlFor='number'>
                    Enter Amount (Indian Numbering):
                </label>
                <input
                    className='rounded-md border p-2'
                    id='number'
                    onChange={handleChange}
                    placeholder='e.g., 23,43,533'
                    type='text'
                    value={number}
                />
                <div className='relative'>
                    <div className='min-h-[60px] rounded-xl bg-muted p-4 pr-10'>{words}</div>
                    <Button
                        aria-label={copied ? 'Copied' : 'Copy to clipboard'}
                        className='absolute top-2 right-2 z-10 rounded-md disabled:opacity-100'
                        disabled={copied}
                        onClick={handleCopy}
                        size='icon-lg'
                        variant='outline'>
                        <div className={cn('transition-all', copied ? 'scale-100 opacity-100' : 'scale-0 opacity-0')}>
                            <CheckIcon aria-hidden='true' className='stroke-emerald-500' size={16} />
                        </div>
                        <div className={cn('absolute transition-all', copied ? 'scale-0 opacity-0' : 'scale-100 opacity-100')}>
                            <CopyIcon aria-hidden='true' size={16} />
                        </div>
                    </Button>
                </div>
            </div>
        </div>
    );
}
