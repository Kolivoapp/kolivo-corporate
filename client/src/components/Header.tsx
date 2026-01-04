/**
 * KOLIVO™ Header Component
 * Design: Swiss Corporate Modernism
 * Bilingual support (FR/EN)
 */

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitch from "./LanguageSwitch";

export default function Header() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  const products = [
    { title: t("products.hub.title"), href: "/products/hub", description: t("products.hub.desc") },
    { title: t("products.studio.title"), href: "/products/studio-plus", description: t("products.studio.desc") },
    { title: t("products.guardo.title"), href: "/products/guardo", description: t("products.guardo.desc") },
    { title: t("products.partenario.title"), href: "/products/partenario", description: t("products.partenario.desc") },
  ];

  const solutions = [
    { title: t("solutions.b2b.title"), href: "/solutions/b2b", description: t("solutions.b2b.desc") },
    { title: t("solutions.enterprise.title"), href: "/solutions/enterprise", description: t("solutions.enterprise.desc") },
    { title: t("solutions.impact.title"), href: "/solutions/impact", description: t("solutions.impact.desc") },
    { title: t("solutions.public.title"), href: "/solutions/public-sector", description: t("solutions.public.desc") },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <img 
              src="/images/kolivo-logo.png" 
              alt="KOLIVO™" 
              className="h-8 w-auto"
            />
            <span className="font-display font-semibold text-lg text-foreground hidden sm:block">
              KOLIVO<sup className="text-xs">™</sup>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="gap-1">
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-muted/50 text-foreground font-medium">
                  {t("nav.products")}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                    {products.map((product) => (
                      <ListItem key={product.title} title={product.title} href={product.href}>
                        {product.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-muted/50 text-foreground font-medium">
                  {t("nav.solutions")}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                    {solutions.map((solution) => (
                      <ListItem key={solution.title} title={solution.title} href={solution.href}>
                        {solution.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/security-trust">
                  <NavigationMenuLink className={cn(
                    "group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-muted/50 focus:bg-muted/50 focus:outline-none",
                    location === "/security-trust" && "bg-muted/50"
                  )}>
                    {t("nav.security")}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/company">
                  <NavigationMenuLink className={cn(
                    "group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-muted/50 focus:bg-muted/50 focus:outline-none",
                    location === "/company" && "bg-muted/50"
                  )}>
                    {t("nav.company")}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/contact">
                  <NavigationMenuLink className={cn(
                    "group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-muted/50 focus:bg-muted/50 focus:outline-none",
                    location === "/contact" && "bg-muted/50"
                  )}>
                    {t("nav.contact")}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Right Side: Language + CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <LanguageSwitch />
            <Link href="/contact">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium">
                {t("nav.cta")}
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <LanguageSwitch />
            <button
              className="p-2 text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border/50 animate-fade-in">
            <nav className="flex flex-col gap-2">
              <div className="py-2">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">{t("nav.products")}</p>
                {products.map((product) => (
                  <Link 
                    key={product.title} 
                    href={product.href}
                    className="block py-2 text-sm text-foreground hover:text-primary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {product.title}
                  </Link>
                ))}
              </div>
              <div className="py-2">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">{t("nav.solutions")}</p>
                {solutions.map((solution) => (
                  <Link 
                    key={solution.title} 
                    href={solution.href}
                    className="block py-2 text-sm text-foreground hover:text-primary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {solution.title}
                  </Link>
                ))}
              </div>
              <Link 
                href="/security-trust" 
                className="py-2 text-sm text-foreground hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t("nav.security")}
              </Link>
              <Link 
                href="/company" 
                className="py-2 text-sm text-foreground hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t("nav.company")}
              </Link>
              <Link 
                href="/contact" 
                className="py-2 text-sm text-foreground hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t("nav.contact")}
              </Link>
              <div className="pt-4">
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-medium">
                    {t("nav.cta")}
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

const ListItem = ({ className, title, children, href }: { className?: string; title: string; children: React.ReactNode; href: string }) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-muted focus:bg-muted",
            className
          )}
        >
          <div className="text-sm font-medium leading-none text-foreground">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
};
