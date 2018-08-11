import React from 'react';
import { Element } from 'react-scroll';
// eslint-disable-next-line
import styles from './styles.css';

const workingSkills = ['ReactJS', 'Redux', 'JavaScript', 'Java', 'HTML5', 'CSS3', 'SASS', 'AWS', 'Git', 'Webpack'];
const developingSkills = ['Python', 'Android', 'MongoDB', 'PostgreSQL'];

const Skills = () => (
  <Element name="skills">
    <div className="skills">
      <h2 className="skills-title centered">Skills</h2>

      <div className="skills-grid">
        <div className="skill-grid-container">
          <h3>Working proficiency:</h3>
          <div className="skills-pill-box skills-working">
            {workingSkills.map(skill => (
              <div className="skill-pill" key={skill}>{skill}</div>
          ))}
          </div>
        </div>
        <div className="skill-grid-container">
          <h3>Basic proficiency:</h3>
          <div className="skills-pill-box">
            {developingSkills.map(skill => (
              <div className="skill-pill" key={skill}>{skill}</div>
          ))}
          </div>
        </div>
      </div>
    </div>
  </Element>
  );

export default Skills;
