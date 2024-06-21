import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';
import { z } from 'zod';

export default async function handler(req: NextApiRequest, res: NextApiResponse<{ success: boolean; message: string }>) {
  try {
    const body = await req.body;
    const data = emailSchema.parse(body);

    const resend = new Resend(process.env.RESEND_API_KEY);
    const resendRes = await resend.emails.send({
      from: `Portfolio <${process.env.EMAIL_FROM}>`,
      to: process.env.EMAIL_TO,
      subject: data.subject,
      html: `
          <p>Nouveau message sur lilybarberou.fr</p>
          <p>${data.firstname} ${data.name}</p>
          <p>${data.email}</p>
          <p>${data.message}</p>
        `,
    });

    if (resendRes.error) throw new Error();
    return res.status(200).json({ success: true, message: 'Email envoyé' });
  } catch (e) {
    if (e instanceof z.ZodError) {
      return res.status(400).json({ success: false, message: 'Erreur dans les données envoyées' });
    }
    return res.status(400).json({ success: false, message: "Erreur lors de l'envoi de l'email" });
  }
}

const emailSchema = z.object({
  firstname: z.string(),
  name: z.string(),
  email: z.string().email(),
  subject: z.string(),
  message: z.string(),
});
