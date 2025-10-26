import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import marbleGraniteImg from "@/assets/marble-granite.jpg";

export const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative animate-fade-in">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-premium">
              <img
                src={marbleGraniteImg}
                alt="Premium marble and granite showcase"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-accent/20 rounded-2xl -z-10" />
          </div>

          {/* Content */}
          <div className="space-y-6 animate-slide-in">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground">
              We Help Transform Spaces with{" "}
              <span className="text-accent">Exceptional Tiles and Pavers</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              When it comes to choosing the right flooring for your home, Asian Tiles stands as your trusted partner since 1982. As a BIS Licensed Certified Manufacturer, we redefine quality and style in paver blocks, tiles, and precast products.
            </p>

            <div className="bg-background rounded-xl p-6 border-l-4 border-accent">
              <p className="text-foreground font-semibold mb-2">Our Mission</p>
              <p className="text-muted-foreground leading-relaxed">
                To provide everlasting quality products so that people experience innovation and value
              </p>
            </div>

            <div className="space-y-4">
              {[
                "Serving Beyond Expectation since 1982",
                "BIS Licensed Certified Manufacturer",
                "Diverse Range of Designs",
                "Affordable Luxury Without Compromising",
                "Secure, Satisfaction Guaranteed",
              ].map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <p className="text-foreground">{point}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="bg-background rounded-xl p-4 text-center">
                <div className="text-3xl font-display font-bold text-accent mb-1">180+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div className="bg-background rounded-xl p-4 text-center">
                <div className="text-3xl font-display font-bold text-accent mb-1">40+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>

            <div className="pt-4">
              <Button variant="hero" size="lg">
                Learn More About Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
