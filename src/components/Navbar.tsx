import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "Collections", href: "/collections" },
    { name: "Projects", href: "/projects" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-card/95 backdrop-blur-xl shadow-elegant border-b border-border/50"
          : "bg-primary/40 backdrop-blur-md"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Enhanced Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-accent flex items-center justify-center shadow-glow group-hover:scale-110 transition-smooth">
              <span className="text-xl font-display font-bold text-accent-foreground">AT</span>
            </div>
            <h1 className={`text-2xl md:text-3xl font-display font-bold group-hover:text-accent transition-smooth ${
              isScrolled ? "text-primary" : "text-primary-foreground"
            }`}>
              Asian Tiles
            </h1>
          </Link>

          {/* Desktop Navigation with Indicator */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`relative px-4 py-2 hover:text-accent transition-smooth font-medium group ${
                  isActive(link.href) 
                    ? "text-accent" 
                    : isScrolled 
                    ? "text-foreground" 
                    : "text-primary-foreground"
                }`}
              >
                {link.name}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-accent transform origin-left transition-transform duration-300 ${
                  isActive(link.href) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                }`} />
              </Link>
            ))}
          </div>

          {/* Enhanced CTA Button */}
          <div className="hidden md:block">
            <Link to="/contact">
              <Button variant="premium" size="lg" className="shadow-elegant hover:shadow-glow hover:-translate-y-0.5 transition-all duration-300 relative overflow-hidden group">
                <span className="relative z-10">Get Quote</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden ${isScrolled ? "text-foreground" : "text-primary-foreground"}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in bg-card/95 backdrop-blur-xl rounded-xl mt-2 shadow-premium">
            <div className="flex flex-col space-y-4 px-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`text-foreground hover:text-accent transition-smooth font-medium py-2 ${
                    isActive(link.href) ? "text-accent" : ""
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/contact">
                <Button variant="premium" size="lg" className="w-full shadow-glow">
                  Get Quote
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
