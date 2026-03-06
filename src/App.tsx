import { LanguageProvider } from './contexts/LanguageContext';
import Navigation from './components/Navigation';
import Hero from './sections/Hero';
import Problem from './sections/Problem';
import Solution from './sections/Solution';
import Pricing from './sections/Pricing';
import Trust from './sections/Trust';
import Blog from './sections/Blog';
import Newsletter from './sections/Newsletter';
import Footer from './sections/Footer';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Navigation />
        <main>
          <Hero />
          <Problem />
          <Solution />
          <Pricing />
          <Trust />
          <Blog />
          <Newsletter />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
