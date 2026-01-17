/**
 * Our Story Page - KOLIVO™ History
 * Design: Institutional, timeline-based
 * Bilingual support (FR/EN)
 */

import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/CorporateLanguageContext";

export default function Story() {
  const { language } = useLanguage();

  const content = {
    en: {
      hero: {
        tagline: "OUR STORY",
        title: "From idea to ecosystem",
        description: "The journey of building technology that serves people, not the other way around.",
      },
      origin: {
        tagline: "THE BEGINNING",
        title: "Born from experience",
        text: "KOLIVO™ was founded in Montreal, Quebec, by Lou Hébert—someone who understood the challenges of shared living firsthand. After years of navigating the complexities of roommate arrangements, expense splitting, and household coordination, it became clear that existing solutions fell short. What was needed wasn't another app, but a complete rethinking of how technology could support collaborative living.",
      },
      timeline: {
        tagline: "MILESTONES",
        title: "Our journey",
        events: [
          {
            year: "2023",
            title: "Foundation",
            description: "KOLIVO™ Technologies Inc. is incorporated in Quebec, Canada. Initial concept development begins with a focus on shared living management.",
          },
          {
            year: "2024",
            title: "Platform Development",
            description: "Development of KOLIVO™ Hub begins. Core architecture designed with privacy-first principles and Canadian data residency.",
          },
          {
            year: "2025",
            title: "Beta Launch",
            description: "KOLIVO™ Hub enters beta testing with early adopters across Quebec. Ecosystem expansion planning begins.",
          },
          {
            year: "Future",
            title: "Ecosystem Growth",
            description: "Continued development of complementary platforms including KOLIVO™ Nest, KOLIVO™ Seed, and identity management through Halo • ID.",
          },
        ],
      },
      values: {
        tagline: "WHAT DRIVES US",
        title: "Our founding principles",
        items: [
          {
            title: "Privacy as a Right",
            description: "We believe personal data belongs to individuals, not corporations. Every feature we build starts with this principle.",
          },
          {
            title: "Technology for People",
            description: "Our platforms exist to simplify lives, not to maximize engagement metrics or advertising revenue.",
          },
          {
            title: "Canadian Roots",
            description: "Built in Canada, for Canadians first. Our data stays in Canada, subject to Canadian privacy laws.",
          },
          {
            title: "Long-term Thinking",
            description: "We build for decades, not quarters. Sustainable growth over rapid scaling at any cost.",
          },
        ],
      },
      cta: {
        title: "Read the founder's perspective",
        button: "Founder's Message",
      }
    },
    fr: {
      hero: {
        tagline: "NOTRE HISTOIRE",
        title: "De l'idée à l'écosystème",
        description: "Le parcours de construction d'une technologie qui sert les gens, et non l'inverse.",
      },
      origin: {
        tagline: "LE DÉBUT",
        title: "Né de l'expérience",
        text: "KOLIVO™ a été fondé à Montréal, au Québec, par Lou Hébert—quelqu'un qui comprenait les défis de la vie partagée de première main. Après des années à naviguer les complexités des arrangements entre colocataires, du partage des dépenses et de la coordination du ménage, il est devenu clair que les solutions existantes étaient insuffisantes. Ce qu'il fallait n'était pas une autre application, mais une refonte complète de la façon dont la technologie pouvait soutenir la vie collaborative.",
      },
      timeline: {
        tagline: "JALONS",
        title: "Notre parcours",
        events: [
          {
            year: "2023",
            title: "Fondation",
            description: "KOLIVO™ Technologies Inc. est incorporée au Québec, Canada. Le développement du concept initial commence avec un focus sur la gestion de la vie partagée.",
          },
          {
            year: "2024",
            title: "Développement de la plateforme",
            description: "Le développement de KOLIVO™ Hub commence. L'architecture de base est conçue avec des principes de confidentialité d'abord et de résidence des données au Canada.",
          },
          {
            year: "2025",
            title: "Lancement bêta",
            description: "KOLIVO™ Hub entre en test bêta avec des adopteurs précoces à travers le Québec. La planification de l'expansion de l'écosystème commence.",
          },
          {
            year: "Futur",
            title: "Croissance de l'écosystème",
            description: "Développement continu des plateformes complémentaires incluant KOLIVO™ Nest, KOLIVO™ Seed, et la gestion d'identité via Halo • ID.",
          },
        ],
      },
      values: {
        tagline: "CE QUI NOUS MOTIVE",
        title: "Nos principes fondateurs",
        items: [
          {
            title: "La vie privée comme droit",
            description: "Nous croyons que les données personnelles appartiennent aux individus, pas aux entreprises. Chaque fonctionnalité que nous construisons commence par ce principe.",
          },
          {
            title: "La technologie pour les gens",
            description: "Nos plateformes existent pour simplifier les vies, pas pour maximiser les métriques d'engagement ou les revenus publicitaires.",
          },
          {
            title: "Racines canadiennes",
            description: "Construit au Canada, pour les Canadiens d'abord. Nos données restent au Canada, soumises aux lois canadiennes sur la vie privée.",
          },
          {
            title: "Vision à long terme",
            description: "Nous construisons pour des décennies, pas des trimestres. Croissance durable plutôt que mise à l'échelle rapide à tout prix.",
          },
        ],
      },
      cta: {
        title: "Lire la perspective du fondateur",
        button: "Mot du fondateur",
      }
    }
  };

  const t = content[language];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero */}
      <section className="pt-24 pb-16 bg-slate-900 text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-emerald-400 font-medium tracking-widest text-sm mb-4">
              {t.hero.tagline}
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
              {t.hero.title}
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              {t.hero.description}
            </p>
          </div>
        </div>
      </section>

      {/* Origin Section */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <p className="text-emerald-600 font-medium tracking-widest text-sm mb-4">
              {t.origin.tagline}
            </p>
            <h2 className="font-display text-3xl font-bold text-slate-900 mb-6">
              {t.origin.title}
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              {t.origin.text}
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-emerald-600 font-medium tracking-widest text-sm mb-4">
                {t.timeline.tagline}
              </p>
              <h2 className="font-display text-3xl font-bold text-slate-900">
                {t.timeline.title}
              </h2>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-slate-200 transform md:-translate-x-1/2" />

              {t.timeline.events.map((event, index) => (
                <div 
                  key={index}
                  className={`relative flex items-start gap-8 mb-12 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Year marker */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-emerald-500 rounded-full transform -translate-x-1/2 mt-1.5 ring-4 ring-white" />
                  
                  {/* Content */}
                  <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                    <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 text-sm font-semibold rounded-full mb-3">
                      {event.year}
                    </span>
                    <h3 className="font-display text-xl font-semibold text-slate-900 mb-2">
                      {event.title}
                    </h3>
                    <p className="text-slate-600">
                      {event.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-slate-100">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-emerald-600 font-medium tracking-widest text-sm mb-4">
                {t.values.tagline}
              </p>
              <h2 className="font-display text-3xl font-bold text-slate-900">
                {t.values.title}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {t.values.items.map((item, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-sm">
                  <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-emerald-600 font-bold">{index + 1}</span>
                  </div>
                  <h3 className="font-display text-lg font-semibold text-slate-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-slate-600">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-3xl font-bold mb-8">
              {t.cta.title}
            </h2>
            <Button asChild size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white">
              <Link href="/about/founder">
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
