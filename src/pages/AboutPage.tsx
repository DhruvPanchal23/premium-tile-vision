import { Layout } from "@/components/Layout";
import { About } from "@/components/About";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Award, Users, Building2, Globe } from "lucide-react";
import marbleGraniteImg from "@/assets/marble-granite.jpg";
import designerCollectionImg from "@/assets/designer-collection.jpg";

const stats = [
  { icon: Award, value: "40+", label: "Years Experience" },
  { icon: Users, value: "180+", label: "Happy Clients" },
  { icon: Building2, value: "1000+", label: "Projects Completed" },
  { icon: Globe, value: "Pan-India", label: "Delivery Network" },
];

const timeline = [
  { year: "1982", title: "Foundation", desc: "Asian Tiles established as paver blocks manufacturer" },
  { year: "1995", title: "BIS Certification", desc: "Received BIS Licensed Certification for quality assurance" },
  { year: "2010", title: "Expansion", desc: "Launched comprehensive precast products line" },
  { year: "2024", title: "Digital Era", desc: "180+ clients and growing with digital presence" },
];

const asianValues = [
  {
    letter: "A",
    title: "Assured Quality",
    description: "BIS Licensed Certified products that meet the highest industry standards",
  },
  {
    letter: "S",
    title: "Synergize",
    description: "Collaborate with clients to deliver customized solutions",
  },
  {
    letter: "I",
    title: "Innovation",
    description: "Continuously evolving designs and manufacturing processes",
  },
  {
    letter: "A",
    title: "Always Respect Others",
    description: "Treating every stakeholder with dignity and professionalism",
  },
  {
    letter: "N",
    title: "Never Be Satisfied & Keep Learning",
    description: "Committed to continuous improvement and excellence",
  },
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
              40+ years of excellence in paver blocks and precast products manufacturing
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

      {/* ASIAN Values Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
              Our <span className="text-accent">Values</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              The principles that guide everything we do at Asian Tiles
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {asianValues.map((value, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-8 shadow-elegant hover:shadow-premium transition-elegant group text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-20 h-20 rounded-full bg-accent flex items-center justify-center mx-auto mb-6 shadow-glow">
                  <span className="text-4xl font-display font-bold text-accent-foreground">
                    {value.letter}
                  </span>
                </div>
                <h3 className="text-xl font-display font-bold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

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
              <h2 className="text-3xl font-display font-bold text-foreground mb-6">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                To provide everlasting quality products so that people experience innovation and value. We are committed to delivering BIS certified paver blocks, tiles, and precast products that stand the test of time.
              </p>
            </div>
            <div className="bg-card rounded-2xl p-12 shadow-elegant">
              <h2 className="text-3xl font-display font-bold text-foreground mb-6">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                To be India's most trusted manufacturer of paver blocks and precast products, setting benchmarks in quality, durability, and design. We envision infrastructure that lasts generations while inspiring aesthetic excellence.
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
                Craftsmanship Meets <span className="text-accent">Excellence</span>
              </h2>
              <p className="text-xl text-primary-foreground/90 leading-relaxed">
                Since 1982, our team has been dedicated to manufacturing BIS certified paver blocks and precast products. Every project reflects our commitment to quality, durability, and customer satisfaction.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div>
                  <p className="text-4xl font-display font-bold text-accent mb-2">BIS</p>
                  <p className="text-primary-foreground/80">Licensed Certified</p>
                </div>
                <div>
                  <p className="text-4xl font-display font-bold text-accent mb-2">180+</p>
                  <p className="text-primary-foreground/80">Trusted Clients</p>
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
