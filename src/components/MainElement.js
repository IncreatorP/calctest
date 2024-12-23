import React, { useState } from 'react';
import SubElement from './SubElement';

function MainElement({ title }) {
  const [subElements, setSubElements] = useState([
    { id: 1, name: "SubElement 1", isVisible: false },
    { id: 2, name: "SubElement 2", isVisible: false },
    { id: 3, name: "SubElement 3", isVisible: false }
  ]);

  const toggleSubElements = () => {
    setSubElements((prev) =>
      prev.map((sub) => ({ ...sub, isVisible: !sub.isVisible }))
    );
  };

  const hideAllSubSubElements = () => {
    setSubElements((prev) =>
      prev.map((sub) => ({ ...sub, isVisible: false }))
    );
  };

  const handleClick = () => {
    const areAllHidden = subElements.every((sub) => !sub.isVisible);
    if (areAllHidden) {
      toggleSubElements(); // Show sub-elements
    } else {
      hideAllSubSubElements(); // Hide all, including sub-sub-elements
    }
  };

  return (
    <div className='main-element'>
      <h2 onClick={handleClick}>{title}</h2>
      {subElements.map((sub) => (
        <SubElement key={sub.id} sub={sub} />
      ))}
    </div>
  );
}

export default MainElement;
