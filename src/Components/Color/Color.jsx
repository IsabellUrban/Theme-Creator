import "./Color.css";
import Button from "../Button/Button.jsx";
import { useState } from "react";

export default function Color({ color, onDeleteColor }) {
  const [isConfirmingDelete, setIsConfirmingDelete] = useState(false);

  function handleToggleButton() {
    setIsConfirmingDelete((prevState) => !prevState);
  }

  return (
    <div
      className="color-card"
      style={{
        background: color.hex,
        color: color.contrastText,
      }}
    >
      <h3 className="color-card-headline">{color.hex}</h3>
      <h4>{color.role}</h4>
      <p>contrast: {color.contrastText}</p>
      {!isConfirmingDelete ? (
        <Button type="button" onClick={handleToggleButton}>
          Delete
        </Button>
      ) : (
        <>
          <p className="color-card-highlight">Do you really want to delete?</p>
          <Button type="button" onClick={handleToggleButton}>
            Cancel
          </Button>
          <Button
            type="button"
            onClick={() => {
              onDeleteColor(color.id);
              isConfirmingDelete(false);
            }}
          >
            Delete
          </Button>
        </>
      )}
    </div>
  );
}
