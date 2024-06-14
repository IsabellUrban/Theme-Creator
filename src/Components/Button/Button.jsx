import "./Button.css";

export default function Button({
  children,
  type = "button",
  onClick,
  text = "Button",
}) {
  return (
    <button type={type} className="button" onClick={onClick}>
      {text} {children}
    </button>
  );
}
