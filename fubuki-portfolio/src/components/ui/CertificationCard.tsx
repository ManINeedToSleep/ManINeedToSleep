import React from 'react';
import { Card, Typography, Button } from 'antd';
import { LinkOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';

const { Text, Title } = Typography;

type CertificationCardProps = {
  title: string;
  issuer: string;
  issueDate: string;
  expiryDate?: string;
  certificateUrl?: string;
};

const CertificationCard: React.FC<CertificationCardProps> = ({
  title,
  issuer,
  issueDate,
  expiryDate,
  certificateUrl
}) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="mb-4"
    >
      <Card
        className="rounded-lg shadow-sm bg-luminous-deep-navy/80 overflow-hidden backdrop-blur-sm border border-luminous-primary-blue/30"
        variant="borderless"
      >
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
          <div>
            <Title level={5} className="font-display !mb-1 text-luminous-ghost-white">
              {title}
            </Title>
            <Text className="font-sans text-luminous-mist-gray block">{issuer}</Text>
          </div>
          
          <div className="mt-2 lg:mt-0 flex flex-col items-start lg:items-end">
            <Text className="font-sans text-xs text-luminous-mist-gray/80" type="secondary">
              Issued {issueDate}{expiryDate ? ` • Expires ${expiryDate}` : ''}
            </Text>
            
            {certificateUrl && (
              <Button 
                type="link" 
                className="font-sans !p-0 mt-2 text-luminous-glow-blue hover:!text-luminous-lilac-tint" 
                icon={<LinkOutlined />}
                href={certificateUrl}
                target="_blank"
              >
                View Certificate
              </Button>
            )}
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default CertificationCard; 