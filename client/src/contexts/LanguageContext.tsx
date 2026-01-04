/**
 * Language Context
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

// Translations
const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    "nav.products": "Products",
    "nav.solutions": "Solutions",
    "nav.security": "Security & Trust",
    "nav.company": "Company",
    "nav.contact": "Contact",
    "nav.cta": "Connect with KOLIVO™",
    
    // Products
    "products.hub.title": "HUB by KOLIVO™",
    "products.hub.desc": "The main application layer for your digital ecosystem",
    "products.studio.title": "Studio+ by KOLIVO™",
    "products.studio.desc": "Strategic consulting and delivery practice",
    "products.guardo.title": "GUARDO by KOLIVO™",
    "products.guardo.desc": "Trust, compliance, and incident management portal",
    "products.partenario.title": "PARTENARIO by KOLIVO™",
    "products.partenario.desc": "Partner operations and enablement portal",
    
    // Solutions
    "solutions.b2b.title": "B2B Solutions",
    "solutions.b2b.desc": "Master the complexity of B2B engagement",
    "solutions.enterprise.title": "Enterprise",
    "solutions.enterprise.desc": "Calm authority for the complex enterprise",
    "solutions.impact.title": "Impact & Community",
    "solutions.impact.desc": "An operating system for your mission",
    "solutions.public.title": "Public Sector",
    "solutions.public.desc": "Accountable, secure digital government",
    
    // Hero
    "hero.tagline": "DIGITAL ECOSYSTEM PLATFORM",
    "hero.title1": "Build, Govern, and Execute Your Digital Ecosystem with",
    "hero.title2": "Calm Authority",
    "hero.description": "KOLIVO™ provides the unified platform for enterprises and institutions to manage complexity, enforce standards, and drive cohesive strategy across their entire digital footprint.",
    "hero.cta.primary": "Connect with KOLIVO™",
    "hero.cta.secondary": "Explore the Platform",
    
    // Ecosystem Section
    "ecosystem.tagline": "THE KOLIVO™ ECOSYSTEM",
    "ecosystem.title": "One Platform. Complete Control.",
    "ecosystem.description": "From strategic consulting to operational execution, KOLIVO™ provides the integrated infrastructure that enterprises need to build, manage, and govern their digital presence.",
    
    // Platform Section
    "platform.tagline": "PLATFORM CAPABILITIES",
    "platform.title": "Built for Enterprise Scale",
    "platform.description": "Every component of the KOLIVO™ platform is designed to meet the rigorous demands of enterprise and institutional clients.",
    "platform.governance.title": "Governance & Compliance",
    "platform.governance.desc": "Built-in frameworks for regulatory compliance, audit trails, and policy enforcement across your entire digital ecosystem.",
    "platform.security.title": "Enterprise Security",
    "platform.security.desc": "Multi-layered security architecture with encryption, access controls, and continuous monitoring.",
    "platform.integration.title": "Seamless Integration",
    "platform.integration.desc": "Connect with existing enterprise systems through standardized APIs and pre-built connectors.",
    "platform.scale.title": "Infinite Scale",
    "platform.scale.desc": "Cloud-native architecture designed to grow with your organization without compromising performance.",
    
    // Trust Section
    "trust.tagline": "TRUST & SECURITY",
    "trust.title": "Security Without Compromise",
    "trust.description": "KOLIVO™ is built on a foundation of trust. Our security-first approach ensures your data and operations are protected at every level.",
    "trust.cta": "Learn About Our Security Approach",
    
    // CTA Section
    "cta.title": "Ready to Transform Your Digital Operations?",
    "cta.description": "Connect with our team to discover how KOLIVO™ can provide the operational backbone your organization needs.",
    "cta.button": "Connect with KOLIVO™",
    
    // Footer
    "footer.description": "The definitive operational backbone for enterprises and institutions.",
    "footer.products": "Products",
    "footer.solutions": "Solutions",
    "footer.company": "Company",
    "footer.legal": "Legal",
    "footer.about": "About",
    "footer.careers": "Careers",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Use",
    "footer.cookies": "Cookie Policy",
    "footer.copyright": "© {year} KOLIVO™ Technologies Inc. All rights reserved.",
    "footer.tagline": "Built with discipline",
    
    // Contact Page
    "contact.tagline": "CONTACT",
    "contact.title": "Connect with KOLIVO™",
    "contact.description": "Whether you're exploring solutions for your enterprise or seeking partnership opportunities, we're here to help.",
    "contact.form.title": "Send us a message",
    "contact.form.name": "Full Name",
    "contact.form.email": "Professional Email",
    "contact.form.company": "Company / Organization",
    "contact.form.subject": "Subject",
    "contact.form.message": "Message",
    "contact.form.submit": "Send Message",
    "contact.form.subject.general": "General Inquiry",
    "contact.form.subject.sales": "Sales & Partnerships",
    "contact.form.subject.support": "Technical Support",
    "contact.form.subject.press": "Press & Media",
    "contact.info.title": "Contact Information",
    "contact.info.email": "Email",
    "contact.info.location": "Location",
    "contact.info.location.value": "Montréal, Quebec, Canada",
    
    // Company Page
    "company.tagline": "COMPANY",
    "company.title": "About KOLIVO™",
    "company.description": "KOLIVO™ Technologies Inc. is building the definitive operational backbone for enterprises and institutions.",
    "company.mission.title": "Our Mission",
    "company.mission.text": "To provide enterprises and institutions with the unified platform they need to build, manage, and govern their digital presence with clarity, cohesion, and calm authority.",
    "company.values.title": "Our Values",
    "company.values.discipline": "Discipline",
    "company.values.discipline.desc": "We approach every challenge with rigor and precision.",
    "company.values.trust": "Trust",
    "company.values.trust.desc": "We earn trust through transparency and consistent delivery.",
    "company.values.excellence": "Excellence",
    "company.values.excellence.desc": "We hold ourselves to the highest standards in everything we do.",
    
    // Security Page
    "security.tagline": "SECURITY & TRUST",
    "security.title": "Security Without Compromise",
    "security.description": "At KOLIVO™, security is not an afterthought—it's the foundation upon which everything is built.",
    "security.privacy.title": "Privacy Approach",
    "security.privacy.desc": "Your data belongs to you. Our privacy-first architecture ensures that your information is protected, controlled, and used only as you intend.",
    "security.compliance.title": "Compliance Baseline",
    "security.compliance.desc": "We maintain rigorous compliance with industry standards and regulatory requirements to ensure your operations meet the highest standards.",
    "security.incident.title": "Incident Handling",
    "security.incident.desc": "Our proactive approach to incident management ensures rapid response, transparent communication, and continuous improvement.",
    
    // Careers Page
    "careers.tagline": "CAREERS",
    "careers.title": "Build the Future with Us",
    "careers.description": "Join a team that's building the operational backbone for the world's most demanding organizations.",
    "careers.culture.title": "Our Culture",
    "careers.culture.desc": "We're a team of disciplined professionals who believe in doing things right. We value precision, transparency, and continuous improvement.",
    "careers.openings.title": "Current Openings",
    "careers.openings.none": "No open positions at this time. Check back soon or send your resume to careers@kolivo.ca.",
    
    // Legal Pages
    "legal.privacy.title": "Privacy Policy",
    "legal.terms.title": "Terms of Use",
    "legal.cookies.title": "Cookie Policy",
    "legal.lastUpdated": "Last Updated",
  },
  fr: {
    // Navigation
    "nav.products": "Produits",
    "nav.solutions": "Solutions",
    "nav.security": "Sécurité et Confiance",
    "nav.company": "Entreprise",
    "nav.contact": "Contact",
    "nav.cta": "Connectez-vous avec KOLIVO™",
    
    // Products
    "products.hub.title": "HUB by KOLIVO™",
    "products.hub.desc": "La couche applicative principale de votre écosystème numérique",
    "products.studio.title": "Studio+ by KOLIVO™",
    "products.studio.desc": "Pratique de conseil stratégique et de livraison",
    "products.guardo.title": "GUARDO by KOLIVO™",
    "products.guardo.desc": "Portail de confiance, conformité et gestion des incidents",
    "products.partenario.title": "PARTENARIO by KOLIVO™",
    "products.partenario.desc": "Portail d'opérations et d'habilitation des partenaires",
    
    // Solutions
    "solutions.b2b.title": "Solutions B2B",
    "solutions.b2b.desc": "Maîtrisez la complexité de l'engagement B2B",
    "solutions.enterprise.title": "Entreprise",
    "solutions.enterprise.desc": "Une autorité sereine pour l'entreprise complexe",
    "solutions.impact.title": "Impact et Communauté",
    "solutions.impact.desc": "Un système d'exploitation pour votre mission",
    "solutions.public.title": "Secteur Public",
    "solutions.public.desc": "Un gouvernement numérique responsable et sécurisé",
    
    // Hero
    "hero.tagline": "PLATEFORME D'ÉCOSYSTÈME NUMÉRIQUE",
    "hero.title1": "Construisez, Gouvernez et Exécutez Votre Écosystème Numérique avec une",
    "hero.title2": "Autorité Sereine",
    "hero.description": "KOLIVO™ fournit la plateforme unifiée permettant aux entreprises et institutions de gérer la complexité, d'appliquer les normes et de piloter une stratégie cohérente sur l'ensemble de leur empreinte numérique.",
    "hero.cta.primary": "Connectez-vous avec KOLIVO™",
    "hero.cta.secondary": "Explorer la Plateforme",
    
    // Ecosystem Section
    "ecosystem.tagline": "L'ÉCOSYSTÈME KOLIVO™",
    "ecosystem.title": "Une Plateforme. Un Contrôle Total.",
    "ecosystem.description": "Du conseil stratégique à l'exécution opérationnelle, KOLIVO™ fournit l'infrastructure intégrée dont les entreprises ont besoin pour construire, gérer et gouverner leur présence numérique.",
    
    // Platform Section
    "platform.tagline": "CAPACITÉS DE LA PLATEFORME",
    "platform.title": "Conçu pour l'Échelle Entreprise",
    "platform.description": "Chaque composant de la plateforme KOLIVO™ est conçu pour répondre aux exigences rigoureuses des clients entreprises et institutionnels.",
    "platform.governance.title": "Gouvernance et Conformité",
    "platform.governance.desc": "Cadres intégrés pour la conformité réglementaire, les pistes d'audit et l'application des politiques sur l'ensemble de votre écosystème numérique.",
    "platform.security.title": "Sécurité Entreprise",
    "platform.security.desc": "Architecture de sécurité multicouche avec chiffrement, contrôles d'accès et surveillance continue.",
    "platform.integration.title": "Intégration Transparente",
    "platform.integration.desc": "Connectez-vous aux systèmes d'entreprise existants grâce à des API standardisées et des connecteurs préconstruits.",
    "platform.scale.title": "Échelle Infinie",
    "platform.scale.desc": "Architecture cloud-native conçue pour évoluer avec votre organisation sans compromettre les performances.",
    
    // Trust Section
    "trust.tagline": "CONFIANCE ET SÉCURITÉ",
    "trust.title": "La Sécurité Sans Compromis",
    "trust.description": "KOLIVO™ est bâti sur une fondation de confiance. Notre approche axée sur la sécurité garantit que vos données et opérations sont protégées à tous les niveaux.",
    "trust.cta": "Découvrir Notre Approche Sécurité",
    
    // CTA Section
    "cta.title": "Prêt à Transformer Vos Opérations Numériques?",
    "cta.description": "Connectez-vous avec notre équipe pour découvrir comment KOLIVO™ peut fournir l'épine dorsale opérationnelle dont votre organisation a besoin.",
    "cta.button": "Connectez-vous avec KOLIVO™",
    
    // Footer
    "footer.description": "L'épine dorsale opérationnelle définitive pour les entreprises et institutions.",
    "footer.products": "Produits",
    "footer.solutions": "Solutions",
    "footer.company": "Entreprise",
    "footer.legal": "Juridique",
    "footer.about": "À propos",
    "footer.careers": "Carrières",
    "footer.privacy": "Politique de Confidentialité",
    "footer.terms": "Conditions d'Utilisation",
    "footer.cookies": "Politique des Cookies",
    "footer.copyright": "© {year} KOLIVO™ Technologies Inc. Tous droits réservés.",
    "footer.tagline": "Construit avec discipline",
    
    // Contact Page
    "contact.tagline": "CONTACT",
    "contact.title": "Connectez-vous avec KOLIVO™",
    "contact.description": "Que vous exploriez des solutions pour votre entreprise ou que vous cherchiez des opportunités de partenariat, nous sommes là pour vous aider.",
    "contact.form.title": "Envoyez-nous un message",
    "contact.form.name": "Nom complet",
    "contact.form.email": "Courriel professionnel",
    "contact.form.company": "Entreprise / Organisation",
    "contact.form.subject": "Sujet",
    "contact.form.message": "Message",
    "contact.form.submit": "Envoyer le message",
    "contact.form.subject.general": "Demande générale",
    "contact.form.subject.sales": "Ventes et Partenariats",
    "contact.form.subject.support": "Support technique",
    "contact.form.subject.press": "Presse et Médias",
    "contact.info.title": "Coordonnées",
    "contact.info.email": "Courriel",
    "contact.info.location": "Localisation",
    "contact.info.location.value": "Montréal, Québec, Canada",
    
    // Company Page
    "company.tagline": "ENTREPRISE",
    "company.title": "À propos de KOLIVO™",
    "company.description": "KOLIVO™ Technologies Inc. construit l'épine dorsale opérationnelle définitive pour les entreprises et institutions.",
    "company.mission.title": "Notre Mission",
    "company.mission.text": "Fournir aux entreprises et institutions la plateforme unifiée dont elles ont besoin pour construire, gérer et gouverner leur présence numérique avec clarté, cohésion et autorité sereine.",
    "company.values.title": "Nos Valeurs",
    "company.values.discipline": "Discipline",
    "company.values.discipline.desc": "Nous abordons chaque défi avec rigueur et précision.",
    "company.values.trust": "Confiance",
    "company.values.trust.desc": "Nous gagnons la confiance par la transparence et une livraison constante.",
    "company.values.excellence": "Excellence",
    "company.values.excellence.desc": "Nous nous tenons aux plus hauts standards dans tout ce que nous faisons.",
    
    // Security Page
    "security.tagline": "SÉCURITÉ ET CONFIANCE",
    "security.title": "La Sécurité Sans Compromis",
    "security.description": "Chez KOLIVO™, la sécurité n'est pas une réflexion après coup — c'est la fondation sur laquelle tout est construit.",
    "security.privacy.title": "Approche de la Confidentialité",
    "security.privacy.desc": "Vos données vous appartiennent. Notre architecture axée sur la confidentialité garantit que vos informations sont protégées, contrôlées et utilisées uniquement comme vous le souhaitez.",
    "security.compliance.title": "Base de Conformité",
    "security.compliance.desc": "Nous maintenons une conformité rigoureuse aux normes de l'industrie et aux exigences réglementaires pour garantir que vos opérations répondent aux plus hauts standards.",
    "security.incident.title": "Gestion des Incidents",
    "security.incident.desc": "Notre approche proactive de la gestion des incidents assure une réponse rapide, une communication transparente et une amélioration continue.",
    
    // Careers Page
    "careers.tagline": "CARRIÈRES",
    "careers.title": "Construisez l'Avenir avec Nous",
    "careers.description": "Rejoignez une équipe qui construit l'épine dorsale opérationnelle pour les organisations les plus exigeantes au monde.",
    "careers.culture.title": "Notre Culture",
    "careers.culture.desc": "Nous sommes une équipe de professionnels disciplinés qui croient en la bonne façon de faire les choses. Nous valorisons la précision, la transparence et l'amélioration continue.",
    "careers.openings.title": "Postes Ouverts",
    "careers.openings.none": "Aucun poste ouvert pour le moment. Revenez bientôt ou envoyez votre CV à careers@kolivo.ca.",
    
    // Legal Pages
    "legal.privacy.title": "Politique de Confidentialité",
    "legal.terms.title": "Conditions d'Utilisation",
    "legal.cookies.title": "Politique des Cookies",
    "legal.lastUpdated": "Dernière mise à jour",
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
    // Check localStorage first
    const stored = localStorage.getItem("kolivo-language");
    if (stored === "fr" || stored === "en") {
      return stored;
    }
    // Otherwise detect from browser
    return detectBrowserLanguage();
  });

  useEffect(() => {
    localStorage.setItem("kolivo-language", language);
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
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
