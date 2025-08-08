import React from "react";

const StatsBand = () => (
  <section className="bg-accent/40">
    <div className="section-container py-12">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
        <div>
          <p className="text-3xl font-display font-semibold text-foreground">50k+</p>
          <p className="text-sm text-muted-foreground">Pets protected</p>
        </div>
        <div>
          <p className="text-3xl font-display font-semibold text-foreground">4.9/5</p>
          <p className="text-sm text-muted-foreground">Average rating</p>
        </div>
        <div>
          <p className="text-3xl font-display font-semibold text-foreground">24/7</p>
          <p className="text-sm text-muted-foreground">Vet support</p>
        </div>
      </div>
    </div>
  </section>
);

export default StatsBand;
