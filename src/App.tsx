import { LanguageProvider } from './contexts/LanguageContext';
import Navigation from './components/Navigation';
import HeroNew from './sections/HeroNew';
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
      <div className="min-h-screen bg-gradient-to-br from-[#81A6C6] via-[#AACDDC] to-[#AACDDC]">
        <Navigation />
        <main>
          <HeroNew />
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
