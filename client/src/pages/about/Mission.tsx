/**
 * Mission & Values Page
 * Design: Institutional, value-focused
 * Bilingual support (FR/EN)
 */

import { ArrowRight, Shield, Users, Heart, Globe, Lock, Leaf } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/CorporateLanguageContext";

export default function Mission() {
  const { language } = useLanguage();

  const content = {
    en: {
      hero: {
        tagline: "MISSION & VALUES",
        title: "What we stand for",
        description: "Our mission guides every decision. Our values define how we work.",
      },
      mission: {
        tagline: "OUR MISSION",
        title: "Empowering collaborative living through technology",
        text: "KOLIVO™ exists to build the digital infrastructure that makes shared living simpler, fairer, and more harmonious. We create platforms that respect privacy, foster trust, and enable communities to thrive together.",
        pillars: [
          {
            title: "Simplify",
            description: "Remove friction from everyday shared living tasks",
          },
          {
            title: "Connect",
            description: "Build bridges between roommates, landlords, and communities",
          },
          {
            title: "Protect",
            description: "Safeguard personal data and financial information",
          },
        ],
      },
      vision: {
        tagline: "OUR VISION",
        title: "A world where living together is easier",
        text: "We envision a future where technology seamlessly supports collaborative living—where splitting expenses is effortless, communication is clear, and trust is the foundation of every shared space.",
      },
      values: {
        tagline: "OUR VALUES",
        title: "The principles that guide us",
        items: [
          {
            icon: Shield,
            title: "Privacy First",
            description: "Your data belongs to you. We collect only what's necessary and never sell personal information. Privacy isn't a feature—it's a fundamental right.",
          },
          {
            icon: Users,
            title: "User-Centric Design",
            description: "Every feature starts with a real problem faced by real people. We build for users, not for metrics or advertising revenue.",
          },
          {
            icon: Heart,
            title: "Kindness in Technology",
            description: "Technology should bring people together, not drive them apart. Our platforms are designed to foster understanding and reduce conflict.",
          },
          {
            icon: Globe,
            title: "Canadian Values",
            description: "Built in Canada, reflecting Canadian values of fairness, inclusivity, and respect for diversity. Our data stays in Canada.",
          },
          {
            icon: Lock,
            title: "Trust & Transparency",
            description: "We're honest about what we do and how we do it. No hidden terms, no surprise changes, no dark patterns.",
          },
          {
            icon: Leaf,
            title: "Sustainable Growth",
            description: "We prioritize long-term value over short-term gains. Building something that lasts means growing responsibly.",
          },
        ],
      },
      commitment: {
        tagline: "OUR COMMITMENT",
        title: "What you can expect from us",
        items: [
          "Transparent communication about product changes and company direction",
          "Responsive support from real people, not just automated systems",
          "Continuous improvement based on user feedback",
          "Fair pricing without hidden fees or surprise charges",
          "Respect for your time, attention, and personal boundaries",
        ],
      },
      cta: {
        title: "Learn about our governance",
        description: "See how we structure our organization to uphold these values.",
        button: "View Governance",
      }
    },
    fr: {
      hero: {
        tagline: "MISSION ET VALEURS",
        title: "Ce que nous défendons",
        description: "Notre mission guide chaque décision. Nos valeurs définissent comment nous travaillons.",
      },
      mission: {
        tagline: "NOTRE MISSION",
        title: "Permettre la vie collaborative grâce à la technologie",
        text: "KOLIVO™ existe pour construire l'infrastructure numérique qui rend la vie partagée plus simple, plus équitable et plus harmonieuse. Nous créons des plateformes qui respectent la vie privée, favorisent la confiance et permettent aux communautés de prospérer ensemble.",
        pillars: [
          {
            title: "Simplifier",
            description: "Éliminer les frictions des tâches quotidiennes de vie partagée",
          },
          {
            title: "Connecter",
            description: "Construire des ponts entre colocataires, propriétaires et communautés",
          },
          {
            title: "Protéger",
            description: "Sauvegarder les données personnelles et les informations financières",
          },
        ],
      },
      vision: {
        tagline: "NOTRE VISION",
        title: "Un monde où vivre ensemble est plus facile",
        text: "Nous envisageons un avenir où la technologie soutient de manière transparente la vie collaborative—où partager les dépenses est sans effort, la communication est claire, et la confiance est le fondement de chaque espace partagé.",
      },
      values: {
        tagline: "NOS VALEURS",
        title: "Les principes qui nous guident",
        items: [
          {
            icon: Shield,
            title: "Vie privée d'abord",
            description: "Vos données vous appartiennent. Nous ne collectons que le nécessaire et ne vendons jamais d'informations personnelles. La vie privée n'est pas une fonctionnalité—c'est un droit fondamental.",
          },
          {
            icon: Users,
            title: "Conception centrée utilisateur",
            description: "Chaque fonctionnalité commence par un vrai problème rencontré par de vraies personnes. Nous construisons pour les utilisateurs, pas pour les métriques ou les revenus publicitaires.",
          },
          {
            icon: Heart,
            title: "Bienveillance technologique",
            description: "La technologie devrait rapprocher les gens, pas les éloigner. Nos plateformes sont conçues pour favoriser la compréhension et réduire les conflits.",
          },
          {
            icon: Globe,
            title: "Valeurs canadiennes",
            description: "Construit au Canada, reflétant les valeurs canadiennes d'équité, d'inclusivité et de respect de la diversité. Nos données restent au Canada.",
          },
          {
            icon: Lock,
            title: "Confiance et transparence",
            description: "Nous sommes honnêtes sur ce que nous faisons et comment nous le faisons. Pas de termes cachés, pas de changements surprises, pas de dark patterns.",
          },
          {
            icon: Leaf,
            title: "Croissance durable",
            description: "Nous priorisons la valeur à long terme plutôt que les gains à court terme. Construire quelque chose qui dure signifie grandir de manière responsable.",
          },
        ],
      },
      commitment: {
        tagline: "NOTRE ENGAGEMENT",
        title: "Ce que vous pouvez attendre de nous",
        items: [
          "Communication transparente sur les changements de produits et la direction de l'entreprise",
          "Support réactif de vraies personnes, pas seulement de systèmes automatisés",
          "Amélioration continue basée sur les retours utilisateurs",
          "Tarification équitable sans frais cachés ni charges surprises",
          "Respect de votre temps, attention et limites personnelles",
        ],
      },
      cta: {
        title: "Découvrir notre gouvernance",
        description: "Voyez comment nous structurons notre organisation pour maintenir ces valeurs.",
        button: "Voir la gouvernance",
      }
    }
  };

  const t = content[language];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="hero hero-accent pt-24">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <p className="section-label mb-4">
              {t.hero.tagline}
            </p>
            <h1 className="text-4xl md:text-5xl font-semibold text-foreground mb-6">
              {t.hero.title}
            </h1>
            <p className="text-xl text-foreground-muted max-w-2xl mx-auto">
              {t.hero.description}
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <p className="section-label mb-4">
              {t.mission.tagline}
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6">
              {t.mission.title}
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-12">
              {t.mission.text}
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {t.mission.pillars.map((pillar, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-emerald-100 flex items-center justify-center">
                    <span className="text-2xl font-bold text-emerald-600">{index + 1}</span>
                  </div>
                  <h3 className="font-display text-xl font-semibold text-slate-900 mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-slate-600">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="section section-alt">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="section-label mb-4">
              {t.vision.tagline}
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6">
              {t.vision.title}
            </h2>
            <p className="text-xl text-foreground-muted leading-relaxed">
              {t.vision.text}
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <p className="section-label mb-4">
                {t.values.tagline}
              </p>
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                {t.values.title}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {t.values.items.map((item, index) => (
                <div key={index} className="p-6 rounded-xl border border-slate-200 hover:border-emerald-200 hover:shadow-lg transition-all">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-emerald-600" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-slate-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="section section-alt">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <p className="section-label mb-4">
              {t.commitment.tagline}
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-8">
              {t.commitment.title}
            </h2>
            <ul className="space-y-4">
              {t.commitment.items.map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section section-alt">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
              {t.cta.title}
            </h2>
            <p className="text-lg text-foreground-muted mb-8">
              {t.cta.description}
            </p>
            <Button asChild size="lg" className="btn btn-primary btn-lg">
              <Link href="/governance">
                {t.cta.button}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
