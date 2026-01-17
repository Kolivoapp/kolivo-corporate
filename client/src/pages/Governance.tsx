/**
 * Corporate Governance Page
 * Design: Light Mode Institutional - Corporate Rich
 * Bilingual support (FR/EN)
 */

import { Users, Shield, Eye, Scale, FileText } from "lucide-react";
import { useLanguage } from "@/contexts/CorporateLanguageContext";

export default function Governance() {
  const { t, language } = useLanguage();

  const content = {
    en: {
      tagline: "CORPORATE GOVERNANCE",
      title: "Governance Framework",
      description: "Our governance structure ensures accountability, transparency, and ethical conduct across all operations. We maintain the highest standards of corporate governance to protect stakeholder interests.",
      principles: {
        title: "Governance Principles",
        items: [
          {
            icon: Shield,
            title: "Integrity",
            description: "We conduct all business with honesty and ethical behavior, maintaining the trust of our stakeholders."
          },
          {
            icon: Scale,
            title: "Accountability",
            description: "Clear lines of responsibility ensure that decisions are made with proper oversight and review."
          },
          {
            icon: Eye,
            title: "Transparency",
            description: "Open communication with stakeholders about our operations, performance, and governance practices."
          }
        ]
      },
      board: {
        title: "Board of Directors",
        description: "The Board of Directors provides strategic oversight and ensures that KOLIVO™ operates in the best interests of all stakeholders.",
        placeholder: "Board of Directors information will be published soon."
      },
      leadership: {
        title: "Leadership Team",
        description: "Our executive leadership team is responsible for the day-to-day management and strategic direction of the company.",
        placeholder: "Leadership team information will be published soon."
      },
      documents: {
        title: "Governance Documents",
        items: [
          { name: "Board Charter", status: "Available upon request" },
          { name: "Code of Ethics", status: "Available upon request" },
          { name: "Disclosure Policy", status: "Available upon request" },
          { name: "Risk Management Policy", status: "Available upon request" }
        ]
      }
    },
    fr: {
      tagline: "GOUVERNANCE D'ENTREPRISE",
      title: "Cadre de gouvernance",
      description: "Notre structure de gouvernance assure la responsabilité, la transparence et une conduite éthique dans toutes nos opérations. Nous maintenons les plus hauts standards de gouvernance d'entreprise pour protéger les intérêts des parties prenantes.",
      principles: {
        title: "Principes de gouvernance",
        items: [
          {
            icon: Shield,
            title: "Intégrité",
            description: "Nous menons toutes nos activités avec honnêteté et comportement éthique, maintenant la confiance de nos parties prenantes."
          },
          {
            icon: Scale,
            title: "Responsabilité",
            description: "Des lignes de responsabilité claires garantissent que les décisions sont prises avec une supervision et un examen appropriés."
          },
          {
            icon: Eye,
            title: "Transparence",
            description: "Communication ouverte avec les parties prenantes sur nos opérations, performances et pratiques de gouvernance."
          }
        ]
      },
      board: {
        title: "Conseil d'administration",
        description: "Le conseil d'administration assure la surveillance stratégique et veille à ce que KOLIVO™ opère dans le meilleur intérêt de toutes les parties prenantes.",
        placeholder: "Les informations sur le conseil d'administration seront publiées prochainement."
      },
      leadership: {
        title: "Équipe de direction",
        description: "Notre équipe de direction exécutive est responsable de la gestion quotidienne et de l'orientation stratégique de l'entreprise.",
        placeholder: "Les informations sur l'équipe de direction seront publiées prochainement."
      },
      documents: {
        title: "Documents de gouvernance",
        items: [
          { name: "Charte du conseil d'administration", status: "Disponible sur demande" },
          { name: "Code d'éthique", status: "Disponible sur demande" },
          { name: "Politique de divulgation", status: "Disponible sur demande" },
          { name: "Politique de gestion des risques", status: "Disponible sur demande" }
        ]
      }
    }
  };

  const c = content[language];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="hero hero-accent pt-24">
        <div className="container">
          <div className="max-w-3xl">
            <p className="section-label mb-4">
              {c.tagline}
            </p>
            <h1 className="text-4xl md:text-5xl font-semibold text-foreground leading-tight mb-6">
              {c.title}
            </h1>
            <p className="text-xl text-foreground-muted leading-relaxed">
              {c.description}
            </p>
          </div>
        </div>
      </section>

      {/* Governance Principles */}
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-10 text-center">
              {c.principles.title}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {c.principles.items.map((principle, index) => (
                <div
                  key={index}
                  className="text-center"
                >
                  <div className="w-14 h-14 rounded-full bg-slate-100 flex items-center justify-center mx-auto mb-5">
                    <principle.icon className="w-7 h-7 text-slate-700" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {principle.title}
                  </h3>
                  <p className="text-foreground-muted text-sm">
                    {principle.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Board of Directors */}
      <section className="section section-alt">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-11 h-11 rounded-lg bg-slate-200 flex items-center justify-center">
                <Users className="w-5 h-5 text-slate-700" />
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                {c.board.title}
              </h2>
            </div>
            <p className="text-lg text-foreground-muted mb-8">
              {c.board.description}
            </p>
            <div className="card p-8">
              <p className="text-foreground-muted text-center">
                {c.board.placeholder}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
              {c.leadership.title}
            </h2>
            <p className="text-lg text-foreground-muted mb-8">
              {c.leadership.description}
            </p>
            <div className="card p-8">
              <p className="text-foreground-muted text-center">
                {c.leadership.placeholder}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Governance Documents */}
      <section className="section section-alt">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-8 text-center">
              {c.documents.title}
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {c.documents.items.map((doc, index) => (
                <div key={index} className="card p-5 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center flex-shrink-0">
                    <FileText className="w-5 h-5 text-slate-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{doc.name}</h3>
                    <p className="text-foreground-muted text-sm mt-1">
                      {doc.status}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
