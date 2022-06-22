import "../Styling-Sheets/Display.css";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

function Display(props) {
  const history = useHistory();
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
    if (playerIndex == props.playerNames.length - 1 && displayFirstP == false) {
      history.push("/questions");
    }
  }

  return (
    <>
      <section className="displayContainer">
        <h2 className="playerName">{props.playerNames[playerIndex]}</h2>
        <div className="sentanceDisplay">
          {displayFirstP ? (
            playerIndex < props.playerNames.length ? (
              <p className="paragraph">
                Give the phone to {props.playerNames[playerIndex]}
                <br />
                <br />
                Press next to know wether you're
                <br /> in or out the story, <br /> don't let anyone see the
                phone
              </p>
            ) : (
              true
            )
          ) : props.playerNames[playerIndex] == data.outsider ? (
            <p className="paragraph">
              You're outside the story! try to <br />
              know it based on other players <br />
              questions, make them vote <br />
              on the wrong person <br />
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
