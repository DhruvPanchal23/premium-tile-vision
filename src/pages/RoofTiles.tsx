import { ArrowRight, CheckCircle, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-tiles.jpg";

export default function RoofTiles() {
  const features = [
    "Weather resistant and waterproof",
    "Excellent heat insulation properties",
    "Long lifespan (25+ years)",
    "Various colors and designs available",
    "Easy installation process",
    "Cost-effective roofing solution",
    "Environmentally friendly",
    "Low maintenance requirements",
  ];

  const applications = [
    "Residential buildings",
    "Commercial structures",
    "Industrial roofing",
    "Temple and heritage buildings",
    "Farm houses",
    "Community centers",
  ];

  const specifications = [
    { label: "Material", value: "High-grade concrete / Clay" },
    { label: "Standard Size", value: "410mm x 330mm" },
    { label: "Thickness", value: "10-12mm" },
    { label: "Weight", value: "2.5-3.5 kg per tile" },
    { label: "Water Absorption", value: "Less than 6%" },
    { label: "Coverage", value: "9-10 tiles per sq.m" },
    { label: "Color Options", value: "Red, Brown, Terracotta, Grey, Black" },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Premium roof tiles installation"
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
              Roof Tiles
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Premium Quality Roof Solutions for Lasting Protection
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
              Durable and Aesthetically Pleasing
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our roof tiles are designed to provide long-lasting protection while enhancing the architectural beauty of your building. Manufactured with precision and quality materials, they offer superior weather resistance and thermal insulation.
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {applications.map((application, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-xl shadow-elegant hover:shadow-premium transition-smooth text-center hover:-translate-y-1"
              >
                <h3 className="text-xl font-display font-bold text-foreground">
                  {application}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Contact us today for a detailed quote and expert consultation on roof tile solutions
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
              Download Brochure
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
