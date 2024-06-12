import { useState } from "react";
import "./ColorForm.css";

export default function ColorForm({
  initialData = { role: "some color", hex: "#123456", contrastText: "#fffff" },
}) {
  const [hex, setHex] = useState("#123456");
  const [contrastText, setContrastText] = useState("#fffff");

  const handleHexChange = (event) => {
    setHex(event.target.value);
  };

  const handleContrastTextChange = (event) => {
    setContrastText(event.target.value);
  };

  return (
    <form
      className="colorform"
      aria-labelledby="color form"
      //   onSubmit={handleSubmit}
    >
      <label htmlFor="role">Role</label>
      <input
        id="role"
        name="role"
        type="text"
        defaultValue={initialData.role}
      />

      <label htmlFor="hex">Hex</label>
      <input
        id="hex"
        name="hex"
        type="color"
        defaultValue={initialData.hex}
        // value={hex}
        // onChange={handleHexChange}
      />
      <label htmlFor="contrast text">Contrast Text</label>
      <input
        id="contrast text"
        name="contrast text"
        type="color"
        defaultValue={initialData.contrastText}
        // value={contrastText}
        // onChange={handleContrastTextChange}
      />
    </form>
  );
}
