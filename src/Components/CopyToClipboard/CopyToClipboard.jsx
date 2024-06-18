import { useEffect, useState } from "react";
import Button from "../Button/Button";

export default function CopyToClipboard({ copiedText }) {
  const [isCopied, setIsCopied] = useState(false);

  async function writeClipboardText() {
    try {
      await navigator.clipboard.writeText(copiedText);
      setIsCopied(true);
    } catch (error) {
      console.error(error.message);
      alert("There is an error:", error.message);
    }
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setIsCopied(false);
    }, 3000);
    return () => {
      clearInterval(timer);
    };
  }, [isCopied]);

  return (
    <Button
      type="Button"
      onClick={writeClipboardText}
      text={isCopied ? "SUCCESSFULLY COPIED!" : "COPY"}
      style={{ background: "#e3e3e3", color: "black" }}
    />
  );
}
