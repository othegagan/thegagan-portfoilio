'use client';

import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';
import { FormEvent, useRef, useState } from 'react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import GlowBottom from '@/public/glow-bottom.svg';
import Image from 'next/image';
import { sendEmail } from '@/server/sendMail';

const contactLinks = [
    {
        icon: Mail,
        text: 'hellothegagan.gmail.com',
        link: 'mailto:hellothegagan.gmail.com',
    },
    {
        icon: Phone,
        text: '+91-9036644552',
        link: 'tel:+91-9036644552',
    },
    {
        icon: Github,
        text: 'thegagan',
        link: 'https://github.com/othegagan',
    },
    {
        icon: Linkedin,
        text: 'Gagankumar',
        link: 'https://www.linkedin.com/in/gagan-kumar-04a690286',
    },
];

export default function ContactSection() {
    const [error, setError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [emailSent, setEmailSent] = useState(false); // Corrected this to initially false

    const formRef = useRef(null);

    const handleSubmit = async e => {
        e.preventDefault();
        setIsSubmitting(true);
        setEmailSent(false);
        setError('');

        // Get form data directly from the form element
        const formData = new FormData(formRef.current);

        const name = formData.get('senderName') as string;
        const email = formData.get('senderEmail') as string;
        const message = formData.get('message') as string;
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const nameRegex = /^[a-zA-Z\s]+$/;

        if (!emailRegex.test(email)) {
            setError('Please enter a valid email');
            setIsSubmitting(false);
            return;
        }

        if (!nameRegex.test(name)) {
            setError('Please enter a valid name');
            setIsSubmitting(false);
            return;
        }

        if (!email || !name) {
            setError('Please enter your name and email');
            setIsSubmitting(false);
            return;
        }

        try {
            const response = await sendEmail(email, name, message);

            if (!response) {
                throw new Error('Network response was not ok');
            }

            setEmailSent(true);
            setIsSubmitting(false);
            setError('');
            formRef.current.reset();
        } catch (error) {
            setError('There was an error sending the email');
            setIsSubmitting(false);
        }
    };

    return (
        <section id='contact' className='relative  py-10 md:py-20'>
            <h3 className='bg-linear-to-r from-neutral-200/60 via-neutral-200 to-neutral-200/60 bg-clip-text pb-3 text-center text-4xl font-bold text-transparent lg:text-6xl'>
                Get in touch
            </h3>
            <div className='container mt-5 flex items-center justify-center '>
                <div className='flex w-full  max-w-6xl flex-col gap-6  md:flex-row md:justify-center '>
                    <div className=' text-accent dark:text-accent-foreground md:w-1/2'>
                        <div className='space-y-6'>
                            {contactLinks.map((item, index) => (
                                <div key={index} className='flex items-center  '>
                                    <item.icon className='size-5' />
                                    <p className='ml-4 text-center text-sm dark:text-accent-foreground'>
                                        <Link className='underline underline-offset-4 hover:text-primary' href={item.link || ''}>
                                            {item.text}
                                        </Link>
                                    </p>
                                </div>
                            ))}

                            <div className='flex items-center  '>
                                <MapPin className='size-5' />
                                <p className='ml-4 text-center text-sm dark:text-accent-foreground'>Bengaluru, Karnataka, India</p>
                            </div>
                        </div>
                    </div>

                    <form ref={formRef} id='contact-form' className='flex flex-col justify-center space-y-6  md:w-1/2' onSubmit={e => handleSubmit(e)}>
                        <Input name='senderName' type='text' placeholder='Enter your name' className='dark:placeholder:text-foreground/30' />
                        <Input name='senderEmail' placeholder='Your Email ID' type='email' className='dark:placeholder:text-foreground/30' />

                        <textarea
                            className='flex  w-full resize-none rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-xs placeholder:text-accent focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 dark:text-foreground dark:placeholder:text-foreground/30'
                            placeholder='Tell us a little bit about yourself'
                            name='message'></textarea>
                        {error && <p className=' mx-auto text-sm  leading-normal  text-red-400'>{error}</p>}

                        <Button disabled={isSubmitting} className='flex w-full items-center justify-center' type='submit'>
                            {isSubmitting ? 'Submitting...' : 'Submit'}
                        </Button>

                        {emailSent && (
                            <div className='flex items-center  '>
                                <p className='mx-auto text-center text-sm  leading-normal  text-green-400'>
                                    Thank you for contacting me..! <br /> I will get in touch with you soon. 😎
                                </p>
                            </div>
                        )}
                    </form>
                </div>
            </div>
            <div className='pointer-events-none absolute inset-0 -z-10 -mx-28 overflow-hidden rounded-t-[3rem]' aria-hidden='true'>
                <div className='absolute bottom-0 left-1/2 -z-10 -translate-x-1/2'>
                    <Image src={GlowBottom} className='max-w-none opacity-20 grayscale' width={1404} height={658} alt='Features Illustration' />
                </div>
            </div>
        </section>
    );
}
