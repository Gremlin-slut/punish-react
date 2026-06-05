// api/send.js
import { Resend } from 'resend';

// Initialize Resend with your private API key
const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  // Only allow POST requests
  console.log("email incoming");
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { body } = req.body;

    // Trigger the email transmission
    const data = await resend.emails.send({
      from: 'onboarding@resend.dev', // Use verified domain in production
      to: 'gremlinslutphotos@gmail.com', 
      subject: `New Contact Form`,
      html: `<p> ${body}</p>`,
    });

    return res.status(200).json({ success: true, data });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
