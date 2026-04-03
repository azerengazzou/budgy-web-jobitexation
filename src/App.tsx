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
import PageLayout from './styles/pageLayout';

function App() {
  return (
    <LanguageProvider>
      <PageLayout>
        <Navigation />

        <main>
          <HeroNew />
          <Problem />
          <Solution />
          {/* <Pricing /> */}
          <Trust />
          <Blog />
          <Newsletter />
        </main>

        <Footer />
      </PageLayout>
    </LanguageProvider>
  );
}

export default App;
