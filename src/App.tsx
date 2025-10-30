import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Collections from "./pages/Collections";
import AboutPage from "./pages/AboutPage";
import Projects from "./pages/Projects";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";
import RoofTiles from "./pages/RoofTiles";
import UDrain from "./pages/UDrain";
import Downloads from "./pages/Downloads";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/roof-tiles" element={<RoofTiles />} />
          <Route path="/u-drain" element={<UDrain />} />
          <Route path="/downloads" element={<Downloads />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
