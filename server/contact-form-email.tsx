import { Logo } from '@/components/icons/logo';
//@ts-ignore
import { Body, Button, Container, Head, Hr, Html, Img, Preview, Section, Text } from '@react-email/components';
import { color } from 'framer-motion';
import * as React from 'react';

interface ContactMailProps {
    senderName: string;
    senderEmail: string;
    message?: string;
}

export const ContactMail = ({ senderName, senderEmail, message }: ContactMailProps) => (
    <Html>
        <Head />
        <Preview>New message from portfolio site.</Preview>
        <Body style={main}>
            <Container style={container}>
                <Logo />
                <Text style={paragraph}>Hi Gagan,</Text>

                <Text style={paragraph}>Someone as filled the contact form.</Text>

                <br />
                <br />
                <Text style={paragraph}>
                    <b>Sender Name : {senderName}</b>
                </Text>
                <Text style={paragraph}>
                    <b>Sender Email : {senderEmail}</b>
                </Text>
                <Text style={paragraph}>
                    <b>Message: {message}</b>
                </Text>

                <Hr style={hr} />
                <Text style={footer}>TheGagan's Portfolio</Text>
            </Container>
        </Body>
    </Html>
);

export default ContactMail;

const main = {
    backgroundColor: '#000000',
    fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
    margin: '0 auto',
    padding: '20px  48px',
};

const logo = {
    margin: '0 auto',
};

const paragraph = {
    fontSize: '16px',
    lineHeight: '26px',
    color: '#fff',
};

const hr = {
    borderColor: '#cccccc',
    margin: '20px 0',
};

const footer = {
    color: '#8898aa',
    fontSize: '12px',
};
