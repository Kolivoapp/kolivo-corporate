/**
 * Founder's Message Page - Lou Hébert
 * Design: Institutional, personal yet professional
 * Bilingual support (FR/EN)
 */

import { ArrowRight, Linkedin, Mail } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/CorporateLanguageContext";

export default function Founder() {
  const { language } = useLanguage();

  const content = {
    en: {
      hero: {
        tagline: "FOUNDER'S MESSAGE",
        title: "A word from Lou Hébert",
        role: "Founder & Chief Executive Officer",
      },
      letter: {
        greeting: "Dear friends, partners, and future collaborators,",
        paragraphs: [
          "When I founded KOLIVO™, I wasn't just starting a company—I was pursuing a vision that had been forming for years. A vision of technology that truly serves people, that simplifies the complexities of shared living, and that builds trust rather than eroding it.",
          "I've lived in shared housing. I've experienced firsthand the challenges of splitting expenses fairly, coordinating schedules, and maintaining harmony among roommates. These experiences taught me that the problem wasn't people—it was the lack of proper tools to help them collaborate effectively.",
          "KOLIVO™ was born from this realization. We're not building another app; we're building infrastructure for a new way of living together. Our platforms are designed with one principle above all: respect for the people who use them.",
          "We believe that privacy is a right, not a feature. We believe that technology should empower, not exploit. And we believe that the future of housing—whether for students, young professionals, or communities—is collaborative.",
          "As we grow, these principles remain our compass. Every decision we make, every feature we build, every partnership we form is guided by our commitment to creating genuine value for our users.",
          "Thank you for being part of this journey. Whether you're a user, a partner, an investor, or simply curious about what we're building—welcome to KOLIVO™.",
        ],
        signature: "With gratitude,",
        name: "Lou Hébert",
        title: "Founder & CEO, KOLIVO™ Technologies Inc.",
      },
      bio: {
        tagline: "ABOUT LOU",
        title: "Background",
        text: "Lou Hébert is a Montreal-based entrepreneur with a background in digital product development and project management. Before founding KOLIVO™, he worked across various industries, gaining experience in building scalable solutions that prioritize user experience. His passion for community living and technology convergence led him to create KOLIVO™, where he leads a team dedicated to transforming shared living experiences across Canada.",
        location: "Montréal, Québec, Canada",
      },
      cta: {
        title: "Let's connect",
        description: "I'm always open to conversations about collaboration, partnership opportunities, or simply exchanging ideas about the future of shared living.",
        button: "Get in Touch",
      }
    },
    fr: {
      hero: {
        tagline: "MOT DU FONDATEUR",
        title: "Un mot de Lou Hébert",
        role: "Fondateur et Chef de la direction",
      },
      letter: {
        greeting: "Chers amis, partenaires et futurs collaborateurs,",
        paragraphs: [
          "Quand j'ai fondé KOLIVO™, je ne lançais pas simplement une entreprise—je poursuivais une vision qui se formait depuis des années. Une vision de la technologie qui sert véritablement les gens, qui simplifie les complexités de la vie partagée, et qui construit la confiance plutôt que de l'éroder.",
          "J'ai vécu en colocation. J'ai expérimenté de première main les défis de partager les dépenses équitablement, de coordonner les horaires, et de maintenir l'harmonie entre colocataires. Ces expériences m'ont appris que le problème n'était pas les gens—c'était le manque d'outils appropriés pour les aider à collaborer efficacement.",
          "KOLIVO™ est né de cette réalisation. Nous ne construisons pas une autre application; nous construisons l'infrastructure d'une nouvelle façon de vivre ensemble. Nos plateformes sont conçues avec un principe au-dessus de tout: le respect des personnes qui les utilisent.",
          "Nous croyons que la vie privée est un droit, pas une fonctionnalité. Nous croyons que la technologie devrait autonomiser, pas exploiter. Et nous croyons que l'avenir du logement—que ce soit pour les étudiants, les jeunes professionnels, ou les communautés—est collaboratif.",
          "À mesure que nous grandissons, ces principes restent notre boussole. Chaque décision que nous prenons, chaque fonctionnalité que nous construisons, chaque partenariat que nous formons est guidé par notre engagement à créer une valeur réelle pour nos utilisateurs.",
          "Merci de faire partie de ce voyage. Que vous soyez utilisateur, partenaire, investisseur, ou simplement curieux de ce que nous construisons—bienvenue chez KOLIVO™.",
        ],
        signature: "Avec gratitude,",
        name: "Lou Hébert",
        title: "Fondateur et PDG, KOLIVO™ Technologies Inc.",
      },
      bio: {
        tagline: "À PROPOS DE LOU",
        title: "Parcours",
        text: "Lou Hébert est un entrepreneur basé à Montréal avec une expérience en développement de produits numériques et en gestion de projets. Avant de fonder KOLIVO™, il a travaillé dans diverses industries, acquérant de l'expérience dans la création de solutions évolutives qui priorisent l'expérience utilisateur. Sa passion pour la vie communautaire et la convergence technologique l'a conduit à créer KOLIVO™, où il dirige une équipe dédiée à transformer les expériences de vie partagée à travers le Canada.",
        location: "Montréal, Québec, Canada",
      },
      cta: {
        title: "Connectons-nous",
        description: "Je suis toujours ouvert aux conversations sur la collaboration, les opportunités de partenariat, ou simplement pour échanger des idées sur l'avenir de la vie partagée.",
        button: "Nous contacter",
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
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              {t.hero.title}
            </h1>
            <p className="text-xl text-white/70">
              {t.hero.role}
            </p>
          </div>
        </div>
      </section>

      {/* Letter Section */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="grid md:grid-cols-[200px_1fr] gap-12 items-start">
              {/* Photo */}
              <div className="mx-auto md:mx-0">
                <div className="relative">
                  <img 
                    src="/images/lou-hebert.jpg"
                    alt="Lou Hébert"
                    className="w-40 h-40 md:w-48 md:h-48 rounded-xl object-cover shadow-lg"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-emerald-500 text-white px-3 py-1 rounded-lg text-xs font-medium shadow-lg">
                    {t.bio.location.split(',')[0]}
                  </div>
                </div>
                
                {/* Social Links */}
                <div className="flex gap-3 mt-6 justify-center md:justify-start">
                  <a 
                    href="https://linkedin.com/in/louhebert" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-slate-200 hover:text-slate-900 transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a 
                    href="mailto:lou@kolivo.ca"
                    className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-slate-200 hover:text-slate-900 transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Letter Content */}
              <div className="prose prose-slate max-w-none">
                <p className="text-lg text-slate-700 italic mb-8">
                  {t.letter.greeting}
                </p>
                
                {t.letter.paragraphs.map((paragraph, index) => (
                  <p key={index} className="text-slate-600 leading-relaxed mb-6">
                    {paragraph}
                  </p>
                ))}

                <div className="mt-12 pt-8 border-t border-slate-200">
                  <p className="text-slate-500 italic mb-2">{t.letter.signature}</p>
                  <p className="font-display text-xl font-semibold text-slate-900">{t.letter.name}</p>
                  <p className="text-slate-500 text-sm">{t.letter.title}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <p className="text-emerald-600 font-medium tracking-widest text-sm mb-4">
              {t.bio.tagline}
            </p>
            <h2 className="font-display text-3xl font-bold text-slate-900 mb-6">
              {t.bio.title}
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              {t.bio.text}
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-3xl font-bold mb-4">
              {t.cta.title}
            </h2>
            <p className="text-lg text-white/70 mb-8">
              {t.cta.description}
            </p>
            <Button asChild size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white">
              <Link href="/contact">
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
