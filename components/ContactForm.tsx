"use client";
import React, { FormEvent, useState } from "react";
import SectionHeading from "./SeactionHeading";
import Link from "next/link";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

import { sendEmail } from "@/actions/sendEmail";

const ContactForm = () => {
    const { pending } = useFormStatus();
    const [error, setError] = useState("");

    return (
        <div>
            <section id="contact">
                <div className="container p-6 py-10 flex items-center justify-center md:py-20">
                    <div className="max-w-6xl flex  flex-col md:flex-row w-full  md:justify-center ">

                        <div className="p-6 md:w-1/2 text-accent dark:text-accent-foreground">
                            <h1 className="w-full    text-4xl font-extrabold tracking-tigh dark:bg-gradient-to-b dark:from-white dark:to-[#adadad] bg-gradient-to-b from-[#555] to-[#000] text-transparent bg-clip-text">
                                Get in touch
                            </h1>

                            <div className="space-y-4 mt-6">
                                <div className="flex items-center  ">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="1.5"
                                        viewBox="0 0 24 24"
                                        className="w-5 h-5 ">
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="1.5"
                                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                    </svg>
                                    <p className="ml-4 text-center text-sm dark:text-accent-foreground">
                                        <Link
                                            className="underline underline-offset-4 hover:text-primary"
                                            href="mailto:hellothegagan.gmail.com">
                                            hellothegagan.gmail.com
                                        </Link>
                                    </p>
                                </div>

                                <div className="flex items-center  ">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="1.5"
                                        viewBox="0 0 24 24"
                                        className="w-5 h-5 ">
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="1.5"
                                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                    </svg>
                                    <p className="ml-4 text-center text-sm dark:text-accent-foreground">
                                        <Link
                                            className="underline underline-offset-4 hover:text-primary"
                                            href="tel:+91-9036644552">
                                            +91-9036644552
                                        </Link>
                                    </p>
                                </div>

                                <div className="flex items-center  ">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        fill="currentColor"
                                        className="h-4 w-4"
                                        height="24"
                                        viewBox="0 0 24 24">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                    </svg>
                                    <p className="ml-4 text-center text-sm dark:text-accent-foreground">
                                        <Link
                                            className="underline underline-offset-4 hover:text-primary"
                                            href="https://github.com/othegagan">
                                            thegagan
                                        </Link>
                                    </p>
                                </div>

                                <div className="flex items-center  ">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        fill="currentColor"
                                        className="h-4 w-4"
                                        viewBox="0 0 24 24">
                                        <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                                    </svg>
                                    <p className="ml-4 text-center text-sm dark:text-accent-foreground">
                                        <Link
                                            className="underline underline-offset-4 hover:text-primary"
                                            href="https://www.linkedin.com/in/gagan-kumar-04a690286">
                                            Gagankumar
                                        </Link>
                                    </p>
                                </div>

                                <div className="flex items-center  ">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="1.5"
                                        viewBox="0 0 24 24"
                                        className="w-5 h-5 ">
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="1.5"
                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="1.5"
                                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                    </svg>
                                    <p className="ml-4 text-center text-sm dark:text-accent-foreground">
                                        Bengaluru, Karnataka, India
                                    </p>
                                </div>
                            </div>
                        </div>

                        <form
                            id="contact-form"
                            className="p-6 md:w-1/2 flex flex-col justify-center space-y-6"
                            action={async (formData) => {
                                const { error } = await sendEmail(formData);

                                // Set error or success message
                                setError(error ? error : 'Email sent successfully!');
                            }}>
                            <input
                                className="flex h-9 w-full rounded-md border dark:text-foreground border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-accent dark:placeholder:text-foreground/30 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                                placeholder="Your name"
                                type="text"
                                name="senderName"
                            />
                            <input
                                className="flex h-9 w-full rounded-md border dark:text-foreground border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-accent dark:placeholder:text-foreground/30 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                                placeholder="Your Email ID"
                                type="email"
                                name="senderEmail"
                            />

                            <textarea
                                className="flex  w-full rounded-md border dark:text-foreground border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-accent dark:placeholder:text-foreground/30 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 resize-none"
                                placeholder="Tell us a little bit about yourself"
                                name="message"></textarea>

                            <button
                                type="submit"
                                className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50  bg-background text-foreground dark:bg-primary dark:text-primary-foreground shadow dark:hover:bg-primary/90 h-9 px-4 py-2 hover:bg-background/90"
                                disabled={pending}>
                                {pending ? (
                                    <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white">Pending</div>
                                ) : (
                                    <>Submit </>
                                )}
                            </button>

                            <p className=" text-sm mx-auto  leading-[1.5]  text-zinc-700 dark:text-[#888]">
                                {error}
                            </p>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactForm;
