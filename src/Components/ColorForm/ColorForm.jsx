import "./ColorForm.css";
import ColorInput from "../ColorInput/ColorInput.jsx";

export default function ColorForm({
  onAddColor,
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
    console.log("Form submitted with data:", data);

    onAddColor(data);
    event.target.reset();
  }

  return (
    <form
      className="color-form"
      aria-labelledby="color form"
      onSubmit={handleSubmit}
    >
      <label htmlFor="role">Role:</label>
      <input
        id="role"
        name="role"
        type="text"
        defaultValue={initialData.role}
      />
      <label htmlFor="hex">Hex:</label>

      <ColorInput id="hex" name="hex" defaultValue={initialData.hex} />

      <label htmlFor="contrast text">Contrast Text:</label>
      <ColorInput
        id="contrastText"
        name="contrastText"
        defaultValue={initialData.contrastText}
      />

      <button type="submit" className="button">
        ADD COLOR
      </button>
    </form>
  );
}
