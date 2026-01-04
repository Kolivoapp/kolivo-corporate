/**
 * KOLIVO™ Footer Component
 * Design: Swiss Corporate Modernism
 * Bilingual support (FR/EN)
 */

import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  const footerLinks = {
    products: [
      { name: t("products.hub.title"), href: "/products/hub" },
      { name: t("products.studio.title"), href: "/products/studio-plus" },
      { name: t("products.guardo.title"), href: "/products/guardo" },
      { name: t("products.partenario.title"), href: "/products/partenario" },
    ],
    solutions: [
      { name: t("solutions.b2b.title"), href: "/solutions/b2b" },
      { name: t("solutions.enterprise.title"), href: "/solutions/enterprise" },
      { name: t("solutions.impact.title"), href: "/solutions/impact" },
      { name: t("solutions.public.title"), href: "/solutions/public-sector" },
    ],
    company: [
      { name: t("footer.about"), href: "/company" },
      { name: t("footer.careers"), href: "/company/careers" },
      { name: t("nav.security"), href: "/security-trust" },
      { name: t("nav.contact"), href: "/contact" },
    ],
    legal: [
      { name: t("footer.privacy"), href: "/legal/privacy" },
      { name: t("footer.terms"), href: "/legal/terms" },
      { name: t("footer.cookies"), href: "/legal/cookies" },
    ],
  };

  return (
    <footer className="bg-navy text-white/90">
      <div className="container py-16 lg:py-20">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 mb-8 lg:mb-0">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <img 
                src="/images/kolivo-logo.png" 
                alt="KOLIVO™" 
                className="h-10 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-sm text-white/60 leading-relaxed max-w-xs">
              {t("footer.description")}
            </p>
            <p className="text-sm text-white/40 mt-4">
              Montréal, Québec, Canada
            </p>
            <a href="mailto:contact@kolivo.ca" className="text-sm text-primary hover:text-primary/80 transition-colors">
              contact@kolivo.ca
            </a>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-white/40 mb-4">
              {t("footer.products")}
            </h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-white/40 mb-4">
              {t("footer.solutions")}
            </h4>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-white/40 mb-4">
              {t("footer.company")}
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-white/40 mb-4">
              {t("footer.legal")}
            </h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/50">
              {t("footer.copyright").replace("{year}", currentYear.toString())}
            </p>
            <div className="flex items-center gap-6">
              <span className="text-xs text-white/40 uppercase tracking-wider">
                {t("footer.tagline")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
