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
              Crafting Beautiful Spaces Since{" "}
              <span className="text-accent">1995</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Asian Tiles has been transforming homes and commercial spaces with premium tiles and stone products for over two decades. Our commitment to quality, innovation, and customer satisfaction has made us a trusted name in the industry.
            </p>

            <div className="space-y-4">
              {[
                "Exclusive designer collections from around the world",
                "Expert consultation and installation services",
                "Competitive pricing without compromising quality",
                "Extensive showroom experience for hands-on selection",
              ].map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <p className="text-foreground">{point}</p>
                </div>
              ))}
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
