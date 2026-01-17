/**
 * Corporate Compliance Page
 * Design: Light Mode Institutional - Corporate Rich
 * Bilingual support (FR/EN)
 */

import { Shield, Lock, FileCheck, CheckCircle2, Mail } from "lucide-react";
import { useLanguage } from "@/contexts/CorporateLanguageContext";

export default function Compliance() {
  const { language } = useLanguage();

  const content = {
    en: {
      tagline: "REGULATORY COMPLIANCE",
      title: "Compliance Framework",
      description: "KOLIVO™ maintains rigorous compliance with applicable laws, regulations, and industry standards. Our commitment to compliance is fundamental to building and maintaining trust with our stakeholders.",
      framework: {
        title: "Compliance Areas",
        items: [
          {
            icon: Lock,
            title: "Data Privacy",
            description: "Comprehensive data protection practices aligned with PIPEDA, Law 25, and GDPR requirements."
          },
          {
            icon: Shield,
            title: "Information Security",
            description: "Enterprise-grade security controls protecting data integrity, confidentiality, and availability."
          },
          {
            icon: FileCheck,
            title: "Corporate Compliance",
            description: "Adherence to corporate governance standards and regulatory requirements across all operations."
          }
        ]
      },
      standards: {
        title: "Standards & Certifications",
        items: [
          {
            title: "PIPEDA",
            desc: "Personal Information Protection and Electronic Documents Act"
          },
          {
            title: "SOC 2 Type II",
            desc: "Aligned controls for security, availability, and confidentiality"
          },
          {
            title: "Law 25 (Quebec)",
            desc: "Compliance with Quebec data protection legislation"
          },
          {
            title: "GDPR",
            desc: "Ready for General Data Protection Regulation compliance"
          }
        ]
      },
      commitment: {
        title: "Our Commitment",
        text: "KOLIVO™ is committed to maintaining the highest standards of regulatory compliance. We continuously review and update our practices to meet evolving requirements and industry best practices."
      },
      contact: {
        title: "Compliance Inquiries",
        text: "For compliance-related inquiries, please contact our team.",
        email: "compliance@kolivo.ca"
      }
    },
    fr: {
      tagline: "CONFORMITÉ RÉGLEMENTAIRE",
      title: "Cadre de conformité",
      description: "KOLIVO™ maintient une conformité rigoureuse aux lois, règlements et normes de l'industrie applicables. Notre engagement envers la conformité est fondamental pour établir et maintenir la confiance avec nos parties prenantes.",
      framework: {
        title: "Domaines de conformité",
        items: [
          {
            icon: Lock,
            title: "Protection des données",
            description: "Pratiques complètes de protection des données alignées sur les exigences de PIPEDA, la Loi 25 et le RGPD."
          },
          {
            icon: Shield,
            title: "Sécurité de l'information",
            description: "Contrôles de sécurité de niveau entreprise protégeant l'intégrité, la confidentialité et la disponibilité des données."
          },
          {
            icon: FileCheck,
            title: "Conformité corporative",
            description: "Respect des normes de gouvernance d'entreprise et des exigences réglementaires dans toutes les opérations."
          }
        ]
      },
      standards: {
        title: "Normes et certifications",
        items: [
          {
            title: "PIPEDA",
            desc: "Loi sur la protection des renseignements personnels et les documents électroniques"
          },
          {
            title: "SOC 2 Type II",
            desc: "Contrôles alignés pour la sécurité, la disponibilité et la confidentialité"
          },
          {
            title: "Loi 25 (Québec)",
            desc: "Conformité à la législation québécoise sur la protection des données"
          },
          {
            title: "RGPD",
            desc: "Prêt pour la conformité au Règlement général sur la protection des données"
          }
        ]
      },
      commitment: {
        title: "Notre engagement",
        text: "KOLIVO™ s'engage à maintenir les plus hauts standards de conformité réglementaire. Nous révisons et mettons à jour continuellement nos pratiques pour répondre aux exigences évolutives et aux meilleures pratiques de l'industrie."
      },
      contact: {
        title: "Questions de conformité",
        text: "Pour toute question relative à la conformité, veuillez contacter notre équipe.",
        email: "compliance@kolivo.ca"
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

      {/* Compliance Framework */}
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-10 text-center">
              {c.framework.title}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {c.framework.items.map((area, index) => (
                <div
                  key={index}
                  className="card p-6"
                >
                  <div className="w-11 h-11 rounded-lg bg-slate-100 flex items-center justify-center mb-5">
                    <area.icon className="w-5 h-5 text-slate-700" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {area.title}
                  </h3>
                  <p className="text-foreground-muted text-sm">
                    {area.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Regulatory Standards */}
      <section className="section section-alt">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-8 text-center">
              {c.standards.title}
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {c.standards.items.map((standard, index) => (
                <div key={index} className="card p-5 flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{standard.title}</h3>
                    <p className="text-sm text-foreground-muted">{standard.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Commitment */}
      <section className="section">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6">
              {c.commitment.title}
            </h2>
            <p className="text-lg text-foreground-muted leading-relaxed">
              {c.commitment.text}
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="section section-alt">
        <div className="container">
          <div className="max-w-xl mx-auto">
            <div className="card p-8 text-center">
              <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mx-auto mb-5">
                <Mail className="w-6 h-6 text-slate-600" />
              </div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                {c.contact.title}
              </h2>
              <p className="text-foreground-muted mb-4">
                {c.contact.text}
              </p>
              <a 
                href={`mailto:${c.contact.email}`}
                className="text-emerald-600 hover:text-emerald-700 font-medium transition-colors"
              >
                {c.contact.email}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
