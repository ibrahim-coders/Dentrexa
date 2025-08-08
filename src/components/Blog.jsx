import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import omar from "../assets/omar.jpg";
import diana from "../assets/diana.jpg";
import caroline from "../assets/caroline.jpg";

const blogData = [
  {
    id: 1,
    title: "What is best for whitening teeth?",
    category: "Physical Health",
    date: "July 20, 2025",
    desc: "Whitening, or “tooth bleaching”, is the most common cosmetic dental procedure....",
    image: omar,
    path: "/blog/1",
  },
  {
    id: 2,
    title: "Why you should visit a dentist?",
    category: "Physical Health",
    date: "July 20, 2025",
    desc: "PREVENT PLAQUE: Plaque is a sticky deposit that clings to your...",
    image: diana,
    path: "/blog/2",
  },
  {
    id: 3,
    title: "Dental Rules and Regulations",
    category: "Physical Health",
    date: "July 20, 2025",
    desc: "Several studies have suggested that dentists and dental students are at...",
    image: caroline,
    path: "/blog/3",
  },
];

const Blog = () => {
  return (
    <div id="blog" className="w-full bg-white py-16 px-4 md:px-8 lg:px-16">
      {/* Header */}
      <motion.div
        className="text-center max-w-xl mx-auto mb-12"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <p className="uppercase text-sm text-blue-600 tracking-widest mb-2">
          BLOG
        </p>
        <h2 className="text-3xl font-bold mb-3">Stay updated with our news</h2>
        <p className="text-gray-600 text-base">
          Dentists are doctors who specialize in oral health. We have the most
          professional and highly skilled dentists.
        </p>
      </motion.div>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogData.map(({ id, title, category, date, desc, image, path }, index) => (
          <motion.div
            key={id}
            className="bg-gray-100 rounded-lg shadow hover:shadow-lg transition p-4"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            viewport={{ once: true }}
          >
            <img
              src={image}
              alt={title}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <p className="text-blue-500 text-sm mb-1">{category}</p>
            <h3 className="text-xl font-semibold mb-1">{title}</h3>
            <span className="text-xs text-gray-400 block mb-2">{date}</span>
            <p className="text-gray-600 text-sm mb-4">{desc}</p>
            <Link
              to={path}
              className="flex items-center text-blue-600 text-sm font-medium hover:underline"
            >
              Learn more <FaArrowRight className="ml-2" />
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
