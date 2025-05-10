"use client"; // Required for Ant Design components that use client-side features like state, effects, or event handlers

import { Card, Typography, Tag, Space, Button, Avatar, Row, Col, Tooltip, Tabs, Segmented } from 'antd';
import { 
  GithubOutlined, 
  LinkOutlined, 
  DownloadOutlined, 
  MailOutlined, 
  ArrowDownOutlined,
  LinkedinOutlined,
  TwitterOutlined,
  TrophyOutlined,
  BookOutlined,
  CodeOutlined
} from '@ant-design/icons';
import { motion } from 'framer-motion'; // We'll use this for subtle animations
import VideoBackground from '@/components/ui/VideoBackground'; // Add this
import Image from 'next/image'; // Import Next.js Image component
import { techLogos } from '@/data/techLogos';
import SkillCard from '@/components/ui/SkillCard';
import CertificationCard from '@/components/ui/CertificationCard';
import EducationCard from '@/components/ui/EducationCard';
import { useState, useEffect, useRef } from 'react'; // Import useState, useEffect, and useRef

const { Title, Paragraph, Text } = Typography;

// Define a type for our project structure
interface Project {
  title: string;
  description: string;
  tech: string[];
  githubUrl: string;
  liveUrl?: string; // Optional
  imageUrl?: string; // Optional
}

