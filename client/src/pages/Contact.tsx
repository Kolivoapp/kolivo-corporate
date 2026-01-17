/**
 * Corporate Contact Page
 * Design: Institutional, professional
 * Bilingual support (FR/EN)
 */

import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/CorporateLanguageContext";

export default function Contact() {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const content = {
    en: {
      hero: {
        tagline: "CONTACT",
        title: "Get in touch",
        description: "For corporate inquiries, partnership opportunities, or investor relations.",
      },
      form: {
        title: "Send us a message",
        name: "Full Name",
        email: "Email Address",
        company: "Company / Organization",
        subject: "Subject",
        subjectOptions: [
          "General Inquiry",
          "Partnership Opportunity",
          "Investor Relations",
          "Media / Press",
          "Careers",
          "Other",
        ],
        message: "Message",
        submit: "Send Message",
        success: "Thank you for your message. We'll be in touch shortly.",
      },
      info: {
        title: "Corporate Information",
        company: "KOLIVO™ Technologies Inc.",
        address: [
          "800, rue du Square-Victoria",
          "Suite 2624",
          "Montréal, Québec H4Z 1E9",
          "Canada",
        ],
        phone: "1 (844) 565-4861",
        email: "corporate@kolivo.ca",
        hours: "Monday - Friday, 9:00 AM - 5:00 PM EST",
      },
      departments: {
        title: "Department Contacts",
        items: [
          { name: "General Inquiries", email: "info@kolivo.ca" },
          { name: "Investor Relations", email: "investors@kolivo.ca" },
          { name: "Media & Press", email: "press@kolivo.ca" },
          { name: "Partnerships", email: "partners@kolivo.ca" },
          { name: "Careers", email: "careers@kolivo.ca" },
        ],
      },
    },
    fr: {
      hero: {
        tagline: "CONTACT",
        title: "Nous joindre",
        description: "Pour les demandes corporatives, les opportunités de partenariat ou les relations avec les investisseurs.",
      },
      form: {
        title: "Envoyez-nous un message",
        name: "Nom complet",
        email: "Adresse courriel",
        company: "Entreprise / Organisation",
        subject: "Sujet",
        subjectOptions: [
          "Demande générale",
          "Opportunité de partenariat",
          "Relations investisseurs",
          "Médias / Presse",
          "Carrières",
          "Autre",
        ],
        message: "Message",
        submit: "Envoyer le message",
        success: "Merci pour votre message. Nous vous contacterons sous peu.",
      },
      info: {
        title: "Informations corporatives",
        company: "KOLIVO™ Technologies Inc.",
        address: [
          "800, rue du Square-Victoria",
          "Bureau 2624",
          "Montréal, Québec H4Z 1E9",
          "Canada",
        ],
        phone: "1 (844) 565-4861",
        email: "corporate@kolivo.ca",
        hours: "Lundi - Vendredi, 9h00 - 17h00 HNE",
      },
      departments: {
        title: "Contacts par département",
        items: [
          { name: "Demandes générales", email: "info@kolivo.ca" },
          { name: "Relations investisseurs", email: "investors@kolivo.ca" },
          { name: "Médias et presse", email: "press@kolivo.ca" },
          { name: "Partenariats", email: "partners@kolivo.ca" },
          { name: "Carrières", email: "careers@kolivo.ca" },
        ],
      },
    }
  };

  const t = content[language];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send to an API
    console.log("Form submitted:", formData);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="hero hero-accent pt-24">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <p className="section-label mb-4">
              {t.hero.tagline}
            </p>
            <h1 className="text-4xl md:text-5xl font-semibold text-foreground mb-6">
              {t.hero.title}
            </h1>
            <p className="text-xl text-foreground-muted max-w-2xl mx-auto">
              {t.hero.description}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <div>
                <h2 className="font-display text-2xl font-bold text-slate-900 mb-8">
                  {t.form.title}
                </h2>

                {submitted ? (
                  <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-8 text-center">
                    <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-emerald-800 font-medium">{t.form.success}</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        {t.form.name}
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        {t.form.email}
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        {t.form.company}
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        {t.form.subject}
                      </label>
                      <select
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-colors bg-white"
                      >
                        <option value="">--</option>
                        {t.form.subjectOptions.map((option) => (
                          <option key={option} value={option}>{option}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        {t.form.message}
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-colors resize-none"
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full bg-slate-900 hover:bg-slate-800 text-white">
                      {t.form.submit}
                    </Button>
                  </form>
                )}
              </div>

              {/* Contact Information */}
              <div>
                <h2 className="font-display text-2xl font-bold text-slate-900 mb-8">
                  {t.info.title}
                </h2>

                <div className="bg-white rounded-xl border border-slate-200 p-8 mb-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Building2 className="w-5 h-5 text-slate-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">{t.info.company}</h3>
                      {t.info.address.map((line, index) => (
                        <p key={index} className="text-slate-600 text-sm">{line}</p>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-slate-600" />
                    </div>
                    <div>
                      <a href={`tel:${t.info.phone.replace(/\D/g, '')}`} className="text-slate-900 hover:text-emerald-600 transition-colors">
                        {t.info.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-slate-600" />
                    </div>
                    <div>
                      <a href={`mailto:${t.info.email}`} className="text-slate-900 hover:text-emerald-600 transition-colors">
                        {t.info.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-slate-600" />
                    </div>
                    <div>
                      <p className="text-slate-600 text-sm">{t.info.hours}</p>
                    </div>
                  </div>
                </div>

                {/* Department Contacts */}
                <div className="bg-slate-100 rounded-xl p-8">
                  <h3 className="font-display text-lg font-semibold text-slate-900 mb-6">
                    {t.departments.title}
                  </h3>
                  <div className="space-y-4">
                    {t.departments.items.map((dept, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span className="text-slate-700">{dept.name}</span>
                        <a href={`mailto:${dept.email}`} className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
                          {dept.email}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
