import { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import logo from '../assets/Logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleMenu = () => setIsOpen(!isOpen);

  // Handle scroll to update active link
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'team', 'testimonials', 'blog', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop - 100;
          const offsetBottom = offsetTop + element.offsetHeight;
          const scrollPosition = window.scrollY;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItemClass = (id) =>
    `cursor-pointer hover:text-blue-600 ${
      activeSection === id ? 'text-blue-600 border-b-2 border-blue-600 pb-1' : ''
    }`;

  return (
    <div className="bg-white sticky top-0 z-50 shadow-sm">
      <nav className="flex justify-between items-center px-6 py-4 relative max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-2 text-2xl font-bold text-blue-600">
          <img src={logo} alt="Dentist Logo" className="w-20 h-8" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
          {['home', 'about', 'services', 'team', 'testimonials', 'blog'].map((id) => (
            <li key={id}>
              <a href={`#${id}`} className={navItemClass(id)}>
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            </li>
          ))}
        </ul>

        {/* Contact Button - Desktop */}
        <a
          href="#contact"
          className="hidden md:block border-2 border-blue-500 px-4 py-1 rounded-md text-blue-500 hover:bg-blue-500 hover:text-white transition"
        >
          Contact us
        </a>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden text-2xl text-blue-600" onClick={toggleMenu}>
          {isOpen ? <FiX /> : <FiMenu />}
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-md py-4 px-6 z-10 md:hidden">
            <ul className="flex flex-col gap-4 text-gray-700 font-medium">
              {['home', 'about', 'services', 'team', 'testimonials', 'blog', 'contact'].map((id) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    onClick={() => setIsOpen(false)}
                    className={navItemClass(id)}
                  >
                    {id === 'contact' ? (
                      <button className="w-full border-2 border-blue-500 px-4 py-2 rounded-md text-blue-500 hover:bg-blue-500 hover:text-white transition mt-2">
                        Contact us
                      </button>
                    ) : (
                      id.charAt(0).toUpperCase() + id.slice(1)
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
