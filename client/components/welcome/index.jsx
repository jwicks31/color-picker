import { useState, useEffect, useRef, useCallback } from 'react';
import axios from 'axios';

import { SERVER_URL } from '../../constants';
import { PaletteForm } from '../PaletteForm';
import { ColorDisplay } from '../ColorDisplay';
import { PaletteDisplay } from '../PaletteDisplay';
import './styles.scss';

const initialState = [];

const Welcome = () => {
  const [palettes, setPalettes] = useState(initialState);
  const firstUpdate = useRef(true);

  useEffect(() => {
    const fetchPalletes = async () => {
      const { status, data } = await axios.get(`${SERVER_URL}/palettes`);

      if (status === 200) {
        if (!!data) setPalettes(data);
      } else {
        throw new Error('Error connecting to server');
      }
    };

    fetchPalletes();
  }, [setPalettes, axios]);

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    const postPalettes = async () => {
      await axios.post(`${SERVER_URL}/post-palette`, palettes);
    };
    postPalettes();
  }, [palettes, axios]);

  const addPalette = async palette => {
    setPalettes(() => [...palettes, palette]);
    await postPallete(palette);
  };

  const removePalette = index => {
    const newPalette = palettes.reduce((a, c, i) => {
      if (i === index) return a;
      return [...a, c];
    }, []);
    setPalettes(() => newPalette);
  };

  const editPalette = (index, palette) => {
    const newPalette = palettes.reduce((a, c, i) => {
      if (i === index) return [...a, palette];
      return [...a, c];
    }, []);
    setPalettes(() => newPalette);
  };

  const postPallete = async pallete => {
    await axios.post(`${SERVER_URL}/post-palette`, pallete);
  };

  return (
    <div className="welcome-container">
      <PaletteForm onSubmit={addPalette} />
      {palettes.map((palette, i) => (
        <PaletteDisplay
          onDelete={removePalette}
          onEdit={editPalette}
          palette={palette}
          index={i}
          key={i}
        />
      ))}
    </div>
  );
};

export default Welcome;
