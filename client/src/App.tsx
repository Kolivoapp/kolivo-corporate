import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/CorporateLanguageContext";
import CorporateHeader from "./components/CorporateHeader";
import CorporateFooter from "./components/CorporateFooter";
import ScrollToTop from "./components/ScrollToTop";

// Pages
import Overview from "./pages/Overview";
import Structure from "./pages/Structure";
import Governance from "./pages/Governance";
import Compliance from "./pages/Compliance";
import Investors from "./pages/Investors";
import Legal from "./pages/Legal";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// About Pages
import Founder from "./pages/about/Founder";
import Story from "./pages/about/Story";
import Mission from "./pages/about/Mission";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Overview} />
      <Route path="/structure" component={Structure} />
      <Route path="/governance" component={Governance} />
      <Route path="/compliance" component={Compliance} />
      <Route path="/investors" component={Investors} />
      <Route path="/legal" component={Legal} />
      <Route path="/contact" component={Contact} />
      
      {/* About Pages */}
      <Route path="/about/founder" component={Founder} />
      <Route path="/about/story" component={Story} />
      <Route path="/about/mission" component={Mission} />
      
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <LanguageProvider>
          <TooltipProvider>
            <Toaster />
            <ScrollToTop />
            <div className="min-h-screen flex flex-col">
              <CorporateHeader />
              <main className="flex-1">
                <Router />
              </main>
              <CorporateFooter />
            </div>
          </TooltipProvider>
        </LanguageProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
