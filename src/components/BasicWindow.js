import React from 'react';

const BasicWindow = ({ click, tekst }) => {
  return (
    <button className='gf-window' onClick={click}>
      {tekst}
    </button>
  );
};

export default BasicWindow;