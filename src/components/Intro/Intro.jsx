import React from 'react';
import ReactVivus from 'react-vivus';
import PropTypes from 'prop-types';
import introSVG from '../../images/Intro.svg';

const Intro = ({ startHide }) => {
  const hiddenClassName = startHide ? 'intro__hide' : '';
  return (
    <section id="intro">
      <ReactVivus
        id="intro__draw"
        className={hiddenClassName}
        option={{
          file: introSVG,
          animTimingFunction: 'EASE',
          type: 'scenario-sync',
          duration: 14,
        }}
      />
    </section>
  );
};

Intro.propTypes = { startHide: PropTypes.bool };

export default Intro;
