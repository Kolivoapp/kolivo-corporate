/**
 * Investor Relations Page
 * Design: Light Mode Institutional - Corporate Rich
 * Bilingual support (FR/EN)
 */

import { Mail, Building2, TrendingUp, FileText, Users, Briefcase } from "lucide-react";
import { useLanguage } from "@/contexts/CorporateLanguageContext";

export default function Investors() {
  const { language } = useLanguage();

  const content = {
    en: {
      tagline: "INVESTOR RELATIONS",
      title: "Investment Information",
      description: "KOLIVO™ Technologies Inc. is a privately held Canadian corporation. We provide transparent communication with our stakeholders and potential investors.",
      status: {
        title: "Corporate Status",
        text: "KOLIVO™ Technologies Inc. is currently a private corporation. We are focused on building sustainable value through our integrated ecosystem of digital platforms. Information about future financing rounds or public offerings will be communicated through official channels."
      },
      highlights: {
        title: "Investment Highlights",
        items: [
          {
            icon: TrendingUp,
            title: "Growing Market",
            desc: "Positioned in the expanding market for enterprise digital ecosystem platforms."
          },
          {
            icon: Building2,
            title: "Strong Business Model",
            desc: "Recurring revenue model based on subscriptions with enterprise and institutional clients."
          },
          {
            icon: FileText,
            title: "Intellectual Property",
            desc: "Proprietary technology platform with registered trademark."
          },
          {
            icon: Users,
            title: "Experienced Team",
            desc: "Leadership team with deep experience in enterprise software."
          }
        ]
      },
      contact: {
        title: "Investor Inquiries",
        text: "For investment inquiries and investor relations, please contact us.",
        email: "investors@kolivo.ca"
      }
    },
    fr: {
      tagline: "RELATIONS INVESTISSEURS",
      title: "Informations sur l'investissement",
      description: "KOLIVO™ Technologies Inc. est une société canadienne privée. Nous assurons une communication transparente avec nos parties prenantes et investisseurs potentiels.",
      status: {
        title: "Statut corporatif",
        text: "KOLIVO™ Technologies Inc. est actuellement une société privée. Nous nous concentrons sur la création de valeur durable grâce à notre écosystème intégré de plateformes numériques. Les informations sur les futures rondes de financement ou offres publiques seront communiquées par les canaux officiels."
      },
      highlights: {
        title: "Points forts de l'investissement",
        items: [
          {
            icon: TrendingUp,
            title: "Marché en croissance",
            desc: "Positionnement dans le marché en expansion des plateformes d'écosystème numérique pour entreprises."
          },
          {
            icon: Building2,
            title: "Modèle d'affaires solide",
            desc: "Revenus récurrents basés sur des abonnements avec des clients entreprises et institutionnels."
          },
          {
            icon: FileText,
            title: "Propriété intellectuelle",
            desc: "Plateforme technologique propriétaire avec marque de commerce déposée."
          },
          {
            icon: Users,
            title: "Équipe expérimentée",
            desc: "Équipe de direction avec une expérience approfondie dans les logiciels d'entreprise."
          }
        ]
      },
      contact: {
        title: "Demandes d'investissement",
        text: "Pour les demandes d'investissement et les relations avec les investisseurs, veuillez nous contacter.",
        email: "investors@kolivo.ca"
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

      {/* Corporate Status */}
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-11 h-11 rounded-lg bg-slate-100 flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-slate-700" />
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                {c.status.title}
              </h2>
            </div>
            <div className="card p-8">
              <p className="text-lg text-foreground-muted leading-relaxed">
                {c.status.text}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Highlights */}
      <section className="section section-alt">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-8 text-center">
              {c.highlights.title}
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {c.highlights.items.map((item, index) => (
                <div key={index} className="card p-5 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-sm text-foreground-muted">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="section">
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
                className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-medium transition-colors"
              >
                <Mail className="w-4 h-4" />
                {c.contact.email}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
