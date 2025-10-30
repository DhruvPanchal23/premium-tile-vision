import { Download, FileText, Mail } from "lucide-react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Downloads() {
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = ["All", "Brochures", "Technical", "Certifications", "Installation Guides"];

  const downloads = [
    {
      title: "Company Brochure 2024",
      description: "Complete overview of Asian Tiles products and services",
      category: "Brochures",
      size: "5.2 MB",
      format: "PDF",
      downloads: 1248,
      date: "March 2024",
    },
    {
      title: "Paver Blocks Catalog",
      description: "Comprehensive catalog of all paver block varieties",
      category: "Brochures",
      size: "8.3 MB",
      format: "PDF",
      downloads: 2156,
      date: "February 2024",
    },
    {
      title: "Technical Specifications",
      description: "Detailed technical specs for all products",
      category: "Technical",
      size: "2.1 MB",
      format: "PDF",
      downloads: 892,
      date: "January 2024",
    },
    {
      title: "BIS Certification",
      description: "BIS Licensed Certified Manufacturer certificate",
      category: "Certifications",
      size: "1.5 MB",
      format: "PDF",
      downloads: 645,
      date: "December 2023",
    },
    {
      title: "Installation Guide - Paver Blocks",
      description: "Step-by-step installation instructions",
      category: "Installation Guides",
      size: "3.8 MB",
      format: "PDF",
      downloads: 1534,
      date: "March 2024",
    },
    {
      title: "Roof Tiles Technical Data",
      description: "Technical specifications and installation guide for roof tiles",
      category: "Technical",
      size: "2.9 MB",
      format: "PDF",
      downloads: 423,
      date: "March 2024",
    },
    {
      title: "U-Drain Installation Manual",
      description: "Complete installation and maintenance guide for U-Drain systems",
      category: "Installation Guides",
      size: "4.2 MB",
      format: "PDF",
      downloads: 567,
      date: "March 2024",
    },
    {
      title: "Product Warranty Information",
      description: "Warranty terms and conditions for all products",
      category: "Technical",
      size: "1.2 MB",
      format: "PDF",
      downloads: 734,
      date: "February 2024",
    },
  ];

  const filteredDownloads = activeFilter === "All" 
    ? downloads 
    : downloads.filter(d => d.category === activeFilter);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-primary/10 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-foreground leading-tight">
              Downloads & Resources
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Access our catalogs, brochures, technical documentation, and installation guides
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-muted border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-3 rounded-lg font-medium transition-smooth ${
                  activeFilter === category
                    ? "bg-primary text-primary-foreground shadow-elegant"
                    : "bg-card text-foreground hover:bg-card/80"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Downloads Grid */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDownloads.map((item, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl shadow-elegant hover:shadow-premium transition-smooth hover:-translate-y-1 overflow-hidden group"
              >
                {/* Card Header */}
                <div className="bg-primary/5 p-6 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-smooth">
                    <FileText className="w-10 h-10 text-primary" />
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-display font-bold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <FileText className="w-4 h-4" />
                      {item.format}
                    </span>
                    <span>{item.size}</span>
                  </div>

                  <div className="flex items-center justify-between text-sm text-muted-foreground pb-4 border-b border-border">
                    <span>{item.date}</span>
                    <span>{item.downloads} downloads</span>
                  </div>

                  {/* Actions */}
                  <div className="space-y-2">
                    <Button variant="default" size="lg" className="w-full group/btn">
                      <Download className="mr-2 group-hover/btn:translate-y-1 transition-smooth" />
                      Download
                    </Button>
                    <Button variant="outline" size="sm" className="w-full">
                      <Mail className="mr-2 w-4 h-4" />
                      Email to Me
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredDownloads.length === 0 && (
            <div className="text-center py-20">
              <FileText className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-display font-bold text-foreground mb-2">
                No downloads found
              </h3>
              <p className="text-muted-foreground">
                Try selecting a different category
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Help Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Need Additional Information?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Can't find what you're looking for? Contact our team for customized documentation and technical support.
            </p>
            <Button variant="default" size="lg">
              <Mail className="mr-2" />
              Contact Support
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
