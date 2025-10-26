import { ClipboardList, CheckCircle2, FileText, Wrench } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    title: "Request Quote",
    description: "Share your project requirements and vision with us",
    step: "01",
  },
  {
    icon: CheckCircle2,
    title: "Confirmation",
    description: "Our team reviews and confirms your requirements",
    step: "02",
  },
  {
    icon: FileText,
    title: "Estimate Details",
    description: "Receive detailed pricing and project timeline",
    step: "03",
  },
  {
    icon: Wrench,
    title: "Complete Works",
    description: "Expert installation and quality delivery",
    step: "04",
  },
];

export const ProcessFlow = () => {
  return (
    <section className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
            We Follow <span className="text-accent">The Process</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Our streamlined process ensures quality delivery from quote to completion
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="relative bg-background rounded-2xl p-8 shadow-elegant hover:shadow-premium hover:-translate-y-2 transition-all duration-500 group animate-fade-in-up overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
              
              {/* Step Number with Enhanced Design */}
              <div className="absolute -top-4 -right-4 w-16 h-16 rounded-2xl bg-gradient-accent flex items-center justify-center shadow-glow group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                <span className="text-2xl font-display font-bold text-accent-foreground">
                  {step.step}
                </span>
              </div>

              {/* Icon with Glow Effect */}
              <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center mb-6 group-hover:shadow-glow transition-all duration-300">
                <step.icon className="w-8 h-8 text-accent group-hover:scale-110 transition-transform" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-display font-bold text-foreground mb-3 group-hover:text-accent transition-smooth relative z-10">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed relative z-10">
                {step.description}
              </p>

              {/* Enhanced Connector Line */}
              {index < steps.length - 1 && (
                <>
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-accent/30 to-transparent" />
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-2 h-2 rounded-full bg-accent/50" />
                </>
              )}
              
              {/* Bottom Accent */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
