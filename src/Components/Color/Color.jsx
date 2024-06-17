import "./Color.css";
import Button from "../Button/Button.jsx";
import { useState } from "react";
import ColorForm from "../ColorForm/ColorForm.jsx";
import CopyToClipboard from "../CopyToClipboard/CopyToClipboard.jsx";

export default function Color({ color, onDeleteColor, onEditColor }) {
  const [isConfirmingDelete, setIsConfirmingDelete] = useState(false);
  const [isEditingColor, setIsEditingColor] = useState(false);

  function handleToggleDelete() {
    setIsConfirmingDelete((prevState) => !prevState);
  }

  function handleToggleEdit() {
    setIsEditingColor((prevState) => !prevState);
  }

  function handleEditColor(id, newColor) {
    onEditColor(id, newColor);
  }

  return (
    <div
      className="color-card"
      style={{
        background: color.hex,
        color: color.contrastText,
      }}
    >
      <section>
        <h3 className="color-card-headline">{color.hex}</h3>
        <CopyToClipboard copiedText={color.hex} />
      </section>
      <h4>{color.role}</h4>
      <p>contrast: {color.contrastText}</p>
      {!isEditingColor && !isConfirmingDelete && (
        <>
          <Button
            type="button"
            text="DELETE"
            onClick={handleToggleDelete}
          ></Button>
          <Button type="button" text="EDIT" onClick={handleToggleEdit}></Button>
        </>
      )}
      {!isEditingColor && isConfirmingDelete && (
        <>
          <p className="color-card-highlight">Do you really want to delete?</p>
          <Button
            type="button"
            text="CANCEL"
            onClick={handleToggleDelete}
          ></Button>
          <Button
            type="button"
            text="DELETE"
            onClick={() => {
              onDeleteColor(color.id);
              setIsConfirmingDelete(false);
            }}
          ></Button>
        </>
      )}
      {isEditingColor && (
        <>
          <ColorForm
            onAddColor={(newColor) => {
              handleEditColor(color.id, newColor);
              setIsEditingColor(false);
            }}
            buttonText="Update your Color"
            color={color}
          />
          <Button
            type="button"
            text="CANCEL"
            onClick={handleToggleEdit}
          ></Button>
        </>
      )}
    </div>
  );
}
