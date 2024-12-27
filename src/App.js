import React, { useState } from "react";
import Rida from "./components/Rida";
import "./App.css";

const pink = {
  nimi: "Geos Comfort-V7 MWS",
  moot: "1800x565x820",
  kaal: "36kg",
  metall: [
    { id: 1, mat: "Nurkraud 50x50x4", amt: 1, pikkus: 1.72, kaal: 5.27, pindala: 0.359 },
    { id: 2, mat: "Kanttoru 50x30x2", amt: 1, pikkus: 3.1, kaal: 7.54, pindala: 0.506 },
    { id: 3, mat: "Liist 40x4", amt: 1, pikkus: 0.42, kaal: 0.54, pindala: 0.037 },
    { id: 4, mat: "Leht 70x50x6", amt: 4, pikkus: 0.28, kaal: 0.67, pindala: 0.034 }
  ],
  puit: [
    { id: 1, mat: "Kuusk 145x45", amt: 2, pikkus: 4.0, kaal: 5.27, pindala: 0.359 },
    { id: 2, mat: "Kuusk 95x45", amt: 3, pikkus: 6.0, kaal: 7.54, pindala: 0.506 }
  ]
};

function Menu() {
  const [activeId, setActiveId] = useState(null); // Track active clickable ID

  // Dynamically create the ridaProps array from the pink object
  const ridaPropsFromPink = [
    { id: 1, className: "rida-element", textContent: pink.nimi, isClickable: false, subClass: "nimi" },
    { id: 2, className: "rida-element", textContent: pink.moot, isClickable: false, subClass: "moot" },
    { id: 3, className: "rida-element", textContent: pink.kaal, isClickable: false, subClass: "kaal" },
    { id: 4, className: "rida-element", textContent: ">", isClickable: true, subClass: "", onClick: () => console.log("Expand product clicked!") },
    { id: 5, className: "rida-element", textContent: "Metall", isClickable: true, subClass: "metall", onClick: () => console.log("Show metall elements clicked!") },
    { id: 6, className: "rida-element", textContent: "Puit", isClickable: true, subClass: "puit", onClick: () => console.log("Show puit elements clicked!") }
  ];

  return (
    <div className="rida-main">
      {ridaPropsFromPink.map((rida) => (
        <Rida
          key={rida.id}
          {...rida}
          isActive={activeId === rida.id && rida.isClickable}
          onClick={
            rida.isClickable
              ? rida.onClick || (() => setActiveId(rida.id))
              : undefined
          }
        />
      ))}
    </div>
  );
}

export default Menu;
