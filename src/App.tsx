import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Pillars from './components/Pillars';
import Sectors from './components/Sectors';
import Events from './components/Events';
import Team from './components/Team';
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
        <Sectors />
        <Events />
        <Team />
        <Ecosystem />
        <Membership />
        <Faq />
        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
