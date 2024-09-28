import { useState } from "react";

const App = function () {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
        rowGap: "5rem",
        height: "95vh",
        alignItems: "center",
        background: "rgb(210,153,127)",
        borderRadius: "1rem",
        overflow: "scroll",
      }}
    >
      <Sect />
      <Sect />
      <Sect />
    </div>
  );
};

const Sect = function () {
  const [backgroundColor, setbackgroundColor] = useState("255, 255, 225");

  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  const [Text, setText] = useState(`rgb(${backgroundColor})`);
  const handleClick = () => {
    setbackgroundColor(`${red}, ${green},  ${blue}`);
    setText(`rgb(${red} ${green}, ${blue})`);
  };

  return (
    <section
      style={{
        height: "200px",
      }}
    >
      <ColorPallete
        Text={Text}
        handleClick={handleClick}
        backgroundColor={backgroundColor}
      />
    </section>
  );
};

const ColorPallete = function ({ Text, handleClick, backgroundColor }) {
  return (
    <div
      style={{
        height: "100%",
        background: `rgb(${backgroundColor})`,
        display: "grid",
        placeItems: "center",
        userSelect: "none",
        cursor: "pointer",
        fontSize: "10px",
        border: "3px solid black",
        borderRadius: "10px",
        padding: "1rem",
        textAlign: "center",
        transition: "all ease-in-out .4s",
        textTransform: "uppercase",
      }}
      onClick={handleClick}
    >
      <h1>{Text}</h1>
    </div>
  );
};

export default App;
