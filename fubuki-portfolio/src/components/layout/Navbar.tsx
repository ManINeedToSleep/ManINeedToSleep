"use client";

import Link from 'next/link';
import { Button, Space, Tooltip } from 'antd';
import { motion } from 'framer-motion';
import { GithubOutlined, LinkedinOutlined, MenuOutlined } from '@ant-design/icons';
import { useState } from 'react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Animation variants
  const logoVariants = {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  };

  const navItemVariants = {
    initial: { opacity: 0, y: -10 },
    animate: (i: number) => ({ 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.5,
        delay: i * 0.1 
      }
    })
  };

  const menuItems = [
    { href: '/#home', label: 'Home', index: 0 },
    { href: '/#about', label: 'About', index: 1 },
    { href: '/#projects', label: 'Projects', index: 2 },
    { href: '/#contact', label: 'Contact', index: 3 },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      className="bg-luminous-deep-navy/90 p-4 shadow-lg sticky top-0 z-50 backdrop-blur-md"
    >
      <div className="container mx-auto flex justify-between items-center">
        <motion.div variants={logoVariants} initial="initial" animate="animate">
          <Link href="/" className="font-display text-2xl font-bold text-luminous-glow-blue hover:text-luminous-lilac-tint transition-colors">
            ManINeedToSleep
          </Link>
        </motion.div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center space-x-1">
          {/* Navigation Links */}
          <Space size="middle">
            {menuItems.map((item) => (
              <motion.div
                key={item.href}
                custom={item.index}
                variants={navItemVariants}
                initial="initial"
                animate="animate"
              >
                <Link 
                  href={item.href} 
                  className="text-luminous-mist-gray hover:text-luminous-glow-blue py-2 px-3 rounded-lg hover:bg-luminous-primary-blue/30 transition-all font-sans"
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </Space>

          {/* Social Links */}
          <Space size="small" className="ml-4">
            <motion.div
              custom={4}
              variants={navItemVariants}
              initial="initial"
              animate="animate"
            >
              <Tooltip title="GitHub">
                <Button 
                  type="text" 
                  shape="circle"
                  icon={<GithubOutlined className="text-luminous-mist-gray hover:text-luminous-glow-blue" />} 
                  href="https://github.com/yourusername" 
                  target="_blank" 
                />
              </Tooltip>
            </motion.div>
            <motion.div
              custom={5}
              variants={navItemVariants}
              initial="initial"
              animate="animate"
            >
              <Tooltip title="LinkedIn">
                <Button 
                  type="text" 
                  shape="circle"
                  icon={<LinkedinOutlined className="text-luminous-mist-gray hover:text-luminous-glow-blue" />} 
                  href="#" 
                  target="_blank" 
                />
              </Tooltip>
            </motion.div>
          </Space>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            type="text"
            icon={<MenuOutlined className="text-luminous-ghost-white"/>}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          />
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-luminous-deep-navy shadow-xl mt-2 rounded-lg overflow-hidden border border-luminous-primary-blue/50"
        >
          <div className="flex flex-col p-4 space-y-3 font-sans">
            {menuItems.map((item) => (
              <Link 
                key={item.href}
                href={item.href} 
                className="text-luminous-mist-gray hover:text-luminous-glow-blue py-2 px-3 rounded-lg hover:bg-luminous-primary-blue/30 transition-all block"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex space-x-2 pt-2 border-t border-luminous-primary-blue/30">
              <Button 
                type="text" 
                icon={<GithubOutlined className="text-luminous-mist-gray hover:text-luminous-glow-blue" />} 
                href="https://github.com/yourusername" 
                target="_blank" 
                className="text-luminous-mist-gray hover:text-luminous-glow-blue w-full justify-start">
                GitHub
              </Button>
              <Button 
                type="text" 
                icon={<LinkedinOutlined className="text-luminous-mist-gray hover:text-luminous-glow-blue" />} 
                href="#" 
                target="_blank" 
                className="text-luminous-mist-gray hover:text-luminous-glow-blue w-full justify-start">
                LinkedIn
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar; 