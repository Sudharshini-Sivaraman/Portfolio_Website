import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

export function HomePage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your email sending logic here
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="overflow-x-hidden">
      <section id="home" className="bg-pink-200 py-16">
        <>
          <style>
            {`
                @import url('https://fonts.googleapis.com/css2?family=Sofia&display=swap');

                .sofia-font {
                  font-family: 'Sofia', sans-serif
              }
            `}
          </style>
          <div className="container mx-auto px-4">
            <img
              src="myimg.jpg"
              alt="susi"
              className="w-64 h-64 rounded-full overflow-hidden object-cover mx-auto block"
            />
            <h1 className="text-6xl font-bold italic sofia-font leading-snug text-center mt-4">
              Hi, I am{' '}
              <span className="text-6xl font-bold italic sofia-font leading-snug text-pink-600">
                Sudharshini
              </span>
            </h1>
            <p className="text-xl text-black mb-8 font-semibold italic sofia-font mb:text-center">
              Computer Science and Engineering Student at Francis Xavier Engineering College, Tirunelveli
            </p>
            <p className="text-2xl text-black italic sofia-font md:text-center md:text-3xl md:mx-10 sm:mx-2 ml-2 text-center">
              I'm a third-year engineering student with a passion for creating user-friendly web interfaces. I specialize in HTML, CSS, Bootstrap, React, and have experience with Tailwind CSS. I'm committed to continuous learning and staying current with industry trends.
            </p>
            <div className="mt-6 space-x-4 flex justify-center">
              <a
                href="contact"
                className="relative rounded px-5 py-2.5 overflow-hidden group bg-pink-600 hover:bg-gradient-to-r hover:from-pink-600 hover:to-pink-600 text-white hover:ring-2 hover:ring-offset-2 hover:ring-pink-700 transition-all ease-out duration-300"
              >
                <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                <span className="relative">Contact Me</span>
              </a>
              <a
                href="Resume.pdf"
                download="Susi_Resume.pdf"
                className="relative rounded px-5 py-2.5 overflow-hidden group bg-pink-600 hover:bg-gradient-to-r hover:from-pink-600 hover:to-pink-600 text-white hover:ring-2 hover:ring-offset-2 hover:ring-pink-700 transition-all ease-out duration-300"
              >
                <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                <span className="relative">
                  Download CV <FontAwesomeIcon icon={faDownload} />
                </span>
              </a>
            </div>
          </div>
        </>
      </section>

      <section id="about" className="py-16 bg-pink-200">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center md:ml-20">
          <div className="md:w-1/2 mx-4 order-2 md:order-2 mt-4 md:mt-0 md:mr-60">
            <h2 className="text-4xl font-bold italic sofia-font leading-snug mb-4">About Me</h2>
            <p className="text-2xl font-normal italic sofia-font leading-snug text-black text-justify">
              Hi, I'm Sudharshini, a passionate frontend developer currently pursuing a degree in Computer Science and Engineering. My journey in web development began with HTML and CSS, and it has evolved into a love for creating interactive and user-friendly web applications. My goal is to become a skilled web developer, and I'm committed to staying up-to-date with the latest trends and technologies in this dynamic field. I've worked on several projects to refine my skills, and I'm excited to continue my journey in the world of web development.
            </p>
          </div>
          <div className="md:w-1/2 mx-4 order-1 md:order-1 lg:mx-20">
            <img
              src="about.jpg"
              alt="About Me"
              className="w-96 h-96 rounded-full overflow-hidden object-cover"
            />
          </div>
        </div>
      </section>

      <section id="skills" className="py-16 bg-pink-200">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold italic sofia-font leading-snug mb-8 text-center">
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-center">
            <div className="bg-pink-100 rounded-lg shadow-md overflow-hidden w-72 h-72 flex flex-col items-center justify-center transform transition duration-300 hover:bg-pink-600 hover:text-white">
              <img
                src="html-logo.png"
                alt="HTML"
                className="w-24 h-24 object-contain transition duration-300"
              />
              <h3 className="text-2xl font-semibold italic sofia-font leading-snug mt-4">HTML</h3>
            </div>
            <div className="bg-pink-100 rounded-lg shadow-md overflow-hidden w-72 h-72 flex flex-col items-center justify-center transform transition duration-300 hover:bg-pink-600 hover:text-white">
              <img
                src="css-logo.png"
                alt="CSS"
                className="w-24 h-24 object-contain transition duration-300"
              />
              <h3 className="text-2xl font-semibold italic sofia-font leading-snug mt-4">CSS</h3>
              <p className="text-lg italic sofia-font mt-2">(Tailwind CSS, Bootstrap)</p>
            </div>
            <div className="bg-pink-100 rounded-lg shadow-md overflow-hidden w-72 h-72 flex flex-col items-center justify-center transform transition duration-300 hover:bg-pink-600 hover:text-white">
              <img
                src="js-logo.png"
                alt="JavaScript"
                className="w-24 h-24 object-contain transition duration-300"
              />
              <h3 className="text-2xl font-semibold italic sofia-font leading-snug mt-4">JavaScript</h3>
            </div>
            <div className="bg-pink-100 rounded-lg shadow-md overflow-hidden w-72 h-72 flex flex-col items-center justify-center transform transition duration-300 hover:bg-pink-600 hover:text-white">
              <img
                src="react-logo.png"
                alt="ReactJS"
                className="w-24 h-24 object-contain transition duration-300"
              />
              <h3 className="text-2xl font-semibold italic sofia-font leading-snug mt-4">ReactJS</h3>
            </div>
            <div className="bg-pink-100 rounded-lg shadow-md overflow-hidden w-72 h-72 flex flex-col items-center justify-center transform transition duration-300 hover:bg-pink-600 hover:text-white">
              <img
                src="c-logo.png"
                alt="C Programming"
                className="w-24 h-24 object-contain transition duration-300"
              />
              <h3 className="text-2xl font-semibold italic sofia-font leading-snug mt-4">C Programming</h3>
            </div>
            <div className="bg-pink-100 rounded-lg shadow-md overflow-hidden w-72 h-72 flex flex-col items-center justify-center transform transition duration-300 hover:bg-pink-600 hover:text-white">
              <img
                src="python-logo.png"
                alt="Python"
                className="w-24 h-24 object-contain transition duration-300"
              />
              <h3 className="text-2xl font-semibold italic sofia-font leading-snug mt-4">Python</h3>
            </div>
            <div className="bg-pink-100 rounded-lg shadow-md overflow-hidden w-72 h-72 flex flex-col items-center justify-center transform transition duration-300 hover:bg-pink-600 hover:text-white">
              <img
                src="java-logo.png"
                alt="Java"
                className="w-24 h-24 object-contain transition duration-300"
              />
              <h3 className="text-2xl font-semibold italic sofia-font leading-snug mt-4">Java</h3>
            </div>
          </div>
        </div>
      </section>
      <section id="Projects" className="py-16 bg-pink-200">
  <div className="container mx-auto px-4">
    <h2 className="text-4xl font-bold italic sofia-font leading-snug mb-8 text-center">
      My Projects
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Project 1: Image Color Detection */}
      <div className="bg-pink-100 rounded-lg shadow-md overflow-hidden">
        <div className="relative w-full h-48">
          <img
            src="path-to-image-color-detection.jpg" // Replace with the actual image path
            alt="Image Color Detection"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <div className="p-6">
          <h3 className="text-2xl font-semibold italic sofia-font mb-4">
            Image Color Detection
          </h3>
          <p className="text-lg font-normal italic sofia-font mb-4">
            Color Naming and RGB Values, OpenCV and NumPy Integration, Using Python.
          </p>
          <a
            href="https://github.com/Sudharshini-Sivaraman/Image-Color-Detection"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-600 hover:underline"
          >
            View on GitHub
          </a>
        </div>
      </div>

      {/* Project 2: E-learning Website */}
      <div className="bg-pink-100 rounded-lg shadow-md overflow-hidden">
        <div className="relative w-full h-48">
          <img
            src="path-to-e-learning-website.jpg" // Replace with the actual image path
            alt="E-learning Website"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <div className="p-6">
          <h3 className="text-2xl font-semibold italic sofia-font mb-4">
            E-learning Website
          </h3>
          <p className="text-lg font-normal italic sofia-font mb-4">
            Interactive User Interface, Efficient State Management, Using ReactJS.
          </p>
          <a
            href="https://github.com/Sudharshini-Sivaraman/E-learning"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-600 hover:underline"
          >
            View on GitHub
          </a>
        </div>
      </div>

      {/* Project 3: FarmFab */}
      <div className="bg-pink-100 rounded-lg shadow-md overflow-hidden">
        <div className="relative w-full h-48">
          <img
            src="path-to-farmfab.jpg" // Replace with the actual image path
            alt="FarmFab"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <div className="p-6">
          <h3 className="text-2xl font-semibold italic sofia-font mb-4">
            FarmFab
          </h3>
          <p className="text-lg font-normal italic sofia-font mb-4">
            Agriculture Website, With Blogs and Services, Using ReactJS.
          </p>
          <a
            href="https://github.com/Sudharshini-Sivaraman/FarmFab-AgricultureWebsite"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-600 hover:underline"
          >
            View on GitHub
          </a>
        </div>
      </div>

      {/* Project 4: Online Book Store */}
      <div className="bg-pink-100 rounded-lg shadow-md overflow-hidden">
        <div className="relative w-full h-48">
          <img
            src="path-to-online-book-store.jpg" // Replace with the actual image path
            alt="Online Book Store"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <div className="p-6">
          <h3 className="text-2xl font-semibold italic sofia-font mb-4">
            Online Book Store
          </h3>
          <p className="text-lg font-normal italic sofia-font mb-4">
            Admin: Store, Add & Remove Books, User: Search & Buy Books, Using Fullstack Java with MySQL Database.
          </p>
          <a
            href="https://github.com/Sudharshini-Sivaraman/Online-Book-Store"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-600 hover:underline"
          >
            View on GitHub
          </a>
        </div>
      </div>

      {/* Project 5: Arch Daily Website */}
      <div className="bg-pink-100 rounded-lg shadow-md overflow-hidden">
        <div className="relative w-full h-48">
          <img
            src="path-to-arch-daily.jpg" // Replace with the actual image path
            alt="Arch Daily Website"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <div className="p-6">
          <h3 className="text-2xl font-semibold italic sofia-font mb-4">
            Arch Daily Website
          </h3>
          <p className="text-lg font-normal italic sofia-font mb-4">
            Architecture Website featuring a comprehensive catalog of architectural designs and articles. Built using ReactJS and TailwindCSS for a responsive and modern user interface.
          </p>
          <a
            href="https://github.com/Sudharshini-Sivaraman/Arch-Daily-Website"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-600 hover:underline"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </div>
  </div>
</section>



      <section id="contact" className="py-16 bg-pink-200">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold italic sofia-font leading-snug mb-8 text-center">
            Contact Me
          </h2>
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-pink-100 p-8 rounded-lg shadow-md">
            <div className="mb-6">
              <label className="block text-xl font-semibold italic sofia-font mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-xl font-semibold italic sofia-font mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-xl font-semibold italic sofia-font mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600"
                rows="5"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-pink-600 text-white py-3 rounded-lg hover:bg-pink-700 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      
    </div>
  );
}
