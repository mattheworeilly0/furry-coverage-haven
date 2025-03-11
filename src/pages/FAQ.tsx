
import React from 'react';
import Navbar from '@/components/Navbar';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

const FAQ = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Navbar />
      <main className="pt-24">
        <FAQSection />
      </main>
      <Footer />
    </motion.div>
  );
};

export default FAQ;
