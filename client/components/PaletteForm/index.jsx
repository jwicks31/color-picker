import { useReducer } from 'react';

import { SERVER_URL } from '../../constants';
import { RGBForm } from '../RGBForm';

import './styles.scss';

const RED = 'Red';
const GREEN = 'Green';
const BLUE = 'Blue';

const initialState = [{
  id: 0,
  color: 'rgb(0,0,0)'
},
{
  id: 1,
  color: 'rgb(0,0,0)'
},
{
  id: 2,
  color: 'rgb(0,0,0)'
},
{
  id: 3,
  color: 'rgb(0,0,0)'
},
{
  id: 4,
  color: 'rgb(0,0,0)'
}];

const paletteReducer = (state = initialState, { id, rgbColor }) => {
  return state.map(x => {
    if (x.id === id) return { ...x, color: rgbColor };
    return x;
  });
}; 

const PaletteForm = ({ onSubmit = () => {} }) => {
  const [palette, setPaletteColor] = useReducer(paletteReducer, initialState);

  const _onSubmitColor = (id, rgbColor) => {
    setPaletteColor({ id, rgbColor })
  };

  const _onSubmitPalette = () => {
    onSubmit(palette);
  }

  return (
    <div className="form-container">
      <div className="rgb-container">
        <RGBForm id={0} onSubmit={_onSubmitColor} />
        <RGBForm id={1} onSubmit={_onSubmitColor} />
        <RGBForm id={2} onSubmit={_onSubmitColor} />
        <RGBForm id={3} onSubmit={_onSubmitColor} />
        <RGBForm id={4} onSubmit={_onSubmitColor} />
      </div>
      <button onClick={_onSubmitPalette}>Submit Palette</button>
    </div>
  );
};

export { PaletteForm };
