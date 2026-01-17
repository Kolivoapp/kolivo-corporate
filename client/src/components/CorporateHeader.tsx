/**
 * Corporate Header Component
 * Design: Swiss Corporate Modernism - Institutional
 * Bilingual support (FR/EN)
 */

import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Globe, ChevronDown } from "lucide-react";
import { useLanguage } from "@/contexts/CorporateLanguageContext";
import { CDN } from "@/lib/cdn";

export default function CorporateHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [location] = useLocation();
  const { language, setLanguage, t } = useLanguage();
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (aboutRef.current && !aboutRef.current.contains(event.target as Node)) {
        setAboutOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const content = {
    en: {
      about: "About",
      aboutItems: [
        { name: "Our Story", href: "/about/story" },
        { name: "Mission & Values", href: "/about/mission" },
        { name: "Founder's Message", href: "/about/founder" },
      ],
      governance: "Governance",
      structure: "Structure",
      investors: "Investors",
      legal: "Legal",
      contact: "Contact",
    },
    fr: {
      about: "À propos",
      aboutItems: [
        { name: "Notre histoire", href: "/about/story" },
        { name: "Mission et valeurs", href: "/about/mission" },
        { name: "Mot du fondateur", href: "/about/founder" },
      ],
      governance: "Gouvernance",
      structure: "Structure",
      investors: "Investisseurs",
      legal: "Juridique",
      contact: "Contact",
    }
  };

  const c = content[language];

  const navigation = [
    { name: c.governance, href: "/governance" },
    { name: c.structure, href: "/structure" },
    { name: c.investors, href: "/investors" },
    { name: c.legal, href: "/legal" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return location === "/";
    return location.startsWith(href);
  };

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "fr" : "en");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-white/10">
      <nav className="container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <img 
              src={CDN.logos.wordmark.white}
              alt="KOLIVO™" 
              className="h-5 w-auto"
            />
            <span className="text-[10px] text-white/50 uppercase tracking-widest border-l border-white/20 pl-3">
              Corporate
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {/* About Dropdown */}
            <div className="relative" ref={aboutRef}>
              <button
                onClick={() => setAboutOpen(!aboutOpen)}
                className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors ${
                  location.startsWith('/about')
                    ? "text-white"
                    : "text-white/60 hover:text-white"
                }`}
              >
                {c.about}
                <ChevronDown className={`w-4 h-4 transition-transform ${aboutOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {aboutOpen && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-slate-800 rounded-lg shadow-xl border border-white/10 py-2">
                  {c.aboutItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2 text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors"
                      onClick={() => setAboutOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-4 py-2 text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? "text-white"
                    : "text-white/60 hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Language Switch & Contact */}
          <div className="flex items-center gap-4">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 text-white/60 hover:text-white transition-colors"
            >
              <Globe className="w-4 h-4" />
              <span className="text-sm font-medium uppercase">{language}</span>
            </button>

            <Link
              href="/contact"
              className="hidden lg:block px-4 py-2 text-sm font-medium text-slate-900 bg-white rounded-lg hover:bg-white/90 transition-colors"
            >
              {c.contact}
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-white/10">
            <div className="flex flex-col gap-2">
              {/* About Section */}
              <div className="px-4 py-2 text-xs font-semibold text-white/40 uppercase tracking-wider">
                {c.about}
              </div>
              {c.aboutItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-6 py-2 text-sm font-medium transition-colors ${
                    isActive(item.href)
                      ? "text-white bg-white/10"
                      : "text-white/60 hover:text-white"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              <div className="border-t border-white/10 my-2" />
              
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                    isActive(item.href)
                      ? "text-white bg-white/10"
                      : "text-white/60 hover:text-white hover:bg-white/5"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              <div className="border-t border-white/10 my-2" />
              
              <Link
                href="/contact"
                className="mx-4 py-3 text-sm font-medium text-center text-slate-900 bg-white rounded-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                {c.contact}
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
