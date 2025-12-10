import React, { useState } from "react";
import "./page.css";

export default function App() {
  const [color, setColor] = useState("#ff6600");
  const [favorites, setFavorites] = useState([]);

  const addFavorite = () => {
    if (!favorites.includes(color)) setFavorites([...favorites, color]);
  };

  const removeFavorite = (col) => {
    setFavorites(favorites.filter(c => c !== col));
  };

  return (
    <div className="app">
      <h1>🎨 Color Picker</h1>
      
      <div className="picker-section">
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <div
          className="preview"
          style={{ backgroundColor: color }}
        ></div>
      </div>

      <button onClick={addFavorite}>Save Color</button>

      <h3>Saved Colors:</h3>
      <div className="favorites">
        {favorites.length === 0 && <p>No favorites yet.</p>}
        {favorites.map((c) => (
          <div key={c} className="color-item">
            <div className="swatch" style={{ background: c }}></div>
            <span>{c}</span>
            <button onClick={() => removeFavorite(c)}>❌</button>
          </div>
        ))}
      </div>
    </div>
  );
}
