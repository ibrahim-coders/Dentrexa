import {Link} from 'react-router-dom'
import {
  FaFacebookF,
  FaInstagram,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from 'react-icons/fa';
import { CiLinkedin } from "react-icons/ci";
const Topbar = () => {
  return (
    <div className=" bg-blue-50 ">
      <div className="max-w-7xl mx-auto  flex justify-between items-center px-6 py-2 text-sm text-gray-600 ">
        <div className="flex gap-4 items-center">
          <span className="flex items-center gap-1">
            <FaMapMarkerAlt className="w-4 h-4" /> Preston Rd. United Nations
          </span>
          <span className="flex items-center gap-1">
            <FaPhoneAlt className="w-4 h-4" /> (704) 555-0127
          </span>
        </div>
        <div className="flex gap-3">
          <Link to="https://www.facebook.com/ibrahimcoders/"><FaFacebookF className="w-4 h-4 hover:text-blue-500 cursor-pointer" /> </Link>
          <Link to="https://www.instagram.com/ibrahim_coders/"> <FaInstagram className="w-4 h-4 hover:text-pink-500 cursor-pointer" /></Link>
          <Link to="https://www.linkedin.com/in/ibrahim-coders/">  <CiLinkedin  className="w-4 h-4 hover:text-pink-500 cursor-pointer" /></Link>
          
         
        </div>
      </div>
    </div>
  );
};

export default Topbar;
