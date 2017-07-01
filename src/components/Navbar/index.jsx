import React from 'react';
import links from './links';
import styles from './styles.css';

const Navbar = () => (
  <div className="navbar">
  {links.map((link)=>(
     <a tabIndex={1} className="navbar-link" href={link.url}>{link.title}</a>
   ))}
  </div>
  );

export default Navbar;