import Button from "../Button/Button";

export function ThemesMenu({ currentTheme, handleChangeTheme, themes }) {
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
      <Button type="button" text="ADD"></Button>
    </>
  );
}
