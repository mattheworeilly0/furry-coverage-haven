import React from "react";

const TrustBar = () => (
  <section className="section-container py-10" aria-labelledby="trust-heading">
    <h2 id="trust-heading" className="sr-only">Trusted by leading pet brands</h2>
    <div className="mx-auto max-w-6xl">
      <p className="text-center text-sm text-muted-foreground mb-6">
        Trusted by 50,000+ pet parents and partners
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 items-center">
        <img src="/placeholder.svg" alt="Partner brand - PetCare" className="h-8 w-auto mx-auto opacity-70" loading="lazy" />
        <img src="/placeholder.svg" alt="Partner brand - VetNetwork" className="h-8 w-auto mx-auto opacity-70" loading="lazy" />
        <img src="/placeholder.svg" alt="Partner brand - HealthyPets" className="h-8 w-auto mx-auto opacity-70" loading="lazy" />
        <img src="/placeholder.svg" alt="Partner brand - PawCo" className="h-8 w-auto mx-auto opacity-70" loading="lazy" />
        <img src="/placeholder.svg" alt="Partner brand - HappyVets" className="h-8 w-auto mx-auto opacity-70" loading="lazy" />
      </div>
    </div>
  </section>
);

export default TrustBar;
