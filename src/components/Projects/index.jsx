import React from 'react';
import { Element } from 'react-scroll';
import Project from '../Project';
import projects from './projects';
// eslint-disable-next-line
import styles from './styles.css';

const Projects = () => (
  <Element name="projects">
    <div className="projects-section">
      <h2 className="projects-title centered">Projects</h2>
      <div className="projects-container">
        {projects.map(project => (
          <Project
            {...project}
          />
      ))}
      </div>
      {/* <h2 className="coming-soon centered">More projects coming soon&trade;</h2>*/}
    </div>
  </Element>
  );

export default Projects;
