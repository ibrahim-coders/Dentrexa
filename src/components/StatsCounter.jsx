import CountUp from 'react-countup';
import { FaChartPie } from "react-icons/fa";
import { GiSelfLove } from "react-icons/gi";
import { MdOutlineWoman } from "react-icons/md";
import { FaParachuteBox } from "react-icons/fa6";

const StatsCounter = () => {
  const stats = [
    { id: 1, value: 20, suffix: '+', label: 'Years Experience', icon: FaChartPie },
    { id: 2, value: 4500, suffix: '+', label: 'Dental Services', icon: GiSelfLove },
    { id: 3, value: 200, suffix: '+', label: 'Expert Dentists', icon: MdOutlineWoman },
    { id: 4, value: 20, suffix: '+', label: 'Awards', icon: FaParachuteBox },
  ];

  return (
    <div className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map(({ id, value, suffix, label, icon: Icon }) => (
          <div key={id} className="flex flex-col items-center">
            <Icon className="text-blue-600 text-4xl mb-4" />
            <h3 className="text-4xl font-bold text-blue-600">
              <CountUp end={value} duration={2} suffix={suffix} />
            </h3>
            <p className="mt-2 text-lg text-gray-600">{label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsCounter;
