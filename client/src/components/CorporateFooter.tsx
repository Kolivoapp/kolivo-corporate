/**
 * Corporate Footer Component
 * Design: Swiss Corporate Modernism - Institutional
 * Bilingual support (FR/EN)
 */

import { Link } from "wouter";
import { useLanguage } from "@/contexts/CorporateLanguageContext";
import { CDN } from "@/lib/cdn";
import { MapPin, Phone, Mail } from "lucide-react";

export default function CorporateFooter() {
  const { t, language } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white border-t border-white/10">
      <div className="container py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <img 
                src={CDN.logos.wordmark.white}
                alt="KOLIVO™" 
                className="h-5 w-auto"
              />
              <span className="text-[10px] text-white/50 uppercase tracking-widest border-l border-white/20 pl-3">
                Corporate
              </span>
            </Link>
            <p className="text-white/60 text-sm max-w-md mb-6">
              {language === "fr" 
                ? "KOLIVO™ Technologies Inc. développe des plateformes technologiques pour la vie collaborative."
                : "KOLIVO™ Technologies Inc. develops technology platforms for collaborative living."
              }
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2 text-white/60">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <div>
                  <p>Tour de la Bourse</p>
                  <p>800, rue du Square-Victoria, Suite 2624</p>
                  <p>Montréal, Québec H4Z 1J2</p>
                  <p>Canada</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-white/60">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a href="tel:+18445654861" className="hover:text-white transition-colors">
                  1 (844) 565-4861
                </a>
              </div>
              <div className="flex items-center gap-2 text-white/60">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a href="mailto:contact@kolivo.ca" className="hover:text-white transition-colors">
                  contact@kolivo.ca
                </a>
              </div>
            </div>
          </div>

          {/* Corporate Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">
              {language === "fr" ? "Corporatif" : "Corporate"}
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about/story" className="text-white/60 hover:text-white text-sm transition-colors">
                  {language === "fr" ? "Notre histoire" : "Our Story"}
                </Link>
              </li>
              <li>
                <Link href="/about/mission" className="text-white/60 hover:text-white text-sm transition-colors">
                  {language === "fr" ? "Mission et valeurs" : "Mission & Values"}
                </Link>
              </li>
              <li>
                <Link href="/about/founder" className="text-white/60 hover:text-white text-sm transition-colors">
                  {language === "fr" ? "Mot du fondateur" : "Founder's Message"}
                </Link>
              </li>
              <li>
                <Link href="/governance" className="text-white/60 hover:text-white text-sm transition-colors">
                  {language === "fr" ? "Gouvernance" : "Governance"}
                </Link>
              </li>
              <li>
                <Link href="/structure" className="text-white/60 hover:text-white text-sm transition-colors">
                  {language === "fr" ? "Structure" : "Structure"}
                </Link>
              </li>
              <li>
                <Link href="/investors" className="text-white/60 hover:text-white text-sm transition-colors">
                  {language === "fr" ? "Investisseurs" : "Investors"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">
              {language === "fr" ? "Juridique" : "Legal"}
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/legal" className="text-white/60 hover:text-white text-sm transition-colors">
                  {language === "fr" ? "Politique de confidentialité" : "Privacy Policy"}
                </Link>
              </li>
              <li>
                <Link href="/legal" className="text-white/60 hover:text-white text-sm transition-colors">
                  {language === "fr" ? "Conditions d'utilisation" : "Terms of Service"}
                </Link>
              </li>
              <li>
                <Link href="/compliance" className="text-white/60 hover:text-white text-sm transition-colors">
                  {language === "fr" ? "Conformité" : "Compliance"}
                </Link>
              </li>
              <li>
                <a href="https://kolivo.ca" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white text-sm transition-colors">
                  kolivo.ca →
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
            {language === "fr" ? "La technologie au service du lien humain." : "Technology that serves human connection."}
          </p>
        </div>
      </div>
    </footer>
  );
}
