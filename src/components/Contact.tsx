import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-32 gradient-premium">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
            Start Your <span className="text-accent">Dream Project</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Get in touch with our experts to discuss your requirements
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-card rounded-2xl p-8 shadow-premium animate-fade-in">
            <h3 className="text-2xl font-display font-bold text-foreground mb-6">
              Request a Quote
            </h3>
            <form className="space-y-4">
              <div>
                <Input
                  placeholder="Your Name"
                  className="h-12"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Email Address"
                  className="h-12"
                />
              </div>
              <div>
                <Input
                  type="tel"
                  placeholder="Phone Number"
                  className="h-12"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Tell us about your project..."
                  className="min-h-32"
                />
              </div>
              <Button variant="hero" size="lg" className="w-full">
                Submit Inquiry
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8 animate-slide-in">
            <div>
              <h3 className="text-2xl font-display font-bold text-foreground mb-6">
                Get in Touch
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Visit our showroom or reach out to us through any of the channels below. Our team is ready to help you transform your space.
              </p>
            </div>

            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">Phone</p>
                  <p className="text-muted-foreground">+91 98765 43210</p>
                  <p className="text-muted-foreground">+91 98765 43211</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">Email</p>
                  <p className="text-muted-foreground">info@asiantiles.in</p>
                  <p className="text-muted-foreground">sales@asiantiles.in</p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">Showroom</p>
                  <p className="text-muted-foreground">
                    123, Tile Market Complex<br />
                    Main Road, City Center<br />
                    Mumbai - 400001
                  </p>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-card rounded-xl p-6 shadow-elegant">
              <p className="font-semibold text-foreground mb-3">Business Hours</p>
              <div className="space-y-2 text-muted-foreground">
                <p>Monday - Saturday: 10:00 AM - 7:00 PM</p>
                <p>Sunday: 11:00 AM - 5:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
