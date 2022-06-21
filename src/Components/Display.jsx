import "../Styling-Sheets/Display.css";
import { useState, useEffect } from "react";

function Display(props) {
  let [playerIndex, setPlayerIndex] = useState(0);
  let [displayFirstP, setDisplayFirstP] = useState(true);
  let [data, setData] = useState();

  useEffect(() => {
    setData(props);
  }, []);

  function handleNext() {
    if (playerIndex < data.playerNames.length) {
      if (!displayFirstP) {
        setPlayerIndex(playerIndex + 1);
        setDisplayFirstP(true);
      } else {
        setDisplayFirstP(false);
      }
    }
  }

  return (
    <>
      <section className="displayContainer">
        <h2 className="playerName">{props.playerNames[playerIndex]}</h2>
        <div className="sentanceDisplay">
          {displayFirstP ? (
            <p className="paragraph">
              Give the phone to {props.playerNames[playerIndex]}
              <br />
              <br />
              Press next to know wether you're
              <br /> in or out the story, <br /> don't let anyone see the phone
            </p>
          ) : props.playerNames[playerIndex] == data.outsider ? (
            <p className="paragraph">
              You're outside the story! try to <br />
              try to know is it based on other <br />
              player questions, make them <br />
              vote on the wrong person <br />
              <br />
              Hint: the story is about {props.categoryName}
            </p>
          ) : (
            <p className="paragraph">
              You're inside the story it's <br /> {props.selectedName} <br />{" "}
              try to know the outsider
            </p>
          )}
        </div>
        <button className="nextButton" onClick={handleNext}>
          Next
        </button>
      </section>
    </>
  );
}

export default Display;
