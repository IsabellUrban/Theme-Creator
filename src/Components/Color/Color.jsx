import "./Color.css";
import Button from "../Button/Button.jsx";
import { useState } from "react";

export default function Color({ color, onDeleteColor }) {
  const [isDelete, setIsDelete] = useState(false);

  function handleToggleButton() {
    isDelete ? setIsDelete(false) : setIsDelete(true);
    // setIsDelete((prevState) => !prevState);
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
      {!isDelete ? (
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
              setIsDelete(false);
            }}
          >
            Delete
          </Button>
        </>
      )}
    </div>
  );
}
