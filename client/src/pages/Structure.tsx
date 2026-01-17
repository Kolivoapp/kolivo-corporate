/**
 * Corporate Structure Page
 * Design: Swiss Corporate Modernism - Institutional
 * Bilingual support (FR/EN)
 */

import { motion } from "framer-motion";
import { Building2, Globe, MapPin, FileText } from "lucide-react";
import { useLanguage } from "@/contexts/CorporateLanguageContext";

export default function Structure() {
  const { t, language } = useLanguage();

  const entityInfo = [
    {
      icon: FileText,
      label: language === "fr" ? "Dénomination sociale" : "Legal Name",
      value: "KOLIVO™ Technologies Inc.",
    },
    {
      icon: Globe,
      label: language === "fr" ? "Juridiction" : "Jurisdiction",
      value: t("structure.legal.jurisdiction"),
    },
    {
      icon: MapPin,
      label: language === "fr" ? "Siège social" : "Headquarters",
      value: t("structure.legal.headquarters"),
    },
    {
      icon: Building2,
      label: language === "fr" ? "Type d'entité" : "Entity Type",
      value: t("structure.legal.type"),
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-20 lg:py-32 bg-navy text-white">
        <div className="container">
          <div className="max-w-3xl">
            <p className="text-primary text-sm font-medium uppercase tracking-wider mb-4">
              {t("structure.tagline")}
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {t("structure.title")}
            </h1>
            <p className="text-xl text-white/70 leading-relaxed">
              {t("structure.description")}
            </p>
          </div>
        </div>
      </section>

      {/* Legal Entity */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl font-bold text-foreground mb-8">
              {t("structure.legal.title")}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {entityInfo.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-muted/30 rounded-lg p-6 flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {item.label}
                    </h3>
                    <p className="text-muted-foreground">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Organization Chart */}
      <section className="py-20 lg:py-32 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl font-bold text-foreground mb-8 text-center">
              {language === "fr" ? "Structure organisationnelle" : "Organizational Structure"}
            </h2>
            <div className="bg-card border border-border rounded-lg p-12 text-center">
              <div className="space-y-8">
                <div className="bg-navy text-white rounded-lg p-6 max-w-md mx-auto">
                  <h3 className="font-semibold">
                    {language === "fr" ? "Conseil d'administration" : "Board of Directors"}
                  </h3>
                </div>
                <div className="w-px h-8 bg-border mx-auto" />
                <div className="bg-primary/10 rounded-lg p-6 max-w-md mx-auto">
                  <h3 className="font-semibold text-foreground">
                    {language === "fr" ? "Président-directeur général" : "Chief Executive Officer"}
                  </h3>
                </div>
                <div className="w-px h-8 bg-border mx-auto" />
                <div className="grid md:grid-cols-3 gap-4 max-w-2xl mx-auto">
                  <div className="bg-muted/50 rounded-lg p-4">
                    <h4 className="font-medium text-sm text-foreground">
                      {language === "fr" ? "Opérations" : "Operations"}
                    </h4>
                  </div>
                  <div className="bg-muted/50 rounded-lg p-4">
                    <h4 className="font-medium text-sm text-foreground">
                      {language === "fr" ? "Technologie" : "Technology"}
                    </h4>
                  </div>
                  <div className="bg-muted/50 rounded-lg p-4">
                    <h4 className="font-medium text-sm text-foreground">
                      {language === "fr" ? "Finances" : "Finance"}
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ecosystem Platforms */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl font-bold text-foreground mb-4 text-center">
              {language === "fr" ? "Plateformes de l'écosystème" : "Ecosystem Platforms"}
            </h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              {language === "fr" 
                ? "KOLIVO™ Technologies Inc. développe et exploite un écosystème intégré de plateformes numériques."
                : "KOLIVO™ Technologies Inc. develops and operates an integrated ecosystem of digital platforms."
              }
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { name: "KOLIVO™ Hub", desc: language === "fr" ? "Gestion de la vie partagée" : "Shared living management" },
                { name: "Halo • ID", desc: language === "fr" ? "Identité sécurisée" : "Secure identity" },
                { name: "KOLIVO™ Nest", desc: language === "fr" ? "Gestion immobilière" : "Property management" },
                { name: "KOLIVO™ Seed", desc: language === "fr" ? "Incubateur communautaire" : "Community incubator" },
                { name: "KOLIVO™ Lens", desc: language === "fr" ? "Optimisation des affaires" : "Business optimization" },
                { name: "KOLIVO™ Forge", desc: language === "fr" ? "Plateforme de développement" : "Development platform" },
              ].map((platform) => (
                <div key={platform.name} className="bg-muted/30 rounded-lg p-6">
                  <h3 className="font-semibold text-foreground mb-2">{platform.name}</h3>
                  <p className="text-sm text-muted-foreground">{platform.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
