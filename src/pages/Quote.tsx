import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import QuoteForm from '@/components/QuoteForm';
import { motion, AnimatePresence } from 'framer-motion';

const Quote = () => {
  // SEO: title, meta description, canonical, and structured data
  useEffect(() => {
    document.title = 'Get Your Free Pet Insurance Quote - Pet Insurance';

    const metaDesc =
      'Get a free, personalized pet insurance quote in under a minute. Compare plans and find the perfect coverage for your furry friend.';
    let descTag = document.querySelector('meta[name="description"]');
    if (!descTag) {
      descTag = document.createElement('meta');
      descTag.setAttribute('name', 'description');
      document.head.appendChild(descTag);
    }
    descTag.setAttribute('content', metaDesc);

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', window.location.origin + '/quote');

    const ld = {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Get Your Free Pet Insurance Quote',
      url: window.location.origin + '/quote',
      description: metaDesc,
    };
    let ldScript = document.getElementById('ld-quote') as HTMLScriptElement | null;
    if (!ldScript) {
      ldScript = document.createElement('script');
      ldScript.type = 'application/ld+json';
      ldScript.id = 'ld-quote';
      document.head.appendChild(ldScript);
    }
    ldScript.textContent = JSON.stringify(ld);
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen flex flex-col"
      >
        <Navbar />
        <main className="flex-1">
          <QuoteForm />
        </main>
        <Footer />
      </motion.div>
    </AnimatePresence>
  );
};

export default Quote;