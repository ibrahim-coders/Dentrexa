import logo from '../assets/Logo.png'

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-10 px-4 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and Description */}
        <div>
          {/* Logo */}
        <div className="flex items-center gap-2 text-2xl font-bold text-blue-600 mb-4">
          <img src={logo} alt="Dentist Logo" className="w-20 h-8" />
        </div>

          <p className="text-sm">
            Dental and oral health is an essential part of your overall health and well-being.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="font-semibold text-lg mb-2">Homepage</h3>
          <ul className="space-y-1 text-sm">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Dentists</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li>Blog</li>
            <li>Contact Us</li>
            <li>Privacy Policies</li>
            <li>Terms and Condition</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold text-lg mb-2">Contact Us</h3>
          <p className="text-sm">Street Name, NY 48734</p>
          <p className="text-sm">123-456-7890</p>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center text-sm text-gray-500 mt-10 border-t pt-4">
        DENTREXA © 2025 ALL RIGHTS RESERVED
      </div>
    </footer>
  );
};

export default Footer;
