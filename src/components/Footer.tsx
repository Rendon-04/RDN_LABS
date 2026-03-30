type FooterProps = {
  pathname: string;
  navigate: (to: string) => void;
};

export function Footer({ pathname, navigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const navigateToSection = (sectionId: string) => {
    if (pathname === "/") {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      return;
    }

    navigate(`/#${sectionId}`);
  };

  const scrollToTop = () => {
    if (pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    navigate("/");
  };

  return (
    <footer className="bg-white border-t border-gray-200 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-3 hover:opacity-70 transition-opacity"
            >
              <div className="w-8 h-8 border border-black flex items-center justify-center">
                <span className="text-black text-xs">&lt;/&gt;</span>
              </div>
              <span className="text-black tracking-tight">RDN LABS</span>
            </button>
            <p className="text-sm text-gray-600 leading-relaxed">
              Crafting refined digital experiences since 2025.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-black text-sm mb-6 tracking-wide">Navigation</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>
                <button
                  onClick={() => navigateToSection("work")}
                  className="hover:text-black transition-colors"
                >
                  Client Work
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateToSection("pricing")}
                  className="hover:text-black transition-colors"
                >
                  Pricing
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/expertise")}
                  className="hover:text-black transition-colors"
                >
                  Expertise
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateToSection("contact")}
                  className="hover:text-black transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-black text-sm mb-6 tracking-wide">Company</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>
                <button
                  onClick={() => navigate("/about")}
                  className="hover:text-black transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/expertise")}
                  className="hover:text-black transition-colors"
                >
                  Expertise
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateToSection("contact")}
                  className="hover:text-black transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-black text-sm mb-6 tracking-wide">Legal</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>
                <button
                  onClick={() => navigate("/privacy")}
                  className="hover:text-black transition-colors"
                >
                  Privacy
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/terms")}
                  className="hover:text-black transition-colors"
                >
                  Terms
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/cookies")}
                  className="hover:text-black transition-colors"
                >
                  Cookies
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            © {currentYear} RDN LABS. All rights reserved.
          </p>
          <div className="flex gap-6">
            {[
              { label: "LinkedIn", href: "https://www.linkedin.com/in/ivanrendon91/" },
              { label: "GitHub", href: "https://github.com/Rendon-04" },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer noopener"
                className="text-xs text-gray-500 hover:text-black transition-colors"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
