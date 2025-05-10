// import { Typography, Space, Button, Tooltip } from 'antd';
// import { GithubOutlined, LinkedinOutlined, TwitterOutlined } from '@ant-design/icons';

// const { Text, Paragraph } = Typography; // Keep this commented

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer 
      style={{
        backgroundColor: '#141D2B', // luminous-deep-navy
        padding: '2rem',
        textAlign: 'center',
        color: '#BDC7DA', // luminous-mist-gray
        borderTop: '1px solid #2C3E66', // luminous-primary-blue (approx)
        marginTop: '4rem'
      }}
    >
      <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.875rem' }}>
        &copy; {currentYear} Bryan Willson Gunawan (ManINeedToSleep). All rights reserved.
      </p>
      <p style={{ fontSize: '0.75rem', marginTop: '0.5rem', fontFamily: 'Sarina, cursive', color: '#A3A9E6' }}> {/* luminous-lilac-tint */}
        Konrari~! Thanks for stopping by my digital domain!
      </p>
      {/* Basic social links (placeholders) */}
      <div style={{ marginTop: '1rem' }}>
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" style={{ margin: '0 0.5rem', color: '#BDC7DA' }}>GitHub</a>
        <a href="#" target="_blank" rel="noopener noreferrer" style={{ margin: '0 0.5rem', color: '#BDC7DA' }}>LinkedIn</a>
        <a href="#" target="_blank" rel="noopener noreferrer" style={{ margin: '0 0.5rem', color: '#BDC7DA' }}>Twitter</a>
      </div>
    </footer>
  );
};

export default Footer; 