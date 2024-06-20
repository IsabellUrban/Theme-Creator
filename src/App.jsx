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
    if (currentTheme.id === "t1") {
      return;
    } else {
      const colorsToKeep = colors.filter((color) => {
        return color.id !== id;
      });
      setColors(colorsToKeep);
    }
  }

  function handleEditColor(id, newColor) {
    if (currentTheme.id === "t1") {
      return;
    } else {
      const newEditColor = colors.map((color) => {
        return color.id === id ? { ...color, ...newColor } : color;
      });
      setColors(newEditColor);
    }
  }

  function handleAddTheme(newThemeName) {
    const newTheme = { id: uid(), name: newThemeName, colors: [] };
    setThemes([...themes, newTheme]);
    setCurrentTheme(newTheme);
  }

  function handleChangeTheme(event) {
    const selectedThemeId = event.target.value;
    const selectedTheme = themes.find((theme) => theme.id === selectedThemeId);
    setCurrentTheme(selectedTheme);
  }

  return (
    <div className="app">
      <h1>Theme Creator</h1>
      <ThemesMenu
        themes={themes}
        currentTheme={currentTheme}
        onAddTheme={handleAddTheme}
        onChange={handleChangeTheme}
      />
      {currentTheme && currentTheme.colors ? (
        <Themes
          onAddColor={handleAddColor}
          onDeleteColor={handleDeleteColor}
          onEditColor={handleEditColor}
          colors={currentTheme.colors}
        />
      ) : (
        <p>No theme selected</p>
      )}
    </div>
  );
}
export default App;
