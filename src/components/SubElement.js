import React, { useState, useEffect } from 'react';
import SubSubElement from './SubSubElement';

function SubElement({ sub }) {
  const [subSubElements, setSubSubElements] = useState([
    { id: 1, name: "SubSubElement 1", isVisible: false },
    { id: 2, name: "SubSubElement 2", isVisible: false }
  ]);

  // Effect to reset visibility of sub-sub-elements when the parent (sub) is hidden
  useEffect(() => {
    if (!sub.isVisible) {
      setSubSubElements((prev) =>
        prev.map((subSub) => ({ ...subSub, isVisible: false }))
      );
    }
  }, [sub.isVisible]);

  const toggleSubSubElements = () => {
    setSubSubElements((prev) =>
      prev.map((subSub) => ({ ...subSub, isVisible: !subSub.isVisible }))
    );
  };

  const handleClick = () => {
    const areAllHidden = subSubElements.every((subSub) => !subSub.isVisible);
    if (areAllHidden) {
      toggleSubSubElements(); // Show sub-sub-elements
    } else {
      setSubSubElements((prev) =>
        prev.map((subSub) => ({ ...subSub, isVisible: false }))
      );
    }
  };

  // Render conditionally based on `sub.isVisible`
  if (!sub.isVisible) {
    return null;
  }

  return (
    <div className='sub-element'>
      <h3 onClick={handleClick}>{sub.name}</h3>
      {subSubElements.map(
        (subSub) =>
          subSub.isVisible && <SubSubElement key={subSub.id} subSub={subSub} />
      )}
    </div>
  );
}

export default SubElement;
