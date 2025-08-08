import { useState } from 'react';
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CRO",
    image: "https://i.pravatar.cc/150?img=32",
    text: "                                                Definitely recommend Dentrexa. The dentist & staff  was very friendly and thorough with explaining  everything. The dentist was amazing, I couldn't believe  how fast and painless the treatment was.                                            ",
  },
  {
    id: 2,
    name: "Michael Lee",
    role: "Manager",
    image: "https://i.pravatar.cc/150?img=45",
    text: "                                                Definitely recommend Dentrexa. The dentist & staff  was very friendly and thorough with explaining  everything. The dentist was amazing, I couldn't believe  how fast and painless the treatment was.                                            ",
  },
  {
    id: 3,
    name: "Emma Williams",
    role: "Marketing Lead",
    image: "https://i.pravatar.cc/150?img=65",
    text: "                                                Definitely recommend Dentrexa. The dentist & staff  was very friendly and thorough with explaining  everything. The dentist was amazing, I couldn't believe  how fast and painless the treatment was.                                            ",
  },
];

const Testimonial = () => {
  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const { name, role, image, text } = testimonials[current];

  return (
    <div id="testimonials" className="bg-gray-100 py-16 px-4">
      {/* Section Header */}
      <div className="text-center max-w-xl mx-auto mb-10">
        <p className="uppercase text-sm text-blue-600 tracking-widest mb-2">
          Testimonial
        </p>
        <h2 className="text-3xl font-bold mb-3">Loved by thousands of people</h2>
        <p className="text-gray-600 text-lg">
          Our Clinic has been loved by thousands of people across the world. Hear what they have to say.
        </p>
      </div>

      {/* Testimonial Card */}
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-6 md:flex-row md:items-start md:justify-between bg-white shadow-lg rounded-lg p-6 md:p-10 relative">
        {/* Left Button */}
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition"
        >
          <FaCaretLeft size={20} />
        </button>

        {/* Image */}
        <div className="flex-shrink-0 ml-6">
          <img
            src={image}
            alt={name}
            className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-full"
          />
        </div>

        {/* Content */}
        <div className="flex-1 text-center md:text-left mt-4 md:mt-0">
          <p className="text-gray-700 text-lg italic mb-4">"{text}"</p>
          <h3 className="text-xl font-semibold">{name}</h3>
          <p className="text-sm text-gray-500">{role}</p>
        </div>

        {/* Right Button */}
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition"
        >
          <FaCaretRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default Testimonial;
