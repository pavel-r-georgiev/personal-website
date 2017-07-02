import React from 'react';
import { Element } from 'react-scroll';
// eslint-disable-next-line
import styles from './styles.css';


const About = () => (
  <Element name="about">
    <div className="about centered">
      <h2>Who am I?</h2>
      <div className="grid-container">
        <div className="text">
      Hello, I&apos;m <span className="highlighted">Pavel Georgiev</span> - a computer science <span className="highlighted">student</span> at the University of Edinburgh , <span className="highlighted">problem solver</span> and <span className="highlighted">software content creator</span>.
      <br />
      Currently working at <a className="highlighted" href="http://content.brainnwave.com/">Brainnwave</a> as a <span className="highlighted">front-end developer</span>.
        <br />
          Don&apos;t be afraid to say
          <a href="mailto:hello@pavelgeorgiev.me" className="highlighted"> hello.</a>
        </div>
      </div>
    </div>
  </Element>
);

export default About;
