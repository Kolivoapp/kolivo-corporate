/**
 * Corporate Governance Page
 * Design: Swiss Corporate Modernism - Institutional
 * Bilingual support (FR/EN)
 */

import { motion } from "framer-motion";
import { Users, Shield, Eye, Scale } from "lucide-react";
import { useLanguage } from "@/contexts/CorporateLanguageContext";

export default function Governance() {
  const { t, language } = useLanguage();

  const principles = [
    {
      icon: Shield,
      title: t("governance.principles.integrity"),
      description: t("governance.principles.integrity.desc"),
    },
    {
      icon: Scale,
      title: t("governance.principles.accountability"),
      description: t("governance.principles.accountability.desc"),
    },
    {
      icon: Eye,
      title: t("governance.principles.transparency"),
      description: t("governance.principles.transparency.desc"),
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-20 lg:py-32 bg-navy text-white">
        <div className="container">
          <div className="max-w-3xl">
            <p className="text-primary text-sm font-medium uppercase tracking-wider mb-4">
              {t("governance.tagline")}
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {t("governance.title")}
            </h1>
            <p className="text-xl text-white/70 leading-relaxed">
              {t("governance.description")}
            </p>
          </div>
        </div>
      </section>

      {/* Governance Principles */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl font-bold text-foreground mb-12 text-center">
              {t("governance.principles.title")}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {principles.map((principle, index) => (
                <motion.div
                  key={principle.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <principle.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                    {principle.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {principle.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Board of Directors */}
      <section className="py-20 lg:py-32 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h2 className="font-display text-3xl font-bold text-foreground">
                {t("governance.board.title")}
              </h2>
            </div>
            <p className="text-lg text-muted-foreground mb-8">
              {t("governance.board.desc")}
            </p>
            <div className="bg-card border border-border rounded-lg p-8">
              <p className="text-muted-foreground text-center">
                {language === "fr" 
                  ? "Les informations sur le conseil d'administration seront publiées prochainement."
                  : "Board of Directors information will be published soon."
                }
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">
              {t("governance.leadership.title")}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {t("governance.leadership.desc")}
            </p>
            <div className="bg-card border border-border rounded-lg p-8">
              <p className="text-muted-foreground text-center">
                {language === "fr" 
                  ? "Les informations sur l'équipe de direction seront publiées prochainement."
                  : "Leadership team information will be published soon."
                }
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Governance Documents */}
      <section className="py-20 lg:py-32 bg-navy text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl font-bold mb-8 text-center">
              {language === "fr" ? "Documents de gouvernance" : "Governance Documents"}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                language === "fr" ? "Charte du conseil d'administration" : "Board Charter",
                language === "fr" ? "Code d'éthique" : "Code of Ethics",
                language === "fr" ? "Politique de divulgation" : "Disclosure Policy",
                language === "fr" ? "Politique de gestion des risques" : "Risk Management Policy",
              ].map((doc) => (
                <div key={doc} className="bg-white/5 rounded-lg p-6 hover:bg-white/10 transition-colors">
                  <h3 className="font-semibold">{doc}</h3>
                  <p className="text-white/50 text-sm mt-2">
                    {language === "fr" ? "Disponible sur demande" : "Available upon request"}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
