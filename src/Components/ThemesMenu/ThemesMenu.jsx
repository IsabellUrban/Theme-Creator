import { useState } from "react";
import Button from "../Button/Button";
import "./ThemesMenu.css";

export function ThemesMenu({ currentTheme, onChange, themes, onAddTheme }) {
  const [newThemeName, setNewThemeName] = useState("");

  const handleThemeNameChange = (event) => {
    setNewThemeName(event.target.value);
  };

  return (
    <div className="themes-menu-box">
      <div className="themes-menu-box">
        <label htmlFor="themes-menu" style={{ marginRight: "10px" }}>
          Choose a Theme:{" "}
        </label>
        <select
          name="themes-menu"
          id="themes-menu"
          value={currentTheme.id}
          onChange={onChange}
        >
          {themes.map((theme) => (
            <option key={theme.id} value={theme.id}>
              {theme.name}
            </option>
          ))}
        </select>
      </div>
      <div className="themes-menu-box-buttons">
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
        <Button type="button" text="EDIT" onClick={() => {}}></Button>

        <Button type="button" text="DELETE" onClick={() => {}}></Button>
      </div>
    </div>
  );
}
