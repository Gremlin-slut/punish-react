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
    const { name, username,  pumishment } = req.body;

    // Trigger the email transmission
    const data = await resend.emails.send({
      from: 'punish@resend.dev', // Use verified domain in production
      to: 'gremlinslutphotos@gmail.com', 
      subject: `New Punishment Submission`,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Kik User:</strong> ${username}</p><p><strong>Punishment:</strong> ${pumishment}</p>`,
    });

    return res.status(200).json({ success: true, data });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
