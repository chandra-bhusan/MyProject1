import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Rooms from './components/Rooms';
import Availability from './components/Availability';
import Food from './components/Food';
import Facilities from './components/Facilities';
import AdditionalPhotos from './components/AdditionalPhotos';
import Location from './components/Location';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="space-y-8 md:space-y-12 lg:space-y-16">
        <Hero />
        <Rooms />
        <Availability />
        <Food />
        <Facilities />
        <AdditionalPhotos />
        <Location />
        <Footer />
      </main>
    </div>
  );
}

export default App;
