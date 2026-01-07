import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, name } = body;

    // Validate email
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email is required' },
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

    // Email to business (notification)
    const businessMailOptions = {
      from: gmailUser,
      to: businessEmail,
      subject: `New Newsletter Subscription: ${email}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #f17a16;">New Newsletter Subscription</h2>
          <div style="background-color: #faf7f2; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Email:</strong> ${email}</p>
            ${name ? `<p><strong>Name:</strong> ${name}</p>` : ''}
            <p><strong>Subscribed on:</strong> ${new Date().toLocaleString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit'
            })}</p>
          </div>
          <p style="color: #666; font-size: 12px;">This email was sent from the Kosi Naturals newsletter subscription form.</p>
        </div>
      `,
    };

    // Email to user (welcome/confirmation)
    const userMailOptions = {
      from: gmailUser,
      to: email,
      subject: `Welcome to Kosi Naturals Newsletter!`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #f17a16;">Welcome to Kosi Naturals!</h2>
          <p>${name ? `Dear ${name},` : 'Hello,'}</p>
          <p>Thank you for subscribing to our newsletter! We're excited to share our journey with you.</p>
          <div style="background-color: #faf7f2; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p>You'll receive updates about:</p>
            <ul style="list-style: none; padding: 0;">
              <li style="padding: 5px 0;">✓ Our latest products and sourcing stories</li>
              <li style="padding: 5px 0;">✓ Behind-the-scenes from the Kosi region</li>
              <li style="padding: 5px 0;">✓ Tips and recipes using our natural ingredients</li>
              <li style="padding: 5px 0;">✓ Updates from our farmer partnerships</li>
            </ul>
          </div>
          <p>We're committed to bringing you honest food from the heart of Bihar, and we're glad to have you on this journey with us.</p>
          <p>Best regards,<br>The Kosi Naturals Team</p>
          <hr style="border: none; border-top: 1px solid #e8d9c1; margin: 30px 0;">
          <p style="color: #666; font-size: 12px;">Kosi Region, Bihar, India<br>Email: ${businessEmail}</p>
          <p style="color: #999; font-size: 11px; margin-top: 20px;">If you did not subscribe to this newsletter, please ignore this email.</p>
        </div>
      `,
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(businessMailOptions),
      transporter.sendMail(userMailOptions),
    ]);

    return NextResponse.json(
      { message: 'Newsletter subscription successful' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending newsletter email:', error);
    return NextResponse.json(
      { error: 'Failed to process subscription' },
      { status: 500 }
    );
  }
}

