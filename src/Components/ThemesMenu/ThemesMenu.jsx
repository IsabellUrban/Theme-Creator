import { useState } from "react";
import Button from "../Button/Button";

export function ThemesMenu({
  currentTheme,
  handleChangeTheme,
  themes,
  onAddTheme,
}) {
  const [newThemeName, setNewThemeName] = useState("");

  const handleThemeNameChange = (event) => {
    setNewThemeName(event.target.value);
  };

  return (
    <>
      <label htmlFor="themes-menu">Choose a Theme:</label>
      <select
        name="themes-menu"
        id="themes-menu"
        value={currentTheme.id}
        onChange={handleChangeTheme}
      >
        {themes.map((theme) => (
          <option key={theme.id} value={theme.id}>
            {theme.name}
          </option>
        ))}
      </select>
      <input
        type="text"
        value={newThemeName}
        placeholder="Add new Theme Name"
        onChange={handleThemeNameChange}
      ></input>
      <Button
        type="button"
        text="ADD"
        onClick={() => {
          onAddTheme(newThemeName);
          setNewThemeName("");
        }}
      ></Button>
    </>
  );
}
