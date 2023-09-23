import { useReducer } from 'react';

import { SERVER_URL } from '../../constants';
import { RGBForm } from '../RGBForm';

import './styles.scss';

const RED = 'Red';
const GREEN = 'Green';
const BLUE = 'Blue';

const initialState = [
  {
    id: 0,
    red: 0,
    green: 0,
    blue: 0
  },
  {
    id: 1,
    red: 0,
    green: 0,
    blue: 0
  },
  {
    id: 2,
    red: 0,
    green: 0,
    blue: 0
  },
  {
    id: 3,
    red: 0,
    green: 0,
    blue: 0
  },
  {
    id: 4,
    red: 0,
    green: 0,
    blue: 0
  }
];

const paletteReducer = (state = initialState, { id, red, green, blue }) => {
  return state.map(x => {
    if (x.id === id) return { ...x, red, green, blue };
    return x;
  });
};

const PaletteForm = ({ onSubmit = () => {}, initPalette = initialState }) => {
  const [palette, setPaletteColor] = useReducer(paletteReducer, initPalette);

  const onSubmitColor = (id, red, green, blue) => {
    setPaletteColor({ id, red, green, blue });
  };

  const onSubmitPalette = () => {
    onSubmit(palette);
  };

  return (
    <div className="form-container">
      <div className="rgb-container">
        {palette.map(({ red, green, blue }, i) => {
          return (
            <RGBForm
              initRed={red}
              initGreen={green}
              initBlue={blue}
              id={i}
              key={i}
              onSubmit={onSubmitColor}
            />
          );
        })}
      </div>
      <button onClick={onSubmitPalette}>Submit Palette</button>
    </div>
  );
};

export { PaletteForm };
