/**
 * Corporate Overview Page - KOLIVO™ Technologies Inc.
 * Design: Light Mode Institutional - Corporate Rich
 * Bilingual support (FR/EN)
 */

import { ArrowRight, ChevronRight, Building2, Users, Shield, Briefcase } from "lucide-react";
import { Link } from "wouter";
import { useLanguage } from "@/contexts/CorporateLanguageContext";
import { CDN } from "@/lib/cdn";

export default function Overview() {
  const { language } = useLanguage();

  const content = {
    en: {
      hero: {
        tagline: "KOLIVO™ TECHNOLOGIES INC.",
        title: "Building the infrastructure for collaborative living.",
        description: "We develop technology platforms that enable communities, organizations, and individuals to thrive together. Our ecosystem is designed for trust, governance, and long-term value creation."
      },
      founder: {
        tagline: "LEADERSHIP",
        title: "Founded with Purpose",
        name: "Lou Hébert",
        role: "Founder & Chief Executive Officer",
        bio: "Passionate about technological innovation and community living, Lou Hébert founded KOLIVO™ with the vision of transforming shared living into a harmonious and enriching experience. With extensive experience in digital product development and project management, he leads a team dedicated to creating solutions that simplify the daily lives of thousands of people.",
        location: "Montréal, Québec, Canada"
      },
      vision: {
        tagline: "OUR VISION",
        title: "Technology that serves human connection.",
        text: "We believe that the future of living and working is collaborative. Our platforms are built to foster trust, enable fair governance, and create lasting value for all stakeholders.",
        principles: [
          { title: "Trust by Design", desc: "Security and privacy are not features—they are foundations." },
          { title: "Governance First", desc: "Every decision is traceable, every process is transparent." },
          { title: "Long-term Value", desc: "We build for decades, not quarters." }
        ]
      },
      ecosystem: {
        tagline: "THE ECOSYSTEM",
        title: "Integrated Platforms",
        description: "Our ecosystem comprises specialized platforms, each designed to address specific needs while maintaining seamless interoperability.",
        platforms: [
          { name: "KOLIVO™ Hub", desc: "Shared living management" },
          { name: "Halo • ID", desc: "Secure identity" },
          { name: "KOLIVO™ Nest", desc: "Property management" },
          { name: "KOLIVO™ Seed", desc: "Community incubator" },
          { name: "KOLIVO™ Lens", desc: "Business optimization" }
        ]
      },
      nav: {
        governance: "Governance",
        governanceDesc: "Board structure, leadership, and corporate oversight.",
        compliance: "Compliance",
        complianceDesc: "Regulatory framework and policy adherence.",
        investors: "Investors",
        investorsDesc: "Financial information and stakeholder relations.",
        legal: "Legal",
        legalDesc: "Corporate structure and legal documentation."
      },
      cta: {
        title: "Interested in learning more?",
        button: "Contact Us"
      }
    },
    fr: {
      hero: {
        tagline: "KOLIVO™ TECHNOLOGIES INC.",
        title: "Construire l'infrastructure de la vie collaborative.",
        description: "Nous développons des plateformes technologiques qui permettent aux communautés, organisations et individus de prospérer ensemble. Notre écosystème est conçu pour la confiance, la gouvernance et la création de valeur à long terme."
      },
      founder: {
        tagline: "DIRECTION",
        title: "Fondé avec une vision",
        name: "Lou Hébert",
        role: "Fondateur et Chef de la direction",
        bio: "Passionné par l'innovation technologique et la vie en communauté, Lou Hébert a fondé KOLIVO™ avec la vision de transformer la vie partagée en une expérience harmonieuse et enrichissante. Fort d'une vaste expérience en développement de produits numériques et en gestion de projets, il dirige une équipe dédiée à créer des solutions qui simplifient le quotidien de milliers de personnes.",
        location: "Montréal, Québec, Canada"
      },
      vision: {
        tagline: "NOTRE VISION",
        title: "La technologie au service du lien humain.",
        text: "Nous croyons que l'avenir de la vie et du travail est collaboratif. Nos plateformes sont construites pour favoriser la confiance, permettre une gouvernance équitable et créer une valeur durable pour toutes les parties prenantes.",
        principles: [
          { title: "Confiance par conception", desc: "La sécurité et la confidentialité ne sont pas des fonctionnalités—ce sont des fondations." },
          { title: "Gouvernance d'abord", desc: "Chaque décision est traçable, chaque processus est transparent." },
          { title: "Valeur à long terme", desc: "Nous construisons pour des décennies, pas des trimestres." }
        ]
      },
      ecosystem: {
        tagline: "L'ÉCOSYSTÈME",
        title: "Plateformes intégrées",
        description: "Notre écosystème comprend des plateformes spécialisées, chacune conçue pour répondre à des besoins spécifiques tout en maintenant une interopérabilité transparente.",
        platforms: [
          { name: "KOLIVO™ Hub", desc: "Gestion de la vie partagée" },
          { name: "Halo • ID", desc: "Identité sécurisée" },
          { name: "KOLIVO™ Nest", desc: "Gestion immobilière" },
          { name: "KOLIVO™ Seed", desc: "Incubateur communautaire" },
          { name: "KOLIVO™ Lens", desc: "Optimisation des affaires" }
        ]
      },
      nav: {
        governance: "Gouvernance",
        governanceDesc: "Structure du conseil, direction et surveillance corporative.",
        compliance: "Conformité",
        complianceDesc: "Cadre réglementaire et respect des politiques.",
        investors: "Investisseurs",
        investorsDesc: "Informations financières et relations avec les parties prenantes.",
        legal: "Juridique",
        legalDesc: "Structure corporative et documentation juridique."
      },
      cta: {
        title: "Intéressé à en savoir plus?",
        button: "Nous contacter"
      }
    }
  };

  const t = content[language];

  const navIcons = [Building2, Shield, Briefcase, Users];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero - Light Mode Institutional */}
      <section className="hero hero-accent pt-24">
        <div className="container">
          <div className="max-w-3xl">
            <p className="section-label mb-4">
              {t.hero.tagline}
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight mb-6">
              {t.hero.title}
            </h1>
            <p className="text-xl text-foreground-muted leading-relaxed">
              {t.hero.description}
            </p>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="section">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Photo */}
            <div className="relative">
              <div className="relative aspect-[4/5] max-w-md mx-auto lg:mx-0">
                <img 
                  src="/images/lou-hebert.jpg" 
                  alt={t.founder.name}
                  className="w-full h-full object-cover rounded-xl shadow-lg"
                />
                <div className="absolute -bottom-4 -right-4 bg-slate-900 text-white px-5 py-3 rounded-lg shadow-lg">
                  <p className="font-medium text-sm">{t.founder.location}</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div>
              <p className="section-label mb-3">
                {t.founder.tagline}
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6">
                {t.founder.title}
              </h2>
              <div className="mb-6">
                <h3 className="text-2xl font-semibold text-foreground">
                  {t.founder.name}
                </h3>
                <p className="text-lg text-emerald-600 font-medium">
                  {t.founder.role}
                </p>
              </div>
              <p className="text-lg text-foreground-muted leading-relaxed">
                {t.founder.bio}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Principles */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <p className="section-label">
              {t.vision.tagline}
            </p>
            <h2 className="section-title">
              {t.vision.title}
            </h2>
            <p className="section-description">
              {t.vision.text}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {t.vision.principles.map((principle, index) => (
              <div
                key={index}
                className="text-center"
              >
                <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-slate-900 flex items-center justify-center">
                  <span className="text-xl font-bold text-white">{index + 1}</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {principle.title}
                </h3>
                <p className="text-foreground-muted text-sm">
                  {principle.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ecosystem Overview */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <p className="section-label">
              {t.ecosystem.tagline}
            </p>
            <h2 className="section-title">
              {t.ecosystem.title}
            </h2>
            <p className="section-description">
              {t.ecosystem.description}
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {t.ecosystem.platforms.map((platform, index) => (
              <div
                key={index}
                className="card px-5 py-4"
              >
                <p className="font-semibold text-foreground text-sm">{platform.name}</p>
                <p className="text-xs text-foreground-muted">{platform.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation Cards */}
      <section className="section section-alt">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { href: "/governance", title: t.nav.governance, desc: t.nav.governanceDesc },
              { href: "/compliance", title: t.nav.compliance, desc: t.nav.complianceDesc },
              { href: "/investors", title: t.nav.investors, desc: t.nav.investorsDesc },
              { href: "/legal", title: t.nav.legal, desc: t.nav.legalDesc }
            ].map((item, index) => {
              const Icon = navIcons[index];
              return (
                <Link key={item.href} href={item.href}>
                  <div className="card card-interactive h-full group cursor-pointer">
                    <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center mb-4 group-hover:bg-slate-200 transition-colors">
                      <Icon className="w-5 h-5 text-slate-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center justify-between">
                      {item.title}
                      <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-slate-600 group-hover:translate-x-1 transition-all" />
                    </h3>
                    <p className="text-sm text-foreground-muted">
                      {item.desc}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-background border-t border-border">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <h2 className="text-xl font-semibold text-foreground">
              {t.cta.title}
            </h2>
            <a href="mailto:contact@kolivo.ca" className="btn btn-primary btn-lg">
              {t.cta.button}
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
