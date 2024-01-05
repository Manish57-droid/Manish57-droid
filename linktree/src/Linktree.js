// Linktree.js

import React from 'react';
import './Linktree.css'; 

const Linktree = () => {
  const socialMediaLinks = [
    { name: 'Twitter', url: 'https://twitter.com/your_twitter_username' },
    { name: 'Instagram', url: 'https://www.instagram.com/your_instagram_username' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/your_linkedin_username' },
    // Add more social media links as needed
  ];

  return (
    <div className="linktree-container">
      <h1>My Linktree</h1>
      <div className="social-links">
        {socialMediaLinks.map((link, index) => (
          <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
            <button>{link.name}</button>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Linktree;
