import { Layout } from "@/components/Layout";
import { Hero } from "@/components/Hero";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Testimonials } from "@/components/Testimonials";
import { ArrowRight, Sparkles, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import floorTilesImg from "@/assets/floor-tiles.jpg";
import wallTilesImg from "@/assets/wall-tiles.jpg";
import marbleGraniteImg from "@/assets/marble-granite.jpg";
import designerCollectionImg from "@/assets/designer-collection.jpg";

const featuredCategories = [
  {
    title: "Floor Tiles",
    description: "Premium ceramic and porcelain tiles",
    image: floorTilesImg,
    link: "/products?category=floor",
  },
  {
    title: "Wall Tiles",
    description: "Designer wall tiles with patterns",
    image: wallTilesImg,
    link: "/products?category=wall",
  },
  {
    title: "Marble & Granite",
    description: "Luxurious natural stone",
    image: marbleGraniteImg,
    link: "/products?category=marble",
  },
  {
    title: "Designer Collections",
    description: "Exclusive modern collections",
    image: designerCollectionImg,
    link: "/collections",
  },
];

const Home = () => {
  return (
    <Layout>
      <Hero />
      
      {/* Featured Categories */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
              Explore Our <span className="text-accent">Collections</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Transform your space with our curated selection of premium tiles and stone products
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {featuredCategories.map((category, index) => (
              <Link
                key={category.title}
                to={category.link}
                className="group relative overflow-hidden rounded-xl shadow-elegant hover:shadow-premium transition-elegant animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-elegant"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent opacity-80 group-hover:opacity-90 transition-smooth" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground">
                  <h3 className="text-2xl font-display font-bold mb-2">{category.title}</h3>
                  <p className="text-sm text-primary-foreground/90">{category.description}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link to="/products">
              <Button variant="hero" size="lg" className="group">
                View All Products
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-smooth" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Virtual Showroom CTA */}
      <section className="py-20 md:py-32 gradient-premium">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-card rounded-3xl shadow-premium overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-12 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 text-accent font-semibold mb-4">
                  <Sparkles className="w-5 h-5" />
                  <span>NEW FEATURE</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                  Virtual Showroom Experience
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Explore our collections in an immersive 360° virtual environment. See how different tiles look in real room settings before making your decision.
                </p>
                <div>
                  <Link to="/collections">
                    <Button variant="premium" size="lg" className="group">
                      <Eye className="mr-2" />
                      Explore Virtual Showroom
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-smooth" />
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="aspect-square lg:aspect-auto">
                <img
                  src={marbleGraniteImg}
                  alt="Virtual showroom"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhyChooseUs />
      <Testimonials />

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Let our experts help you choose the perfect tiles for your dream project
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="hero" size="xl" className="bg-accent hover:bg-accent/90">
                Get Free Quote
              </Button>
            </Link>
            <Link to="/projects">
              <Button variant="outline" size="xl" className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                View Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
