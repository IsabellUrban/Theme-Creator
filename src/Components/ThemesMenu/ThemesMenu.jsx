import { useState } from "react";
import Button from "../Button/Button";
import "./ThemesMenu.css";

export function ThemesMenu({
  currentTheme,
  onChange,
  themes,
  onAddTheme,
  onEditTheme,
  onDeleteTheme,
}) {
  const [newThemeName, setNewThemeName] = useState("");
  const [isEditingTheme, setIsEditingTheme] = useState(false);
  const [editThemeName, setEditThemeName] = useState(currentTheme.name);
  const [isDelitingTheme, setIsDeletingTheme] = useState(false);

  const handleThemeNameChange = (event) => {
    setNewThemeName(event.target.value);
  };

  const handleEditThemeNameChange = (event) => {
    setEditThemeName(event.target.value);
  };

  const handleEditClick = () => {
    setIsEditingTheme(true);
    setEditThemeName(currentTheme.name);
  };

  const handleUpdateClick = () => {
    onEditTheme({ ...currentTheme, name: editThemeName });
    setIsEditingTheme(false);
  };

  const handleCancelClick = () => {
    setIsEditingTheme(false);
    setIsDeletingTheme(false);
  };

  const handleDeleteClick = () => {
    setIsDeletingTheme(true);
  };

  const handleConfirmingDeleteClick = () => {
    onDeleteTheme(currentTheme.id);
    setIsDeletingTheme(false);
  };

  return (
    <div className="themes-menu-box">
      {!isEditingTheme && !isDelitingTheme ? (
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
      ) : isEditingTheme ? (
        <div className="themes-menu-box">
          <input
            type="text"
            value={editThemeName}
            placeholder="Edit Theme Name"
            onChange={handleEditThemeNameChange}
          />
        </div>
      ) : (
        <div className="themes-menu-box">
          <p>Are you sure you want to delete this theme?</p>
        </div>
      )}

      <div className="themes-menu-box-buttons">
        {!isEditingTheme && !isDelitingTheme ? (
          <>
            <input
              type="text"
              value={newThemeName}
              placeholder="Add new Theme Name"
              onChange={handleThemeNameChange}
            />
            <Button
              type="button"
              text="ADD"
              onClick={() => {
                onAddTheme(newThemeName);
                setNewThemeName("");
              }}
            />
            <Button type="button" text="EDIT" onClick={handleEditClick} />
            <Button type="button" text="DELETE" onClick={handleDeleteClick} />
          </>
        ) : isEditingTheme ? (
          <>
            <Button type="button" text="UPDATE" onClick={handleUpdateClick} />
            <Button type="button" text="CANCEL" onClick={handleCancelClick} />
          </>
        ) : (
          <>
            <Button
              type="button"
              text="YES, DELETE"
              onClick={handleConfirmingDeleteClick}
            />
            <Button type="button" text="CANCEL" onClick={handleCancelClick} />
          </>
        )}
      </div>
    </div>
  );
}
