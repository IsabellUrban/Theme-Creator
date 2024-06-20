import { initialThemes, initialColors } from "./lib/colors";
import { uid } from "uid";
import useLocalStorageState from "use-local-storage-state";
import Themes from "./Components/Themes/Themes";
import "./App.css";
import { ThemesMenu } from "./Components/ThemesMenu/ThemesMenu";
import { useState } from "react";

function App() {
  const [themes, setThemes] = useLocalStorageState("themes", {
    defaultValue: initialThemes,
  });

  const [currentTheme, setCurrentTheme] = useState(themes[0]);

  const [colors, setColors] = useLocalStorageState("colors", {
    defaultValue: initialColors,
  });

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
    const newEditColor = colors.map((color) => {
      return color.id === id ? { ...color, ...newColor } : color;
    });
    setColors(newEditColor);
  }

  function handleChangeTheme(event) {
    const selectedThemeId = event.target.value;
    const selectedTheme = themes.find((theme) => theme.id === selectedThemeId);
    setCurrentTheme(selectedTheme);

    return (
      <div className="app">
        <h1>Theme Creator</h1>
        <ThemesMenu
          themes={themes}
          currentTheme={currentTheme}
          setCurrentTheme={setCurrentTheme}
          onHandleChangeTheme={handleChangeTheme}
        />
        {currentTheme && currentTheme.colors ? (
          <Themes
            onHandleAddColor={handleAddColor}
            onHandleDeleteColor={handleDeleteColor}
            onHandleEditColor={handleEditColor}
            colors={currentTheme.colors}
          />
        ) : (
          <p>No theme selected</p>
        )}
      </div>
    );
  }
}
export default App;
