import { motion } from "framer-motion";
import Group from "../assets/Group-534.png";
import Group1 from "../assets/Group-535.png";
import Group2 from "../assets/Group-536.png";

const DentalPhotos = () => {
  return (
    <div className="py-12 px-4 md:px-8 lg:px-16">
      {/* Header */}
      <motion.div
        className="text-center max-w-xl mx-auto mb-10"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <p className="uppercase text-sm text-blue-600 tracking-widest mb-3">
          Before and After
        </p>
        <h2 className="text-3xl font-bold mb-4">
          Before and after dental photos
        </h2>
        <p className="text-gray-600 text-xl">
          To see what a smile makeover can accomplish, take a look at our
          dentistry before and after photos.
        </p>
      </motion.div>

      {/* Photo Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-10">
        {[Group, Group1, Group2].map((imgSrc, index) => (
          <motion.div
            key={index}
            className="bg-white p-4 rounded-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
          >
            <img
              src={imgSrc}
              alt={`Dental transformation ${index + 1}`}
              className="w-full h-auto rounded shadow"
            />
          </motion.div>
        ))}
      </div>

      {/* Button */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <button className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-all text-sm">
          View More Works
        </button>
      </motion.div>
    </div>
  );
};

export default DentalPhotos;
