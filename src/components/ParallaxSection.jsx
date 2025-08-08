import mid from '../assets/mid-adult.jpg'

const ParallaxSection = () => {
  return (
    <section
      className="relative bg-fixed bg-center bg-cover py-28 px-6"
      style={{
        backgroundImage:
          `url(${mid})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>

      {/* Content */}
      <div className="relative max-w-4xl mx-auto text-center text-white space-y-6">
        <h2 className="text-4xl font-bold">
          We always ready for your health
        </h2>
        <p className="text-lg max-w-xl mx-auto">
          We take great satisfaction in helping you maintain optimal oral health utilizing the most current dental technologies.
        </p>
        <button
          className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded shadow-lg transition"
          onClick={() => alert('Book appointment clicked!')}
        >
          BOOK AN APPOINTMENT
        </button>
      </div>
    </section>
  );
};

export default ParallaxSection;
