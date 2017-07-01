import React from 'react';
import { GithubCircleIcon, LinkedinIcon, TwitterIcon } from '../Icons';
import styles from './styles.css';

const footerIcons = [GithubCircleIcon, LinkedinIcon, TwitterIcon];

const Footer = () => (
  <footer>
    <div className="icon-wrapper">
      {
        footerIcons.map(icon => (
          <a href={icon.url} className="icons">{icon.icon}</a>
      ))
      }
    </div>
    <div id="trademark">© Pavel G. All rights reserved.</div>
  </footer>
);

export default Footer;
