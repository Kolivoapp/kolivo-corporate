/**
 * Investor Relations Page
 * Design: Swiss Corporate Modernism - Institutional
 * Bilingual support (FR/EN)
 */

import { Mail, Building2, TrendingUp, FileText } from "lucide-react";
import { useLanguage } from "@/contexts/CorporateLanguageContext";

export default function Investors() {
  const { t, language } = useLanguage();

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-20 lg:py-32 bg-navy text-white">
        <div className="container">
          <div className="max-w-3xl">
            <p className="text-primary text-sm font-medium uppercase tracking-wider mb-4">
              {t("investors.tagline")}
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {t("investors.title")}
            </h1>
            <p className="text-xl text-white/70 leading-relaxed">
              {t("investors.description")}
            </p>
          </div>
        </div>
      </section>

      {/* Corporate Status */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Building2 className="w-6 h-6 text-primary" />
              </div>
              <h2 className="font-display text-3xl font-bold text-foreground">
                {t("investors.status.title")}
              </h2>
            </div>
            <div className="bg-muted/30 rounded-lg p-8">
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t("investors.status.text")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Highlights */}
      <section className="py-20 lg:py-32 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl font-bold text-foreground mb-8 text-center">
              {language === "fr" ? "Points forts de l'investissement" : "Investment Highlights"}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: TrendingUp,
                  title: language === "fr" ? "Marché en croissance" : "Growing Market",
                  desc: language === "fr" 
                    ? "Positionnement dans le marché en expansion des plateformes d'écosystème numérique pour entreprises."
                    : "Positioned in the expanding market for enterprise digital ecosystem platforms.",
                },
                {
                  icon: Building2,
                  title: language === "fr" ? "Modèle d'affaires solide" : "Strong Business Model",
                  desc: language === "fr" 
                    ? "Revenus récurrents basés sur des abonnements avec des clients entreprises et institutionnels."
                    : "Recurring revenue model based on subscriptions with enterprise and institutional clients.",
                },
                {
                  icon: FileText,
                  title: language === "fr" ? "Propriété intellectuelle" : "Intellectual Property",
                  desc: language === "fr" 
                    ? "Plateforme technologique propriétaire avec marque de commerce déposée."
                    : "Proprietary technology platform with registered trademark.",
                },
                {
                  icon: Mail,
                  title: language === "fr" ? "Équipe expérimentée" : "Experienced Team",
                  desc: language === "fr" 
                    ? "Équipe de direction avec une expérience approfondie dans les logiciels d'entreprise."
                    : "Leadership team with deep experience in enterprise software.",
                },
              ].map((item) => (
                <div key={item.title} className="bg-card border border-border rounded-lg p-6 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 lg:py-32 bg-navy text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-8">
              <Mail className="w-8 h-8 text-primary" />
            </div>
            <h2 className="font-display text-3xl font-bold mb-6">
              {t("investors.contact.title")}
            </h2>
            <p className="text-lg text-white/70 mb-8">
              {language === "fr" 
                ? "Pour les demandes d'investissement et les relations avec les investisseurs, veuillez nous contacter."
                : "For investment inquiries and investor relations, please contact us."
              }
            </p>
            <a 
              href={`mailto:${t("investors.contact.email")}`}
              className="inline-flex items-center gap-2 text-primary hover:underline font-medium text-lg"
            >
              <Mail className="w-5 h-5" />
              {t("investors.contact.email")}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
