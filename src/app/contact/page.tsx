"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Send, Clock, CheckCircle2 } from "lucide-react";
import { company } from "@/lib/public-content";
import { createContactMailto, getContactMethod, mapContactRequest, submitContactRequest, validateContactInput, type ContactFormInput } from "@/lib/integrations/contact";

const serviceOptions = ["Web Development", "Mobile App Development", "Custom Software", "API & Payment", "Cloud Infrastructure"];
const initialForm: ContactFormInput = { name: "", email: "", phone: "", service: "Web Development", message: "", consent: false, website: "" };
const inputClass = "w-full rounded-xl border border-slate-200 bg-light px-4 py-3 text-sm font-medium text-dark focus:border-[#285749] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#285749]/20";
const labelClass = "mb-2 block text-xs font-bold uppercase tracking-wider text-slate-600";

export default function ContactPage() {
  const [form, setForm] = useState<ContactFormInput>(initialForm);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [generalError, setGeneralError] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const submittingRef = useRef(false);
  const method = getContactMethod();

  function updateField<K extends keyof ContactFormInput>(field: K, value: ContactFormInput[K]) {
    setForm((current) => ({ ...current, [field]: value }));
    setFieldErrors((current) => { const next = { ...current }; delete next[field]; return next; });
    setGeneralError("");
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submittingRef.current) return;
    setGeneralError("");
    setStatusMessage("");
    const errors = validateContactInput(form);
    setFieldErrors(errors);
    if (Object.keys(errors).length > 0) {
      setGeneralError("Please correct the highlighted fields.");
      document.getElementById(`contact-${Object.keys(errors)[0]}`)?.focus();
      return;
    }

    submittingRef.current = true;
    setSubmitting(true);
    const request = mapContactRequest(form);
    try {
      const result = await submitContactRequest(request);
      if (result.status === "unconfigured") {
        setStatusMessage("Your email application should open with a draft. Review and send it when ready; this website has not sent it.");
        window.location.href = createContactMailto(request, company.emailHref);
      } else if (result.status === "success") {
        setSuccessMessage(result.response.message);
      } else {
        setGeneralError(result.response.message);
        setFieldErrors(result.response.fieldErrors ?? {});
      }
    } finally {
      submittingRef.current = false;
      setSubmitting(false);
    }
  }

  return (
    <main id="main-content" className="min-h-screen pt-20">
      <Navbar />
      <section className="border-b border-gray-100 bg-[#f5f3ed] py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <Image src="/images/illustrations/automation-cloud.svg" alt="Illustration of connected cloud services and automation." width={180} height={135} loading="lazy" className="mx-auto mb-6 h-auto w-36" />
          <h1 className="mx-auto mb-6 max-w-4xl text-balance text-4xl font-extrabold tracking-tight text-dark md:text-5xl lg:text-6xl">Let&apos;s talk about your <span className="text-[#285749]">next digital idea</span></h1>
          <p className="mx-auto max-w-2xl text-lg font-medium text-grey">Have a complex technical challenge? Tell us about it and we can discuss practical software options.</p>
        </div>
      </section>

      <section className="bg-[#edf1eb] py-14 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-dark">Contact details</h2>
            <div className="space-y-4">
              <ContactDetail icon={<MapPin aria-hidden="true" className="h-6 w-6" />} title="Accra, Ghana">{company.address.join(", ")}</ContactDetail>
              <ContactDetail icon={<Mail aria-hidden="true" className="h-6 w-6" />} title="Electronic Mail"><a href={company.emailHref} className="break-all underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#285749]">{company.email}</a></ContactDetail>
              <ContactDetail icon={<Phone aria-hidden="true" className="h-6 w-6" />} title="Direct Line"><a href={company.phoneHref} className="underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#285749]">{company.phone}</a></ContactDetail>
            </div>
            <div className="relative overflow-hidden rounded-3xl bg-dark p-8 text-white"><div aria-hidden="true" className="absolute -right-12 -top-12 h-28 w-28 rounded-full bg-primary/20 blur-3xl" /><h3 className="relative mb-3 flex items-center gap-2 text-xl font-bold"><Clock aria-hidden="true" className="h-5 w-5 text-[#9bcfc1]" />Project enquiries</h3><p className="relative text-sm leading-relaxed text-slate-300">We review enquiries as capacity allows. Any next steps are discussed by email.</p></div>
          </div>

          <div className="self-start rounded-3xl border border-gray-100 bg-white p-6 shadow-xl shadow-slate-200/50 sm:p-8 lg:p-10">
            <h2 className="mb-3 text-2xl font-bold text-dark">Send a Technical Inquiry</h2>
            <p className="mb-7 text-sm leading-relaxed text-grey">{method === "api" ? "This form sends your enquiry to our contact service. We will confirm only after it accepts your request." : "This form opens your email application with a prefilled draft. Review and send it yourself; the website does not send it automatically."}</p>
            {successMessage ? <div role="status" aria-live="polite" className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 text-[#214b3d]"><CheckCircle2 aria-hidden="true" className="mb-3 h-7 w-7" /><h3 className="text-lg font-bold">Enquiry submitted</h3><p className="mt-2 text-sm leading-relaxed">{successMessage}</p></div> :
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <FormField id="contact-name" label="Full Name" error={fieldErrors.name}><input id="contact-name" type="text" autoComplete="name" required value={form.name} onChange={(event) => updateField("name", event.target.value)} aria-invalid={!!fieldErrors.name} aria-describedby={fieldErrors.name ? "contact-name-error" : undefined} className={inputClass} /></FormField>
                  <FormField id="contact-email" label="Email Address" error={fieldErrors.email}><input id="contact-email" type="email" autoComplete="email" required value={form.email} onChange={(event) => updateField("email", event.target.value)} aria-invalid={!!fieldErrors.email} aria-describedby={fieldErrors.email ? "contact-email-error" : undefined} className={inputClass} /></FormField>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <FormField id="contact-phone" label="Phone (optional)" error={fieldErrors.phone}><input id="contact-phone" type="tel" autoComplete="tel" value={form.phone} onChange={(event) => updateField("phone", event.target.value)} aria-invalid={!!fieldErrors.phone} aria-describedby={fieldErrors.phone ? "contact-phone-error" : undefined} className={inputClass} /></FormField>
                  <FormField id="contact-service" label="Subject / Service" error={fieldErrors.service}><select id="contact-service" required value={form.service} onChange={(event) => updateField("service", event.target.value)} aria-invalid={!!fieldErrors.service} aria-describedby={fieldErrors.service ? "contact-service-error" : undefined} className={inputClass}>{serviceOptions.map((option) => <option key={option} value={option}>{option}</option>)}</select></FormField>
                </div>
                <FormField id="contact-message" label="Message / Requirements" error={fieldErrors.message}><textarea id="contact-message" rows={5} required value={form.message} onChange={(event) => updateField("message", event.target.value)} aria-invalid={!!fieldErrors.message} aria-describedby={fieldErrors.message ? "contact-message-error" : undefined} placeholder="Describe your project goals and technical constraints..." className={`${inputClass} resize-y`} /></FormField>
                <div aria-hidden="true" className="absolute -left-[10000px] h-px w-px overflow-hidden"><label htmlFor="contact-website">Website</label><input id="contact-website" name="website" type="text" autoComplete="off" tabIndex={-1} value={form.website} onChange={(event) => updateField("website", event.target.value)} /></div>
                <div><div className="flex items-start gap-3"><input id="contact-consent" type="checkbox" required checked={form.consent} onChange={(event) => updateField("consent", event.target.checked)} aria-invalid={!!fieldErrors.consent} aria-describedby={fieldErrors.consent ? "contact-consent-error" : undefined} className="mt-1 h-4 w-4 accent-[#285749]" /><label htmlFor="contact-consent" className="text-sm leading-relaxed text-slate-700">I agree to the handling described in the <Link href="/privacy" className="font-semibold text-[#285749] underline underline-offset-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#285749]">Privacy Policy</Link>.</label></div>{fieldErrors.consent && <p id="contact-consent-error" className="mt-1 text-sm text-red-700">{fieldErrors.consent}</p>}</div>
                <div role="status" aria-live="polite" className="text-sm text-slate-600">{submitting ? "Sending your enquiry…" : statusMessage}</div>
                {generalError && <p role="alert" className="rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-800">{generalError}</p>}
                <button type="submit" disabled={submitting} className="flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#285749] px-5 py-3 font-bold text-white transition-colors hover:bg-[#1d4438] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#285749] disabled:cursor-wait disabled:opacity-60"><Send aria-hidden="true" className="h-4 w-4" />{submitting ? "Sending…" : method === "api" ? "Send Enquiry" : "Open Email Draft"}</button>
              </form>}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

function ContactDetail({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) {
  return <div className="flex gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:p-6"><div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#e7f0e8] text-[#285749]">{icon}</div><div><h3 className="mb-1 text-lg font-bold text-dark">{title}</h3><p className="text-sm font-medium leading-relaxed text-grey">{children}</p></div></div>;
}

function FormField({ id, label, error, children }: { id: string; label: string; error?: string; children: React.ReactNode }) {
  return <div><label htmlFor={id} className={labelClass}>{label}</label>{children}{error && <p id={`${id}-error`} className="mt-1 text-sm text-red-700">{error}</p>}</div>;
}
