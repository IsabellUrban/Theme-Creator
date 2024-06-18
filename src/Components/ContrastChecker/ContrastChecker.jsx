import { useEffect } from "react";
import { useState } from "react";
import "./ContrastChecker.css";

export default function ContrastChecker({ firstColor, secondColor }) {
  const [contrastResult, setContrastResult] = useState(0);

  useEffect(() => {
    console.log("First Color:", firstColor);
    console.log("Second Color:", secondColor);

    async function fetchContrast() {
      try {
        const response = await fetch(
          "https://www.aremycolorsaccessible.com/api/are-they",
          {
            method: "POST",
            mode: "cors",
            body: JSON.stringify({ colors: [firstColor, secondColor] }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const responseData = await response.json();
        console.log("Full Response Data:", responseData);

        if (!response.ok) {
          throw new Error(
            `HTTP error! status: ${response.status} - ${responseData.message}`
          );
        }

        const contrastResult = responseData.overall;
        console.log("contrastData", responseData);
        console.log("contrastResult", contrastResult);

        setContrastResult(contrastResult);
      } catch (error) {
        console.log("The error: ", error);
        alert("The error: ", error);
      }
    }
    fetchContrast();
  }, [firstColor, secondColor]);

  return (
    <div>
      {contrastResult === "Nope" && (
        <p className="contrast-check-nope">
          Contrast Check ok? – <strong>{contrastResult}</strong>
        </p>
      )}
      {contrastResult === "Kinda" && (
        <p className="contrast-check-kinda">
          Contrast Check ok? – <strong>{contrastResult}</strong>
        </p>
      )}
      {contrastResult === "Yup" && (
        <p className="contrast-check-yup">
          Contrast Check ok? – <strong>{contrastResult}</strong>
        </p>
      )}
    </div>
  );
}
