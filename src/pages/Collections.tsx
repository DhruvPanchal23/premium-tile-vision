import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Eye, Sparkles, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import designerCollectionImg from "@/assets/designer-collection.jpg";
import marbleGraniteImg from "@/assets/marble-granite.jpg";
import wallTilesImg from "@/assets/wall-tiles.jpg";
import floorTilesImg from "@/assets/floor-tiles.jpg";

const collections = [
  {
    id: 1,
    name: "Royal Heritage Collection",
    description: "Timeless elegance with classic patterns inspired by royal palaces",
    image: marbleGraniteImg,
    products: 24,
    priceRange: "₹85-150/sq.ft",
    badge: "Bestseller",
  },
  {
    id: 2,
    name: "Contemporary Minimalist",
    description: "Clean lines and modern aesthetics for contemporary spaces",
    image: designerCollectionImg,
    products: 18,
    priceRange: "₹65-120/sq.ft",
    badge: "New",
  },
  {
    id: 3,
    name: "Natural Stone Series",
    description: "Authentic stone textures bringing nature indoors",
    image: floorTilesImg,
    products: 32,
    priceRange: "₹95-180/sq.ft",
    badge: "Premium",
  },
  {
    id: 4,
    name: "Artistic Patterns",
    description: "Bold geometric and artistic designs for statement walls",
    image: wallTilesImg,
    products: 28,
    priceRange: "₹75-140/sq.ft",
    badge: null,
  },
];

const Collections = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={designerCollectionImg}
            alt="Designer Collections"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 gradient-hero" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 text-accent font-semibold mb-4 bg-card/20 backdrop-blur-sm px-4 py-2 rounded-full">
              <Sparkles className="w-5 h-5" />
              <span>EXCLUSIVE COLLECTIONS</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-primary-foreground leading-tight">
              Designer <span className="text-accent">Collections</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Curated selections of premium tiles that define luxury and style
            </p>
          </div>
        </div>
      </section>

      {/* Collections Grid */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {collections.map((collection, index) => (
              <div
                key={collection.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-fade-in ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image */}
                <div
                  className={`relative group ${index % 2 === 1 ? "lg:order-2" : ""}`}
                >
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-premium">
                    <img
                      src={collection.image}
                      alt={collection.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-elegant"
                    />
                  </div>
                  {collection.badge && (
                    <Badge className="absolute top-6 right-6 bg-accent text-accent-foreground shadow-glow">
                      {collection.badge}
                    </Badge>
                  )}
                </div>

                {/* Content */}
                <div className={`space-y-6 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                      {collection.name}
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                      {collection.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-8 text-foreground">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Products</p>
                      <p className="text-2xl font-bold">{collection.products}+</p>
                    </div>
                    <div className="h-12 w-px bg-border" />
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Price Range</p>
                      <p className="text-xl font-bold text-accent">{collection.priceRange}</p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link to="/products">
                      <Button variant="hero" size="lg" className="group">
                        <Eye className="mr-2" />
                        View Collection
                        <ArrowRight className="ml-2 group-hover:translate-x-1 transition-smooth" />
                      </Button>
                    </Link>
                    <Link to="/contact">
                      <Button variant="outline" size="lg">
                        Request Catalog
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Virtual Showroom CTA */}
      <section className="py-20 md:py-32 gradient-premium">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Sparkles className="w-16 h-16 text-accent mx-auto mb-6" />
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
              Experience Our Virtual Showroom
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Explore our collections in an immersive 360° environment. See how different tiles look in real room settings and visualize your dream space.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" className="group">
                <Eye className="mr-2" />
                Launch Virtual Tour
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-smooth" />
              </Button>
              <Link to="/products">
                <Button variant="outline" size="xl">
                  Browse Products
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Dream Budget Section */}
      <section className="py-20 md:py-32 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
              Dream Designs for <span className="text-accent">Every Budget</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              From affordable elegance to luxury exclusives, find the perfect collection for your project
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Essential", range: "₹35-65/sq.ft", desc: "Quality tiles for everyday spaces" },
              { title: "Premium", range: "₹65-120/sq.ft", desc: "Designer tiles for refined taste" },
              { title: "Luxury", range: "₹120+/sq.ft", desc: "Exclusive collections for statement spaces" },
            ].map((tier, index) => (
              <div
                key={tier.title}
                className="bg-background rounded-xl p-8 shadow-elegant hover:shadow-premium transition-elegant text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-2xl font-display font-bold text-foreground mb-2">{tier.title}</h3>
                <p className="text-3xl font-bold text-accent mb-4">{tier.range}</p>
                <p className="text-muted-foreground mb-6">{tier.desc}</p>
                <Link to="/products">
                  <Button variant="outline" className="w-full">
                    Explore Range
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Collections;
