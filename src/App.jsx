import React, { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';

// Lazy load sections for performance
const About = lazy(() => import('./components/About'));
const Products = lazy(() => import('./components/Products'));
const WhyChooseUs = lazy(() => import('./components/WhyChooseUs'));
const Contact = lazy(() => import('./components/Contact'));

const LoadingSpinner = () => (
  <div className="flex items-center justify-center py-20">
    <div className="w-12 h-12 border-4 border-deepDateBrown border-t-transparent rounded-full animate-spin"></div>
  </div>
);

function App() {
  return (
    <div className="min-h-screen bg-warmCream font-sans selection:bg-deepDateBrown selection:text-warmCream">
      <Navbar />
      <Hero />

      <main>
        <Suspense fallback={<LoadingSpinner />}>
          <About />
        </Suspense>

        <Suspense fallback={<LoadingSpinner />}>
          <Products />
        </Suspense>

        <Suspense fallback={<LoadingSpinner />}>
          <WhyChooseUs />
        </Suspense>

        <Suspense fallback={<LoadingSpinner />}>
          <Contact />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}

export default App;
