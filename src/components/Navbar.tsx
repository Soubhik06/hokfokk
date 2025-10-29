import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import Logo from "./Logo";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Events", href: "#events" },
    { name: "FAQS", href: "#faqs" },
    { name: "Schedule", href: "#schedule" },
    { name: "Contact US", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-background/70 backdrop-blur-md border-b border-border/60 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-3" aria-label="ALchemix Home">
            <Logo width={72} height={72} />
            <img
              src="/logo-word.png"
              alt="ALchemix wordmark"
              className="hidden sm:block h-10 md:h-12 object-contain opacity-90 drop-shadow-[0_2px_8px_rgba(0,0,0,0.25)] hover:opacity-100 transition-opacity"
              style={{ mixBlendMode: "screen" }}
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-foreground/90 hover:text-foreground relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-[hsl(var(--brand))] after:to-[hsl(var(--primary))] hover:after:w-full after:transition-all after:duration-300"
              >
                {item.name}
              </a>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button and Theme Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button
              className="text-foreground"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 animate-fade-in">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
