/**
 * Corporate Footer Component
 * Design: Swiss Corporate Modernism - Institutional
 * Bilingual support (FR/EN)
 */

import { Link } from "wouter";
import { useLanguage } from "@/contexts/CorporateLanguageContext";

export default function CorporateFooter() {
  const { t, language } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white border-t border-white/10">
      <div className="container py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <img 
                src="/images/kolivo-logo.png" 
                alt="KOLIVO™" 
                className="h-8 w-auto"
              />
              <div className="flex flex-col">
                <span className="font-display font-bold text-white text-lg tracking-tight">
                  KOLIVO<sup className="text-xs">™</sup>
                </span>
                <span className="text-[10px] text-white/50 uppercase tracking-widest">
                  Corporate
                </span>
              </div>
            </Link>
            <p className="text-white/50 text-sm max-w-md">
              {t("overview.description")}
            </p>
          </div>

          {/* Corporate Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">
              {language === "fr" ? "Corporatif" : "Corporate"}
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/structure" className="text-white/50 hover:text-white text-sm transition-colors">
                  {t("nav.structure")}
                </Link>
              </li>
              <li>
                <Link href="/governance" className="text-white/50 hover:text-white text-sm transition-colors">
                  {t("nav.governance")}
                </Link>
              </li>
              <li>
                <Link href="/compliance" className="text-white/50 hover:text-white text-sm transition-colors">
                  {t("nav.compliance")}
                </Link>
              </li>
              <li>
                <Link href="/investors" className="text-white/50 hover:text-white text-sm transition-colors">
                  {t("nav.investors")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">
              {t("nav.legal")}
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/legal" className="text-white/50 hover:text-white text-sm transition-colors">
                  {t("legal.privacy.title")}
                </Link>
              </li>
              <li>
                <Link href="/legal" className="text-white/50 hover:text-white text-sm transition-colors">
                  {t("legal.terms.title")}
                </Link>
              </li>
              <li>
                <a href="https://kolivo.ca" className="text-white/50 hover:text-white text-sm transition-colors">
                  kolivo.ca
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            © {currentYear} KOLIVO™ Technologies Inc. {language === "fr" ? "Tous droits réservés." : "All rights reserved."}
          </p>
          <p className="text-white/40 text-sm">
            {t("footer.tagline")}
          </p>
        </div>
      </div>
    </footer>
  );
}
