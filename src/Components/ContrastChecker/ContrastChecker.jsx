import { useEffect } from "react";

export default function ContrastChecker({ firstColor, secondColor }) {
  useEffect(() => {
    async function fetchContrast() {
      try {
        const response = await fetch(
          "https://www.aremycolorsaccessible.com/api/are-they",
          {
            method: "POST",
            mode: "cors",
            body: JSON.stringify({ colors: [{ firstColor }, { secondColor }] }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const contrastData = await response.json();
        const contrastResult = contrastData.Overall;
        console.log("contrastData", contrastData);
        console.log("contrastResult", contrastResult);

        return contrastResult;
      } catch (error) {
        console.log("The error: ", error);
        alert("The error: ", error);
      }
    }
    fetchContrast();
  }, [firstColor, secondColor]);

return(

);
}

}
