/**
 * Corporate Compliance Page
 * Design: Swiss Corporate Modernism - Institutional
 * Bilingual support (FR/EN)
 */

import { motion } from "framer-motion";
import { Shield, Lock, FileCheck } from "lucide-react";
import { useLanguage } from "@/contexts/CorporateLanguageContext";

export default function Compliance() {
  const { t, language } = useLanguage();

  const complianceAreas = [
    {
      icon: Lock,
      title: t("compliance.privacy.title"),
      description: t("compliance.privacy.desc"),
    },
    {
      icon: Shield,
      title: t("compliance.security.title"),
      description: t("compliance.security.desc"),
    },
    {
      icon: FileCheck,
      title: t("compliance.corporate.title"),
      description: t("compliance.corporate.desc"),
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-20 lg:py-32 bg-navy text-white">
        <div className="container">
          <div className="max-w-3xl">
            <p className="text-primary text-sm font-medium uppercase tracking-wider mb-4">
              {t("compliance.tagline")}
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {t("compliance.title")}
            </h1>
            <p className="text-xl text-white/70 leading-relaxed">
              {t("compliance.description")}
            </p>
          </div>
        </div>
      </section>

      {/* Compliance Framework */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl font-bold text-foreground mb-12 text-center">
              {t("compliance.framework.title")}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {complianceAreas.map((area, index) => (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-muted/30 rounded-lg p-8"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                    <area.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                    {area.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {area.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Regulatory Standards */}
      <section className="py-20 lg:py-32 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl font-bold text-foreground mb-8 text-center">
              {language === "fr" ? "Normes et certifications" : "Standards & Certifications"}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "PIPEDA",
                  desc: language === "fr" 
                    ? "Loi sur la protection des renseignements personnels et les documents électroniques"
                    : "Personal Information Protection and Electronic Documents Act",
                },
                {
                  title: "SOC 2 Type II",
                  desc: language === "fr" 
                    ? "Contrôles alignés pour la sécurité, la disponibilité et la confidentialité"
                    : "Aligned controls for security, availability, and confidentiality",
                },
                {
                  title: language === "fr" ? "Loi 25 (Québec)" : "Law 25 (Quebec)",
                  desc: language === "fr" 
                    ? "Conformité à la législation québécoise sur la protection des données"
                    : "Compliance with Quebec data protection legislation",
                },
                {
                  title: "GDPR",
                  desc: language === "fr" 
                    ? "Prêt pour la conformité au Règlement général sur la protection des données"
                    : "Ready for General Data Protection Regulation compliance",
                },
              ].map((standard) => (
                <div key={standard.title} className="bg-card border border-border rounded-lg p-6">
                  <h3 className="font-semibold text-foreground mb-2">{standard.title}</h3>
                  <p className="text-sm text-muted-foreground">{standard.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Commitment */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl font-bold text-foreground mb-6">
              {language === "fr" ? "Notre engagement" : "Our Commitment"}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {language === "fr" 
                ? "KOLIVO™ s'engage à maintenir les plus hauts standards de conformité réglementaire. Nous révisons et mettons à jour continuellement nos pratiques pour répondre aux exigences évolutives et aux meilleures pratiques de l'industrie."
                : "KOLIVO™ is committed to maintaining the highest standards of regulatory compliance. We continuously review and update our practices to meet evolving requirements and industry best practices."
              }
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 lg:py-32 bg-navy text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl font-bold mb-6">
              {language === "fr" ? "Questions de conformité" : "Compliance Inquiries"}
            </h2>
            <p className="text-lg text-white/70 mb-8">
              {language === "fr" 
                ? "Pour toute question relative à la conformité, veuillez contacter notre équipe."
                : "For compliance-related inquiries, please contact our team."
              }
            </p>
            <a 
              href="mailto:compliance@kolivo.ca" 
              className="text-primary hover:underline font-medium"
            >
              compliance@kolivo.ca
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
