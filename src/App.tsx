import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { FeaturedCategories } from './components/FeaturedCategories';
import { HowItWorks } from './components/HowItWorks';
import { BestSellers } from './components/BestSellers';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#f7f0e0]">
      <Navigation />
      <Hero />
      <FeaturedCategories />
      <HowItWorks />
      <BestSellers />
      <Testimonials />
      <Footer />
    </div>
  );
}
