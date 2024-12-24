import React, { useState } from "react";
import Rida from "./components/Rida";
import "./App.css";

const ridaProps = [
  { id: 1, className: "rida-element", textContent: "Geos Comfort V-7 MWS", isClickable: true, subClass: "nimi" },
  { id: 2, className: "rida-element", textContent: "1800x565x820", isClickable: false, subClass: "moot"  },
  { id: 3, className: "rida-element", textContent: "42 kg", isClickable: true, subClass: "kaal" },
];

function Menu() {
  const [activeId, setActiveId] = useState(null); // Track active clickable ID

  return (
    <>
      {ridaProps.map((rida) => (
        <Rida
          key={rida.id}
          {...rida}
          isActive={activeId === rida.id && rida.isClickable} // Only active if clickable
          onClick={rida.isClickable ? () => setActiveId(rida.id) : undefined} // Only handle click if clickable
        />
      ))}
    </>
  );
}

export default Menu;
