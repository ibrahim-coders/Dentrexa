import { useEffect } from 'react';
import Glide from '@glidejs/glide';

import team1 from '../assets/team-2-1-1.png';
import team2 from '../assets/team-1-1.png';
import team3 from '../assets/team-2-1.png';
import team4 from '../assets/team-1-1-1.png';
import team5 from '../assets/team-2-1-2.png';
import team6 from '../assets/team-4-1.png';
import team7 from '../assets/team-4-1.png';

const teamMembers = [
  {
    name: 'Dr. Bibon Ahamed',
    role: 'Prosthodontics Specialist',
    img: team1,
  },
  {
    name: 'Dr. Ria Sultana',
    role: 'Cosmetic Dentist',
    img: team2,
  },
  {
    name: 'Dr. Mahmud Reza',
    role: 'Pediatric Dentist',
    img: team3,
  },
  {
    name: 'Dr. Ayesha Noor',
    role: 'Orthodontist',
    img: team4,
  },
  {
    name: 'Dr. Bibon Rahman',
    role: 'Oral Surgeon',
    img: team5,
  },
  {
    name: 'Dr. Anika Hossain',
    role: 'Endodontist',
    img: team6,
  },
  {
    name: 'Dr. Tamim Bin Zahid',
    role: 'Implant Specialist',
    img: team7,
  },
];

export default function CarouselIndicatorsOutside() {
  useEffect(() => {
    const slider = new Glide('.glide-05', {
      type: 'carousel',
      focusAt: 'center',
      perView: 3,
      autoplay: 3000,
      animationDuration: 700,
      gap: 24,
      breakpoints: {
        1024: { perView: 2 },
        640: { perView: 1 },
      },
    });

    slider.mount();

    return () => {
      slider.destroy();
    };
  }, []);

  return (
    <div id="team" className="w-full bg-white py-12 px-4 md:px-8 lg:px-16">
      {/* Header */}
      <div className="text-center max-w-xl mx-auto mb-10">
        <p className="uppercase text-sm text-blue-600 tracking-widest mb-3">
          Our Services
        </p>
        <h2 className="text-3xl font-bold mb-4">Meet our skilled dentists</h2>
        <p className="text-gray-600 text-xl">
          Dentists are doctors who specialize in oral health. We have the most
          professional and highly skilled dentists.
        </p>
      </div>

      {/* Carousel */}
      <div className="glide-05 relative w-full max-w-7xl mx-auto">
        {/* Slides */}
        <div className="overflow-hidden" data-glide-el="track">
          <ul className="flex p-0 gap-6">
            {teamMembers.map((member, index) => (
              <li
                key={index}
                className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center text-center"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="rounded-lg w-full h-auto mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-800">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-500">{member.role}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Indicators */}
        <div
          className="flex w-full items-center justify-center gap-2 mt-6"
          data-glide-el="controls[nav]"
        >
          {[...Array(4)].map((_, idx) => (
            <button
              key={idx}
              className="group p-2"
              data-glide-dir={`=${idx}`}
              aria-label={`Go to slide ${idx + 1}`}
            >
              <span className="block h-2 w-2 rounded-full bg-gray-300 group-focus:ring-2 ring-blue-600 transition-colors duration-300"></span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
