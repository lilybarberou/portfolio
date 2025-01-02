import { env } from "@/lib/env";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const data = emailSchema.parse(body);

    const resend = new Resend(env.RESEND_API_KEY);
    const resendRes = await resend.emails.send({
      from: `Portfolio <${env.EMAIL_FROM}>`,
      to: env.EMAIL_TO,
      subject: data.subject,
      html: `
          <p>Nouveau message sur lilybarberou.fr</p>
          <p>${data.firstname} ${data.name}</p>
          <p>${data.email}</p>
          <p>${data.message}</p>
        `,
    });

    if (resendRes.error) throw new Error();
    return NextResponse.json({ success: true, message: "Email envoyé" });
  } catch (e) {
    if (e instanceof z.ZodError) {
      return NextResponse.json({
        success: false,
        message: "Erreur dans les données envoyées",
      });
    }
    return NextResponse.json({
      success: false,
      message: "Erreur lors de l'envoi de l'email",
    });
  }
}

const emailSchema = z.object({
  firstname: z.string(),
  name: z.string(),
  email: z.string().email(),
  subject: z.string(),
  message: z.string(),
});
