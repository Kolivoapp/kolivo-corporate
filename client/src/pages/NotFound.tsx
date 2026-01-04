/**
 * 404 Not Found Page
 * Design: Swiss Corporate Modernism - Institutional
 */

import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen pt-20 flex items-center justify-center bg-background">
      <div className="container">
        <div className="max-w-md mx-auto text-center">
          <h1 className="font-display text-6xl font-bold text-foreground mb-4">404</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Page not found
          </p>
          <Link href="/">
            <Button>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Return to Overview
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
