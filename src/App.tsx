import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Story from './components/Story';
import SignatureDishes from './components/SignatureDishes';
import Experience from './components/Experience';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Reservation from './components/Reservation';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-brand-black">
      <Navbar />
      <Hero />
      <Story />
      <SignatureDishes />
      <Experience />
      <Menu />
      <Gallery />
      <Reservation />
      <Footer />
    </div>
  );
}
