import { NextResponse } from "next/server";
import { Resend } from "resend";
require("dotenv").config({ path: "P:/al-fayrouz/.env.local" });

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: Request) {
  try {
    const {
      name,
      company,
      phone,
      email, // ✅ client email sent in request
      equipmentModel,
      partNeeded,
      message,
    } = await req.json();

    const html = `
      <h2>طلب جديد من موقع الفيروز</h2>
      <p><strong>الاسم:</strong> ${name}</p>
      <p><strong>الشركة:</strong> ${company}</p>
      <p><strong>رقم الهاتف:</strong> ${phone}</p>
      <p><strong>البريد الإلكتروني:</strong> ${email}</p>
      <p><strong>موديل المعدات:</strong> ${equipmentModel}</p>
      <p><strong>القطعة المطلوبة:</strong> ${partNeeded}</p>
      <p><strong>الرسالة:</strong> ${message}</p>
    `;

    const response = await resend.emails.send({
      from: email,
      to: "alfayrouz804@onresend.com", // your email to receive the request
      subject: "طلب جديد - التواصل معنا",
      html: html,
    });
    console.log("Email sent successfully:", response);
    return NextResponse.json({ success: true, response });
  } catch (error: any) {
    console.error("Email error:", error);
    return NextResponse.json({ success: false, error: error.message });
  }
}
