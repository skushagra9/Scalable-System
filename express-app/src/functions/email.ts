
type EmailDetails = {
  recipient: string;
  subject: string;
  text: string;
};

export async function sendEmail(email: EmailDetails): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Sending email...');
      console.log(`Recipient: ${email.recipient}, Subject: ${email.subject}, Text: ${email.text}`);
      resolve('Email sent successfully!');
    }, 5000);
  });
}
