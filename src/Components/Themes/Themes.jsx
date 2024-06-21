import Color from "../Color/Color.jsx";
import ColorForm from "../ColorForm/ColorForm.jsx";

export default function Themes({
  onDeleteColor,
  onEditColor,
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
            onDeleteColor={onDeleteColor}
            onEditColor={onEditColor}
          />
        ))
      )}
    </div>
  );
}
