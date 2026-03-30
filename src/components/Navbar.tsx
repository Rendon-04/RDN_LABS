import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState } from "react";

type NavbarProps = {
  pathname: string;
  navigate: (to: string) => void;
};

export function Navbar({ pathname, navigate }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: "Client Work", href: "work" },
    { label: "Pricing", href: "pricing" },
    { label: "Expertise", href: "expertise" },
    { label: "About", href: "about" },
    { label: "Contact", href: "contact" },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsOpen(false);
  };

  const handleMenuNavigation = (href: string) => {
    if (href === "about" || href === "expertise") {
      navigate(`/${href}`);
      setIsOpen(false);
      return;
    }

    if (pathname === "/") {
      scrollToSection(href);
      return;
    }

    navigate(`/#${href}`);
    setIsOpen(false);
  };

  const scrollToTop = () => {
    if (pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setIsOpen(false);
      return;
    }

    navigate("/");
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-6 bg-black/80 backdrop-blur-xl border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-3 hover:opacity-70 transition-opacity"
          >
            <div className="w-8 h-8 border border-white flex items-center justify-center">
              <span className="text-white text-xs">&lt;/&gt;</span>
            </div>
            <span className="text-white tracking-tight font-light">RDN LABS</span>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-12">
            {menuItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleMenuNavigation(item.href)}
                className="text-sm text-gray-300 hover:text-white transition-colors tracking-wide font-light"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleMenuNavigation("contact")}
              className="px-6 py-2 border border-white/30 text-white text-sm hover:bg-white hover:text-black transition-all duration-300 font-light backdrop-blur-sm"
            >
              Start Project
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2"
          >
            {isOpen ? <X className="w-5 h-5" strokeWidth={1} /> : <Menu className="w-5 h-5" strokeWidth={1} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-8 pt-8 border-t border-white/10"
          >
            <div className="flex flex-col gap-6">
              {menuItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleMenuNavigation(item.href)}
                  className="text-sm text-gray-300 hover:text-white transition-colors text-left font-light"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => handleMenuNavigation("contact")}
                className="px-6 py-2 border border-white/30 text-white text-sm hover:bg-white hover:text-black transition-all duration-300 font-light"
              >
                Start Project
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
