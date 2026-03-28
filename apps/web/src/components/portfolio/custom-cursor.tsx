'use client';

import { cn } from '@thegagan-portfoilio/ui/lib/utils';
import { useEffect, useRef } from 'react';

export function CustomCursor() {
    const cursorRef = useRef<HTMLDivElement>(null);
    const ringRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const cursor = cursorRef.current;
        const ring = ringRef.current;
        if (!(cursor && ring)) {
            return;
        }

        let mouseX = 0;
        let mouseY = 0;
        let ringX = 0;
        let ringY = 0;
        let frame = 0;

        const onMove = (e: MouseEvent) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            cursor.style.left = `${String(mouseX)}px`;
            cursor.style.top = `${String(mouseY)}px`;
        };

        const animateRing = () => {
            ringX += (mouseX - ringX) * 0.12;
            ringY += (mouseY - ringY) * 0.12;
            ring.style.left = `${String(ringX)}px`;
            ring.style.top = `${String(ringY)}px`;
            frame = requestAnimationFrame(animateRing);
        };

        document.addEventListener('mousemove', onMove);
        frame = requestAnimationFrame(animateRing);

        return () => {
            document.removeEventListener('mousemove', onMove);
            cancelAnimationFrame(frame);
        };
    }, []);

    return (
        <>
            <div
                className={cn(
                    'pointer-events-none fixed z-9999 hidden h-[9px] w-[9px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white mix-blend-difference transition-[width,height,background] duration-200 md:block'
                )}
                id='cur'
                ref={cursorRef}
            />
            <div
                className={cn(
                    'pointer-events-none fixed z-9998 hidden h-[34px] w-[34px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/35 transition-[width,height,border-color] duration-250 md:block'
                )}
                id='cur-ring'
                ref={ringRef}
            />
        </>
    );
}
