// src/app/api/mailgun/route.ts
import { NextRequest, NextResponse } from 'next/server';
import formData from 'form-data';
import Mailgun from 'mailgun.js';

const mailgun = new Mailgun(formData);
const mg = mailgun.client({
  username: 'api',
  key: process.env.MAILGUN_API_KEY ?? ''
});

export async function POST(request: NextRequest) {
  try {
    // 1. Extract fields from request, including the captchaToken
    const { name, email, subject, message, captchaToken } = await request.json();

    // 2. Verify the reCAPTCHA token with Google
    if (!captchaToken) {
      return NextResponse.json(
        { error: 'No reCAPTCHA token provided' },
        { status: 400 }
      );
    }

    const captchaResponse = await fetch(
      `https://www.google.com/recaptcha/api/siteverify`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${captchaToken}`
      }
    );

    const captchaVerification = await captchaResponse.json();
    if (!captchaVerification.success) {
      return NextResponse.json(
        { error: 'reCAPTCHA verification failed' },
        { status: 400 }
      );
    }

    // 3. If captcha is good, proceed with Mailgun
    const data = {
      from: 'Your Portfolio <portfolio@luccalaz.com>',
      to: 'luccalazza@gmail.com',
      subject: `New message from ${name}: ${subject}`,
      text: `You have received a new message from ${name} (${email}):\n\n${message}`
    };
    await mg.messages.create(process.env.MAILGUN_DOMAIN!, data);

    return NextResponse.json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Error sending email' }, { status: 500 });
  }
}
