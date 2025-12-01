import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { email, firstName, lastName, items, total } = body;

        const { data, error } = await resend.emails.send({
            from: 'EcoDrop <orders@ecofriendlydropshipping.com>',
            to: [email],
            subject: 'Order Confirmation - EcoDrop',
            html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: #047857; color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
              .content { background: #f9fafb; padding: 30px; }
              .order-item { background: white; padding: 15px; margin: 10px 0; border-radius: 8px; border-left: 4px solid #10b981; }
              .total { background: #047857; color: white; padding: 20px; text-align: center; font-size: 24px; font-weight: bold; border-radius: 0 0 10px 10px; }
              .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>🌿 Thank You for Your Order!</h1>
              </div>
              <div class="content">
                <p>Hi ${firstName} ${lastName},</p>
                <p>We're excited to confirm your order! Your eco-friendly products are being prepared for shipment.</p>
                
                <h3>Order Summary:</h3>
                ${items.map((item: any) => `
                  <div class="order-item">
                    <strong>${item.name}</strong><br>
                    Quantity: ${item.quantity} × $${item.price.toFixed(2)} = $${(item.quantity * item.price).toFixed(2)}
                  </div>
                `).join('')}
                
                <p><strong>🌳 Impact:</strong> We've planted a tree on your behalf!</p>
                <p><strong>📦 Shipping:</strong> Your order will arrive in 5-7 business days with carbon-neutral shipping.</p>
              </div>
              <div class="total">
                Total: $${total.toFixed(2)}
              </div>
              <div class="footer">
                <p>Questions? Reply to this email or visit our website.</p>
                <p>© ${new Date().getFullYear()} EcoDrop. Making sustainable living accessible.</p>
              </div>
            </div>
          </body>
        </html>
      `,
        });

        if (error) {
            return NextResponse.json({ error }, { status: 500 });
        }

        return NextResponse.json({ success: true, data });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }
}
