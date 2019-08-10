import React from 'react';

import './styles.scss';

const RED = 'Red';
const GREEN = 'Green';
const BLUE = 'Blue';

const ColorDisplay = ({ color = 'red' }) => {
  return (
    <div style={{ backgroundColor: color }} className='color-display' />
  );
};

export { ColorDisplay };
