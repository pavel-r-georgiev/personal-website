import React from 'react';
import styles from './styles.css';

const workingSkills = ['ReactJS', 'Redux', 'JavaScript', 'Java', 'HTML5', 'CSS3', 'SASS', 'Git', 'Webpack']
const developingSkills=['Python', 'Android','MongoDB', 'PostgreSQL']
const Skills = () => (
  <div className="skills">
    <h2 className="skills-title centered">Skills</h2>
    
    <div className="skills-grid">
       <div className="skill-grid-container">
          <h3>Comfortable using:</h3>
        <div className="skills-pill-box skills-working">
          {workingSkills.map((skill)=>(
            <div className="skill-pill">{skill}</div>
          ))}
        </div>
       </div>
      <div className="skill-grid-container">
         <h3>Working to develop:</h3>
        <div className="skills-pill-box">
          {developingSkills.map((skill)=>(
            <div className="skill-pill">{skill}</div>
          ))}
        </div>
      </div>
    </div>
  </div>
  );

export default Skills;