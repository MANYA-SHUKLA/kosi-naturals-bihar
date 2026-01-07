import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message, inquiryType } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Gmail configuration from environment variables
    const gmailUser = process.env.GMAIL_USER;
    const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;
    const businessEmail = process.env.BUSINESS_EMAIL || gmailUser;

    if (!gmailUser || !gmailAppPassword) {
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: gmailUser,
        pass: gmailAppPassword,
      },
    });

    // Email to business
    const businessMailOptions = {
      from: gmailUser,
      to: businessEmail,
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #f17a16;">New Contact Form Submission</h2>
          <div style="background-color: #faf7f2; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Inquiry Type:</strong> ${inquiryType === 'consumer' ? 'Consumer' : 'Trade Buyer'}</p>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong></p>
            <p style="background-color: white; padding: 15px; border-radius: 4px; margin-top: 10px;">${message.replace(/\n/g, '<br>')}</p>
          </div>
          <p style="color: #666; font-size: 12px;">This email was sent from the Kosi Naturals contact form.</p>
        </div>
      `,
    };

    // Email to user (confirmation)
    const userMailOptions = {
      from: gmailUser,
      to: email,
      subject: `Thank you for contacting Kosi Naturals`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #f17a16;">Thank You for Contacting Us!</h2>
          <p>Dear ${name},</p>
          <p>We have received your message and will get back to you soon.</p>
          <div style="background-color: #faf7f2; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Your Message:</strong></p>
            <p style="background-color: white; padding: 15px; border-radius: 4px; margin-top: 10px;">${message.replace(/\n/g, '<br>')}</p>
          </div>
          <p>We appreciate your interest in Kosi Naturals and will respond to your inquiry as soon as possible.</p>
          <p>Best regards,<br>The Kosi Naturals Team</p>
          <hr style="border: none; border-top: 1px solid #e8d9c1; margin: 30px 0;">
          <p style="color: #666; font-size: 12px;">Kosi Region, Bihar, India<br>Email: ${businessEmail}</p>
        </div>
      `,
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(businessMailOptions),
      transporter.sendMail(userMailOptions),
    ]);

    return NextResponse.json(
      { message: 'Emails sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}

