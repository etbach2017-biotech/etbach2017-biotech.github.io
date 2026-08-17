import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Pillars from './components/Pillars';
import Corridor from './components/Corridor';
import Sectors from './components/Sectors';
import Reach from './components/Reach';
import Events from './components/Events';
import Ecosystem from './components/Ecosystem';
import Membership from './components/Membership';
import Faq from './components/Faq';
import CtaBand from './components/CtaBand';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Pillars />
        <Corridor />
        <Sectors />
        <Reach />
        <Events />
        <Ecosystem />
        <Membership />
        <Faq />
        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
