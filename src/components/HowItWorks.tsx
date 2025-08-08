import React from "react";
import { CheckCircle, Phone, Shield } from "lucide-react";

const Step = ({
  Icon,
  title,
  desc,
}: {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  desc: string;
}) => (
  <div className="feature-card h-full">
    <div className="flex items-start gap-4">
      <div className="shrink-0 rounded-xl bg-accent p-3">
        <Icon className="size-6 text-primary" aria-hidden="true" />
      </div>
      <div>
        <h3 className="font-medium text-foreground">{title}</h3>
        <p className="text-sm text-muted-foreground mt-1">{desc}</p>
      </div>
    </div>
  </div>
);

const HowItWorks = () => (
  <section id="how-it-works" className="section-container" aria-labelledby="hiw-title">
    <div className="max-w-3xl mx-auto text-center mb-10">
      <h2 id="hiw-title" className="section-title">How pet insurance works</h2>
      <p className="section-subtitle">
        Simple, transparent protection in three quick steps.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Step
        Icon={CheckCircle}
        title="Choose your plan"
        desc="Select coverage that fits your pet and budget—no long-term contracts."
      />
      <Step
        Icon={Phone}
        title="Visit any vet"
        desc="Get care when you need it. Submit your claim online in minutes."
      />
      <Step
        Icon={Shield}
        title="Get reimbursed"
        desc="Up to 90% back on eligible expenses—fast payouts, no hassle."
      />
    </div>
  </section>
);

export default HowItWorks;
