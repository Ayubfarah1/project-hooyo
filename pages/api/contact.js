// pages/api/contact.js
import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: +process.env.SMTP_PORT,
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  // optional: if you run into TLS issues uncomment:
  // tls: { rejectUnauthorized: false },
})

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST'])
    return res.status(405).end('Method Not Allowed')
  }

  try {
    const { name, email, message } = req.body
    await transporter.sendMail({
      from: `"Project Hooyo" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_TO_EMAIL,
      subject: `New message from ${name || 'Anonymous'}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      replyTo: email || undefined,
    })
    return res.status(200).json({ success: true })
  } catch (err) {
    // 1) log full error on server:
    console.error('SMTP ERROR:', err)
    // 2) return the message in JSON so you can see it in DevTools:
    return res.status(500).json({ error: err.message })
  }
}
