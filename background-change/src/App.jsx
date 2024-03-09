import { useState } from "react";
import Button from "./components/Button";

const App = () => {
  const [bgColor, setBgColor] = useState("#ffffff");

  const changeBG = (color) => {
    setBgColor(color);
  };

  const randomHex = () => {
    let hex = `#${Math.random().toString(16).slice(2, 8)}`;
    setBgColor(hex);
  };

  function getRGBFromColor(color) {
    const hex = color.replace(/^#/, "");
    const bigint = parseInt(hex, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `rgb(${r}, ${g}, ${b})`;
  }

  function getHSLFromColor(color) {
    const rgb = getRGBFromColor(color);
    const values = rgb
      .substring(4, rgb.length - 1)
      .split(",")
      .map(Number);
    const r = values[0] / 255;
    const g = values[1] / 255;
    const b = values[2] / 255;
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h,
      s,
      l = (max + min) / 2;

    if (max === min) {
      h = s = 0;
    } else {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0);
          break;
        case g:
          h = (b - r) / d + 2;
          break;
        case b:
          h = (r - g) / d + 4;
          break;
      }
      h /= 6;
    }

    h = Math.round(h * 360);
    s = Math.round(s * 100);
    l = Math.round(l * 100);

    return `hsl(${h}, ${s}%, ${l}%)`;
  }

  return (
    <div
      className="w-screen h-screen flex flex-col items-center justify-center"
      style={{ backgroundColor: bgColor }}
    >
      <div
        className="flex flex-col gap-1 font-bold text-3xl p-3 rounded-lg"
        style={{
          backgroundColor: bgColor === "#ffffff" ? "#000000" : "#ffffff",
          color: bgColor === "#ffffff" ? "#ffffff" : "#000000",
        }}
      >
        <h3>HEX:{bgColor}</h3>
        <h3>RGB:{getRGBFromColor(bgColor)}</h3>
        <h3>HSL:{getHSLFromColor(bgColor)}</h3>
      </div>
      <div className="absolute bottom-8">
        <div
          className="flex flex-wrap justify-center gap-3 shadow-lg p-3 rounded-full"
          style={{
            backgroundColor: bgColor === "#ffffff" ? "#f3f5f5" : "#ffffff",
          }}
        >
          <Button
            name="Red"
            changeColor={() => changeBG("#FF0000")}
            color="#FF0000"
          />
          <Button
            name="Blue"
            changeColor={() => changeBG("#0000FF")}
            color="#0000FF"
          />
          <Button
            name="Green"
            changeColor={() => changeBG("#008000")}
            color="#008000"
          />
          <Button
            name="Black"
            changeColor={() => changeBG("#000000")}
            color="#000000"
          />
          <Button
            name="White"
            changeColor={() => changeBG("#ffffff")}
            color="white"
          />
          <Button
            name={"Random Color"}
            changeColor={randomHex}
            color={bgColor}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
