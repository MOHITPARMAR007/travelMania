import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>© Copywrite 2024 Travel Thrive </p>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '20px',
   
    left: '0',
    bottom: '0',
    width: '100%',
    
  },
};

export default Footer;
