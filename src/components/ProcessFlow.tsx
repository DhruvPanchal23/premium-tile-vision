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
              className="relative bg-background rounded-xl p-8 shadow-elegant hover:shadow-premium transition-elegant group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Step Number */}
              <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-accent flex items-center justify-center shadow-glow">
                <span className="text-2xl font-display font-bold text-accent-foreground">
                  {step.step}
                </span>
              </div>

              {/* Icon */}
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-smooth">
                <step.icon className="w-8 h-8 text-accent" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-display font-bold text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>

              {/* Connector Line (except last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-accent/30" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
