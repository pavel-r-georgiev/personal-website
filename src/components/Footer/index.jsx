import React from 'react';
import { LinkedinIcon, TwitterIcon } from '../Icons';
import GithubIcon from '../Icons/GithubIcon';
import EmailIcon from '../Icons/EmailIcon';

// eslint-disable-next-line
import styles from './styles.css';
import config from '../../config';


const Footer = () => (
  <footer>
    <div className="icon-wrapper">
      <a href={config.LINKED_IN_URL} className="icons"><LinkedinIcon /></a>
      <a href={config.GITHUB_URL} className="icons"><GithubIcon /></a>
      <a href={config.EMAIL_ME} className="icons"><EmailIcon /></a>
      <a href={config.TWITTER} className="icons"><TwitterIcon /></a>
    </div>
    <div id="trademark">© Pavel G. All rights reserved.</div>
  </footer>
);

export default Footer;
