import { useState } from "react";
import "./ColorInput.css";

export default function ColorInput({ id, name, defaultValue }) {
  const [input, setInput] = useState(defaultValue);

  return (
    <>
      <input
        className="color-input"
        type="text"
        id={id}
        name={name}
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />
      <input
        className="color-input"
        type="color"
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />
    </>
  );
}
