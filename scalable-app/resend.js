import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  const { message, name, SenderEmail } = (await request.json());
  try {
    if (!message) {
      return Response.json({
        error: "Invalid message",
      });
    }
    await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: `skushagra.sharma@gmail.com`,
      subject: `${name} From Contact Form.`,
      reply_to: `${SenderEmail}`,
      text: `sender email: ${SenderEmail} 
     ${message}`,
    });

    return Response.json({
      success: "Successfully Recieved",
      message: "I will Contact You shortly"
    })

  } catch (error) {
    console.error("Error saving data to database:", error);
    return Response.json({ error: "Error saving data to database" });
  }
}