export default function HomePage() {
  const [selectedSkillCategory, setSelectedSkillCategory] = useState<string>("Frontend");
  const [isClient, setIsClient] = useState(false);
  const [cardRowHeight, setCardRowHeight] = useState<number | undefined>(undefined);
  const storyCardRef = useRef<HTMLDivElement>(null);
  const skillsCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const calculateHeight = () => {
      if (storyCardRef.current && skillsCardRef.current) {
        const storyHeight = storyCardRef.current.offsetHeight;
        const skillsHeight = skillsCardRef.current.offsetHeight;
        setCardRowHeight(Math.max(storyHeight, skillsHeight, 750));
      } else {
         setCardRowHeight(750);
      }
    };

    calculateHeight();
    window.addEventListener('resize', calculateHeight);
    return () => window.removeEventListener('resize', calculateHeight);
  }, [isClient]); // Recalculate if isClient changes, or on other relevant data changes

  const projects: Project[] = [
    {
      title: "Doki Doki Productivity Companion",
      description: "An anime-themed AI tool supporting Pomodoro timing, goal tracking, and real-time analytics via virtual companions.",
      tech: ["Next.js", "TypeScript", "Firebase", "Gamification", "AI Integration"],
      githubUrl: "#", // Replace with actual link
      liveUrl: "#",   // Replace with actual link
      imageUrl: "https://via.placeholder.com/400x200/A0D2DB/1F2937?text=Project+Thumbnail" // Placeholder image
    },
    {
      title: "Portfolio Website",
      description: "My personal portfolio website built with a Hololive Fubuki theme, showcasing my skills and projects.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Ant Design", "Framer Motion"],
      githubUrl: "#", // Replace with actual link
      // liveUrl: null, // No live demo yet for itself
      imageUrl: "https://via.placeholder.com/400x200/60A5FA/FFFFFF?text=Fubuki+Portfolio"
    },
    {
      title: "Nexus Social",
      description: "A third project to showcase more work. Perhaps a cool backend service or a data visualization app!",
      tech: ["Python", "Flask", "Docker", "Chart.js"],
      githubUrl: "#",
      imageUrl: "https://via.placeholder.com/400x200/D1D5DB/4B5563?text=More+Projects"
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Animation variants for staggered children animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  // Additional data for new About Me section
  const technicalSkills = {
    Frontend: ["React", "Next.js", "Tailwind CSS"],
    Backend: ["Flask", "Node.js"],
    Tools: ["Git", "GitHub", "Firebase", "VS Code", "Vercel"],
    Other: ["MongoDB", "PostgreSQL", "AWS", "Netlify", "Docker"]
  };

  const certifications = [
    {
      title: "PCEP™ – Certified Entry-Level Python Programmer",
      issuer: "Python Institute",
      issueDate: "Jun 2024",
      certificateUrl: "#"
    },
    {
      title: "React Development Certification",
      issuer: "Codecademy",
      issueDate: "Feb 2025", 
      certificateUrl: "#"
    },
  ];

  const education = [
    {
      institution: "Launchpad Philly",
      degree: "Workforce Development Program in Software Development",
      period: "Jan 2023 - Present"
    },
    {
      institution: "Furness Horace High School",
      degree: "High School Diploma in General Education",
      period: "2022-2024"
    }
  ];

  const cardStyle = {
    background: 'rgba(20, 29, 43, 0.85)', // luminous-deep-navy @ 85% opacity
    backdropFilter: 'blur(10px)',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)' // Slightly enhanced shadow for better depth
  };

  const sectionCardStyle = {
    ...cardStyle,
    // Specific to cards that are direct children of <section>
  };

  const heroCardStyle = {
    background: 'rgba(20, 29, 43, 0.80)', // luminous-deep-navy @ 80% opacity for Hero
    backdropFilter: 'blur(12px)',       // Slightly more blur for Hero
    boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
  };

  const skillCategories = Object.keys(technicalSkills);

  return (
    <>
      {/* Video Background instead of Floating Elements */}
      <VideoBackground />

      {/* Hero/Landing Section - Redesigned with central card and avatar */}
      <section id="home" className="min-h-screen flex flex-col items-center justify-center py-24 px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-4xl"
        >
          <Card 
            variant="borderless" 
            className="overflow-hidden rounded-lg"
            style={heroCardStyle}
          >
            <div className="flex flex-col items-center p-4 md:p-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="mb-6"
              >
                <Avatar 
                  size={150} 
                  src="https://via.placeholder.com/150/85C5FF/F0F6FF?text=MNS"
                  alt="Bryan Willson Gunawan"
                  style={{ 
                    border: '4px solid #85C5FF',
                    boxShadow: '0 4px 14px rgba(133, 197, 255, 0.2)'
                  }}
                />
              </motion.div>

              <Title level={1} className="font-display !text-4xl md:!text-5xl !mb-2 text-center text-luminous-ghost-white">
                Bryan Willson Gunawan
              </Title>
              <div className="w-32 h-1 bg-luminous-glow-blue rounded-full mb-4"></div>
              <Paragraph className="font-flair !text-2xl md:!text-3xl !text-luminous-lilac-tint !mb-6 text-center">
                Full Stack Developer: Powered by Coffee and Anime
              </Paragraph>
              
              <Paragraph className="font-sans !text-base md:!text-lg max-w-2xl text-center mb-8 text-luminous-mist-gray">
                Welcome to my digital den! I&apos;m a Full Stack Developer passionate about creating beautiful, functional web experiences with modern technologies.
              </Paragraph>
              
              <Space size="middle" className="mb-4">
                <Button 
                  type="primary" 
                  size="large" 
                  className="font-sans"
                  icon={<ArrowDownOutlined />}
                  onClick={() => scrollToSection('projects')}
                >
                  View Projects
                </Button>
                <Button 
                  ghost
                  type="primary"
                  size="large" 
                  className="font-sans"
                  icon={<MailOutlined />}
                  onClick={() => scrollToSection('contact')}
                >
                  Contact Me
                </Button>
                <Button 
                  ghost 
                  type="primary" 
                  size="large" 
                  className="font-sans" 
                  icon={<DownloadOutlined />}
                  href="#" // Add resume link here
                >
                  Resume
                </Button>
              </Space>

              <Space size="middle" className="mt-2">
                <Button ghost type="primary" icon={<GithubOutlined style={{ fontSize: '1.5rem' }} />} href="https://github.com/yourusername" target="_blank" />
                <Button ghost type="primary" icon={<LinkedinOutlined style={{ fontSize: '1.5rem' }} />} href="#" target="_blank" />
                <Button ghost type="primary" icon={<TwitterOutlined style={{ fontSize: '1.5rem' }} />} href="#" target="_blank" />
                {/* Add other social media buttons as needed */}
              </Space>
            </div>
          </Card>
        </motion.div>
      </section>

      {/* About Me Section - V3 Refactor */}
      <section id="about" className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="text-center mb-16">
              <Title level={2} className="font-display text-luminous-ghost-white">
                About Me
              </Title>
            </motion.div>

            <Row gutter={[32, 32]} className="mb-8 items-stretch">
              <Col xs={24} lg={12} className="flex">
                <motion.div 
                  variants={itemVariants} 
                  className="w-full h-full" 
                  ref={storyCardRef}
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card
                    variant="borderless"
                    className="shadow-lg rounded-xl overflow-hidden flex flex-col h-full"
                    style={{ 
                      ...sectionCardStyle, 
                      height: cardRowHeight ? `${cardRowHeight}px` : 'auto',
                      background: 'linear-gradient(145deg, rgba(44, 62, 102, 0.7), rgba(20, 29, 43, 0.95))',
                      borderLeft: '4px solid var(--luminous-glow-blue)'
                    }}
                    styles={{ body: { flexGrow: 1, color: 'var(--luminous-mist-gray)' } }}
                  >
                    <div className="flex items-center mb-6">
                      <div className="w-10 h-10 rounded-full bg-luminous-glow-blue/20 flex items-center justify-center mr-4">
                        <BookOutlined style={{ fontSize: '1.2rem', color: 'var(--luminous-glow-blue)' }} />
                      </div>
                      <Title level={3} className="font-display !mb-0 !text-2xl text-luminous-ghost-white">
                        My Story
                      </Title>
                    </div>
                    
                    <div className="pl-2 border-l-2 border-luminous-primary-blue/30">
                      <Paragraph className="font-sans !text-base mb-4 pl-3 leading-relaxed" style={{ color: 'var(--luminous-mist-gray)' }}>
                        As a Full Stack Engineer at Launchpad Philly, I design and develop full-stack applications using modern frameworks like React, Next.js, Firebase, TypeScript, and PostgreSQL. I&apos;ve delivered real-world solutions through sprint-based collaboration and creative problem solving.
                      </Paragraph>
                      <Paragraph className="font-sans !text-base pl-3 leading-relaxed" style={{ color: 'var(--luminous-mist-gray)' }}>
                        I&apos;m passionate about combining functionality with aesthetic flair and am constantly exploring new stacks and technologies. My standout project is the <Text strong className="text-luminous-glow-blue">Doki Doki Productivity Companion</Text>, an anime-themed AI tool for productivity and goal tracking.
                      </Paragraph>
                    </div>
                  </Card>
                </motion.div>
              </Col>

              <Col xs={24} lg={12} className="flex">
                <motion.div 
                  variants={itemVariants} 
                  className="w-full h-full" 
                  ref={skillsCardRef}
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card
                    variant="borderless"
                    className="shadow-lg rounded-xl overflow-hidden flex flex-col h-full"
                    style={{ 
                      ...sectionCardStyle, 
                      height: cardRowHeight ? `${cardRowHeight}px` : 'auto',
                      background: 'linear-gradient(145deg, rgba(44, 62, 102, 0.7), rgba(20, 29, 43, 0.95))',
                      borderRight: '4px solid var(--luminous-lilac-tint)'
                    }}
                    styles={{ body: { flexGrow: 1, display: 'flex', flexDirection: 'column', color: 'var(--luminous-mist-gray)' } }}
                  >
                    <div className="flex items-center mb-6">
                      <div className="w-10 h-10 rounded-full bg-luminous-lilac-tint/20 flex items-center justify-center mr-4">
                        <CodeOutlined style={{ fontSize: '1.2rem', color: 'var(--luminous-lilac-tint)' }} />
                      </div>
                      <Title level={3} className="font-display !mb-0 !text-2xl text-luminous-ghost-white">
                        Technical Skills
                      </Title>
                    </div>
                    
                    <Tabs
                      defaultActiveKey="skills"
                      className="fubuki-tabs flex-grow flex flex-col"
                      items={[
                        {
                          key: 'skills',
                          label: (
                            <span className="flex items-center font-sans px-2 py-1">
                              <CodeOutlined className="mr-2" />
                              Technical Skills
                            </span>
                          ),
                          children: (
                            <motion.div
                              key={`skills-tab-${selectedSkillCategory}`}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.4, ease: "easeInOut" }}
                              className="pt-2 pb-2 flex-grow flex flex-col h-full"
                            >
                              <div className="mb-4">
                                <Segmented
                                  options={skillCategories.map(category => ({ label: category, value: category }))}
                                  value={selectedSkillCategory}
                                  onChange={(value) => setSelectedSkillCategory(value as string)}
                                  className="fubuki-skill-segments"
                                  block
                                  style={{
                                    background: 'rgba(44, 62, 102, 0.3)',
                                    padding: '4px',
                                    borderRadius: '8px'
                                  }}
                                />
                              </div>
                              <div className="flex-grow overflow-y-auto px-1 w-full overflow-x-hidden">
                                <Row gutter={[16, 16]}>
                                  {technicalSkills[selectedSkillCategory as keyof typeof technicalSkills]?.map(skill => (
                                    <Col xs={12} sm={8} md={6} lg={6} key={skill}>
                                      <SkillCard
                                        name={skill}
                                        logoSrc={techLogos[skill] || "https://via.placeholder.com/48"}
                                      />
                                    </Col>
                                  ))}
                                </Row>
                              </div>
                            </motion.div>
                          ),
                        },
                        {
                          key: 'certifications',
                          label: (
                            <span className="flex items-center font-sans px-2 py-1">
                              <TrophyOutlined className="mr-2" />
                              Certifications
                            </span>
                          ),
                          children: (
                            <motion.div
                              key="certifications-tab"
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.4, ease: "easeInOut" }}
                              className="pt-4 pb-2 flex-grow flex flex-col overflow-y-auto h-full"
                            >
                              {certifications.map((cert, index) => (
                                <CertificationCard
                                  key={index}
                                  title={cert.title}
                                  issuer={cert.issuer}
                                  issueDate={cert.issueDate}
                                  certificateUrl={cert.certificateUrl}
                                />
                              ))}
                            </motion.div>
                          ),
                        },
                        {
                          key: 'education',
                          label: (
                            <span className="flex items-center font-sans px-2 py-1">
                              <BookOutlined className="mr-2" />
                              Education
                            </span>
                          ),
                          children: (
                            <motion.div
                              key="education-tab"
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.4, ease: "easeInOut" }}
                              className="pt-4 pb-2 flex-grow flex flex-col overflow-y-auto h-full"
                            >
                              {education.map((edu, index) => (
                                <EducationCard
                                  key={index}
                                  institution={edu.institution}
                                  degree={edu.degree}
                                  period={edu.period}
                                />
                              ))}
                            </motion.div>
                          ),
                        },
                      ]}
                    />
                  </Card>
                </motion.div>
              </Col>
            </Row>
          </motion.div>
        </div>
      </section>

      {/* Projects Section - Enhanced */}
      <section id="projects" className="py-24 bg-luminous-primary-blue/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <Title level={2} className="font-display text-center !mb-4 text-luminous-ghost-white">
                My Projects
              </Title>
              <Paragraph className="text-center !mb-16 max-w-2xl mx-auto text-luminous-mist-gray">
                Here are some of my featured projects. Each one was an opportunity to learn and grow as a developer.
              </Paragraph>
            </motion.div>

            <Row gutter={[24, 24]}>
              {projects.map((project) => (
                <Col xs={24} md={12} lg={8} key={project.title}>
                  <motion.div variants={itemVariants}>
                    <Card
                      hoverable
                      className="font-sans shadow-xl flex flex-col h-full overflow-hidden rounded-lg border-luminous-primary-blue/50"
                      style={cardStyle}
                      cover={
                        project.imageUrl ? (
                          <div className="overflow-hidden h-48 w-full relative">
          <Image
                              alt={project.title} 
                              src={project.imageUrl} 
                              fill
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                              className="object-cover transition-transform hover:scale-105 duration-700" 
                            />
                          </div>
                        ) : null
                      }
                      actions={[
                        project.githubUrl ? 
                          <Tooltip title="View on GitHub">
                            <Button key={`github-${project.title}`} type="text" icon={<GithubOutlined className="text-luminous-mist-gray hover:text-luminous-glow-blue"/>} href={project.githubUrl} target="_blank" className="font-sans text-luminous-mist-gray">
                              Code
                            </Button>
                          </Tooltip> : null,
                        project.liveUrl ? 
                          <Tooltip title="View Live Demo">
                            <Button key={`live-${project.title}`} type="text" icon={<LinkOutlined className="text-luminous-mist-gray hover:text-luminous-glow-blue"/>} href={project.liveUrl} target="_blank" className="font-sans text-luminous-mist-gray">
                              Live Demo
                            </Button>
                          </Tooltip> : null,
                      ].filter(Boolean) as React.ReactNode[]}
                    >
                      <Card.Meta
                        title={<span className="font-display text-xl text-luminous-ghost-white">{project.title}</span>}
                        description={<Paragraph className="font-sans text-sm text-luminous-mist-gray" style={{ minHeight: '84px' }}>{project.description}</Paragraph>}
                      />
                      <div className="mt-auto pt-4">
                        <Text strong className="font-sans text-sm text-luminous-lilac-tint">Tech Stack:</Text>
                        <div className="mt-2 flex flex-wrap gap-1">
                          {project.tech.map(techName => (
                            <Tag key={techName} color="geekblue" className="font-sans text-xs bg-luminous-primary-blue/20 text-luminous-mist-gray border-luminous-primary-blue/50">
                              {techName}
                            </Tag>
                          ))}
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                </Col>
              ))}
            </Row>
            
            <motion.div variants={itemVariants} className="mt-16 text-center">
              <Button type="primary" href="https://github.com/yourusername" target="_blank" size="large" className="text-luminous-deep-navy hover:!text-luminous-deep-navy font-semibold">
                See More on GitHub
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section - Enhanced */}
      <section id="contact" className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={itemVariants}>
              <Title level={2} className="font-display text-center !mb-4 text-luminous-ghost-white">
                Get In Touch!
              </Title>
              <Paragraph className="text-center !mb-12 max-w-2xl mx-auto text-luminous-mist-gray">
                Want to build something kon-mazing together? Have a question or just want to say hi? I&apos;d love to hear from you!
              </Paragraph>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <Card 
                variant="borderless" 
                style={sectionCardStyle}
                className="overflow-hidden rounded-lg"
              >
                <Row gutter={[32, 32]} align="middle">
                  <Col xs={24} md={12} className="text-center md:text-left">
                    <Title level={3} className="font-display !mb-6 text-luminous-ghost-white">
                      Contact Details
                    </Title>
                    
                    <Space direction="vertical" size="large" className="w-full mb-8">
                      <div>
                        <Text strong className="font-sans block mb-1 text-luminous-mist-gray">Email</Text>
                        <Button type="link" href="mailto:bryanwillsonbwg@gmail.com" className="font-sans !p-0 flex items-center text-luminous-glow-blue hover:!text-luminous-lilac-tint">
                          <MailOutlined className="mr-2" />
                          bryanwillsonbwg@gmail.com
                        </Button>
                      </div>
                      
                      <div>
                        <Text strong className="font-sans block mb-1 text-luminous-mist-gray">Phone</Text>
                        <Text className="font-sans text-luminous-lilac-tint">215-892-0211</Text>
                      </div>
                      
                      <div>
                        <Text strong className="font-sans block mb-2 text-luminous-mist-gray">Find me on</Text>
                        <Space size="middle">
                          <Button type="primary" shape="circle" icon={<GithubOutlined />} href="https://github.com/yourusername" target="_blank" />
                          <Button type="primary" shape="circle" icon={<LinkedinOutlined />} href="#" target="_blank" />
                          <Button type="primary" shape="circle" icon={<TwitterOutlined />} href="#" target="_blank" />
                        </Space>
                      </div>
                    </Space>
                  </Col>
                  
                  <Col xs={24} md={12}>
                    <div className="rounded-lg overflow-hidden bg-luminous-primary-blue/20 p-8 text-center">
                      <Title level={4} className="font-display !mb-8 text-luminous-ghost-white">
                        Quick Connect
                      </Title>
                      
                      <Paragraph className="font-sans !text-base mb-8 text-luminous-mist-gray">
                        Send me an email and I&apos;ll get back to you as soon as possible!
                      </Paragraph>
                      
                      <Button 
                        type="primary" 
                        href="mailto:bryanwillsonbwg@gmail.com" 
                        size="large" 
                        className="font-sans text-luminous-deep-navy hover:!text-luminous-deep-navy font-semibold" 
                        icon={<MailOutlined />}
                        block
                      >
                        Email Me
                      </Button>
                    </div>
                  </Col>
                </Row>
              </Card>
            </motion.div>
          </motion.div>
    </div>
      </section>
    </>
  );
}
