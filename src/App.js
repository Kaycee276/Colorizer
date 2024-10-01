import { useState } from "react";

const App = () => {
  const [palette, setPalette] = useState([
    "255,255,255",
    "255,255,255",
    "255,255,255",
  ]);

  const handleBackgroundColorChange = () => {
    setPalette(
      palette.map(() => {
        const r = Math.floor(Math.random() * 255);
        const g = Math.floor(Math.random() * 255);
        const b = Math.floor(Math.random() * 255);

        return `${r},${g},${b}`;
      })
    );
  };

  return (
    <section className=" h-screen w-full flex items-center justify-center bg-black gap-5 flex-wrap">
      {palette.map((color, index) => (
        <Palette
          key={index}
          color={color}
          onChange={handleBackgroundColorChange}
        />
      ))}
    </section>
  );
};

const Palette = ({ color, onChange }) => {
  return (
    <div
      style={{ background: `rgb(${color})`, userSelect: "none" }}
      className="w-40 h-20 border-2 rounded flex items-center cursor-pointer justify-center"
      onClick={onChange}
    >
      <h1>{color}</h1>
    </div>
  );
};

export default App;
