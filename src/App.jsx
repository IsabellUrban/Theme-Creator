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
    const updatedColor = { id: uid(), ...newColor };
    setColors([updatedColor, ...colors]);
    if (currentTheme.id === "t1") {
      return;
    } else {
      const updatedTheme = {
        ...currentTheme,
        colors: [updatedColor, ...currentTheme.colors],
      };
      const updatedThemes = themes.map((theme) =>
        theme.id === currentTheme.id ? updatedTheme : theme
      );

      setThemes(updatedThemes);
      setCurrentTheme(updatedTheme);
    }
  }

  function handleDeleteColor(id) {
    if (currentTheme.id === "t1") {
      return;
    } else {
      const updatedColors = currentTheme.colors.filter(
        (color) => color.id !== id
      );
      const updatedTheme = { ...currentTheme, colors: updatedColors };
      const updatedThemes = themes.map((theme) =>
        theme.id === currentTheme.id ? updatedTheme : theme
      );

      setThemes(updatedThemes);
      setCurrentTheme(updatedTheme);
    }
  }

  function handleEditColor(id, newColor) {
    if (currentTheme.id === "t1") {
      return;
    } else {
      const updatedColors = currentTheme.colors.map((color) =>
        color.id === id ? { ...color, ...newColor } : color
      );

      const updatedTheme = { ...currentTheme, colors: updatedColors };
      const updatedThemes = themes.map((theme) =>
        theme.id === currentTheme.id ? updatedTheme : theme
      );

      setThemes(updatedThemes);
      setCurrentTheme(updatedTheme);
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
