'use server';

import React from 'react';
import { Resend } from 'resend';
import ContactMail from './contact-form-email';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (senderEmail, senderName, message) => {
    try {
        const data = await resend.emails.send({
            from: 'Contact Form <onboarding@resend.dev>',
            to: 'gagankumar8711@gmail.com',
            subject: 'Message from contact form',
            reply_to: senderEmail,
            react: ContactMail({
                message: message || '', // Ensure message is not null
                senderName: senderName || '', // Ensure senderName is not null
                senderEmail: senderEmail || '', // Ensure senderEmail is not null
            }) as React.ReactElement,
        });

        if (data) {
            return data;
        }
    } catch (error) {
        return {
            error: error.message,
        };
    }
};
