import React from 'react';
import Image from 'next/image';
import { Tooltip } from 'antd';
import { motion } from 'framer-motion';

type TechLogoProps = {
  name: string;
  imageSrc: string;
  size?: number;
};

const TechLogo: React.FC<TechLogoProps> = ({ name, imageSrc, size = 50 }) => {
  return (
    <Tooltip title={name}>
      <motion.div
        whileHover={{ y: -5, scale: 1.05 }}
        className="flex flex-col items-center justify-center p-3"
      >
        <div 
          className="relative rounded-lg overflow-hidden bg-white shadow-sm flex items-center justify-center"
          style={{ width: size, height: size }}
        >
          <Image
            src={imageSrc}
            alt={name}
            width={size * 0.8}
            height={size * 0.8}
            className="object-contain"
          />
        </div>
        <span className="text-xs font-sans mt-2 text-fubuki-text-secondary">{name}</span>
      </motion.div>
    </Tooltip>
  );
};

export default TechLogo; 