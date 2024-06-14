import { initialColors } from "./lib/colors";
import { uid } from "uid";
import { useState } from "react";
import Color from "./Components/Color/Color";
import ColorForm from "./Components/ColorForm/ColorForm";
import "./App.css";

function App() {
  const [colors, setColors] = useState(initialColors);

  function handleAddColor(newColor) {
    setColors([{ id: uid(), ...newColor }, ...colors]);
  }

  function handleDeleteColor(id) {
    const colorsToKeep = colors.filter((color) => {
      return color.id !== id;
    });
    setColors(colorsToKeep);
  }

  function handleEditColor(id, newColor) {
    console.log("Edit color: ", id, newColor);
    const newEditColor = colors.map((color) => {
      return color.id === id ? { ...color, ...newColor } : color;
    });
    setColors(newEditColor);
  }

  return (
    <div className="app">
      <h1>Theme Creator</h1>
      <ColorForm onAddColor={handleAddColor} />
      {colors.length === 0 ? (
        <p className="new-color-text">
          Please add a new color!{" "}
          <span role="img" aria-label="rainbow emoji">
            🌈
          </span>
        </p>
      ) : (
        colors.map((color) => (
          <Color
            key={color.id}
            color={color}
            onDeleteColor={handleDeleteColor}
            onEditColor={handleEditColor}
          />
        ))
      )}
    </div>
  );
}

export default App;
