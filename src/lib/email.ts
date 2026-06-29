import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const FROM = process.env.EMAIL_FROM ?? "KO Clinics <hello@koclinics.com>";

export async function sendPartnerWelcome(to: string, name: string) {
  return resend.emails.send({
    from: FROM,
    to,
    subject: "Welcome to the KO Clinics Network",
    html: partnerWelcomeTemplate(name),
  });
}

export async function sendLeadConfirmation(to: string, name: string) {
  return resend.emails.send({
    from: FROM,
    to,
    subject: "We received your enquiry — KO Clinics",
    html: leadTemplate(name),
  });
}

/* ── Branded HTML email templates (gold / ivory) ── */
function shell(inner: string) {
  return `<!doctype html><html><body style="margin:0;background:#FAF7F2;font-family:Inter,Arial,sans-serif;color:#1E1E1E">
    <div style="max-width:560px;margin:0 auto;padding:40px 24px">
      <div style="text-align:center;letter-spacing:6px;font-size:13px;color:#B58B3A;font-weight:600">KO CLINICS</div>
      <div style="height:1px;background:linear-gradient(90deg,transparent,#D6B46A,transparent);margin:20px 0"></div>
      <div style="background:#FDFCF9;border:1px solid #EEE8DD;border-radius:20px;padding:32px">${inner}</div>
      <p style="text-align:center;color:#6B6B6B;font-size:12px;margin-top:24px">India • Hong Kong • Dubai • Canada — www.koclinics.com</p>
    </div></body></html>`;
}

function partnerWelcomeTemplate(name: string) {
  return shell(`
    <h1 style="font-family:Georgia,serif;font-size:26px;margin:0 0 12px">Welcome, ${name}.</h1>
    <p style="line-height:1.7;color:#444">Your partner registration is in. Our onboarding team will guide you through evaluation, site inspection and brand onboarding — then the patient leads start flowing.</p>
    <a href="https://www.koclinics.com/partner" style="display:inline-block;margin-top:16px;background:linear-gradient(135deg,#B58B3A,#D6B46A);color:#fff;text-decoration:none;padding:12px 24px;border-radius:999px;font-weight:600">Open Partner Portal</a>`);
}

function leadTemplate(name: string) {
  return shell(`
    <h1 style="font-family:Georgia,serif;font-size:24px;margin:0 0 12px">Thank you, ${name}.</h1>
    <p style="line-height:1.7;color:#444">A KO Clinics care advisor will reach out shortly to confirm your consultation.</p>`);
}
