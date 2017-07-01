import React, { Component } from 'react';
import ReactRotatingText from 'react-rotating-text';
import styles from './styles.css';
import particlesConfig from './particlesjs-config.json';

const particlesJS = typeof window !== 'undefined' ? require('particles.js') : {};

class Banner extends Component {
  componentDidMount() {
    window.particlesJS('particles-js', particlesConfig);
  }
  render() {
    const titleStyles = {
      position: 'absolute',
      color: '#ECEAE8',
      fontSize: '4em',
      top: 'calc(50% - 32px)',
      transform: 'translateY(-50%)',
      textAlign: 'center',
      fontWeight: '300',
      width: '100%',
    };

    const subtitles = ['Computer Science Student', 'Software Engineer'];
    return (
      <div>
        <div className="about__header" style={{ height: '100vh', backgroundColor: 'black' }}>
          <div className="particles-canvas" id="particles-js" style={{ height: '100%' }} />
          <div style={titleStyles}>
            <div className="name"> {this.props.title} </div>
            <div className="subtitle"> <ReactRotatingText items={subtitles} pause={2500} /> </div>
          </div>
        </div>
      </div>
    );
  }

}
export default Banner;
