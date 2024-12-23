import * as React from "react";
import { useState } from "react";
import "./App.css";

// Component for individual menu items
const MenuItem = ({ label, children, isOpen, onClick }) => (
  <div className="menu-item-container">
    <div className={`menu-item ${isOpen ? "active" : ""}`} onClick={onClick}>
      {label}
    </div>
    {isOpen && <div className="menu-children">{children}</div>}
  </div>
);

// Component for Sub Menu
const SubMenu = ({ items, openIndex, setOpenIndex }) => (
  <div className="sub-menu-row"> {/* Ensure horizontal layout */}
    {items.map((subItem, index) => (
      <MenuItem
        key={index}
        label={subItem.label}
        isOpen={openIndex === index}
        onClick={() => setOpenIndex(openIndex === index ? null : index)}
      >
        {openIndex === index && (
          <div className="drop-menu">
            {subItem.children.map((child, i) => (
              <div key={i} className="menu-item">
                {child}
              </div>
            ))}
          </div>
        )}
      </MenuItem>
    ))}
  </div>
);

// Main Menu Component
const MainMenu = ({ data }) => {
  const [openMainIndex, setOpenMainIndex] = useState(null);
  const [openSubIndex, setOpenSubIndex] = useState(null);

  return (
    <div className="menu-container">
      <div className="main-menu">
        {data.map((mainItem, index) => (
          <MenuItem
            key={index}
            label={mainItem.label}
            isOpen={openMainIndex === index}
            onClick={() => {
              setOpenMainIndex(openMainIndex === index ? null : index);
              setOpenSubIndex(null); // Reset sub menu on main menu change
            }}
          >
            {openMainIndex === index && (
              <SubMenu
                items={mainItem.children}
                openIndex={openSubIndex}
                setOpenIndex={setOpenSubIndex}
              />
            )}
          </MenuItem>
        ))}
      </div>
    </div>
  );
};

const Menu = () => {
  const menuData = [
    {
      label: "Geos Comfort V-7 MWS",
      children: [
        {
          label: "Metall",
          children: ["Liistud", "Värv"],
        },
        {
          label: "Puit",
          children: ["Termokuusk", "Värv", "Töö"],
        },
      ],
    },
    {
      label: "Main 2",
      children: [
        {
          label: "Sub 2.1",
          children: ["Item 2.1.1", "Item 2.1.2"],
        },
      ],
    },
    {
      label: "Main 3",
      children: [
        {
          label: "Sub 3.1",
          children: ["Item 3.1.1", "Item 3.1.2"],
        },
      ],
    },
  ];

  return <MainMenu data={menuData} />;
};

export default Menu;
