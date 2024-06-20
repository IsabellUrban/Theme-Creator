import Color from "../Color/Color.jsx";
import ColorForm from "../ColorForm/ColorForm.jsx";

export default function Themes({
  // handleAddColor,
  handleDeleteColor,
  handleEditColor,
  onAddColor,
  colors,
}) {
  return (
    <div>
      <ColorForm onAddColor={onAddColor} />
      {colors && colors.length === 0 ? (
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
