'use client';

import { useEffect, useRef } from 'react';

interface Point {
    x: number;
    y: number;
}

const CELL = 180;
const DASH: [number, number] = [4, 6];
const LINE_A = 0.1;
const NODE_R = 4.5;
const NODE_BASE_A = 0.18;
const GLOW_DIST = 220;

interface SparkState {
    alpha: number;
    prog: number;
    tx: number;
    ty: number;
    x: number;
    y: number;
}

function drawDashedGrid(gx: CanvasRenderingContext2D, W: number, H: number, cols: number, rows: number, cw: number, ch: number) {
    for (let c = 0; c <= cols; c++) {
        const x = Math.round(c * cw);
        gx.beginPath();
        gx.setLineDash(DASH);
        gx.strokeStyle = `rgba(255,255,255,${String(LINE_A)})`;
        gx.lineWidth = 0.5;
        gx.moveTo(x, 0);
        gx.lineTo(x, H);
        gx.stroke();
    }

    for (let r = 0; r <= rows; r++) {
        const y = Math.round(r * ch);
        gx.beginPath();
        gx.setLineDash(DASH);
        gx.strokeStyle = `rgba(255,255,255,${String(LINE_A)})`;
        gx.lineWidth = 0.5;
        gx.moveTo(0, y);
        gx.lineTo(W, y);
        gx.stroke();
    }
    gx.setLineDash([]);
}

function drawGridNodes(gx: CanvasRenderingContext2D, gridPts: Point[], mouse: { x: number; y: number }, time: number) {
    for (const pt of gridPts) {
        const dx = pt.x - mouse.x;
        const dy = pt.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const proximity = dist < GLOW_DIST ? 1 - dist / GLOW_DIST : 0;

        const phase = (pt.x * 0.008 + pt.y * 0.005 + time * 0.6) % (Math.PI * 2);
        const pulse = 0.5 + 0.5 * Math.sin(phase);

        const a = NODE_BASE_A + proximity * 0.55 + pulse * 0.04;
        const r = NODE_R * (1 + proximity * 0.7 + pulse * 0.08);

        let fillR = 255;
        let fillG = 255;
        let fillB = 255;
        if (proximity > 0) {
            fillR = Math.round(255 * (1 - proximity) + 249 * proximity);
            fillG = Math.round(255 * (1 - proximity) + 115 * proximity);
            fillB = Math.round(255 * (1 - proximity) + 22 * proximity);
        }

        if (proximity > 0.3) {
            gx.beginPath();
            gx.arc(pt.x, pt.y, r * 2.8, 0, Math.PI * 2);
            gx.fillStyle = `rgba(${String(fillR)},${String(fillG)},${String(fillB)},${String(proximity * 0.07)})`;
            gx.fill();
        }

        gx.beginPath();
        gx.arc(pt.x, pt.y, r, 0, Math.PI * 2);
        gx.strokeStyle = `rgba(${String(fillR)},${String(fillG)},${String(fillB)},${String(a)})`;
        gx.lineWidth = proximity > 0 ? 1 : 0.6;
        gx.stroke();

        gx.beginPath();
        gx.arc(pt.x, pt.y, r * 0.35, 0, Math.PI * 2);
        gx.fillStyle = `rgba(${String(fillR)},${String(fillG)},${String(fillB)},${String(a * 0.6)})`;
        gx.fill();
    }
}

function drawSparkTrail(gx: CanvasRenderingContext2D, spark: SparkState) {
    const sx = spark.x + (spark.tx - spark.x) * Math.min(spark.prog, 1);
    const sy = spark.y + (spark.ty - spark.y) * Math.min(spark.prog, 1);
    const trailX = spark.x + (spark.tx - spark.x) * Math.max(0, spark.prog - 0.18);
    const trailY = spark.y + (spark.ty - spark.y) * Math.max(0, spark.prog - 0.18);
    const grad = gx.createLinearGradient(trailX, trailY, sx, sy);
    grad.addColorStop(0, 'rgba(249,115,22,0)');
    grad.addColorStop(1, `rgba(249,115,22,${String(spark.alpha * 0.9)})`);
    gx.beginPath();
    gx.moveTo(trailX, trailY);
    gx.lineTo(sx, sy);
    gx.strokeStyle = grad;
    gx.lineWidth = 1.5;
    gx.setLineDash([]);
    gx.stroke();
    gx.beginPath();
    gx.arc(sx, sy, 3, 0, Math.PI * 2);
    gx.fillStyle = `rgba(249,115,22,${String(spark.alpha)})`;
    gx.fill();
    gx.beginPath();
    gx.arc(sx, sy, 7, 0, Math.PI * 2);
    gx.fillStyle = `rgba(249,115,22,${String(spark.alpha * 0.18)})`;
    gx.fill();
}

