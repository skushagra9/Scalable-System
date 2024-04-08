type PaymentDetails = {
  amount: number;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
};

export async function makePayment(payment: PaymentDetails): Promise<string> {
  return new Promise((resolve, reject) => {
    console.log('Processing payment...');
    console.log(`Amount: $${payment.amount}, Card Number: ${payment.cardNumber}, Expiry Date: ${payment.expiryDate}, CVV: ${payment.cvv}`);
    resolve('Payment processed successfully!');
  });
}
