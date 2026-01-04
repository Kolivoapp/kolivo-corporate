/**
 * Legal Information Page
 * Design: Swiss Corporate Modernism - Institutional
 * Bilingual support (FR/EN)
 */

import { FileText, Shield, Scale } from "lucide-react";
import { useLanguage } from "@/contexts/CorporateLanguageContext";

export default function Legal() {
  const { t, language } = useLanguage();

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-20 lg:py-32 bg-navy text-white">
        <div className="container">
          <div className="max-w-3xl">
            <p className="text-primary text-sm font-medium uppercase tracking-wider mb-4">
              {t("legal.tagline")}
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {t("legal.title")}
            </h1>
            <p className="text-xl text-white/70 leading-relaxed">
              {t("legal.description")}
            </p>
          </div>
        </div>
      </section>

      {/* Trademark Notice */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h2 className="font-display text-3xl font-bold text-foreground">
                {t("legal.trademark.title")}
              </h2>
            </div>
            <div className="bg-muted/30 rounded-lg p-8">
              <p className="text-muted-foreground leading-relaxed">
                {t("legal.trademark.text")}
              </p>
              <div className="mt-6 pt-6 border-t border-border">
                <h3 className="font-semibold text-foreground mb-4">
                  {language === "fr" ? "Marques de commerce" : "Trademarks"}
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li><strong>KOLIVO™</strong> — {language === "fr" ? "Marque de commerce de KOLIVO™ Technologies Inc." : "Trademark of KOLIVO™ Technologies Inc."}</li>
                </ul>
              </div>
              <div className="mt-6 pt-6 border-t border-border">
                <h3 className="font-semibold text-foreground mb-4">
                  {language === "fr" ? "Noms de produits" : "Product Names"}
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>HUB by KOLIVO™</li>
                  <li>Studio+ by KOLIVO™</li>
                  <li>GUARDO by KOLIVO™</li>
                  <li>PARTENARIO by KOLIVO™</li>
                  <li>CONNECTO by KOLIVO™</li>
                  <li>HALO by KOLIVO™</li>
                  <li>KOLIVAULT by KOLIVO™</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Copyright */}
      <section className="py-20 lg:py-32 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <FileText className="w-6 h-6 text-primary" />
              </div>
              <h2 className="font-display text-3xl font-bold text-foreground">
                {t("legal.copyright.title")}
              </h2>
            </div>
            <div className="bg-card border border-border rounded-lg p-8">
              <p className="text-muted-foreground leading-relaxed">
                {language === "fr" 
                  ? `© ${new Date().getFullYear()} KOLIVO™ Technologies Inc. Tous droits réservés. Le contenu de ce site web, y compris mais sans s'y limiter, le texte, les graphiques, les images, les logos et le code, est la propriété de KOLIVO™ Technologies Inc. et est protégé par les lois canadiennes et internationales sur le droit d'auteur.`
                  : `© ${new Date().getFullYear()} KOLIVO™ Technologies Inc. All rights reserved. The content of this website, including but not limited to text, graphics, images, logos, and code, is the property of KOLIVO™ Technologies Inc. and is protected by Canadian and international copyright laws.`
                }
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Documents */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Scale className="w-6 h-6 text-primary" />
              </div>
              <h2 className="font-display text-3xl font-bold text-foreground">
                {language === "fr" ? "Documents juridiques" : "Legal Documents"}
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <a href="https://kolivo.ca/legal/privacy" className="bg-muted/30 rounded-lg p-6 hover:bg-muted/50 transition-colors block">
                <h3 className="font-semibold text-foreground mb-2">{t("legal.privacy.title")}</h3>
                <p className="text-sm text-muted-foreground">
                  {language === "fr" 
                    ? "Comment nous collectons, utilisons et protégeons vos informations personnelles."
                    : "How we collect, use, and protect your personal information."
                  }
                </p>
              </a>
              <a href="https://kolivo.ca/legal/terms" className="bg-muted/30 rounded-lg p-6 hover:bg-muted/50 transition-colors block">
                <h3 className="font-semibold text-foreground mb-2">{t("legal.terms.title")}</h3>
                <p className="text-sm text-muted-foreground">
                  {language === "fr" 
                    ? "Les termes et conditions régissant l'utilisation de nos services."
                    : "The terms and conditions governing the use of our services."
                  }
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 lg:py-32 bg-navy text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl font-bold mb-6">
              {language === "fr" ? "Questions juridiques" : "Legal Inquiries"}
            </h2>
            <p className="text-lg text-white/70 mb-8">
              {language === "fr" 
                ? "Pour toute question juridique, veuillez contacter notre équipe."
                : "For legal inquiries, please contact our team."
              }
            </p>
            <a 
              href="mailto:legal@kolivo.ca" 
              className="text-primary hover:underline font-medium"
            >
              legal@kolivo.ca
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
