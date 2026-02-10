import { EmailTemplate } from '../../components/email-template';
import { Resend } from 'resend';

export async function POST(request: Request) { 
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return Response.json(
      { error: "Missing RESEND_API_KEY env var." },
      { status: 500 }
    );
  }

  const resend = new Resend(apiKey);

  try {
    const { name, email, message } = await request.json();

    const { data, error } = await resend.emails.send({
      from: 'Sonia projects <sonia@soniaprojects.pl>',
      to: ['soniaarchitektura@gmail.com'],
      subject: `Nowa wiadomość od ${name}`,
      react: EmailTemplate({ name, email, message, language: 'pl' }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
