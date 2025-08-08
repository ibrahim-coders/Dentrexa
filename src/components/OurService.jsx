import { FaArrowRight, FaTooth } from 'react-icons/fa6';
import { TbPhysotherapist } from "react-icons/tb";
import { GiMedicines } from "react-icons/gi";
const OurService = () => {
  return (
    <div id="services" className="bg-blue-50 py-12 px-4 md:px-8 lg:px-16">
      {/* Header */}
      <div className="text-center max-w-xl mx-auto mb-10">
        <p className="uppercase text-sm text-blue-600 tracking-widest mb-3">
          Our Services
        </p>
        <h2 className="text-3xl font-bold mb-4">We provide quality services</h2>
        <p className="text-gray-600 text-sm">
          Visiting the dentist regularly will help keep the rest of your body
          healthy.
        </p>
      </div>

      {/* Services Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {/* Card 1 */}
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-all">
          <FaTooth className="text-blue-600 text-3xl mb-4" />
          <h4 className="text-lg font-semibold mb-2">Dentistry</h4>
          <p className="text-sm text-gray-600 mb-4">
            We offer comprehensive treatments for your teeth and gums, including
            replacements.
          </p>
          <a
            href="#"
            className="flex items-center text-blue-600 text-sm font-medium hover:underline"
          >
            Learn more <FaArrowRight className="ml-2" />
          </a>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-all">
          <TbPhysotherapist className="text-blue-600 text-3xl mb-4" />
          <h4 className="text-lg font-semibold mb-2">Therapiya</h4>
          <p className="text-sm text-gray-600 mb-4">
            Our trained dental therapists provide X-rays and hygiene services
            for preventive care.
          </p>
          <a
            href="#"
            className="flex items-center text-blue-600 text-sm font-medium hover:underline"
          >
            Learn more <FaArrowRight className="ml-2" />
          </a>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-all">
          <GiMedicines className="text-blue-600 text-3xl mb-4" />
          <h4 className="text-lg font-semibold mb-2">Pharmacology</h4>
          <p className="text-sm text-gray-600 mb-4">
            Our experts research and test medications to create effective dental
            drug therapies.
          </p>
          <a
            href="#"
            className="flex items-center text-blue-600 text-sm font-medium hover:underline"
          >
            Learn more <FaArrowRight className="ml-2" />
          </a>
        </div>
      </div>

      {/* View All Services Button */}
      <div className="text-center mt-10">
        <button className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-all text-sm">
          View All Services
        </button>
      </div>
    </div>
  );
};

export default OurService;
