"use server";

import React from "react";
import { Resend } from "resend";
import ContactFormEmail from "@/email/contact-form-email";

const validateString = (
    value: unknown,
    maxLength: number
): value is string => {
    if (!value || typeof value !== "string" || value.length > maxLength) {
        return false;
    }

    return true;
};

const getErrorMessage = (error: unknown): string => {
    let message: string;

    if (error instanceof Error) {
        message = error.message;
    } else if (error && typeof error === "object" && "message" in error) {
        message = String(error.message);
    } else if (typeof error === "string") {
        message = error;
    } else {
        message = "Something went wrong";
    }

    return message;
};


const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
    const senderEmail = formData.get("senderEmail") as string | null;
    const message = formData.get("message") as string | null;
    const senderName = formData.get("senderName") as string | null;

    // Check if senderName is null or empty
    if (!senderName || senderName.trim() === "") {
        return {
            error: "Sender name is required",
        };
    }

    // Simple server-side validation for other fields
    if (!validateString(senderEmail, 500)) {
        return {
            error: "Invalid sender email",
        };
    }
    if (!validateString(message, 5000)) {
        return {
            error: "Invalid message",
        };
    }

    let data;
    try {
        data = await resend.emails.send({
            from: "Contact Form <onboarding@resend.dev>",
            to: "gagankumar8711@gmail.com",
            subject: "Message from contact form",
            reply_to: senderEmail,
            react: ContactFormEmail({
                message: message || '', // Ensure message is not null
                senderName: senderName || '', // Ensure senderName is not null
                senderEmail: senderEmail || '', // Ensure senderEmail is not null
            }) as React.ReactElement,
        });
    } catch (error) {
        return {
            error: getErrorMessage(error),
        };
    }

    return {
        data,
    };
};
