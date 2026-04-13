"use client";

import { FormEvent, useCallback, useMemo, useState } from "react";
import Script from "next/script";
import { contactLinks } from "@/data/site-content";

type FormValues = {
  name: string;
  email: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

type SubmitState =
  | { type: "idle"; message: string }
  | { type: "success"; message: string }
  | { type: "error"; message: string };

declare global {
  interface Window {
    grecaptcha?: {
      ready: (callback: () => void) => void;
      execute: (
        siteKey: string,
        options: { action: string },
      ) => Promise<string>;
    };
  }
}

const INITIAL_VALUES: FormValues = {
  name: "",
  email: "",
  message: "",
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const RECAPTCHA_ACTION = "contact_form_submit";
const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? "";

function validateForm(values: FormValues) {
  const errors: FormErrors = {};

  if (!values.name.trim()) {
    errors.name = "Name is required.";
  }

  if (!values.email.trim()) {
    errors.email = "Email is required.";
  } else if (!EMAIL_REGEX.test(values.email.trim())) {
    errors.email = "Enter a valid email address.";
  }

  if (!values.message.trim()) {
    errors.message = "Message is required.";
  }

  return errors;
}

function runRecaptcha(siteKey: string) {
  return new Promise<string>((resolve, reject) => {
    if (!siteKey) {
      reject(new Error("reCAPTCHA is not configured."));
      return;
    }

    if (!window.grecaptcha) {
      reject(new Error("reCAPTCHA failed to load. Please try again."));
      return;
    }

    window.grecaptcha.ready(async () => {
      try {
        const token = await window.grecaptcha?.execute(siteKey, {
          action: RECAPTCHA_ACTION,
        });

        if (!token) {
          reject(new Error("reCAPTCHA verification failed. Please try again."));
          return;
        }

        resolve(token);
      } catch {
        reject(new Error("reCAPTCHA verification failed. Please try again."));
      }
    });
  });
}

export function Contact() {
  const [formValues, setFormValues] = useState<FormValues>(INITIAL_VALUES);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitState, setSubmitState] = useState<SubmitState>({
    type: "idle",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const hasRecaptcha = useMemo(() => Boolean(RECAPTCHA_SITE_KEY), []);

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = event.target;

      setFormValues((current) => ({
        ...current,
        [name]: value,
      }));

      setErrors((current) => {
        if (!current[name as keyof FormValues]) {
          return current;
        }

        const nextErrors = { ...current };
        delete nextErrors[name as keyof FormValues];
        return nextErrors;
      });

      if (submitState.type !== "idle") {
        setSubmitState({ type: "idle", message: "" });
      }
    },
    [submitState.type],
  );

  const handleSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      const nextErrors = validateForm(formValues);
      if (Object.keys(nextErrors).length > 0) {
        setErrors(nextErrors);
        setSubmitState({
          type: "error",
          message: "Please fix the highlighted fields and try again.",
        });
        return;
      }

      setErrors({});
      setIsSubmitting(true);
      setSubmitState({ type: "idle", message: "" });

      try {
        const captchaToken = await runRecaptcha(RECAPTCHA_SITE_KEY);
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...formValues,
            captchaToken,
            captchaAction: RECAPTCHA_ACTION,
          }),
        });

        const payload = (await response.json()) as {
          error?: string;
          message?: string;
        };

        if (!response.ok) {
          throw new Error(payload.error ?? "Unable to send your message right now.");
        }

        setFormValues(INITIAL_VALUES);
        setSubmitState({
          type: "success",
          message: payload.message ?? "Message sent successfully.",
        });
      } catch (error) {
        setSubmitState({
          type: "error",
          message:
            error instanceof Error
              ? error.message
              : "Unable to send your message right now.",
        });
      } finally {
        setIsSubmitting(false);
      }
    },
    [formValues],
  );

  return (
    <section id="contact" className="px-5 py-16 sm:px-10">
      {hasRecaptcha ? (
        <Script
          src={`https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`}
          strategy="afterInteractive"
        />
      ) : null}

      <div className="mb-2 font-[var(--font-dm-mono)] text-[10px] uppercase tracking-[3px] text-blue-500">
        Contact
      </div>
      <div className="mb-8 text-[24px] font-semibold tracking-[-0.8px] text-slate-100">
        Get in touch
      </div>

      <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2">
        <div>
          <div className="mb-2 text-[16px] font-semibold text-slate-100">
            Let&apos;s work together
          </div>
          <p className="mb-6 text-[13px] leading-[1.7] text-slate-600">
            Open to full-time roles, freelance projects, and interesting
            collaborations.
          </p>

          <div className="flex flex-col gap-2">
            {contactLinks.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-[8px] border border-white/[0.07] bg-white/[0.02] px-[14px] py-2 text-[12px] text-slate-500"
              >
                <span>{index === 0 ? "\u2709" : "in"}</span>
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <form className="flex flex-col gap-[10px]" onSubmit={handleSubmit} noValidate>
          <div className="grid grid-cols-1 gap-[10px] sm:grid-cols-2">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formValues.name}
                onChange={handleChange}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? "contact-name-error" : undefined}
                className="w-full rounded-[8px] border border-white/[0.07] bg-white/[0.03] px-[14px] py-[10px] text-[12px] text-slate-600 placeholder:text-slate-600"
              />
              {errors.name ? (
                <p id="contact-name-error" className="mt-1 text-[11px] text-red-400">
                  {errors.name}
                </p>
              ) : null}
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formValues.email}
                onChange={handleChange}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? "contact-email-error" : undefined}
                className="w-full rounded-[8px] border border-white/[0.07] bg-white/[0.03] px-[14px] py-[10px] text-[12px] text-slate-600 placeholder:text-slate-600"
              />
              {errors.email ? (
                <p id="contact-email-error" className="mt-1 text-[11px] text-red-400">
                  {errors.email}
                </p>
              ) : null}
            </div>
          </div>

          <div>
            <textarea
              name="message"
              placeholder="Message"
              value={formValues.message}
              onChange={handleChange}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? "contact-message-error" : undefined}
              className="h-[90px] w-full rounded-[8px] border border-white/[0.07] bg-white/[0.03] px-[14px] py-[10px] text-[12px] text-slate-600 placeholder:text-slate-600"
            />
            {errors.message ? (
              <p id="contact-message-error" className="mt-1 text-[11px] text-red-400">
                {errors.message}
              </p>
            ) : null}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="rounded-[8px] bg-blue-500 px-4 py-[11px] text-center text-[13px] font-medium text-white disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>

          {submitState.message ? (
            <p
              className={`text-[12px] ${
                submitState.type === "success" ? "text-emerald-400" : "text-red-400"
              }`}
              role="status"
              aria-live="polite"
            >
              {submitState.message}
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
}
