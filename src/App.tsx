import { useEffect, useState } from "react";

import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { PricingSection } from "./components/PricingSection";
import { Toaster } from "./components/ui/sonner";
import { About } from "./pages/About";
import { Expertise } from "./pages/Expertise";
import { Privacy } from "./pages/Privacy";
import { Terms } from "./pages/Terms";
import { Cookies } from "./pages/Cookies";

type RouteState = {
  pathname: string;
  hash: string;
};

function getRouteState(): RouteState {
  return {
    pathname: window.location.pathname,
    hash: window.location.hash,
  };
}

export default function App() {
  const [routeState, setRouteState] = useState<RouteState>(getRouteState);

  useEffect(() => {
    const syncRoute = () => setRouteState(getRouteState());

    window.addEventListener("popstate", syncRoute);
    window.addEventListener("hashchange", syncRoute);

    return () => {
      window.removeEventListener("popstate", syncRoute);
      window.removeEventListener("hashchange", syncRoute);
    };
  }, []);

  const navigate = (to: string) => {
    const current = `${window.location.pathname}${window.location.hash}`;
    if (current === to) return;

    window.history.pushState({}, "", to);
    setRouteState(getRouteState());
  };

  useEffect(() => {
    if (!routeState.hash) return;

    const sectionId = routeState.hash.replace("#", "");

    const scrollToHashTarget = () => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    const rafId = window.requestAnimationFrame(scrollToHashTarget);
    return () => window.cancelAnimationFrame(rafId);
  }, [routeState.pathname, routeState.hash]);

  const renderPage = () => {
    switch (routeState.pathname) {
      case "/about":
        return <About />;
      case "/expertise":
        return <Expertise />;
      case "/privacy":
        return <Privacy />;
      case "/terms":
        return <Terms />;
      case "/cookies":
        return <Cookies />;
      default:
        return (
          <>
            <Hero />
            <Projects />
            <PricingSection />
            <Contact />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar pathname={routeState.pathname} navigate={navigate} />
      {renderPage()}
      <Footer pathname={routeState.pathname} navigate={navigate} />
      <Toaster position="bottom-right" />
    </div>
  );
}
