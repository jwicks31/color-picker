import { useState } from 'react';

import { ColorDisplay } from '../ColorDisplay';
import './styles.scss';

const RED = 'Red';
const GREEN = 'Green';
const BLUE = 'Blue';

const RGBForm = ({
  onSubmit = () => {},
  id = 0,
  initRed = 0,
  initGreen = 0,
  initBlue = 0
}) => {
  const [red, setRed] = useState(initRed);
  const [green, setGreen] = useState(initGreen);
  const [blue, setBlue] = useState(initBlue);

  const handleChange = e => {
    const { target } = e;
    const { name, value } = target;
    if (name === RED && value <= 255) setRed(value);
    if (name === GREEN && value <= 255) setGreen(value);
    if (name === BLUE && value <= 255) setBlue(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(id, red, green, blue);
  };
  const currentColor = `rgb(${red}, ${green}, ${blue})`;
  return (
    <form className="color-form" onSubmit={handleSubmit}>
      <label htmlFor={RED}>
        Red:
        <input
          className="color"
          value={red}
          name={RED}
          onChange={handleChange}
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
          onChange={handleChange}
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
          onChange={handleChange}
          type="number"
          required
        />
      </label>
      <input type="submit" value="Submit" />
      <ColorDisplay color={currentColor} />
    </form>
  );
};

export { RGBForm };
