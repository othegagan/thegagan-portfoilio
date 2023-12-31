import React from "react";
import {
    Html,
    Body,
    Head,
    Heading,
    Hr,
    Container,
    Preview,
    Section,
    Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";


interface ContactFormEmailProps {
    message: string;
    senderEmail: string;
    senderName: string;
};

 const ContactFormEmail: React.FC<ContactFormEmailProps> = ({
    message, senderEmail, senderName
}) => (
    <Html>
        <Head />
        <Preview>New message from portfolio site</Preview>
        <Tailwind>
            <Body className="bg-gray-100 text-black">
                <Container>
                    <Section className="bg-white borderBlack my-10 px-10 py-4 rounded-md">
                        <Text className="leading-tight">
                            You received the following message from the
                            contact form
                        </Text>
                        <Hr />
                        <Text>The sender's Name is: {senderName}</Text>
                        <Text>The sender's email is: {senderEmail}</Text>
                        <Text>{message}</Text>
                    </Section>
                </Container>
            </Body>
        </Tailwind>
    </Html>
);

export default ContactFormEmail;