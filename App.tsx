import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Capabilities } from '@/components/Capabilities';
import { ProofOfWork } from '@/components/ProofOfWork';
import { PaintStudioSection } from '@/components/PaintStudio';
import { About } from '@/components/About';
import { QuoteSection } from '@/components/QuoteSection';
import { Footer } from '@/components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-cream-50">
      <Header />
      <main>
        <Hero />
        <Capabilities />
        <ProofOfWork />
        <PaintStudioSection />
        <About />
        <QuoteSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
