import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Capabilities } from '@/components/Capabilities';
import { ProofOfWork } from '@/components/ProofOfWork';
import { PaintStudioTeaser } from '@/components/PaintStudioTeaser';
import { About } from '@/components/About';
import { QuoteSection } from '@/components/QuoteSection';
import { Footer } from '@/components/Footer';
import { ProjectDetailPage } from '@/pages/ProjectDetailPage';
import { PaintStudioPage } from '@/pages/PaintStudioPage';

function HomePage() {
  return (
    <>
      <Hero />
      <Capabilities />
      <ProofOfWork />
      <PaintStudioTeaser />
      <About />
      <QuoteSection />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-cream-50">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects/:id" element={<ProjectDetailPage />} />
          <Route path="/paint-studio" element={<PaintStudioPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
