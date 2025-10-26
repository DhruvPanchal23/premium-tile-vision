import { Layout } from "@/components/Layout";
import { About } from "@/components/About";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Award, Users, Building2, Globe } from "lucide-react";
import marbleGraniteImg from "@/assets/marble-granite.jpg";
import designerCollectionImg from "@/assets/designer-collection.jpg";

const stats = [
  { icon: Award, value: "25+", label: "Years Experience" },
  { icon: Users, value: "10,000+", label: "Happy Customers" },
  { icon: Building2, value: "500+", label: "Projects Completed" },
  { icon: Globe, value: "50+", label: "Cities Served" },
];

const timeline = [
  { year: "1995", title: "Foundation", desc: "Asian Tiles established in Mumbai" },
  { year: "2005", title: "Expansion", desc: "Opened showrooms across major cities" },
  { year: "2015", title: "Innovation", desc: "Launched exclusive designer collections" },
  { year: "2024", title: "Digital Era", desc: "Virtual showroom and online experience" },
];

const AboutPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={marbleGraniteImg}
            alt="About Asian Tiles"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 gradient-hero" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-primary-foreground leading-tight">
              Our <span className="text-accent">Story</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              25 years of excellence in transforming spaces with premium tiles and stone products
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 md:py-32 gradient-premium">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-accent" />
                </div>
                <div className="text-4xl font-display font-bold text-foreground mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <About />

      {/* Timeline Section */}
      <section className="py-20 md:py-32 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
              Our <span className="text-accent">Journey</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Milestones that shaped Asian Tiles into a trusted name
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div
                  key={item.year}
                  className="flex gap-8 items-start animate-slide-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex-shrink-0 w-24">
                    <div className="text-3xl font-display font-bold text-accent">{item.year}</div>
                  </div>
                  <div className="relative flex-1 pb-8 border-l-2 border-border pl-8">
                    <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-accent" />
                    <h3 className="text-2xl font-display font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <WhyChooseUs />

      {/* Vision & Mission */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-card rounded-2xl p-12 shadow-elegant">
              <h2 className="text-3xl font-display font-bold text-foreground mb-6">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                To be India's most trusted and innovative tiles and stone products company, setting new standards in quality, design, and customer satisfaction. We envision spaces that inspire and endure.
              </p>
            </div>
            <div className="bg-card rounded-2xl p-12 shadow-elegant">
              <h2 className="text-3xl font-display font-bold text-foreground mb-6">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                To deliver premium quality tiles and stone products that transform ordinary spaces into extraordinary experiences, while maintaining unwavering commitment to craftsmanship, innovation, and sustainability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team/Culture Section */}
      <section className="py-20 md:py-32 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-premium">
              <img
                src={designerCollectionImg}
                alt="Our team"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-5xl font-display font-bold">
                Craftsmanship Meets <span className="text-accent">Passion</span>
              </h2>
              <p className="text-xl text-primary-foreground/90 leading-relaxed">
                Our team of experts brings decades of combined experience in sourcing, designing, and delivering the finest tiles and stone products. Every member shares our commitment to excellence.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div>
                  <p className="text-4xl font-display font-bold text-accent mb-2">100+</p>
                  <p className="text-primary-foreground/80">Expert Team Members</p>
                </div>
                <div>
                  <p className="text-4xl font-display font-bold text-accent mb-2">24/7</p>
                  <p className="text-primary-foreground/80">Customer Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
