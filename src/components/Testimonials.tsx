import { Star } from "lucide-react";

const testimonials = [
  {
    name: "BSBK Group",
    location: "Engineering Projects",
    rating: 5,
    text: "Their product quality and durability have consistently exceeded our expectations. Their commitment to timely delivery and customer support makes them a reliable partner in bringing our engineering projects to life.",
    logo: true,
  },
  {
    name: "Mor Raipur",
    location: "Urban Infrastructure",
    rating: 5,
    text: "Such high-quality, durable products and attention to detail have enhanced our infrastructure, bringing both aesthetics and longevity to our urban spaces.",
    logo: true,
  },
  {
    name: "Raheja Group",
    location: "Real Estate Development",
    rating: 5,
    text: "With a keen eye for quality and design, this tiles and pavers supplier has become a go-to for our real estate projects. A solid partner we're pleased to work with.",
    logo: true,
  },
  {
    name: "Mosh Varaya",
    location: "Development Projects",
    rating: 5,
    text: "Their timely deliveries and seamless coordination make project execution smoother, and their products elevate the overall look and feel of our developments.",
    logo: true,
  },
];

export const Testimonials = () => {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
            Client <span className="text-accent">Experiences</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Trusted by 180+ clients including government, real estate, and engineering sectors
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="relative bg-card rounded-2xl p-8 shadow-elegant hover:shadow-premium hover:-translate-y-2 transition-all duration-500 animate-fade-in-up overflow-hidden group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote Icon Background */}
              <div className="absolute top-4 right-4 text-8xl text-accent/5 font-serif leading-none group-hover:text-accent/10 transition-smooth">"</div>
              
              {/* Rating with Animation */}
              <div className="flex gap-1 mb-4 relative z-10">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="w-5 h-5 fill-accent text-accent group-hover:scale-110 transition-transform" 
                    style={{ transitionDelay: `${i * 50}ms` }}
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-foreground leading-relaxed mb-6 italic relative z-10 text-sm">
                "{testimonial.text}"
              </p>

              {/* Author with Enhanced Styling */}
              <div className="border-t border-border/50 pt-4 relative z-10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-accent flex items-center justify-center text-accent-foreground font-bold shadow-glow">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground group-hover:text-accent transition-smooth">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>
              </div>
              
              {/* Hover Accent */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
