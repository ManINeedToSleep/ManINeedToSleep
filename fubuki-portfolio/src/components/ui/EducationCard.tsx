import React from 'react';
import { Card, Typography } from 'antd';
import { motion } from 'framer-motion';

const { Text, Title } = Typography;

type EducationCardProps = {
  institution: string;
  degree: string;
  period: string;
};

const EducationCard: React.FC<EducationCardProps> = ({
  institution,
  degree,
  period
}) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="mb-4"
    >
      <Card
        className="rounded-lg shadow-sm bg-white overflow-hidden"
        bordered={false}
      >
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
          <div>
            <Title level={5} className="font-display !mb-1" style={{ color: 'var(--fubuki-dark-blue)' }}>
              {institution}
            </Title>
            <Text className="font-sans text-fubuki-text-secondary block">{degree}</Text>
          </div>
          
          <div className="mt-2 lg:mt-0">
            <Text className="font-sans text-xs" type="secondary">
              {period}
            </Text>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default EducationCard; 