import React from "react";


function Rida({ className, textContent, isActive, onClick, isClickable, subClass }) {

    const handleRightClick = (e) => {
        e.preventDefault(); // Prevent default context menu
        navigator.clipboard.writeText(textContent) // Copy text content to clipboard
          .then(() => {
            console.log("Text copied to clipboard:", textContent);
          })
          .catch((err) => {
            console.error("Failed to copy text:", err);
          });
      };

  return (
    <div
      className={`${className} ${isActive ? "active" : ""} ${!isClickable ? "non-clickable" : ""} ${subClass}`} 
      onClick={onClick} 
      onContextMenu={handleRightClick}
    >
      {textContent}
    </div>
  );
}

export default Rida;
