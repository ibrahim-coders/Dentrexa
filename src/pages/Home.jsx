import Navbar from '../components/Navbar';
import About from '../components/About';
import Topbar from '../components/Topbar';
import Hero from '../components/Hero';
import OurService from '../components/OurService';
import DentalPhotos from '../components/DentalPhotos';
import CarouselIndicatorsOutside from '../components/Team';
import Testimonial from '../components/Testimonial'
import StatsCounter from '../components/StatsCounter'
import Blog from '../components/Blog'
import ParallaxSection from '../components/ParallaxSection'
import AppointmentForm from '../components/AppointmentForm'
import Footer from '../components/Footer'
const Home = () => {
  return (
    <>
      <main className="w-full  bg-white shadow ">
        {/* Top Info Bar */}

        <Topbar />

        {/* Navigation Bar */}
        <Navbar />
        {/* Hero Section */}
        <Hero />

        <About />
        <OurService />
        <DentalPhotos />
        <CarouselIndicatorsOutside />
        <Testimonial/>
        <StatsCounter/>
        <Blog/>
        {/* <ParallaxSection/> */}
        <AppointmentForm/>
        <Footer/>
      </main>
    </>
  );
};

export default Home;
