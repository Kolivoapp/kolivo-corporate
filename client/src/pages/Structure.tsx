/**
 * Corporate Structure Page
 * Design: Light Mode Institutional - Corporate Rich
 * Bilingual support (FR/EN)
 */

import { Building2, Globe, MapPin, FileText, Layers } from "lucide-react";
import { useLanguage } from "@/contexts/CorporateLanguageContext";

export default function Structure() {
  const { language } = useLanguage();

  const content = {
    en: {
      tagline: "CORPORATE STRUCTURE",
      title: "Legal Entity & Organization",
      description: "KOLIVO™ Technologies Inc. is a Canadian corporation headquartered in Montréal, Québec. Our organizational structure supports efficient operations and clear accountability.",
      legal: {
        title: "Legal Entity Information",
        items: [
          { icon: FileText, label: "Legal Name", value: "KOLIVO™ Technologies Inc." },
          { icon: Globe, label: "Jurisdiction", value: "Canada (Federal)" },
          { icon: MapPin, label: "Headquarters", value: "Montréal, Québec, Canada" },
          { icon: Building2, label: "Entity Type", value: "Private Corporation" }
        ]
      },
      org: {
        title: "Organizational Structure",
        board: "Board of Directors",
        ceo: "Chief Executive Officer",
        departments: ["Operations", "Technology", "Finance"]
      },
      ecosystem: {
        title: "Ecosystem Platforms",
        description: "KOLIVO™ Technologies Inc. develops and operates an integrated ecosystem of digital platforms.",
        platforms: [
          { name: "KOLIVO™ Hub", desc: "Shared living management" },
          { name: "Halo • ID", desc: "Secure identity" },
          { name: "KOLIVO™ Nest", desc: "Property management" },
          { name: "KOLIVO™ Seed", desc: "Community incubator" },
          { name: "KOLIVO™ Lens", desc: "Business optimization" },
          { name: "KOLIVO™ Forge", desc: "Development platform" }
        ]
      }
    },
    fr: {
      tagline: "STRUCTURE CORPORATIVE",
      title: "Entité juridique et organisation",
      description: "KOLIVO™ Technologies Inc. est une société canadienne dont le siège social est situé à Montréal, Québec. Notre structure organisationnelle soutient des opérations efficaces et une responsabilité claire.",
      legal: {
        title: "Informations sur l'entité juridique",
        items: [
          { icon: FileText, label: "Dénomination sociale", value: "KOLIVO™ Technologies Inc." },
          { icon: Globe, label: "Juridiction", value: "Canada (Fédéral)" },
          { icon: MapPin, label: "Siège social", value: "Montréal, Québec, Canada" },
          { icon: Building2, label: "Type d'entité", value: "Société privée" }
        ]
      },
      org: {
        title: "Structure organisationnelle",
        board: "Conseil d'administration",
        ceo: "Président-directeur général",
        departments: ["Opérations", "Technologie", "Finances"]
      },
      ecosystem: {
        title: "Plateformes de l'écosystème",
        description: "KOLIVO™ Technologies Inc. développe et exploite un écosystème intégré de plateformes numériques.",
        platforms: [
          { name: "KOLIVO™ Hub", desc: "Gestion de la vie partagée" },
          { name: "Halo • ID", desc: "Identité sécurisée" },
          { name: "KOLIVO™ Nest", desc: "Gestion immobilière" },
          { name: "KOLIVO™ Seed", desc: "Incubateur communautaire" },
          { name: "KOLIVO™ Lens", desc: "Optimisation des affaires" },
          { name: "KOLIVO™ Forge", desc: "Plateforme de développement" }
        ]
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

      {/* Legal Entity */}
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-8">
              {c.legal.title}
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {c.legal.items.map((item, index) => (
                <div
                  key={index}
                  className="card p-5 flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-slate-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {item.label}
                    </h3>
                    <p className="text-foreground-muted">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Organization Chart */}
      <section className="section section-alt">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-8 text-center">
              {c.org.title}
            </h2>
            <div className="card p-10">
              <div className="space-y-6">
                {/* Board */}
                <div className="bg-slate-900 text-white rounded-lg p-5 max-w-sm mx-auto text-center">
                  <h3 className="font-semibold">
                    {c.org.board}
                  </h3>
                </div>
                
                {/* Connector */}
                <div className="w-px h-6 bg-slate-300 mx-auto" />
                
                {/* CEO */}
                <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-5 max-w-sm mx-auto text-center">
                  <h3 className="font-semibold text-foreground">
                    {c.org.ceo}
                  </h3>
                </div>
                
                {/* Connector */}
                <div className="w-px h-6 bg-slate-300 mx-auto" />
                
                {/* Departments */}
                <div className="grid md:grid-cols-3 gap-4 max-w-xl mx-auto">
                  {c.org.departments.map((dept, index) => (
                    <div key={index} className="bg-slate-50 border border-slate-200 rounded-lg p-4 text-center">
                      <h4 className="font-medium text-sm text-foreground">
                        {dept}
                      </h4>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ecosystem Platforms */}
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="section-header">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Layers className="w-6 h-6 text-emerald-600" />
                <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                  {c.ecosystem.title}
                </h2>
              </div>
              <p className="section-description">
                {c.ecosystem.description}
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {c.ecosystem.platforms.map((platform, index) => (
                <div key={index} className="card p-5">
                  <h3 className="font-semibold text-foreground mb-1">{platform.name}</h3>
                  <p className="text-sm text-foreground-muted">{platform.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
