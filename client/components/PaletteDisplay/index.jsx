import React from 'react';

import { ColorDisplay } from '../ColorDisplay';

const PaletteDisplay = ({ palettes = [], onDelete = () => {} }) => {

  const _onDelete = i => () => {
    onDelete(i)
  }

  return (
    <div>
      {
        palettes.map((palette, i) => {
          return (
            <div key={i} className="palette">
              <button onClick={_onDelete(i)}>delete</button>
              {palette.map(({ color, id }, i) => {
                return <ColorDisplay key={id} id={id} color={color} />;
              })}
            </div>
          );
        })
      }
    </div>
  );
};

export { PaletteDisplay };



