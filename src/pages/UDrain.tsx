import { ArrowRight, CheckCircle, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-tiles.jpg";

export default function UDrain() {
  const features = [
    "High load bearing capacity",
    "Corrosion and chemical resistant",
    "Easy and quick installation",
    "Low maintenance requirements",
    "Durable reinforced concrete construction",
    "Smooth water flow design",
    "Cost-effective drainage solution",
    "Available in multiple sizes",
  ];

  const applications = [
    "Road drainage systems",
    "Industrial areas and factories",
    "Parking lots and garages",
    "Residential complexes",
    "Agricultural drainage",
    "Storm water management",
    "Commercial complexes",
    "Highway and expressways",
  ];

  const specifications = [
    { label: "Material", value: "Reinforced Cement Concrete (RCC)" },
    { label: "Available Sizes", value: "300mm, 400mm, 500mm, 600mm (width)" },
    { label: "Depth Options", value: "300mm to 600mm" },
    { label: "Load Class", value: "A15, B125, C250, D400, E600" },
    { label: "Length", value: "1000mm (standard)" },
    { label: "Concrete Grade", value: "M30 and above" },
    { label: "Grating Options", value: "Cast iron, Ductile iron, FRP" },
    { label: "Finish", value: "Smooth internal surface" },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="U-Drain drainage solutions installation"
            className="w-full h-full object-cover brightness-50"
          />
          <div className="absolute inset-0 gradient-hero" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-6 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-accent px-4 py-2 rounded-full text-accent-foreground font-semibold mb-4">
              <span className="text-sm">NEW PRODUCT</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-primary-foreground leading-tight">
              U-Drain
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Efficient Drainage Solutions for Superior Water Management
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
              High-Quality Precast Concrete Drainage
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our U-Drain systems are precast concrete U-shaped drainage channels designed for effective water management across various applications. Manufactured with precision engineering, they provide reliable, long-lasting drainage solutions with superior load-bearing capabilities.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 md:py-32 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-center text-foreground mb-16">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-xl shadow-elegant hover:shadow-premium transition-smooth hover:-translate-y-1"
              >
                <CheckCircle className="w-8 h-8 text-primary mb-4" />
                <p className="text-foreground font-medium">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-center text-foreground mb-16">
            Technical Specifications
          </h2>
          <div className="max-w-4xl mx-auto bg-card rounded-2xl shadow-premium overflow-hidden">
            <div className="divide-y divide-border">
              {specifications.map((spec, index) => (
                <div
                  key={index}
                  className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6 hover:bg-muted/50 transition-smooth"
                >
                  <div className="font-semibold text-foreground">{spec.label}</div>
                  <div className="text-muted-foreground">{spec.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20 md:py-32 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-center text-foreground mb-16">
            Applications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {applications.map((application, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-xl shadow-elegant hover:shadow-premium transition-smooth text-center hover:-translate-y-1"
              >
                <h3 className="text-lg font-display font-bold text-foreground">
                  {application}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Details */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-center text-foreground mb-16">
            Installation Guidelines
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-card p-8 rounded-xl shadow-elegant">
                <h3 className="text-xl font-display font-bold text-foreground mb-4">
                  Slope Requirements
                </h3>
                <p className="text-muted-foreground">
                  Minimum slope of 1:150 to 1:100 recommended for optimal water flow. Ensure proper gradient during installation for effective drainage.
                </p>
              </div>
              <div className="bg-card p-8 rounded-xl shadow-elegant">
                <h3 className="text-xl font-display font-bold text-foreground mb-4">
                  Joint Specifications
                </h3>
                <p className="text-muted-foreground">
                  Use high-quality sealant for joints. Ensure proper alignment and level connection between consecutive U-Drain units.
                </p>
              </div>
              <div className="bg-card p-8 rounded-xl shadow-elegant">
                <h3 className="text-xl font-display font-bold text-foreground mb-4">
                  Foundation Preparation
                </h3>
                <p className="text-muted-foreground">
                  Prepare a stable, compacted base. Use concrete bedding for heavy load areas. Ensure level surface before installation.
                </p>
              </div>
              <div className="bg-card p-8 rounded-xl shadow-elegant">
                <h3 className="text-xl font-display font-bold text-foreground mb-4">
                  Grating Selection
                </h3>
                <p className="text-muted-foreground">
                  Choose appropriate grating based on load class requirements. Options include cast iron, ductile iron, or FRP gratings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            Need Drainage Solutions?
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Contact us for expert consultation and customized U-Drain solutions for your project
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="secondary" size="lg" className="group">
                Request Quote
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-smooth" />
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Download className="mr-2" />
              Download Technical Specs
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
