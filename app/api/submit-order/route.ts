import { z } from "zod";
import { NextRequest, NextResponse } from "next/server";
import { render } from "@react-email/render";
import {
  OrderConfirmationClient,
  OrderNotificationAdmin,
} from "@/templates/email-notification";
import nodemailer from "nodemailer";

const OrderSchema = z.object({
  address: z.string().min(5, "Address must be at least 5 characters"),
  cartItems: z
    .array(
      z.object({
        productId: z.string(),
        quantity: z.number(),
        price: z.number(),
        name: z.string(),
        image: z.string(),
        size: z.string(),
      })
    )
    .nonempty("Cart must contain at least one item"),
  email: z.string().email(),
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  phone: z.string().regex(/^\+\d{10,15}$/, "Invalid phone number format"),
});
export type OrderData = z.infer<typeof OrderSchema>;

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const validation = OrderSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Validation failed",
          errors: validation.error.errors,
        },
        { status: 400 }
      );
    }

    const orderData = validation.data;

    const clientHtml = render(OrderConfirmationClient({ data: orderData }));
    const adminHtml = render(OrderNotificationAdmin({ data: orderData }));

    await Promise.all([
      transporter.sendMail({
        from: process.env.EMAIL_FROM,
        to: process.env.ADMIN_EMAIL,
        subject: `New Order from ${orderData.firstName} ${orderData.lastName}`,
        html: await adminHtml,
        text: `New order received:\n\n${JSON.stringify(orderData, null, 2)}`,
      }),
      transporter.sendMail({
        from: process.env.EMAIL_FROM,
        to: orderData.email,
        subject: "Thank you for your order!",
        html: await clientHtml,
      }),
    ]);

    return NextResponse.json({
      success: true,
      message: "Order received! Check your email for confirmation.",
    });
  } catch (error) {
    console.error("Order submission error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to process order. Please try again later.",
      },
      { status: 500 }
    );
  }
}
