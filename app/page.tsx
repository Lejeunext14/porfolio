import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 to-black text-white">
      <style>{`
        @keyframes glow {
          0%, 100% { text-shadow: 0 0 10px rgba(96, 165, 250, 0.5); }
          50% { text-shadow: 0 0 20px rgba(168, 85, 247, 0.8); }
        }
        
        .nav-logo {
          animation: glow 3s ease-in-out infinite;
        }

        .nav-link {
          position: relative;
          overflow: hidden;
        }

        .nav-link::before {
          content: '';
          position: absolute;
          bottom: -2px;
          left: -100%;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, transparent, #60a5fa, transparent);
          transition: left 0.3s ease;
        }

        .nav-link:hover::before {
          left: 100%;
        }
      `}</style>
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gradient-to-r from-black/90 via-black/80 to-black/90 backdrop-blur-md border-b border-blue-500/30 shadow-lg shadow-blue-500/20 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex justify-between items-center">
          <h1 className="text-lg sm:text-xl lg:text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent nav-logo">
            My Portfolio
          </h1>
          <div className="flex gap-3 sm:gap-6 lg:gap-8 text-xs sm:text-sm lg:text-base">
            <a href="#projects" className="nav-link hover:text-blue-400 transition duration-300">Projects</a>
            <a href="#about" className="nav-link hover:text-blue-400 transition duration-300">About</a>
            <a href="#contact" className="nav-link hover:text-blue-400 transition duration-300">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-16 sm:pt-20 lg:pt-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            {/* Left Side - Text */}
            <div>
              <h2 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 lg:mb-6 leading-tight">
                Hi, I'm <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Lejeune A Daseco</span>
              </h2>
              <p className="text-base sm:text-lg lg:text-2xl text-zinc-400 mb-4 sm:mb-6 lg:mb-8">Aspiring Full-Stack Web Developer</p>
              <p className="text-sm sm:text-base lg:text-lg text-zinc-300 mb-6 sm:mb-8 lg:mb-10 leading-relaxed">
                I'm passionate about creating beautiful and functional web experiences. 
                Explore my work, learn more about me, and let's build something amazing together.
              </p>
              <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 lg:gap-6">
                <a href="#projects" className="px-5 sm:px-6 lg:px-8 py-2 sm:py-2.5 lg:py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition text-center text-xs sm:text-sm lg:text-base">
                  View My Work
                </a>
                <a href="#contact" className="px-5 sm:px-6 lg:px-8 py-2 sm:py-2.5 lg:py-3 border border-zinc-500 hover:border-blue-400 rounded-lg font-semibold transition text-center text-xs sm:text-sm lg:text-base">
                  Get In Touch
                </a>
              </div>
            </div>
            {/* Right Side - Profile Picture */}
            <div className="flex justify-center md:justify-end items-center">
              <Image
                src="/profilepic.jpg"
                alt="Lejeune A Daseco"
                width={300}
                height={300}
                className="rounded-full border-4 sm:border-4 lg:border-4 border-blue-400 shadow-lg w-36 h-36 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-zinc-900/50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 sm:mb-10 lg:mb-12">Featured Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center">
            {/* Left Side - Text */}
            <div>
              <h4 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-5 lg:mb-6">Agrivail</h4>
              <p className="text-xs sm:text-sm lg:text-base text-zinc-300 mb-6 sm:mb-7 lg:mb-8 leading-relaxed">
                An agriculture-focused web application designed to help farmers and agricultural professionals manage their operations efficiently. Built with modern technologies to provide a seamless user experience, Technologies used Laravel, and MySQL.
              </p>
              <a href="https://agrivail.free.nf/?i=1" target="_blank" rel="noopener noreferrer" className="inline-block px-5 sm:px-6 lg:px-8 py-2 sm:py-2.5 lg:py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition text-xs sm:text-sm lg:text-base">
                View Project →
              </a>
            </div>
            {/* Right Side - Project Card */}
            <div className="bg-zinc-800 rounded-lg p-5 sm:p-6 lg:p-8 hover:bg-zinc-700 transition border border-zinc-700">
              <div className="bg-gradient-to-br from-green-500 to-emerald-500 h-32 sm:h-36 lg:h-40 rounded mb-4 sm:mb-5 lg:mb-6 flex items-center justify-center">
                <span className="text-4xl sm:text-5xl">🌾</span>
              </div>
              <h4 className="text-lg sm:text-xl lg:text-xl font-bold mb-2 sm:mb-3">Live Demo</h4>
              <p className="text-xs sm:text-sm lg:text-base text-zinc-400 mb-4 sm:mb-5 lg:mb-6">
                Click the button to explore the Agrivail application.
              </p>
              <a href="https://agrivail.free.nf/?i=1" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 font-semibold text-xs sm:text-sm lg:text-base">
                Visit Website →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 sm:mb-10 lg:mb-12">About Me</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-12">
            <div>
              <p className="text-xs sm:text-sm lg:text-base text-zinc-300 mb-4 sm:mb-5 lg:mb-6 leading-relaxed">
                I'm an aspiring full-stack web developer with a passion for building modern web applications. 
                I specialize in front-end technologies like React and Next.js, combined with backend expertise 
                in Laravel and MySQL databases. My goal is to create seamless, scalable web solutions.
              </p>
              <p className="text-xs sm:text-sm lg:text-base text-zinc-300 leading-relaxed">
                I'm constantly learning and staying updated with the latest web development trends. 
                When I'm not coding, you'll find me exploring new technologies, working on personal projects, 
                or contributing to the developer community.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg p-5 sm:p-6 lg:p-8 border border-zinc-700">
              <h4 className="text-base sm:text-lg lg:text-xl font-bold mb-5 sm:mb-6 lg:mb-8">Skills & Technologies</h4>
              <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:gap-6">
                <div className="flex flex-col items-center gap-2">
                  <div className="text-2xl sm:text-3xl lg:text-4xl">⚛️</div>
                  <span className="text-xs sm:text-xs lg:text-sm font-semibold text-center">React</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="text-2xl sm:text-3xl lg:text-4xl">▲</div>
                  <span className="text-xs sm:text-xs lg:text-sm font-semibold text-center">Next.js</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="text-2xl sm:text-3xl lg:text-4xl">🔴</div>
                  <span className="text-xs sm:text-xs lg:text-sm font-semibold text-center">Laravel</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="text-2xl sm:text-3xl lg:text-4xl">🗄️</div>
                  <span className="text-xs sm:text-xs lg:text-sm font-semibold text-center">MySQL</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reflection Section */}
      <section id="reflection" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 sm:mb-10 lg:mb-12">Reflection</h3>
          <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-lg p-5 sm:p-6 lg:p-8 border border-zinc-700">
            <p className="text-sm sm:text-base lg:text-lg font-semibold mb-6 sm:mb-7 lg:mb-8 text-blue-400">Answer the following questions:</p>
            <div className="space-y-4 sm:space-y-5 lg:space-y-6">
              <div>
                <h4 className="text-sm sm:text-base lg:text-lg font-bold mb-1 sm:mb-2 text-white">a. What technologies did you use and why?</h4>
                <p className="text-xs sm:text-sm lg:text-base text-zinc-300 leading-relaxed">
                  [I Used React and Next.js for the front-end because they allow for efficient development of dynamic user interfaces.]
                </p>
              </div>
              <div>
                <h4 className="text-sm sm:text-base lg:text-lg font-bold mb-1 sm:mb-2 text-white">b. Which parts of the portfolio were easiest for you?</h4>
                <p className="text-xs sm:text-sm lg:text-base text-zinc-300 leading-relaxed">
                  [The easiest part was setting up the project structure and styling the components using Tailwind CSS.]
                </p>
              </div>
              <div>
                <h4 className="text-sm sm:text-base lg:text-lg font-bold mb-1 sm:mb-2 text-white">c. Which parts were most challenging?</h4>
                <p className="text-xs sm:text-sm lg:text-base text-zinc-300 leading-relaxed">
                  [The most challenging part was implementing responsive design and ensuring cross-browser compatibility.]
                </p>
              </div>
              <div>
                <h4 className="text-sm sm:text-base lg:text-lg font-bold mb-1 sm:mb-2 text-white">d. What technologies are you most interested in learning?</h4>
                <p className="text-xs sm:text-sm lg:text-base text-zinc-300 leading-relaxed">
                  [I'm particularly interested in learning more about Mobile application development using Flutter and advanced backend frameworks like Node.js with Express.]
                </p>
              </div>
              <div>
                <h4 className="text-sm sm:text-base lg:text-lg font-bold mb-1 sm:mb-2 text-white">e. What kind of applications do you want to build in the future?</h4>
                <p className="text-xs sm:text-sm lg:text-base text-zinc-300 leading-relaxed">
                  [I want to build scalable web and mobile applications that solve real-world problems and provide seamless user experiences.]
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-zinc-900/50">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-7 lg:mb-8">Let's Work Together</h3>
          <p className="text-xs sm:text-sm lg:text-lg text-zinc-300 mb-6 sm:mb-7 lg:mb-8 max-w-2xl mx-auto">
            I'm always interested in hearing about new projects, opportunities, and learning experiences.
          </p>
          <a 
            href="mailto:your.email@example.com" 
            className="inline-block px-5 sm:px-6 lg:px-8 py-2 sm:py-2.5 lg:py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition text-xs sm:text-sm lg:text-base"
          >
            Send Me an Email
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-6 sm:py-7 lg:py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center text-zinc-400 text-xs sm:text-sm">
          <p>© 2026 My Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
