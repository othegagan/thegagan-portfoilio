'use client';

import { useEffect } from 'react';

export function PortfolioEffects() {
    useEffect(() => {
        const revealObserver = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    if (entry.isIntersecting) {
                        entry.target.setAttribute('data-visible', 'true');
                        revealObserver.unobserve(entry.target);
                    }
                }
            },
            { threshold: 0.1 }
        );

        const revealEls = document.querySelectorAll('[data-reveal]');
        for (const el of revealEls) {
            revealObserver.observe(el);
        }

        const cards = document.querySelectorAll('[data-project-card]');
        const onCardMove = (e: Event) => {
            const card = e.currentTarget;
            if (!(card instanceof HTMLElement)) {
                return;
            }
            const me = e as MouseEvent;
            const rect = card.getBoundingClientRect();
            const mx = ((me.clientX - rect.left) / rect.width) * 100;
            const my = ((me.clientY - rect.top) / rect.height) * 100;
            card.style.setProperty('--mx', `${mx.toFixed(1)}%`);
            card.style.setProperty('--my', `${my.toFixed(1)}%`);
        };
        for (const card of cards) {
            card.addEventListener('mousemove', onCardMove);
        }

        const skillsGrid = document.querySelector('[data-skills-grid]');
        const pillObserver = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    if (!entry.isIntersecting) {
                        continue;
                    }
                    const pills = entry.target.querySelectorAll('[data-skill-pill]');
                    pills.forEach((pill, i) => {
                        const el = pill as HTMLElement;
                        el.style.opacity = '0';
                        el.style.transform = 'translateY(12px)';
                        el.style.transition = `opacity .4s ease ${String(i * 0.04)}s, transform .4s ease ${String(i * 0.04)}s`;
                        setTimeout(() => {
                            el.style.opacity = '1';
                            el.style.transform = 'translateY(0)';
                        }, 20);
                    });
                    pillObserver.unobserve(entry.target);
                }
            },
            { threshold: 0.2 }
        );
        if (skillsGrid) {
            pillObserver.observe(skillsGrid);
        }

        return () => {
            revealObserver.disconnect();
            for (const card of cards) {
                card.removeEventListener('mousemove', onCardMove);
            }
            pillObserver.disconnect();
        };
    }, []);

    return null;
}
