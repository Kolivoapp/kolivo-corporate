/**
 * Language Context for Corporate Site
 * Provides bilingual support (FR/EN) with automatic browser language detection
 */

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "fr" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Corporate Site Translations
const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    "nav.overview": "Overview",
    "nav.structure": "Corporate Structure",
    "nav.governance": "Governance",
    "nav.compliance": "Compliance",
    "nav.investors": "Investors",
    "nav.legal": "Legal",
    
    // Overview
    "overview.tagline": "CORPORATE",
    "overview.title": "KOLIVO™ Technologies Inc.",
    "overview.description": "The definitive operational backbone for enterprises and institutions.",
    "overview.about.title": "About the Corporation",
    "overview.about.text": "KOLIVO™ Technologies Inc. is a Canadian technology company headquartered in Montréal, Quebec. We develop and operate an integrated digital ecosystem platform serving enterprises, institutions, and public sector organizations.",
    "overview.mission.title": "Corporate Mission",
    "overview.mission.text": "To provide enterprises and institutions with the unified platform they need to build, manage, and govern their digital presence with clarity, cohesion, and calm authority.",
    
    // Corporate Structure
    "structure.tagline": "CORPORATE STRUCTURE",
    "structure.title": "Organization Overview",
    "structure.description": "KOLIVO™ Technologies Inc. operates as a Canadian federal corporation with a clear governance structure designed to ensure accountability, transparency, and long-term sustainability.",
    "structure.legal.title": "Legal Entity",
    "structure.legal.name": "KOLIVO™ Technologies Inc.",
    "structure.legal.jurisdiction": "Canada (Federal)",
    "structure.legal.headquarters": "Montréal, Quebec, Canada",
    "structure.legal.type": "Private Corporation",
    
    // Governance
    "governance.tagline": "GOVERNANCE",
    "governance.title": "Corporate Governance",
    "governance.description": "Our governance framework ensures that KOLIVO™ operates with integrity, accountability, and a long-term perspective.",
    "governance.board.title": "Board of Directors",
    "governance.board.desc": "The Board of Directors provides strategic oversight and ensures that the corporation operates in the best interests of all stakeholders.",
    "governance.leadership.title": "Leadership Team",
    "governance.leadership.desc": "Our executive leadership team is responsible for the day-to-day operations and strategic execution of the corporation.",
    "governance.principles.title": "Governance Principles",
    "governance.principles.integrity": "Integrity",
    "governance.principles.integrity.desc": "We conduct all business with honesty and ethical standards.",
    "governance.principles.accountability": "Accountability",
    "governance.principles.accountability.desc": "We take responsibility for our decisions and their outcomes.",
    "governance.principles.transparency": "Transparency",
    "governance.principles.transparency.desc": "We communicate openly with all stakeholders.",
    
    // Compliance
    "compliance.tagline": "COMPLIANCE",
    "compliance.title": "Regulatory Compliance",
    "compliance.description": "KOLIVO™ maintains rigorous compliance with all applicable laws, regulations, and industry standards.",
    "compliance.framework.title": "Compliance Framework",
    "compliance.privacy.title": "Privacy Compliance",
    "compliance.privacy.desc": "Full compliance with PIPEDA and provincial privacy legislation.",
    "compliance.security.title": "Security Standards",
    "compliance.security.desc": "SOC 2 Type II aligned controls and continuous monitoring.",
    "compliance.corporate.title": "Corporate Compliance",
    "compliance.corporate.desc": "Adherence to all applicable corporate and securities regulations.",
    
    // Investors
    "investors.tagline": "INVESTORS",
    "investors.title": "Investor Relations",
    "investors.description": "Information for current and prospective investors in KOLIVO™ Technologies Inc.",
    "investors.status.title": "Corporate Status",
    "investors.status.text": "KOLIVO™ Technologies Inc. is currently a private corporation. For investment inquiries, please contact our investor relations team.",
    "investors.contact.title": "Investor Contact",
    "investors.contact.email": "investors@kolivo.ca",
    
    // Legal
    "legal.tagline": "LEGAL",
    "legal.title": "Legal Information",
    "legal.description": "Legal notices, policies, and regulatory information for KOLIVO™ Technologies Inc.",
    "legal.trademark.title": "Trademark Notice",
    "legal.trademark.text": "KOLIVO™ is a trademark of KOLIVO™ Technologies Inc. with a registration application submitted.",
    "legal.copyright.title": "Copyright Notice",
    "legal.privacy.title": "Privacy Policy",
    "legal.terms.title": "Terms of Use",
    
    // Footer
    "footer.copyright": "© {year} KOLIVO™ Technologies Inc. All rights reserved.",
    "footer.tagline": "Corporate Governance",
  },
  fr: {
    // Navigation
    "nav.overview": "Aperçu",
    "nav.structure": "Structure corporative",
    "nav.governance": "Gouvernance",
    "nav.compliance": "Conformité",
    "nav.investors": "Investisseurs",
    "nav.legal": "Juridique",
    
    // Overview
    "overview.tagline": "CORPORATIF",
    "overview.title": "KOLIVO™ Technologies Inc.",
    "overview.description": "L'épine dorsale opérationnelle définitive pour les entreprises et institutions.",
    "overview.about.title": "À propos de la société",
    "overview.about.text": "KOLIVO™ Technologies Inc. est une entreprise technologique canadienne dont le siège social est situé à Montréal, au Québec. Nous développons et exploitons une plateforme d'écosystème numérique intégrée au service des entreprises, des institutions et des organisations du secteur public.",
    "overview.mission.title": "Mission corporative",
    "overview.mission.text": "Fournir aux entreprises et institutions la plateforme unifiée dont elles ont besoin pour construire, gérer et gouverner leur présence numérique avec clarté, cohésion et autorité sereine.",
    
    // Corporate Structure
    "structure.tagline": "STRUCTURE CORPORATIVE",
    "structure.title": "Aperçu de l'organisation",
    "structure.description": "KOLIVO™ Technologies Inc. opère en tant que société fédérale canadienne avec une structure de gouvernance claire conçue pour assurer la responsabilité, la transparence et la durabilité à long terme.",
    "structure.legal.title": "Entité juridique",
    "structure.legal.name": "KOLIVO™ Technologies Inc.",
    "structure.legal.jurisdiction": "Canada (Fédéral)",
    "structure.legal.headquarters": "Montréal, Québec, Canada",
    "structure.legal.type": "Société privée",
    
    // Governance
    "governance.tagline": "GOUVERNANCE",
    "governance.title": "Gouvernance d'entreprise",
    "governance.description": "Notre cadre de gouvernance garantit que KOLIVO™ opère avec intégrité, responsabilité et une perspective à long terme.",
    "governance.board.title": "Conseil d'administration",
    "governance.board.desc": "Le conseil d'administration assure la surveillance stratégique et veille à ce que la société opère dans le meilleur intérêt de toutes les parties prenantes.",
    "governance.leadership.title": "Équipe de direction",
    "governance.leadership.desc": "Notre équipe de direction exécutive est responsable des opérations quotidiennes et de l'exécution stratégique de la société.",
    "governance.principles.title": "Principes de gouvernance",
    "governance.principles.integrity": "Intégrité",
    "governance.principles.integrity.desc": "Nous menons toutes nos activités avec honnêteté et normes éthiques.",
    "governance.principles.accountability": "Responsabilité",
    "governance.principles.accountability.desc": "Nous assumons la responsabilité de nos décisions et de leurs résultats.",
    "governance.principles.transparency": "Transparence",
    "governance.principles.transparency.desc": "Nous communiquons ouvertement avec toutes les parties prenantes.",
    
    // Compliance
    "compliance.tagline": "CONFORMITÉ",
    "compliance.title": "Conformité réglementaire",
    "compliance.description": "KOLIVO™ maintient une conformité rigoureuse avec toutes les lois, réglementations et normes industrielles applicables.",
    "compliance.framework.title": "Cadre de conformité",
    "compliance.privacy.title": "Conformité en matière de vie privée",
    "compliance.privacy.desc": "Conformité totale avec la LPRPDE et la législation provinciale sur la vie privée.",
    "compliance.security.title": "Normes de sécurité",
    "compliance.security.desc": "Contrôles alignés SOC 2 Type II et surveillance continue.",
    "compliance.corporate.title": "Conformité corporative",
    "compliance.corporate.desc": "Respect de toutes les réglementations corporatives et des valeurs mobilières applicables.",
    
    // Investors
    "investors.tagline": "INVESTISSEURS",
    "investors.title": "Relations avec les investisseurs",
    "investors.description": "Informations pour les investisseurs actuels et potentiels de KOLIVO™ Technologies Inc.",
    "investors.status.title": "Statut corporatif",
    "investors.status.text": "KOLIVO™ Technologies Inc. est actuellement une société privée. Pour les demandes d'investissement, veuillez contacter notre équipe de relations avec les investisseurs.",
    "investors.contact.title": "Contact investisseurs",
    "investors.contact.email": "investors@kolivo.ca",
    
    // Legal
    "legal.tagline": "JURIDIQUE",
    "legal.title": "Informations juridiques",
    "legal.description": "Avis juridiques, politiques et informations réglementaires pour KOLIVO™ Technologies Inc.",
    "legal.trademark.title": "Avis de marque de commerce",
    "legal.trademark.text": "KOLIVO™ est une marque de commerce de KOLIVO™ Technologies Inc. dont une demande d'enregistrement a été soumise.",
    "legal.copyright.title": "Avis de droit d'auteur",
    "legal.privacy.title": "Politique de confidentialité",
    "legal.terms.title": "Conditions d'utilisation",
    
    // Footer
    "footer.copyright": "© {year} KOLIVO™ Technologies Inc. Tous droits réservés.",
    "footer.tagline": "Gouvernance d'entreprise",
  },
};

// Detect browser language
function detectBrowserLanguage(): Language {
  const browserLang = navigator.language || (navigator as any).userLanguage || "en";
  const langCode = browserLang.split("-")[0].toLowerCase();
  return langCode === "fr" ? "fr" : "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    const stored = localStorage.getItem("kolivo-corporate-language");
    if (stored === "fr" || stored === "en") {
      return stored;
    }
    return detectBrowserLanguage();
  });

  useEffect(() => {
    localStorage.setItem("kolivo-corporate-language", language);
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = (key: string): string => {
    const value = translations[language][key];
    if (value && value.includes("{year}")) {
      return value.replace("{year}", new Date().getFullYear().toString());
    }
    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