export function HeroBackground() {
    const gridCanvasRef = useRef<HTMLCanvasElement>(null);
    const glowCanvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const gc = gridCanvasRef.current;
        const canvas = glowCanvasRef.current;
        if (!(gc && canvas)) {
            return;
        }

        const gx = gc.getContext('2d');
        const ctx = canvas.getContext('2d');
        if (!(gx && ctx)) {
            return;
        }

        const hero = gc.closest('.hero') ?? gc.parentElement;
        if (!(hero instanceof HTMLElement)) {
            return;
        }

        let cancelled = false;
        let W = 0;
        let H = 0;
        const mouse = { x: -999, y: -999 };
        let gridPts: Point[] = [];
        const spark: SparkState = { x: 0, y: 0, tx: 0, ty: 0, prog: 1, alpha: 0 };
        let cols = 0;
        let rows = 0;
        let cw = 0;
        let ch = 0;
        let time = 0;
        let gridFrame = 0;
        let glowFrame = 0;

        const buildGrid = (nCols: number, nRows: number) => {
            gridPts = [];
            cols = nCols || Math.round(W / CELL);
            rows = nRows || Math.round(H / CELL);
            cw = W / cols;
            ch = H / rows;
            for (let r = 0; r <= rows; r++) {
                for (let c = 0; c <= cols; c++) {
                    gridPts.push({ x: c * cw, y: r * ch });
                }
            }
        };

        const launchSpark = () => {
            if (gridPts.length < 2) {
                return;
            }
            const from = gridPts[Math.floor(Math.random() * gridPts.length)];
            const stride = cols + 1;
            const dirs = [1, -1, stride, -stride];
            const idx = gridPts.indexOf(from);
            const dir = dirs[Math.floor(Math.random() * dirs.length)];
            if (dir === undefined) {
                return;
            }
            const toIdx = idx + dir;
            if (toIdx < 0 || toIdx >= gridPts.length) {
                launchSpark();
                return;
            }
            const to = gridPts[toIdx];
            if (!to) {
                launchSpark();
                return;
            }
            spark.x = from.x;
            spark.y = from.y;
            spark.tx = to.x;
            spark.ty = to.y;
            spark.prog = 0;
            spark.alpha = 0.9;
        };

        const resize = () => {
            W = window.innerWidth;
            H = window.innerHeight;
            gc.width = canvas.width = W;
            gc.height = canvas.height = H;
            const targetCell = 180;
            const nCols = Math.round(W / targetCell);
            const nRows = Math.round(H / targetCell);
            buildGrid(nCols, nRows);
        };

        const onHeroMove = (e: MouseEvent) => {
            const rect = hero.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
        };

        const onHeroLeave = () => {
            mouse.x = -999;
            mouse.y = -999;
        };

        const drawGlow = () => {
            if (cancelled) {
                return;
            }
            if (W && H) {
                ctx.clearRect(0, 0, W, H);
                if (mouse.x > 0 && mouse.x < W) {
                    const grad = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 260);
                    grad.addColorStop(0, 'rgba(249,115,22,0.07)');
                    grad.addColorStop(0.5, 'rgba(249,115,22,0.025)');
                    grad.addColorStop(1, 'rgba(249,115,22,0)');
                    ctx.fillStyle = grad;
                    ctx.fillRect(0, 0, W, H);
                }
            }
            glowFrame = requestAnimationFrame(drawGlow);
        };

        const drawGrid = (ts?: number) => {
            if (cancelled) {
                return;
            }
            time = (ts ?? 0) * 0.001;
            gx.clearRect(0, 0, W, H);

            const dimsReady = cw > 0 && ch > 0;
            if (!dimsReady) {
                gridFrame = requestAnimationFrame(drawGrid);
                return;
            }

            drawDashedGrid(gx, W, H, cols, rows, cw, ch);
            drawGridNodes(gx, gridPts, mouse, time);

            spark.prog += 0.022;
            if (spark.prog >= 1) {
                spark.alpha -= 0.04;
                if (spark.alpha <= 0) {
                    launchSpark();
                }
            }
            if (spark.alpha > 0) {
                drawSparkTrail(gx, spark);
            }

            gridFrame = requestAnimationFrame(drawGrid);
        };

        resize();
        launchSpark();
        window.addEventListener('resize', resize);
        hero.addEventListener('mousemove', onHeroMove);
        hero.addEventListener('mouseleave', onHeroLeave);

        requestAnimationFrame(() => {
            resize();
            requestAnimationFrame(drawGrid);
            drawGlow();
        });
        const delayedResize = window.setTimeout(resize, 400);

        return () => {
            cancelled = true;
            window.removeEventListener('resize', resize);
            hero.removeEventListener('mousemove', onHeroMove);
            hero.removeEventListener('mouseleave', onHeroLeave);
            cancelAnimationFrame(gridFrame);
            cancelAnimationFrame(glowFrame);
            window.clearTimeout(delayedResize);
        };
    }, []);

    return (
        <>
            <canvas className='pointer-events-none absolute inset-0 z-0 block h-full w-full' id='grid-canvas' ref={gridCanvasRef} />
            <canvas className='pointer-events-none absolute inset-0 z-1 block h-full w-full' id='dot-canvas' ref={glowCanvasRef} />
        </>
    );
}
