'use client';

import { cn } from '@thegagan-portfoilio/ui/lib/utils';

const fieldCls =
    'w-full rounded-lg border border-portfolio-border bg-portfolio-bg2 px-4 py-3 text-sm text-portfolio-text placeholder:text-portfolio-muted2 transition-[border-color,box-shadow] focus:border-orange-500/40 focus:outline-none focus:ring-2 focus:ring-orange-500/20';

const labelCls = 'mb-1.5 block text-[10px] font-medium uppercase tracking-wider text-portfolio-muted';

export function ContactForm() {
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
                className='w-full rounded-lg bg-portfolio-orange px-6 py-3.5 font-semibold text-black text-sm transition hover:opacity-90'
                type='submit'>
                Send Message →
            </button>
        </form>
    );
}
