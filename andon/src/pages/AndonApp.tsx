import React, { useState } from 'react';
import { Card, Input, Button, ColorPicker } from 'antd';
import type { Color } from 'antd/es/color-picker';
import './AndonApp.css';

const AndonApp: React.FC = () => {
  const [inputValue1, setInputValue1] = useState<string>('');
  const [inputValue2, setInputValue2] = useState<string>('');
  const [color1, setColor1] = useState<string>('#000000');
  const [color2, setColor2] = useState<string>('#000000');
  const [backgroundColor, setBackgroundColor] = useState<string>('#ffffff');

  const handleInputChange1 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue1(e.target.value);
  };

  const handleInputChange2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue2(e.target.value);
  };

  const handleColorChange1 = (color: Color) => {
    setColor1(`#${color.toHex()}`);
  };

  const handleColorChange2 = (color: Color) => {
    setColor2(`#${color.toHex()}`);
  };

  const handleBackgroundColorChange = (color: Color) => {
    setBackgroundColor(`#${color.toHex()}`);
  };

  const handleSubmit = () => {
    console.log('Color 1:', color1);
    console.log('Color 2:', color2);
    console.log('Background Color:', backgroundColor);
    console.log('Input 1:', inputValue1);
    console.log('Input 2:', inputValue2);
  };

  return (
    <>
      <h2 className="display-title">Display Screen</h2>
      <Card
        className="andon-app-card display-card"
        bordered={false}
        style={{ width: '100%', minHeight: '250px', marginBottom: '20px', textAlign: 'center', backgroundColor }}
      >
        <p className="shared-background" style={{ color: color1 }}>{inputValue1}</p>
        <p className="shared-background" style={{ color: color2 }}>{inputValue2}</p>
      </Card>

      <Card>
        <Input placeholder="Input 1" value={inputValue1} onChange={handleInputChange1} style={{ marginBottom: '10px' }} />
        <ColorPicker value={color1} onChange={handleColorChange1} />
        <Input placeholder="Input 2" value={inputValue2} onChange={handleInputChange2} style={{ marginBottom: '10px' }} />
        <ColorPicker value={color2} onChange={handleColorChange2} />
        <br />
        
        <div style={{ display: 'flex', alignItems: 'center' }}> {/* Flexbox ile yan yana yerleştirme */}
          <h4>Background Color: </h4>
          <ColorPicker value={backgroundColor} onChange={handleBackgroundColorChange} style={{ marginRight: '10px', marginLeft:'10px' }} />
        </div>
        <Button type="primary" onClick={handleSubmit}>Submit</Button>
      </Card>
    </>
  );
};

export default AndonApp;