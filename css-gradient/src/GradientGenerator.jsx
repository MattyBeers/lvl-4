import React, { useState, useEffect } from 'react';
import './index.css';

function GradientGenerator() {
  const [colors, setColors] = useState(['#FFFF00', '#000000']);
  const [angle, setAngle] = useState(50);

  const generateCSS = () => {
    const css = `-moz-background: linear-gradient(${angle}deg, ${colors.join(', ')});` +
      `\n-webkit-background: linear-gradient(${angle}deg, ${colors.join(', ')});` +
      `\nbackground: linear-gradient(${angle}deg, ${colors.join(', ')});`;

    return css;
  };

  const handleColorChange = (index, value) => {
    const updatedColors = [...colors];
    updatedColors[index] = value;
    setColors(updatedColors);
  };

  const addColor = () => {
    setColors([...colors, '#FFFFFF']);
  };

  const removeColor = () => {
    if (colors.length > 2) {
      const updatedColors = colors.slice(0, -1);
      setColors(updatedColors);
    }
  };

  useEffect(() => {
    generateCSS();
  }, [colors, angle]);

  return (
    <div className="gradient-generator">
      <div className="color-boxes">
        <div className="color-box">
          <div style={{ backgroundColor: colors[0] }} className="color-view"></div>
          <input type="color" value={colors[0]} onChange={(e) => handleColorChange(0, e.target.value)} />
        </div>
        <div className="color-box">
          <div style={{ backgroundColor: colors[1] }} className="color-view"></div>
          <input type="color" value={colors[1]} onChange={(e) => handleColorChange(1, e.target.value)} />
        </div>
      </div>
      <div className="angle-box">
        <label>Angle:</label>
        <input type="number" value={angle} onChange={(e) => setAngle(e.target.value)} />
      </div>
      <div className="preview-box">
        <div
          className="gradient-preview"
          style={{
            background: `linear-gradient(${angle}deg, ${colors[0]}, ${colors[1]})`,
          }}
        ></div>
      </div>
      <div className="buttons">
        <button onClick={addColor}>Add Color</button>
        <button onClick={removeColor}>Remove Color</button>
      </div>
      <div className="info-box">
        <div className="css-code-box">
          <label>CSS Code:</label>
          <textarea readOnly value={generateCSS()} />
        </div>
      </div>
    </div>
  );
}

export default GradientGenerator;
