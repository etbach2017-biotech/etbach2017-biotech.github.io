import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Pillars from './components/Pillars';
import Reach from './components/Reach';
import Events from './components/Events';
import Membership from './components/Membership';
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
        <Reach />
        <Events />
        <Membership />
      </main>
      <Footer />
    </>
  );
}
