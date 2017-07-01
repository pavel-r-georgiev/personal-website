import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';

import config from '../../config';
// eslint-disable-next-line
import styles from './styles.css';


const ResumeButton = () => (
  <div>
    <FloatingActionButton
      className="resumeButton"
      zDepth={2}
    >
      <a
        href={config.RESUME_LINK}
        target="_blank"
        className="link button-link"
        rel="noreferrer noopener"
      >
      Resume
      </a>
    </FloatingActionButton >
  </div>
);

export default ResumeButton;
