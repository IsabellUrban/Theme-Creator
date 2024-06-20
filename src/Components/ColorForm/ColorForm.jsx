import "./ColorForm.css";
import ColorInput from "../ColorInput/ColorInput.jsx";
import Button from "../Button/Button.jsx";

export default function ColorForm({
  onAddColor,
  buttonText = "ADD COLOR",
  initialData = {
    role: "some color",
    hex: "#123456",
    contrastText: "#ffffff",
  },
}) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    onAddColor(data);
    event.target.reset();
  }

  return (
    <form
      name="color-form"
      className="color-form"
      aria-labelledby="color form"
      onSubmit={handleSubmit}
    >
      <label htmlFor="role" className="label">
        Role:
      </label>
      <input
        id="role"
        name="role"
        type="text"
        defaultValue={initialData.role}
      />
      <label htmlFor="hex" className="label">
        Hex:
      </label>

      <ColorInput id="hex" name="hex" defaultValue={initialData.hex} />

      <label htmlFor="contrast text" className="label">
        Contrast Text:
      </label>
      <ColorInput
        id="contrastText"
        name="contrastText"
        defaultValue={initialData.contrastText}
      />

      <Button type="submit" text={buttonText}></Button>
    </form>
  );
}
