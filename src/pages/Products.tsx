import { useState } from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Search, SlidersHorizontal, Eye, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import floorTilesImg from "@/assets/floor-tiles.jpg";
import wallTilesImg from "@/assets/wall-tiles.jpg";
import marbleGraniteImg from "@/assets/marble-granite.jpg";
import designerCollectionImg from "@/assets/designer-collection.jpg";

const products = [
  {
    id: 1,
    name: "Classic Paver Blocks",
    category: "Paver Blocks",
    price: "₹35/sq.ft",
    size: "200x100mm",
    finish: "Natural",
    image: floorTilesImg,
  },
  {
    id: 2,
    name: "Interlocking Paver Series",
    category: "Paver Blocks",
    price: "₹42/sq.ft",
    size: "200x100mm",
    finish: "Matt",
    image: wallTilesImg,
  },
  {
    id: 3,
    name: "Premium Precast Wall Panels",
    category: "Precast Products",
    price: "₹85/sq.ft",
    size: "600x600mm",
    finish: "Natural",
    image: marbleGraniteImg,
  },
  {
    id: 4,
    name: "Contemporary Floor Tiles",
    category: "Contemporary Tiles",
    price: "₹58/sq.ft",
    size: "600x600mm",
    finish: "Polished",
    image: designerCollectionImg,
  },
  {
    id: 5,
    name: "Pyramid Design Pavers",
    category: "Pyramid Design",
    price: "₹48/sq.ft",
    size: "300x300mm",
    finish: "Matt",
    image: floorTilesImg,
  },
  {
    id: 6,
    name: "Windoor Precast Frames",
    category: "Windoor Products",
    price: "₹120/piece",
    size: "Various",
    finish: "Natural",
    image: wallTilesImg,
  },
  {
    id: 7,
    name: "Heavy Duty Outdoor Pavers",
    category: "Outdoor Pavers",
    price: "₹52/sq.ft",
    size: "300x300mm",
    finish: "Natural",
    image: marbleGraniteImg,
  },
  {
    id: 8,
    name: "Designer Concrete Pavers",
    category: "Paver Blocks",
    price: "₹55/sq.ft",
    size: "200x100mm",
    finish: "Polished",
    image: designerCollectionImg,
  },
];

const categories = ["All", "Paver Blocks", "Precast Products", "Contemporary Tiles", "Pyramid Design", "Windoor Products", "Outdoor Pavers"];
const finishes = ["Matt", "Glossy", "Polished", "Satin", "Natural"];
const sizes = ["200x100mm", "300x300mm", "300x600mm", "600x600mm", "800x800mm"];

const Products = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("featured");
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-secondary py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-primary-foreground animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Our <span className="text-accent">Product Catalog</span>
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8">
              BIS Certified paver blocks, tiles, and precast products since 1982
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                type="search"
                placeholder="Search for paver blocks, tiles, precast products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-14 text-lg bg-card"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <aside className={`lg:w-64 space-y-6 ${showFilters ? 'block' : 'hidden lg:block'}`}>
              <div className="bg-card p-6 rounded-xl shadow-elegant sticky top-24">
                <h3 className="text-xl font-display font-bold text-foreground mb-4">Filters</h3>
                
                {/* Category Filter */}
                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-3">Category</h4>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`w-full text-left px-3 py-2 rounded-md transition-smooth ${
                          selectedCategory === category
                            ? "bg-accent text-accent-foreground"
                            : "hover:bg-muted"
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Finish Filter */}
                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-3">Finish</h4>
                  <div className="space-y-2">
                    {finishes.map((finish) => (
                      <div key={finish} className="flex items-center space-x-2">
                        <Checkbox id={finish} />
                        <label htmlFor={finish} className="text-sm text-foreground cursor-pointer">
                          {finish}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Size Filter */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Size</h4>
                  <div className="space-y-2">
                    {sizes.map((size) => (
                      <div key={size} className="flex items-center space-x-2">
                        <Checkbox id={size} />
                        <label htmlFor={size} className="text-sm text-foreground cursor-pointer">
                          {size}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </aside>

            {/* Products Grid */}
            <div className="flex-1">
              {/* Toolbar */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="lg:hidden"
                    onClick={() => setShowFilters(!showFilters)}
                  >
                    <SlidersHorizontal className="w-4 h-4 mr-2" />
                    Filters
                  </Button>
                  <p className="text-muted-foreground">
                    Showing {filteredProducts.length} products
                  </p>
                </div>
                
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Featured</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="newest">Newest</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Product Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className="group bg-card rounded-xl overflow-hidden shadow-elegant hover:shadow-premium transition-elegant"
                  >
                    <div className="relative aspect-square overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-elegant"
                      />
                      <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-smooth">
                        <button className="w-10 h-10 rounded-full bg-card shadow-elegant flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-smooth">
                          <Heart className="w-5 h-5" />
                        </button>
                        <Link to={`/products/${product.id}`}>
                          <button className="w-10 h-10 rounded-full bg-card shadow-elegant flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-smooth">
                            <Eye className="w-5 h-5" />
                          </button>
                        </Link>
                      </div>
                    </div>
                    <div className="p-5">
                      <p className="text-sm text-accent font-medium mb-1">{product.category}</p>
                      <h3 className="text-lg font-display font-bold text-foreground mb-2">
                        {product.name}
                      </h3>
                      <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
                        <span>{product.size}</span>
                        <span>{product.finish}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="text-xl font-bold text-accent">{product.price}</p>
                        <Link to={`/products/${product.id}`}>
                          <Button variant="premium" size="sm">
                            View Details
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
