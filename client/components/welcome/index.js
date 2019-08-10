import { useState, useEffect, useRef } from 'react';
import axios from "axios";

import { SERVER_URL } from "../../constants";
import { PaletteForm } from '../PaletteForm';
import { ColorDisplay } from '../ColorDisplay';
import { PaletteDisplay } from '../PaletteDisplay';
import "./styles.scss";

const initialState = [];

const Welcome = () => {
  const [palettes, setPalettes] = useState(initialState);
  const firstUpdate = useRef(true);

  useEffect(() => {
    const fetchPalletes = async () => {
      const { status, data } = await axios.get(`${SERVER_URL}/palettes`);

      if (status === 200) {
        setPalettes(JSON.parse(data.body));
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
    const postPalletes = async () => {
      const { status } = await axios.post(
        `${SERVER_URL}/post-palettes`,
        palettes
      );

      if (status === 200) {
        return;
      } else {
        throw new Error("Error connecting to server");
      }
    };

    postPalletes();
  }, [setPalettes, palettes, axios]);

  const _addPalette = palette => {
    setPalettes(() => [...palettes, palette]);
  };

  const _removePalette = index => {
    const newPalette = palettes.reduce((a, c, i) => {
      if (i === index) return a;
      return [...a, c]
    }, []);
    setPalettes(() => newPalette);
  }

  return (
    <div className="welcome-container">
      <PaletteDisplay
        onDelete={_removePalette}
        palettes={palettes}
      />
      <PaletteForm onSubmit={_addPalette} />
    </div>
  );
};

export default Welcome;
