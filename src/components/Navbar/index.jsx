import React from 'react';
import { Link } from 'react-scroll';
import links from './links';

// eslint-disable-next-line
import styles from './styles.css';

const Navbar = () => (
  <div className="navbar">
    {links.map(link => (
      link.scroll ?
        <Link className="navbar-link" activeClass="navbar-link-active" to={link.url} spy smooth offset={-32}>
          {link.title}
        </Link>
        :
        <a tabIndex={0} rel="noopener noreferrer" target="_blank" className="navbar-link" href={link.url}>{link.title}</a>
   ))}
  </div>
  );

export default Navbar;
