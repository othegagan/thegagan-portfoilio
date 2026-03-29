import { ImageResponse } from 'next/og';

import { SITE_NAME, SITE_TAGLINE } from '@/lib/site';

export const alt = `${SITE_NAME} — ${SITE_TAGLINE}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
    return new ImageResponse(
        (
            <div
                style={{
                    alignItems: 'flex-start',
                    background: 'linear-gradient(145deg, #030303 0%, #0f0f0f 45%, #080808 100%)',
                    color: '#fafafa',
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    justifyContent: 'space-between',
                    padding: 56,
                    width: '100%'
                }}>
                <div
                    style={{
                        color: '#f97316',
                        display: 'flex',
                        fontSize: 14,
                        fontWeight: 600,
                        letterSpacing: 4,
                        textTransform: 'uppercase'
                    }}>
                    {'Portfolio'}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                    <div
                        style={{
                            display: 'flex',
                            fontSize: 64,
                            fontWeight: 800,
                            letterSpacing: -2,
                            lineHeight: 1.05,
                            maxWidth: 900
                        }}>
                        {SITE_NAME}
                    </div>
                    <div
                        style={{
                            color: '#a3a3a3',
                            display: 'flex',
                            fontSize: 24,
                            fontWeight: 500,
                            lineHeight: 1.4,
                            maxWidth: 880
                        }}>
                        {`${SITE_TAGLINE} — AI-powered frontends, agentic workflows, and TypeScript.`}
                    </div>
                </div>
                <div
                    style={{
                        borderTop: '1px solid rgba(255,255,255,0.08)',
                        color: '#737373',
                        display: 'flex',
                        fontSize: 18,
                        paddingTop: 24,
                        width: '100%'
                    }}>
                    {'Bengaluru, India · Next.js · React · TypeScript'}
                </div>
            </div>
        ),
        { ...size }
    );
}
