import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  const { name, company, phone, email, message } = await req.json()

  if (!name || !email || !message) {
    return NextResponse.json({ error: "필수 항목을 입력해주세요." }, { status: 400 })
  }

  const { data, error } = await resend.emails.send({
    from: "ONYX 문의 <noreply@onyxproject.site>",
    to: "andrew@onyxproject.site",
    subject: `[ONYX 문의] ${name} / ${company || "회사명 없음"}`,
    html: `
      <h2>ONYX 홈페이지 문의</h2>
      <table style="border-collapse:collapse;width:100%">
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">이름</td><td style="padding:8px;border:1px solid #ddd">${name}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">회사명</td><td style="padding:8px;border:1px solid #ddd">${company || "-"}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">연락처</td><td style="padding:8px;border:1px solid #ddd">${phone || "-"}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">이메일</td><td style="padding:8px;border:1px solid #ddd">${email}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">문의 내용</td><td style="padding:8px;border:1px solid #ddd;white-space:pre-wrap">${message}</td></tr>
      </table>
    `,
  })

  console.log("Resend result:", { data, error })

  if (error) {
    console.error("Resend error:", error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ ok: true })
}
