import { makePayment } from './functions/payment';
import { sendEmail } from './functions/email';
import express from 'express'
const app = express();
const port = 3000;

// Combined endpoint for making payment and sending email
app.post('/process-order', async (req, res) => {
  console.log('Processing payment...');
  try {
    await makePayment({
      amount: 100,
      cardNumber: '1234 5678 9012 3456',
      expiryDate: '12/25',
      cvv: '123'
    });

    await sendEmail({
      recipient: 'example@example.com',
      subject: 'Hello',
      text: 'This is a test email.'
    });

    console.log('Payment processed and email sent successfully!');
    res.json({ message: 'Order processed successfully!' });
  } catch (error) {
    console.error('Error processing order:', error);
    res.status(500).json({ message: 'Error processing order' });
  }
});

app.listen(port, () => {
  console.log(`Express server running on port ${port}`);
});

