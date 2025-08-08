import { AiOutlineBarcode } from 'react-icons/ai';
import { FaHeartCirclePlus } from 'react-icons/fa6';
import { motion } from 'framer-motion';
import Rectangle from '../assets/Rectangle-5.png';
import Rectangle1 from '../assets/Rectangle-6.png';

const About = () => {
  return (
    <div id="about">
      <section className="px-6 py-12 lg:px-24 flex flex-col lg:flex-row gap-12 items-center max-w-7xl mx-auto">
        
        {/* Text Section with Animation */}
        <motion.div
          className="flex-1 max-w-xl text-center lg:text-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <h2 className="uppercase text-sm text-blue-600 my-8 tracking-widest">
            About Us
          </h2>
          <h1 className="text-3xl font-semibold mb-4 md:mb-8">
            Welcome to Dentrexa
          </h1>
          <p className="text-gray-600 my-4 sm:my-8">
            It is important that oral hygiene be carried out on a regular basis
            to enable prevention of dental disease.
          </p>

          <div className="mb-4 sm:mb-8">
            <div className="flex items-start gap-3 mb-4 sm:mb-8">
              <div className="bg-blue-100 p-2 rounded-full">
                <AiOutlineBarcode className="size-4 text-blue-600" />
              </div>
              <div>
                <h4 className="font-semibold">Our Mission</h4>
                <p className="text-sm text-gray-600">
                  Aware people on oral health so as to help in early diagnosis
                  and treatment of diseases...
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="bg-blue-100 p-2 rounded-full">
                <FaHeartCirclePlus className="size-4 text-blue-600" />
              </div>
              <div>
                <h4 className="font-semibold">Our Vision</h4>
                <p className="text-sm text-gray-600">
                  Provide the highest quality dental care as an outstanding
                  hospital chain...
                </p>
              </div>
            </div>
          </div>

          <button className="border border-blue-500 px-4 py-2 text-blue-500 rounded-md hover:bg-blue-500 hover:text-white transition">
            More About Us
          </button>
        </motion.div>

        {/* Image Section with Animation */}
        <motion.div
          className="flex-1 flex flex-col gap-6 w-full max-w-sm"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.img
            src={Rectangle}
            alt="Dental Team"
            className="rounded-md shadow"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
          <motion.img
            src={Rectangle1}
            alt="Dental Treatment"
            className="rounded-md shadow"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </section>
    </div>
  );
};

export default About;
