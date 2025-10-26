import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-tiles.jpg";

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Premium tiles and stone products showcase"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-hero" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-6 animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-primary-foreground leading-tight">
            Transform Your Space with{" "}
            <span className="text-accent">Premium Tiles</span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-primary-foreground/90 max-w-2xl mx-auto">
            Where Quality Meets Craftsmanship - Discover Designer Collections That Fit Every Style and Budget
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button variant="hero" size="xl" className="group">
              Explore Our Collection
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-smooth" />
            </Button>
            <Button variant="outline" size="xl" className="bg-card/20 backdrop-blur-sm border-primary-foreground/30 text-primary-foreground hover:bg-card/40">
              Virtual Showroom
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-primary-foreground w-8 h-8" />
        </div>
      </div>
    </section>
  );
};
