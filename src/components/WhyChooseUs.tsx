import { Award, Users, Palette, Truck } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Premium Quality",
    description: "Handpicked tiles and stones sourced from the finest manufacturers worldwide",
  },
  {
    icon: Users,
    title: "Expert Craftsmanship",
    description: "Decades of experience in tile installation and stone work",
  },
  {
    icon: Palette,
    title: "Custom Solutions",
    description: "Tailored designs and patterns to match your unique vision",
  },
  {
    icon: Truck,
    title: "Pan-India Delivery",
    description: "Reliable shipping and logistics across the entire country",
  },
];

export const WhyChooseUs = () => {
  return (
    <section className="py-20 md:py-32 gradient-premium">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
            Why Choose <span className="text-accent">Asian Tiles</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Your trusted partner in creating beautiful, lasting spaces
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="bg-card rounded-xl p-8 shadow-elegant hover:shadow-premium transition-elegant group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-smooth">
                <feature.icon className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
