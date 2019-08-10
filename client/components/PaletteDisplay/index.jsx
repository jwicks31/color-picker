import React, { useState, Fragment } from 'react';

import { ColorDisplay } from '../ColorDisplay';
import { RGBForm } from '../RGBForm';
import { PaletteForm } from '../PaletteForm';

import './styles.scss';

const PaletteDisplay = ({
  index,
  palette = [],
  onDelete = () => {},
  onEdit = () => {}
}) => {
  const [showForm, setShowForm] = useState(false);
  const _onDelete = i => () => {
    onDelete(i);
  };

  const onEditClick = () => {
    setShowForm(true);
  };

  const onSumbitClick = index => palette => {
    onEdit(index, palette);
    setShowForm(false);
  };

  return (
    <div className="palette">
      <button onClick={_onDelete(index)}>delete</button>
      {!showForm &&
        palette.map(({ red, green, blue, id }, i) => {
          return (
            <div key={id} className="color">
              <ColorDisplay id={id} color={`rgb(${red}, ${green}, ${blue})`} />
              {showForm && (
                <RGBForm initRed={red} initGreen={green} initBlue={blue} />
              )}
            </div>
          );
        })}
      {!showForm && <button onClick={onEditClick}>edit</button>}
      {showForm && (
        <PaletteForm initPalette={palette} onSubmit={onSumbitClick(index)} />
      )}
    </div>
  );
};

export { PaletteDisplay };
