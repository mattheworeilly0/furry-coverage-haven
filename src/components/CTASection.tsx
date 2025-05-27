import React from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.1
  });
  const controls = useAnimation();
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);
  return <section id="cta" className="py-24 bg-gradient-to-b from-orange-50 to-white">
      <div className="section-container">
        <motion.div ref={ref} initial="hidden" animate={controls} variants={{
        hidden: {
          opacity: 0
        },
        visible: {
          opacity: 1,
          transition: {
            duration: 0.5
          }
        }
      }} className="text-center">
          <h2 className="section-title">
            Ready to Protect Your <span className="text-orange-500">Pet</span>?
          </h2>
          <p className="section-subtitle mb-8">
            Join thousands of pet owners who trust PetShield to keep their furry friends healthy and happy.
          </p>
          
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            delay: 0.2,
            ease: [0.25, 0.1, 0.25, 1]
          }
        }} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="btn-primary text-lg px-8 py-4 flex items-center gap-2 group">
              Get Started Today
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
            
          </motion.div>
        </motion.div>
      </div>
    </section>;
};
export default CTASection;