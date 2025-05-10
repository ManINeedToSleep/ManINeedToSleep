import React from 'react';
import { Card } from 'antd';
import { motion } from 'framer-motion';
import Image from 'next/image';

type SkillCardProps = {
  name: string;
  logoSrc: string;
};

const SkillCard: React.FC<SkillCardProps> = ({ name, logoSrc }) => {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.03 }}
      transition={{ duration: 0.2 }}
    >
      <Card 
        className="flex flex-col items-center justify-center h-32 border-0 shadow-sm rounded-lg"
        styles={{ body: { padding: "12px", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" } }}
      >
        <div className="relative w-12 h-12 mb-2">
          <Image
            src={logoSrc}
            alt={name}
            fill
            className="object-contain"
          />
        </div>
        <div className="text-sm font-sans text-center font-medium text-fubuki-text-primary">
          {name}
        </div>
      </Card>
    </motion.div>
  );
};

export default SkillCard; 