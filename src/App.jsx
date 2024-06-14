import { initialColors } from "./lib/colors";
import { uid } from "uid";
import { useState } from "react";
import Color from "./Components/Color/Color";
import ColorForm from "./Components/ColorForm/ColorForm";
import "./App.css";

function App() {
  const [colors, setColors] = useState(initialColors);

  function handleAddColor(newColor) {
    console.log("Adding new color:", newColor);
    setColors([{ id: uid(), ...newColor }, ...colors]);
  }

  function handleDeleteColor(id) {
    console.log("Delete color:", id);
    const colorsToKeep = colors.filter((color) => {
      return color.id !== id;
    });
    console.log("Remaining colors:", colorsToKeep);
    setColors(colorsToKeep);
  }

  return (
    <>
      <h1>Theme Creator</h1>
      <ColorForm onAddColor={handleAddColor} />
      <>
        {colors.length === 0 ? (
          <>
            <p className="new-color-text">
              Please add a new Color! <span aria-label="rainbow emoji">🌈</span>
            </p>
          </>
        ) : (
          colors.map((color) => {
            return (
              <Color
                key={color.id}
                color={color}
                onDeleteColor={handleDeleteColor}
              />
            );
          })
        )}
      </>
    </>
  );
}

export default App;
