import React from "react";
import "./PhoneticsAudio.css";

export default function PhoneticsAudio(props) {
  const audio = new Audio(props.phonetics);

  const start = () => {
    audio.play();
  };

  return (
    <div className="PhoneticsAudio">
      <button onClick={start}> Audio</button>
    </div>
  );
}
