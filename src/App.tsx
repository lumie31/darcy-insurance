import CTA from './components/CTA';
import Header from './components/Header';
import Services from './components/Services';
import Support from './components/Support';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Testimony from './components/Testimony';

export default function App() {
  return (
    <div className='wrapper'>
      <Header />
      <CTA />
      <Services />
      <Testimony />
      <Support />
      <Contact />
      <Footer />
    </div>
  );
}
