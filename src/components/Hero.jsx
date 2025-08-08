import doctor from '../assets/doctor.png';

const Hero = () => {
  return (
    <section id="home" className=" bg-blue-50">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between px-6 lg:px-24 py-12 max-w-7xl mx-auto">
        <div className="max-w-xl text-center lg:text-left">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">
            Life is short, smile while <br className="hidden lg:block" /> you
            still have teeth.
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            Dental and oral health is an essential part of your overall health
            and well-being.
          </p>
        <a
  href="#contact"
  className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition cursor-pointer inline-block"
>
  BOOK AN APPOINTMENT
</a>

        </div>
        <div className="mb-8 lg:mb-0">
          <img
            src={doctor}
            alt="Dentist Hero"
            className="object-cover w-[250px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
