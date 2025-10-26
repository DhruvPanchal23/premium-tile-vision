import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-tiles.jpg";

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Premium paver blocks and precast products showcase"
          className="w-full h-full object-cover scale-105 animate-[scale_20s_ease-in-out_infinite]"
        />
        <div className="absolute inset-0 gradient-hero" />
        
        {/* Floating Shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-up">
          {/* Enhanced Badge with Glow */}
          <div className="inline-flex items-center gap-3 glass-card px-6 py-3 rounded-full text-primary-foreground shadow-glow group hover:shadow-premium transition-smooth">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm font-semibold tracking-wide">BIS Licensed Certified | Since 1982</span>
          </div>

          {/* Main Heading with Gradient Text */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-primary-foreground leading-tight">
            Built to last and{" "}
            <span className="relative inline-block">
              <span className="text-accent relative z-10">designed to inspire</span>
              <span className="absolute inset-0 bg-accent/20 blur-2xl" />
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-primary-foreground/90 max-w-2xl mx-auto font-medium">
            Most Trusted Paver Blocks & Precast Products Manufacturer
          </p>
          
          {/* CTA Buttons with Enhanced Styling */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button variant="hero" size="xl" className="group relative overflow-hidden shadow-glow hover:shadow-premium hover:-translate-y-1 transition-all duration-300">
              <span className="relative z-10 flex items-center">
                Request Quote
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-smooth" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            </Button>
            <Button variant="outline" size="xl" className="glass-card border-primary-foreground/30 text-primary-foreground hover:bg-white/30 hover:-translate-y-1 transition-all duration-300">
              View Products
            </Button>
          </div>
          
          {/* Stats Bar */}
          <div className="flex flex-wrap justify-center gap-8 pt-8">
            {[
              { value: "40+", label: "Years" },
              { value: "180+", label: "Clients" },
              { value: "BIS", label: "Certified" }
            ].map((stat, i) => (
              <div key={i} className="glass-card px-6 py-3 rounded-xl hover:bg-white/30 transition-smooth">
                <div className="text-2xl md:text-3xl font-display font-bold text-accent">{stat.value}</div>
                <div className="text-sm text-primary-foreground/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-primary-foreground rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};
