import { useState } from 'react';

import { ColorDisplay } from '../ColorDisplay';
import './styles.scss';

const RED = 'Red';
const GREEN = 'Green';
const BLUE = 'Blue';

const RGBForm = ({ onSubmit = () => {}, id = 0 }) => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const _handleChange = e => {
    const { target } = e;
    const { name, value } = target;
    if (name === RED && value <= 255) setRed(value)
    if (name === GREEN && value <= 255) setGreen(value);
    if (name === BLUE && value <= 255) setBlue(value);
  };

  const _handleSubmit = e => {
    e.preventDefault();
    onSubmit(id, `rgb(${red}, ${green}, ${blue})`);
  };

  return (
    <form className="color-form" onSubmit={_handleSubmit}>
      <label htmlFor={RED}>
        Red:
        <input
          className="color"
          value={red}
          name={RED}
          onChange={_handleChange}
          type="number"
          required
        />
      </label>
      <label htmlFor={GREEN}>
        Green:
        <input
          className="color"
          value={green}
          name={GREEN}
          onChange={_handleChange}
          type="number"
          required
        />
      </label>
      <label htmlFor={BLUE}>
        Blue:
        <input
          className="color"
          value={blue}
          name={BLUE}
          onChange={_handleChange}
          type="number"
          required
        />
      </label>
      <input type="submit" value="Submit" />
      <ColorDisplay color={`rgb(${red}, ${green}, ${blue})`} />
    </form>
  );
};

export { RGBForm };
