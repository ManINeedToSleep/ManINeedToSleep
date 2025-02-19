import React from 'react';
import CombinedText from '../animation/Text/CombinedText';
import TiltedCard from '../animation/TiltedCard/TiltedCard';

interface MainContentProps {
  isVisible: boolean;
}

const MainContent: React.FC<MainContentProps> = ({ isVisible }) => {
  const skillCategories = {
    frontend: [
      'React', 'Next.js', 'HTML5', 'CSS3', 
      'JavaScript', 'Vite', 'TypeScript', 'Tailwind', 'Python'
    ],
    backend: [
      'Node.js', 'Python', 'Express'
    ],
    databases: [
      'PrismaDB', 'MySQL', 'Firebase', 'PostgreSQL'
    ],
    tools: [
      'Git', 'GitHub', 'Figma'
    ],
    hosting: [
      'AWS', 'Vercel'
    ]
  };

  return (
    <div 
      className={`transition-all duration-1000 ease-in-out space-y-12 max-w-4xl mx-auto px-4
        ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}
    >
      {/* About Me Section */}
      <section className="text-center">
        <br></br>
        <CombinedText
          text="About Me"
          fontSize="2.5rem"
          baseIntensity={0.2}
          hoverIntensity={0.4}
          delay={0}
          className="mb-8"
        />
        <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
          {/* Profile Picture */}
          <div className="w-full md:w-1/3">
            <TiltedCard
              imageSrc="/profile-picture.jpg"
              altText="Profile picture"
              captionText="Hello there! 👋"
              containerHeight="305px"
              containerWidth="100%"
              imageHeight="305px"
              imageWidth="100%"
              scaleOnHover={1.05}
              rotateAmplitude={10}
              showMobileWarning={false}
              className="border-2 border-white/30 rounded-[15px]"
            />
          </div>

          {/* About Text */}
          <div className="w-full md:w-2/3 text-left space-y-4">
            <p className="text-white text-lg leading-relaxed bg-black/40 border border-white/30 rounded-xl p-4 transition-all duration-300 hover:bg-black/60 hover:border-white/50">
              Hello! I&apos;m Bryan Gunawan, a full-stack developer with a flair for crafting innovative solutions. I specialize in modern web technologies and creative interfaces, always striving to blend functionality with delightful user experiences.
            </p>
            <p className="text-white text-lg leading-relaxed bg-black/40 border border-white/30 rounded-xl p-4 transition-all duration-300 hover:bg-black/60 hover:border-white/50">
              With a keen eye for design and a passion for clean code, I build applications that are both efficient and enjoyable to use. I&apos;m particularly fascinated by animations and artificial intelligence, and I&apos;m eager to dive into learning and researching these areas in the coming days.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="text-center">
        <CombinedText
          text="Featured Projects"
          fontSize="2.5rem"
          baseIntensity={0.2}
          hoverIntensity={0.4}
          delay={200}
          className="mb-6"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Add your project cards here */}
        </div>
      </section>

      {/* Skills Section */}
      <section className="text-center">
        <CombinedText
          text="Skills"
          fontSize="2.5rem"
          baseIntensity={0.2}
          hoverIntensity={0.4}
          delay={400}
          className="mb-8"
        />
        <div className="space-y-8">
          {Object.entries(skillCategories).map(([category, skills]) => (
            <div key={category} className="text-left">
              <h3 className="text-white/80 text-xl mb-3 capitalize">
                {category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1 bg-black/40 border border-white/30 rounded-full text-sm text-white/90
                      hover:bg-black/60 hover:border-white/50 transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* GitHub Stats Section */}
      <section className="text-center">
        <CombinedText
          text="GitHub Activity"
          fontSize="2.5rem"
          baseIntensity={0.2}
          hoverIntensity={0.4}
          delay={600}
          className="mb-6"
        />
        {/* Add your GitHub stats here */}
      </section>
    </div>
  );
};

export default MainContent; 