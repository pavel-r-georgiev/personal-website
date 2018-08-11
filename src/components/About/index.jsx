import React from 'react';
import { Element } from 'react-scroll';
// eslint-disable-next-line
import styles from './styles.css';
import config from '../../config';


const About = () => (
  <Element name="about">
    <div className="about centered">
      <h2>Who am I?</h2>
      <div className="grid-container">
        <div className="text">
      Hello, I&apos;m <span className="highlighted">Pavel</span> - a computer science <span className="highlighted">student</span> at the University of Edinburgh , <span className="highlighted">problem solver</span> and a <span className="highlighted">software engineer</span>.
      <br />
      Currently interning at <a className="highlighted" href={config.AMAZON_BLOG}>Amazon</a> as a <span className="highlighted">Software Development Engineer</span>.
        <br />
          Don&apos;t be afraid to say
          <a href={config.EMAIL_ME} className="highlighted"> hello.</a>
        </div>
      </div>
    </div>
  </Element>
);

export default About;
