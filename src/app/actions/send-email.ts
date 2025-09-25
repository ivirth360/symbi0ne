'use server';

import nodemailer from 'nodemailer';

export async function sendContactEmail(formData: FormData) {
  const data = Object.fromEntries(formData.entries());

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const mailOptions = {
    from: `"Symbi0n" <${process.env.SMTP_USER}>`,
    to: process.env.SMTP_USER,
    subject: 'New Identity Reservation',
    html: `
        <h1>New Identity Reservation</h1>
        <p><strong>Full Name:</strong> ${data.fullName}</p>
        <p><strong>Brand:</strong> ${data.brand || 'N/A'}</p>
        <p><strong>Gender:</strong> ${data.gender}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Date of Birth:</strong> ${data.dob}</p>
        <p><strong>Time of Birth:</strong> ${data.tob}</p>
        <p><strong>Place of Birth:</strong> ${data.pob}</p>
        <p><strong>Purpose:</strong> ${data.purpose}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Failed to send email');
  }
}
