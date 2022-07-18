import React from "react";
import "./Phonetic.css";

import PhoneticsAudio from "./PhoneticsAudio";

export default function Phonetics(props) {
  if (props.phonetics.audio) {
    return (
      <div className="Phonetics row">
        <div className="col-1">
          <PhoneticsAudio phonetics={props.phonetics.audio} />
        </div>
        <div className="col-11 text">
          <span> {props.phonetics.text}</span>
        </div>
      </div>
    );
  } else {
    return (
      <div className="Phonetics row">
        <div className="col-1"></div>
        <div className="col-11 text">
          <span> {props.phonetics.text}</span>
        </div>
      </div>
    );
  }
}
