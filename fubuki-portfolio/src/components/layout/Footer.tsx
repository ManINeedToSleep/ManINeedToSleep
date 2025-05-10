import { Typography, Space, Button, Tooltip } from 'antd';
import { GithubOutlined, LinkedinOutlined, TwitterOutlined } from '@ant-design/icons';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-luminous-deep-navy p-8 text-center text-luminous-mist-gray border-t border-luminous-primary-blue/30 mt-16">
      <Space direction="vertical" size="middle">
        <Space size="large">
          <Tooltip title="GitHub">
            <Button 
              type="text" 
              shape="circle"
              icon={<GithubOutlined style={{ fontSize: '1.5rem' }} className="text-luminous-mist-gray hover:text-luminous-glow-blue" />} 
              href="https://github.com/yourusername" 
              target="_blank" 
            />
          </Tooltip>
          <Tooltip title="LinkedIn">
            <Button 
              type="text" 
              shape="circle"
              icon={<LinkedinOutlined style={{ fontSize: '1.5rem' }} className="text-luminous-mist-gray hover:text-luminous-glow-blue" />} 
              href="#" // Replace with your LinkedIn URL
              target="_blank" 
            />
          </Tooltip>
          <Tooltip title="Twitter / X">
            <Button 
              type="text" 
              shape="circle"
              icon={<TwitterOutlined style={{ fontSize: '1.5rem' }} className="text-luminous-mist-gray hover:text-luminous-glow-blue" />} 
              href="#" // Replace with your Twitter URL
              target="_blank" 
            />
          </Tooltip>
          {/* Add more social links as needed */}
        </Space>

        <Typography.Paragraph className="font-sans text-sm">
          &copy; {currentYear} Bryan Willson Gunawan (ManINeedToSleep). All rights reserved.
        </Typography.Paragraph>
        <Typography.Paragraph className="text-xs font-flair text-luminous-lilac-tint">
          Konrari~! Thanks for stopping by my digital domain!
        </Typography.Paragraph>
      </Space>
    </footer>
  );
};

export default Footer; 