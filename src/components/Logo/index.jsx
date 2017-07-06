import React from 'react';
import { TransitionMotion, spring, presets } from 'react-motion';

// eslint-disable-next-line
import styles from './styles.css';

const color = '#CC333F';
const secondaryColor = '#f3f3f3';

const Logo = (props) => {
  const willEnter = () => ({
    opacity: 1,
    transform: 0,
    scale: 0.7,
  });

  const willLeave = () => ({
    opacity: spring(0, presets.wobbly),
    transform: spring(-50, presets.wobbly),
    scale: spring(0, presets.gentle),
  });

  const LOGO = (

    <div className="logo">
      <svg width="200px" height="200px" >
        <path
          stroke={color} strokeWidth="0" fill={color} d="M140.773,59.227C137.316,55.771,130.055,50,100,50
        s-37.317,5.771-40.774,9.227C55.77,62.684,49.999,69.104,50,100c-0.001,30.896,5.77,37.316,9.227,40.773
        C62.683,144.229,69.103,150,100,150c30.895,0,37.317-5.771,40.772-9.227C144.229,137.316,150,130.896,150,100
        S144.229,62.683,140.773,59.227z"
        />

        <path
          stroke={secondaryColor} strokeWidth="0" fill={secondaryColor} d="M140.773,59.227C137.316,55.771,130.055,50,100,50
        s-37.317,5.771-40.774,9.227C55.77,62.684,49.999,69.104,50,100c-0.001,30.896,5.77,37.316,9.227,40.773
        C62.683,144.229,69.103,150,100,150c30.895,0,37.317-5.771,40.772-9.227C144.229,137.316,150,130.896,150,100
        S144.229,62.683,140.773,59.227z"
        />

        <path
          stroke={color} strokeWidth="0" fill={color} d="M140.773,59.227C137.316,55.771,130.055,50,100,50
        s-37.317,5.771-40.774,9.227C55.77,62.684,49.999,69.104,50,100c-0.001,30.896,5.77,37.316,9.227,40.773
        C62.683,144.229,69.103,150,100,150c30.895,0,37.317-5.771,40.772-9.227C144.229,137.316,150,130.896,150,100
        S144.229,62.683,140.773,59.227z"
        />
      </svg>
    </div>
    );

  return (
    <TransitionMotion
      styles={props.hidden ? [] : [{
        key: 'child',
        data: {},
        style: {
          transform: spring(0, presets.wobbly),
          opacity: spring(1, presets.wobbly),
          scale: spring(0.7, presets.gentle),
        },
      }]}
      willEnter={willEnter}
      willLeave={willLeave}
    >
      {items => (
        <div>
          {items.map(item => (
            <div
              className="brand" key={item.key}
              style={{
                opacity: item.style.opacity,
                transform: `translate(${item.style.transform}%) scale(${item.style.scale})`,
              }}
            >
              {LOGO}
            </div>
                  ))}
        </div>
            )}
    </TransitionMotion>
  );
};


export default Logo;
