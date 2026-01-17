/**
 * Legal Information Page
 * Design: Light Mode Institutional - Corporate Rich
 * Bilingual support (FR/EN)
 */

import { FileText, Shield, Scale, Mail, ExternalLink } from "lucide-react";
import { useLanguage } from "@/contexts/CorporateLanguageContext";

export default function Legal() {
  const { language } = useLanguage();
  const currentYear = new Date().getFullYear();

  const content = {
    en: {
      tagline: "LEGAL INFORMATION",
      title: "Legal & Intellectual Property",
      description: "Important legal information regarding KOLIVO™ Technologies Inc., including trademark notices, copyright information, and legal documentation.",
      trademark: {
        title: "Trademark Notice",
        text: "KOLIVO™ is a trademark of KOLIVO™ Technologies Inc. with a registration application submitted. The trademark symbol (™) is used to indicate our claim to this mark pending official registration.",
        trademarksTitle: "Trademarks",
        trademarksList: "Trademark of KOLIVO™ Technologies Inc.",
        productsTitle: "Product Names",
        products: [
          "KOLIVO™ Hub",
          "Halo • ID",
          "KOLIVO™ Nest",
          "KOLIVO™ Seed",
          "KOLIVO™ Lens",
          "KOLIVO™ Forge",
          "KOLIVO™ Gate",
          "KOLIVO™ Link",
          "KOLIVO™ Atlas",
          "KOLIVO™ Vault",
          "KOLIVO™ Studio"
        ]
      },
      copyright: {
        title: "Copyright Notice",
        text: `© ${currentYear} KOLIVO™ Technologies Inc. All rights reserved. The content of this website, including but not limited to text, graphics, images, logos, and code, is the property of KOLIVO™ Technologies Inc. and is protected by Canadian and international copyright laws.`
      },
      documents: {
        title: "Legal Documents",
        items: [
          {
            title: "Privacy Policy",
            desc: "How we collect, use, and protect your personal information.",
            href: "https://kolivo.ca/legal/privacy"
          },
          {
            title: "Terms of Service",
            desc: "The terms and conditions governing the use of our services.",
            href: "https://kolivo.ca/legal/terms"
          }
        ]
      },
      contact: {
        title: "Legal Inquiries",
        text: "For legal inquiries, please contact our team.",
        email: "legal@kolivo.ca"
      }
    },
    fr: {
      tagline: "INFORMATIONS JURIDIQUES",
      title: "Juridique et propriété intellectuelle",
      description: "Informations juridiques importantes concernant KOLIVO™ Technologies Inc., y compris les avis de marques de commerce, les informations sur le droit d'auteur et la documentation juridique.",
      trademark: {
        title: "Avis de marque de commerce",
        text: "KOLIVO™ est une marque de commerce de KOLIVO™ Technologies Inc. avec une demande d'enregistrement soumise. Le symbole de marque de commerce (™) est utilisé pour indiquer notre revendication de cette marque en attendant l'enregistrement officiel.",
        trademarksTitle: "Marques de commerce",
        trademarksList: "Marque de commerce de KOLIVO™ Technologies Inc.",
        productsTitle: "Noms de produits",
        products: [
          "KOLIVO™ Hub",
          "Halo • ID",
          "KOLIVO™ Nest",
          "KOLIVO™ Seed",
          "KOLIVO™ Lens",
          "KOLIVO™ Forge",
          "KOLIVO™ Gate",
          "KOLIVO™ Link",
          "KOLIVO™ Atlas",
          "KOLIVO™ Vault",
          "KOLIVO™ Studio"
        ]
      },
      copyright: {
        title: "Avis de droit d'auteur",
        text: `© ${currentYear} KOLIVO™ Technologies Inc. Tous droits réservés. Le contenu de ce site web, y compris mais sans s'y limiter, le texte, les graphiques, les images, les logos et le code, est la propriété de KOLIVO™ Technologies Inc. et est protégé par les lois canadiennes et internationales sur le droit d'auteur.`
      },
      documents: {
        title: "Documents juridiques",
        items: [
          {
            title: "Politique de confidentialité",
            desc: "Comment nous collectons, utilisons et protégeons vos informations personnelles.",
            href: "https://kolivo.ca/legal/privacy"
          },
          {
            title: "Conditions d'utilisation",
            desc: "Les termes et conditions régissant l'utilisation de nos services.",
            href: "https://kolivo.ca/legal/terms"
          }
        ]
      },
      contact: {
        title: "Questions juridiques",
        text: "Pour toute question juridique, veuillez contacter notre équipe.",
        email: "legal@kolivo.ca"
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

      {/* Trademark Notice */}
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-11 h-11 rounded-lg bg-slate-100 flex items-center justify-center">
                <Shield className="w-5 h-5 text-slate-700" />
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                {c.trademark.title}
              </h2>
            </div>
            <div className="card p-8">
              <p className="text-foreground-muted leading-relaxed">
                {c.trademark.text}
              </p>
              <div className="mt-6 pt-6 border-t border-border">
                <h3 className="font-semibold text-foreground mb-3">
                  {c.trademark.trademarksTitle}
                </h3>
                <p className="text-foreground-muted">
                  <strong className="text-foreground">KOLIVO™</strong> — {c.trademark.trademarksList}
                </p>
              </div>
              <div className="mt-6 pt-6 border-t border-border">
                <h3 className="font-semibold text-foreground mb-3">
                  {c.trademark.productsTitle}
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {c.trademark.products.map((product, index) => (
                    <span key={index} className="text-sm text-foreground-muted">
                      {product}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Copyright */}
      <section className="section section-alt">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-11 h-11 rounded-lg bg-slate-200 flex items-center justify-center">
                <FileText className="w-5 h-5 text-slate-700" />
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                {c.copyright.title}
              </h2>
            </div>
            <div className="card p-8">
              <p className="text-foreground-muted leading-relaxed">
                {c.copyright.text}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Documents */}
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-11 h-11 rounded-lg bg-slate-100 flex items-center justify-center">
                <Scale className="w-5 h-5 text-slate-700" />
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                {c.documents.title}
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {c.documents.items.map((doc, index) => (
                <a 
                  key={index}
                  href={doc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card p-5 hover:border-slate-300 transition-colors group"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-semibold text-foreground mb-1 group-hover:text-emerald-600 transition-colors">
                        {doc.title}
                      </h3>
                      <p className="text-sm text-foreground-muted">
                        {doc.desc}
                      </p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-slate-400 flex-shrink-0 mt-1" />
                  </div>
                </a>
              ))}
            </div>
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
