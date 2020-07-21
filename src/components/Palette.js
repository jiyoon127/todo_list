import React from 'react';
import './Palette.css';

const Palette = ({colors, selected, onSelect}) => {
  return (
    <div className="palette">
      {colors.map(color => (
        <div
          style={{background: color}}
          className={`color ${selected === color && 'active'}`}
          onClick={() => onSelect(color)}
          key={color}></div>
      ))}
    </div>
  );
};

export default Palette;
