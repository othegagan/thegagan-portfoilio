'use client';

import { SendIcon, type SendIconHandle } from '@thegagan-portfoilio/ui/components/send';
import { cn } from '@thegagan-portfoilio/ui/lib/utils';
import { useRef } from 'react';

const fieldCls =
    'w-full rounded-lg border border-portfolio-border bg-portfolio-bg2 px-4 py-3 text-sm text-portfolio-text placeholder:text-portfolio-muted2 transition-[border-color,box-shadow] focus:border-orange-500/40 focus:outline-none focus:ring-2 focus:ring-orange-500/20';

const labelCls = 'mb-1.5 block text-[10px] font-medium uppercase tracking-wider text-portfolio-muted';

export function ContactForm() {
    const sendRef = useRef<SendIconHandle>(null);

    return (
        <form
            className='flex flex-col gap-6'
            onSubmit={(e) => {
                e.preventDefault();
            }}>
            <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
                <div>
                    <label className={labelCls} htmlFor='contact-name'>
                        Name
                    </label>
                    <input className={fieldCls} id='contact-name' name='name' placeholder='Your name' type='text' />
                </div>
                <div>
                    <label className={labelCls} htmlFor='contact-email'>
                        Email
                    </label>
                    <input className={fieldCls} id='contact-email' name='email' placeholder='your@email.com' type='email' />
                </div>
            </div>
            <div>
                <label className={labelCls} htmlFor='contact-subject'>
                    Subject
                </label>
                <input className={fieldCls} id='contact-subject' name='subject' placeholder="What's this about?" type='text' />
            </div>
            <div>
                <label className={labelCls} htmlFor='contact-message'>
                    Message
                </label>
                <textarea
                    className={cn(fieldCls, 'min-h-[140px] resize-y')}
                    id='contact-message'
                    name='message'
                    placeholder='Tell me about your project...'
                />
            </div>
            <button
                className='inline-flex w-full items-center justify-center gap-2 rounded-lg bg-portfolio-orange px-6 py-3.5 font-semibold text-black text-sm transition hover:opacity-90'
                onMouseEnter={() => sendRef.current?.startAnimation()}
                onMouseLeave={() => sendRef.current?.stopAnimation()}
                type='submit'>
                Send Message
                <SendIcon className='text-black' ref={sendRef} size={16} />
            </button>
        </form>
    );
}
