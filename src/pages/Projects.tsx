import { useState } from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Building2, Home, Hotel, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import floorTilesImg from "@/assets/floor-tiles.jpg";
import wallTilesImg from "@/assets/wall-tiles.jpg";
import marbleGraniteImg from "@/assets/marble-granite.jpg";
import designerCollectionImg from "@/assets/designer-collection.jpg";
import heroTilesImg from "@/assets/hero-tiles.jpg";

const projects = [
  {
    id: 1,
    title: "Luxury Residential Villa",
    category: "Residential",
    location: "Mumbai, Maharashtra",
    area: "5,000 sq.ft",
    year: "2024",
    image: heroTilesImg,
    description: "Complete flooring and wall tiling for a premium residential villa with marble and designer tiles",
  },
  {
    id: 2,
    title: "Corporate Office Renovation",
    category: "Commercial",
    location: "Bangalore, Karnataka",
    area: "12,000 sq.ft",
    year: "2023",
    image: designerCollectionImg,
    description: "Modern office space transformation with contemporary tile solutions",
  },
  {
    id: 3,
    title: "Boutique Hotel Interiors",
    category: "Hospitality",
    location: "Goa",
    area: "8,500 sq.ft",
    year: "2023",
    image: marbleGraniteImg,
    description: "Elegant hotel lobby and suite bathrooms featuring premium marble",
  },
  {
    id: 4,
    title: "Modern Family Home",
    category: "Residential",
    location: "Delhi NCR",
    area: "3,500 sq.ft",
    year: "2024",
    image: wallTilesImg,
    description: "Contemporary home design with artistic wall tiles and wooden floor tiles",
  },
  {
    id: 5,
    title: "Shopping Mall Flooring",
    category: "Commercial",
    location: "Pune, Maharashtra",
    area: "25,000 sq.ft",
    year: "2023",
    image: floorTilesImg,
    description: "High-traffic commercial flooring with durable porcelain tiles",
  },
  {
    id: 6,
    title: "Restaurant Interior Design",
    category: "Hospitality",
    location: "Mumbai, Maharashtra",
    area: "4,000 sq.ft",
    year: "2024",
    image: designerCollectionImg,
    description: "Themed restaurant featuring custom designer tile patterns",
  },
];

const categories = ["All", "Residential", "Commercial", "Hospitality"];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = projects.filter(
    (project) => selectedCategory === "All" || project.category === selectedCategory
  );

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Residential":
        return Home;
      case "Commercial":
        return Building2;
      case "Hospitality":
        return Hotel;
      default:
        return Building2;
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-secondary py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-primary-foreground animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Our <span className="text-accent">Projects</span>
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Explore our portfolio of completed projects showcasing premium tile installations
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-background border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="lg"
                onClick={() => setSelectedCategory(category)}
                className="transition-smooth"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => {
              const CategoryIcon = getCategoryIcon(project.category);
              return (
                <div
                  key={project.id}
                  className="group bg-card rounded-xl overflow-hidden shadow-elegant hover:shadow-premium transition-elegant animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-elegant"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-accent text-accent-foreground shadow-glow">
                        {project.category}
                      </Badge>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-smooth flex items-end p-6">
                      <Button variant="hero" size="sm" className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-elegant">
                        View Details
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-2 text-accent mb-3">
                      <CategoryIcon className="w-4 h-4" />
                      <span className="text-sm font-medium">{project.category}</span>
                    </div>
                    
                    <h3 className="text-xl font-display font-bold text-foreground mb-2">
                      {project.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    <div className="space-y-2 text-sm text-muted-foreground border-t pt-4">
                      <div className="flex justify-between">
                        <span>Location:</span>
                        <span className="font-semibold text-foreground">{project.location}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Area:</span>
                        <span className="font-semibold text-foreground">{project.area}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Year:</span>
                        <span className="font-semibold text-foreground">{project.year}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 gradient-premium">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
            Ready to Start <span className="text-accent">Your Project?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let us help you create stunning spaces with our premium tiles and expert installation services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="hero" size="xl">
                Get Free Consultation
              </Button>
            </Link>
            <Link to="/products">
              <Button variant="outline" size="xl">
                Browse Products
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
