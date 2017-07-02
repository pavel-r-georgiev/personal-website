import React from 'react';
import links from './links';

// eslint-disable-next-line
import styles from './styles.css';

const Navbar = () => (
  <div className="navbar">
    {links.map(link => (
      link.new_tab ?
        <a tabIndex={0} rel="noopener noreferrer" target="_blank" className="navbar-link" href={link.url}>{link.title}</a> :
        <a tabIndex={0} className="navbar-link" href={link.url}>{link.title}</a>
   ))}
  </div>
  );

export default Navbar;
