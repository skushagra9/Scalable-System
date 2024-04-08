import { Worker } from 'bullmq'

export async function sendEmail(email) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Sending email...');
      console.log(`Recipient: ${email.recipient}, Subject: ${email.subject}, Text: ${email.text}`);
      resolve('Email sent successfully!');
    }, 5000);
  });
}

export const emailWorker = new Worker('email', async (job) => {
  const data = job.data;
  console.log('Job Rec.. ', job.id);

  await sendEmail({
    from: 'skushagra.sharma@gmail.com ',
    to: data.recipient,
    subject: data.subject,
    body: data.text
  })
}, {
  connection: {
    host: "localhost",
    port: 6379
  },
  limiter: {
    max: 50,
    duration: 10 * 1000
  }
})



//We can also use the resend service for sending mails please check the resend.js - I have put out a demo code , if anyone wants to use it
