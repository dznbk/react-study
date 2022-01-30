import React, { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

const App = () => {
  console.log("saisho");
  const [num, setNum] = useState(0);
  const [isFaceShow, faceShowSwitch] = useState(true);
  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickShowSwitch = () => {
    faceShowSwitch(!isFaceShow);
  };

  useEffect(() => {
    console.log("useEffectt");
    if (num % 3 == 0) {
      isFaceShow || faceShowSwitch(true);
    } else {
      isFaceShow && faceShowSwitch(false);
    }
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColorfulMessage color="blue">お元気すか</ColorfulMessage>
      <ColorfulMessage color="pink">元気す</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button onClick={onClickShowSwitch}>on/off</button>
      <p>{num}</p>
      {isFaceShow && <p>|дﾟ)</p>}
    </>
  );
};

export default App;
