import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Configure the Gmail transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: 'workspace220106@gmail.com',
      subject: `New Transmission from ${name}`,
      replyTo: email,
      html: `
        <div style="font-family: monospace; background-color: #030303; color: #fff; padding: 40px; border: 1px solid #1a1a1a;">
          <h2 style="color: #c0c1ff; border-bottom: 1px solid #1a1a1a; padding-bottom: 10px;">INCOMING TRANSMISSION</h2>
          <p><strong>From:</strong> ${name} (${email})</p>
          <div style="margin-top: 20px; padding: 20px; background-color: #0a0a0a; border-left: 2px solid #c0c1ff;">
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          <p style="margin-top: 30px; font-size: 10px; color: #666;">COMMAND CENTER PORTFOLIO SYSTEM v1.0</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Mail Error:', error);
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}
