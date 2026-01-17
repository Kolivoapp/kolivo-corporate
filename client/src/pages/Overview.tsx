/**
 * Corporate Overview Page - KOLIVO™ Technologies Inc.
 * Design: Premium Institutional - Executive-level presentation
 * Bilingual support (FR/EN)
 */

import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/CorporateLanguageContext";

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

  return (
    <div className="min-h-screen">
      {/* Hero - Clean, Authoritative */}
      <section className="min-h-[70vh] flex items-center bg-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
        </div>
        <div className="container relative z-10 py-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <p className="text-primary font-medium tracking-widest text-sm mb-6">
              {t.hero.tagline}
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
              {t.hero.title}
            </h1>
            <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-3xl">
              {t.hero.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative aspect-[4/5] max-w-md mx-auto lg:mx-0">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-[#22d3ee]/20 rounded-2xl transform rotate-3" />
                <img 
                  src="/images/lou-hebert.jpg" 
                  alt={t.founder.name}
                  className="relative w-full h-full object-cover rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-500"
                  style={{ filter: 'grayscale(100%) sepia(20%) hue-rotate(150deg) saturate(80%)' }}
                />
                <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-6 py-3 rounded-lg shadow-lg">
                  <p className="font-medium text-sm">{t.founder.location}</p>
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-primary font-medium tracking-widest text-sm mb-4">
                {t.founder.tagline}
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                {t.founder.title}
              </h2>
              <div className="mb-6">
                <h3 className="font-display text-2xl font-semibold text-foreground">
                  {t.founder.name}
                </h3>
                <p className="text-primary font-medium">
                  {t.founder.role}
                </p>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t.founder.bio}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Principles */}
      <section className="py-24 lg:py-32 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-primary font-medium tracking-widest text-sm mb-4">
              {t.vision.tagline}
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              {t.vision.title}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t.vision.text}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {t.vision.principles.map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-navy flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">{index + 1}</span>
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {principle.title}
                </h3>
                <p className="text-muted-foreground">
                  {principle.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ecosystem Overview */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-primary font-medium tracking-widest text-sm mb-4">
              {t.ecosystem.tagline}
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              {t.ecosystem.title}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t.ecosystem.description}
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {t.ecosystem.platforms.map((platform, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-muted/50 border border-border/50 rounded-lg px-6 py-4 hover:border-primary/30 transition-colors"
              >
                <p className="font-semibold text-foreground text-sm">{platform.name}</p>
                <p className="text-xs text-muted-foreground">{platform.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation Cards */}
      <section className="py-24 lg:py-32 bg-navy text-white">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/governance">
              <motion.div 
                whileHover={{ y: -4 }}
                className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all cursor-pointer group h-full"
              >
                <h3 className="font-display text-lg font-semibold mb-2 flex items-center justify-between">
                  {t.nav.governance}
                  <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-white/60 text-sm">
                  {t.nav.governanceDesc}
                </p>
              </motion.div>
            </Link>
            <Link href="/compliance">
              <motion.div 
                whileHover={{ y: -4 }}
                className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all cursor-pointer group h-full"
              >
                <h3 className="font-display text-lg font-semibold mb-2 flex items-center justify-between">
                  {t.nav.compliance}
                  <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-white/60 text-sm">
                  {t.nav.complianceDesc}
                </p>
              </motion.div>
            </Link>
            <Link href="/investors">
              <motion.div 
                whileHover={{ y: -4 }}
                className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all cursor-pointer group h-full"
              >
                <h3 className="font-display text-lg font-semibold mb-2 flex items-center justify-between">
                  {t.nav.investors}
                  <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-white/60 text-sm">
                  {t.nav.investorsDesc}
                </p>
              </motion.div>
            </Link>
            <Link href="/legal">
              <motion.div 
                whileHover={{ y: -4 }}
                className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all cursor-pointer group h-full"
              >
                <h3 className="font-display text-lg font-semibold mb-2 flex items-center justify-between">
                  {t.nav.legal}
                  <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-white/60 text-sm">
                  {t.nav.legalDesc}
                </p>
              </motion.div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-background border-t border-border/50">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <h2 className="font-display text-2xl font-semibold text-foreground">
              {t.cta.title}
            </h2>
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <a href="mailto:contact@kolivo.ca">
                {t.cta.button}
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
