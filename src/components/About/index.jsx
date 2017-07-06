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
      Hello, I&apos;m <span className="highlighted">Pavel Georgiev</span> - a computer science <span className="highlighted">student</span> at the University of Edinburgh , <span className="highlighted">problem solver</span> and <span className="highlighted">software content creator</span>.
      <br />
      Currently working at <a className="highlighted" href={config.BRAINNWAVE}>Brainnwave</a> as a <span className="highlighted">front-end developer</span>.
        <br />
          Don&apos;t be afraid to say
          <a href={config.EMAIL_ME} className="highlighted"> hello.</a>
        </div>
      </div>
    </div>
  </Element>
);

export default About;
