import React from 'react';
import propTypes from 'prop-types';

import { default as SkeletonBase } from 'react-loading-skeleton';

import 'react-loading-skeleton/dist/skeleton.css';

const Skeleton = ({ circle, className, height, invert, theme, width }) => {
  let baseColor = '#ebebeb';
  let highlightColor = '#f5f5f5';

  if (theme === 'dark') {
    if (invert) {
      baseColor = '#1e2a47';
      highlightColor = '#141d2f';
    } else {
      baseColor = '#141d2f';
      highlightColor = '#1e2a47';
    }
  }

  return (
    <SkeletonBase
      baseColor={baseColor}
      className={className}
      highlightColor={highlightColor}
      circle={circle}
      height={height}
      width={width}
    />
  );
};

Skeleton.propTypes = {
  circle: propTypes.bool,
  className: propTypes.string,
  height: propTypes.oneOfType([propTypes.string, propTypes.number]),
  invert: propTypes.bool,
  width: propTypes.oneOfType([propTypes.string, propTypes.number]),
};

Skeleton.defaultProps = {
  invert: false,
};

export default Skeleton;
