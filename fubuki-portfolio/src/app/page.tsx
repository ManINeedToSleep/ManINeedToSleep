export default function HomePage() {
  return (
    <>
      {/* Hero/Landing Section */}
      <section id="home" className="min-h-[calc(100vh-6rem)] flex flex-col items-center justify-center text-center p-8 bg-fubuki-white rounded-lg shadow-lg my-8">
        <h1 className="font-display text-5xl md:text-6xl font-bold mb-4 text-fubuki-dark-blue">
          Bryan Willson Gunawan
        </h1>
        <p className="font-flair text-3xl text-fubuki-primary-blue mb-8">
          Foxcore Developer: Powered by Coffee and Anime
        </p>
        <p className="font-sans text-lg max-w-2xl text-fubuki-text-secondary">
          Welcome to my digital den! Scroll down to learn more about me and my projects.
        </p>
        {/* Placeholder for Fubuki-themed graphic or animation */}
      </section>

      {/* About Me Section */}
      <section id="about" className="py-16 bg-fubuki-light-gray rounded-lg shadow-lg my-8">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-4xl font-bold text-center mb-12 text-fubuki-dark-blue">About Me</h2>
          <div className="max-w-3xl mx-auto bg-fubuki-white p-8 rounded-lg shadow-md">
            <p className="font-sans mb-4 text-fubuki-text-secondary">
              As a Full Stack Engineer at Launchpad Philly, I design and develop full-stack applications using modern frameworks like React, Next.js, Firebase, TypeScript, and PostgreSQL. I&apos;ve delivered real-world solutions through sprint-based collaboration and creative problem solving. A standout project of mine is the Doki Doki Productivity Companion, an anime-themed AI tool that supports Pomodoro timing, goal tracking, and real-time analytics via virtual companions.
            </p>
            <p className="font-sans mb-4 text-fubuki-text-secondary">
              Previously, I contributed to Bentley Systems, improving interaction with 3D model data in enterprise-grade internal apps. I&apos;m passionate about combining functionality with aesthetic flair and am constantly exploring new stacks and technologies. I&apos;m also certified in React and Python, and a proud graduate of Furness Horace High School.
            </p>
            <h3 className="font-display text-3xl font-semibold mt-8 mb-6 text-fubuki-dark-blue">My Skills</h3>
            {/* Skills will be componentized later */}
            <div className="flex flex-wrap gap-3 font-sans">
              <span className="bg-fubuki-primary-blue/10 text-fubuki-primary-blue px-4 py-2 rounded-full text-sm font-medium">Python</span>
              <span className="bg-fubuki-primary-blue/10 text-fubuki-primary-blue px-4 py-2 rounded-full text-sm font-medium">JavaScript</span>
              <span className="bg-fubuki-primary-blue/10 text-fubuki-primary-blue px-4 py-2 rounded-full text-sm font-medium">TypeScript</span>
              <span className="bg-fubuki-primary-blue/10 text-fubuki-primary-blue px-4 py-2 rounded-full text-sm font-medium">HTML5</span>
              <span className="bg-fubuki-primary-blue/10 text-fubuki-primary-blue px-4 py-2 rounded-full text-sm font-medium">CSS3</span>
              <span className="bg-fubuki-primary-blue/10 text-fubuki-primary-blue px-4 py-2 rounded-full text-sm font-medium">React</span>
              <span className="bg-fubuki-primary-blue/10 text-fubuki-primary-blue px-4 py-2 rounded-full text-sm font-medium">Next.js</span>
              <span className="bg-fubuki-primary-blue/10 text-fubuki-primary-blue px-4 py-2 rounded-full text-sm font-medium">Tailwind CSS</span>
              <span className="bg-fubuki-primary-blue/10 text-fubuki-primary-blue px-4 py-2 rounded-full text-sm font-medium">Flask</span>
              <span className="bg-fubuki-primary-blue/10 text-fubuki-primary-blue px-4 py-2 rounded-full text-sm font-medium">Node.js</span>
              <span className="bg-fubuki-primary-blue/10 text-fubuki-primary-blue px-4 py-2 rounded-full text-sm font-medium">Git</span>
              <span className="bg-fubuki-primary-blue/10 text-fubuki-primary-blue px-4 py-2 rounded-full text-sm font-medium">GitHub</span>
              <span className="bg-fubuki-primary-blue/10 text-fubuki-primary-blue px-4 py-2 rounded-full text-sm font-medium">Firebase</span>
              <span className="bg-fubuki-primary-blue/10 text-fubuki-primary-blue px-4 py-2 rounded-full text-sm font-medium">VS Code</span>
              <span className="bg-fubuki-primary-blue/10 text-fubuki-primary-blue px-4 py-2 rounded-full text-sm font-medium">Vercel</span>
              <span className="bg-fubuki-primary-blue/10 text-fubuki-primary-blue px-4 py-2 rounded-full text-sm font-medium">Figma</span>
              <span className="bg-fubuki-primary-blue/10 text-fubuki-primary-blue px-4 py-2 rounded-full text-sm font-medium">Adobe Photoshop</span>
              <span className="bg-fubuki-primary-blue/10 text-fubuki-primary-blue px-4 py-2 rounded-full text-sm font-medium">Canva</span>
            </div>
            {/* Placeholder for Fubuki-themed illustration or avatar */}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-fubuki-white rounded-lg shadow-lg my-8">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-4xl font-bold text-center mb-12 text-fubuki-dark-blue">My Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 font-sans">
            {/* Project cards will go here - to be componentized */}
            <div className="bg-fubuki-light-gray p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <h3 className="font-display text-xl font-semibold mb-2 text-fubuki-dark-blue">Placeholder Project 1</h3>
              <p className="text-fubuki-text-secondary mb-4">A brief description of this amazing project. Will be updated soon with more details!</p>
              <div className="text-sm text-fubuki-text-secondary/80 mb-4">
                Tech: Next.js, Tailwind CSS, TypeScript
              </div>
              <div className="flex space-x-4">
                <a href="#" className="text-fubuki-primary-blue hover:underline">GitHub</a>
                <a href="#" className="text-fubuki-primary-blue hover:underline">Live Demo</a>
              </div>
            </div>
            <div className="bg-fubuki-light-gray p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <h3 className="font-display text-xl font-semibold mb-2 text-fubuki-dark-blue">Placeholder Project 2</h3>
              <p className="text-fubuki-text-secondary mb-4">Another cool project showcasing different skills and technologies. Stay tuned for updates!</p>
              <div className="text-sm text-fubuki-text-secondary/80 mb-4">
                Tech: Python, Flask, PostgreSQL
              </div>
              <div className="flex space-x-4">
                <a href="#" className="text-fubuki-primary-blue hover:underline">GitHub</a>
                {/* No live demo for this one yet */}
              </div>
            </div>
            {/* Add more placeholder cards or a message if no projects yet */}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-fubuki-light-gray rounded-lg shadow-lg my-8">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-4xl font-bold mb-8 text-fubuki-dark-blue">Get In Touch!</h2>
          <p className="font-sans text-lg mb-6 text-fubuki-text-secondary">
            Want to build something kon-mazing together or just say hi?
          </p>
          <a href="mailto:bryanwillsonbwg@gmail.com" className="font-sans inline-block bg-fubuki-primary-blue text-fubuki-white px-8 py-3 rounded-lg text-lg hover:bg-fubuki-dark-blue transition-colors shadow-md hover:shadow-lg">
            Email Me
          </a>
          <p className="font-sans mt-8 text-fubuki-text-secondary">
            Phone: <span className="text-fubuki-primary-blue">215-892-0211</span>
          </p>
          {/* Placeholder for Fubuki-themed illustration */}
        </div>
      </section>
    </>
  );
}
