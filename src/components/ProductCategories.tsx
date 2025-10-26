import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import floorTilesImg from "@/assets/floor-tiles.jpg";
import wallTilesImg from "@/assets/wall-tiles.jpg";
import marbleGraniteImg from "@/assets/marble-granite.jpg";
import designerCollectionImg from "@/assets/designer-collection.jpg";

const categories = [
  {
    title: "Floor Tiles",
    description: "Premium ceramic and porcelain tiles for elegant flooring",
    image: floorTilesImg,
  },
  {
    title: "Wall Tiles",
    description: "Designer wall tiles with stunning patterns and textures",
    image: wallTilesImg,
  },
  {
    title: "Marble & Granite",
    description: "Luxurious natural stone for timeless elegance",
    image: marbleGraniteImg,
  },
  {
    title: "Designer Collections",
    description: "Exclusive collections for unique and modern spaces",
    image: designerCollectionImg,
  },
];

export const ProductCategories = () => {
  return (
    <section id="products" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
            Explore Our <span className="text-accent">Collections</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From classic elegance to contemporary designs, discover tiles and stone products that bring your vision to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <div
              key={category.title}
              className="group relative overflow-hidden rounded-xl shadow-elegant hover:shadow-premium transition-elegant animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="aspect-square overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-elegant"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent opacity-80 group-hover:opacity-90 transition-smooth" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground">
                <h3 className="text-2xl font-display font-bold mb-2">{category.title}</h3>
                <p className="text-sm text-primary-foreground/90 mb-4">{category.description}</p>
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary group-hover:translate-x-1 transition-smooth"
                >
                  View Collection
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
