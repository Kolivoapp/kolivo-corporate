/**
 * Corporate Overview Page
 * Design: Swiss Corporate Modernism - Institutional
 * Bilingual support (FR/EN)
 */

import { motion } from "framer-motion";
import { Building2, Target, Shield, Users } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/CorporateLanguageContext";

export default function Overview() {
  const { t, language } = useLanguage();

  const highlights = [
    {
      icon: Building2,
      title: language === "fr" ? "Société canadienne" : "Canadian Corporation",
      description: language === "fr" 
        ? "Société fédérale canadienne basée à Montréal, Québec"
        : "Federal Canadian corporation based in Montréal, Quebec",
    },
    {
      icon: Target,
      title: language === "fr" ? "Écosystème numérique" : "Digital Ecosystem",
      description: language === "fr" 
        ? "Plateforme intégrée pour entreprises et institutions"
        : "Integrated platform for enterprises and institutions",
    },
    {
      icon: Shield,
      title: language === "fr" ? "Gouvernance rigoureuse" : "Rigorous Governance",
      description: language === "fr" 
        ? "Engagement envers la transparence et la responsabilité"
        : "Commitment to transparency and accountability",
    },
    {
      icon: Users,
      title: language === "fr" ? "Parties prenantes" : "Stakeholders",
      description: language === "fr" 
        ? "Entreprises, institutions et secteur public"
        : "Enterprises, institutions, and public sector",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-20 lg:py-32 bg-navy text-white">
        <div className="container">
          <div className="max-w-3xl">
            <p className="text-primary text-sm font-medium uppercase tracking-wider mb-4">
              {t("overview.tagline")}
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {t("overview.title")}
            </h1>
            <p className="text-xl text-white/70 leading-relaxed">
              {t("overview.description")}
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                {t("overview.about.title")}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {t("overview.about.text")}
              </p>
              <div className="flex gap-4">
                <Link href="/structure">
                  <Button variant="outline">
                    {t("nav.structure")}
                  </Button>
                </Link>
                <Link href="/governance">
                  <Button variant="outline">
                    {t("nav.governance")}
                  </Button>
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-muted/30 rounded-lg p-6"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 lg:py-32 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              {t("overview.mission.title")}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t("overview.mission.text")}
            </p>
          </div>
        </div>
      </section>

      {/* Corporate Information */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl font-bold text-foreground mb-8 text-center">
              {language === "fr" ? "Informations corporatives" : "Corporate Information"}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-muted/30 rounded-lg p-6">
                <h3 className="font-semibold text-foreground mb-2">
                  {language === "fr" ? "Dénomination sociale" : "Legal Name"}
                </h3>
                <p className="text-muted-foreground">KOLIVO™ Technologies Inc.</p>
              </div>
              <div className="bg-muted/30 rounded-lg p-6">
                <h3 className="font-semibold text-foreground mb-2">
                  {language === "fr" ? "Juridiction" : "Jurisdiction"}
                </h3>
                <p className="text-muted-foreground">{t("structure.legal.jurisdiction")}</p>
              </div>
              <div className="bg-muted/30 rounded-lg p-6">
                <h3 className="font-semibold text-foreground mb-2">
                  {language === "fr" ? "Siège social" : "Headquarters"}
                </h3>
                <p className="text-muted-foreground">{t("structure.legal.headquarters")}</p>
              </div>
              <div className="bg-muted/30 rounded-lg p-6">
                <h3 className="font-semibold text-foreground mb-2">
                  {language === "fr" ? "Type d'entité" : "Entity Type"}
                </h3>
                <p className="text-muted-foreground">{t("structure.legal.type")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Links Section */}
      <section className="py-20 lg:py-32 bg-navy text-white">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/governance" className="group">
              <div className="bg-white/5 rounded-lg p-8 hover:bg-white/10 transition-colors">
                <h3 className="font-display text-xl font-semibold mb-3">
                  {t("nav.governance")}
                </h3>
                <p className="text-white/60 text-sm">
                  {t("governance.description")}
                </p>
              </div>
            </Link>
            <Link href="/compliance" className="group">
              <div className="bg-white/5 rounded-lg p-8 hover:bg-white/10 transition-colors">
                <h3 className="font-display text-xl font-semibold mb-3">
                  {t("nav.compliance")}
                </h3>
                <p className="text-white/60 text-sm">
                  {t("compliance.description")}
                </p>
              </div>
            </Link>
            <Link href="/investors" className="group">
              <div className="bg-white/5 rounded-lg p-8 hover:bg-white/10 transition-colors">
                <h3 className="font-display text-xl font-semibold mb-3">
                  {t("nav.investors")}
                </h3>
                <p className="text-white/60 text-sm">
                  {t("investors.description")}
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
