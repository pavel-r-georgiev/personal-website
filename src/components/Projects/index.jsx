import React from 'react';
import Project from '../Project';
import projects from './projects';
// eslint-disable-next-line
import styles from './styles.css';

const Projects = () => (
  <div className="projects-container">
    {projects.map(project => (
      <Project
        {...project}
      />
      ))}
  </div>
  );

export default Projects;
