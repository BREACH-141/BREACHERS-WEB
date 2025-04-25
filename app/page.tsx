import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/hero';
import { Services } from '@/components/services';
import { Testimonials } from '@/components/testimonials';
import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}