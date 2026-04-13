import { NextResponse } from "next/server";

type ContactRequestBody = {
  name?: string;
  email?: string;
  message?: string;
  captchaToken?: string;
  captchaAction?: string;
};

type RecaptchaVerifyResponse = {
  success: boolean;
  score?: number;
  action?: string;
  hostname?: string;
  "error-codes"?: string[];
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const RECAPTCHA_MIN_SCORE = 0.5;
const EXPECTED_RECAPTCHA_ACTION = "contact_form_submit";
const RESEND_API_URL = "https://api.resend.com/emails";

function sanitizeInput(value: string | undefined) {
  return value?.trim() ?? "";
}

function validateBody(body: ContactRequestBody) {
  const name = sanitizeInput(body.name);
  const email = sanitizeInput(body.email);
  const message = sanitizeInput(body.message);
  const captchaToken = sanitizeInput(body.captchaToken);
  const captchaAction = sanitizeInput(body.captchaAction);

  if (!name || !email || !message || !captchaToken) {
    return { error: "Name, email, message, and captcha are required." };
  }

  if (!EMAIL_REGEX.test(email)) {
    return { error: "Please provide a valid email address." };
  }

  if (message.length < 2) {
    return { error: "Message cannot be empty." };
  }

  if (captchaAction !== EXPECTED_RECAPTCHA_ACTION) {
    return { error: "Captcha validation failed." };
  }

  return { name, email, message, captchaToken, captchaAction };
}

async function verifyRecaptcha(token: string, action: string) {
  const secret = process.env.RECAPTCHA_SECRET_KEY;

  if (!secret) {
    return { ok: false, error: "Server captcha configuration is missing." };
  }

  const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      secret,
      response: token,
    }),
    cache: "no-store",
  });

  if (!response.ok) {
    return { ok: false, error: "Captcha verification failed." };
  }

  const result = (await response.json()) as RecaptchaVerifyResponse;

  if (!result.success) {
    return { ok: false, error: "Captcha verification failed." };
  }

  if (result.action !== action) {
    return { ok: false, error: "Captcha action mismatch." };
  }

  if ((result.score ?? 0) < RECAPTCHA_MIN_SCORE) {
    return { ok: false, error: "Captcha score was too low." };
  }

  return { ok: true };
}

async function sendContactEmail({
  name,
  email,
  message,
}: {
  name: string;
  email: string;
  message: string;
}) {
  const apiKey = process.env.RESEND_API_KEY;
  const receiverEmail = process.env.RECEIVER_EMAIL;
  const from = process.env.RESEND_FROM_EMAIL ?? "Portfolio Contact <onboarding@resend.dev>";

  if (!apiKey || !receiverEmail) {
    return { ok: false, error: "Email service is not configured." };
  }

  const response = await fetch(RESEND_API_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [receiverEmail],
      reply_to: email,
      subject: `Portfolio contact form: ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    }),
    cache: "no-store",
  });

  if (!response.ok) {
    return { ok: false, error: "Unable to send email right now." };
  }

  return { ok: true };
}

export async function POST(request: Request) {
  let body: ContactRequestBody;

  try {
    body = (await request.json()) as ContactRequestBody;
  } catch {
    return NextResponse.json(
      { error: "Invalid request payload." },
      { status: 400 },
    );
  }

  const validated = validateBody(body);

  if ("error" in validated) {
    return NextResponse.json({ error: validated.error }, { status: 400 });
  }
  
  const captchaResult = await verifyRecaptcha(
    validated.captchaToken,
    validated.captchaAction,
  );

  if (!captchaResult.ok) {
    return NextResponse.json({ error: captchaResult.error }, { status: 400 });
  }

  const emailResult = await sendContactEmail(validated);

  if (!emailResult.ok) {
    return NextResponse.json({ error: emailResult.error }, { status: 500 });
  }

  return NextResponse.json(
    { message: "Thanks for reaching out. Your message has been sent." },
    { status: 200 },
  );
}
