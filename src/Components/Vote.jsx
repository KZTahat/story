import "../Styling-Sheets/Vote.css";
import { useState } from "react";
import { useHistory } from "react-router-dom";

function Vote(props) {
  const history = useHistory();
  let [playerIndex, setPlayerIndex] = useState(0);
  let [showOutsider, setShowOutsider] = useState(false);

  function handelVoteClick(player) {
    if (player == props.outsider) {
      props.playerNames[playerIndex][1]++;
    }
    if (playerIndex < props.playerNames.length - 1) {
      setPlayerIndex(playerIndex + 1);
    } else {
      setShowOutsider(true);
    }
  }

  function handleChoose() {
    history.push("/choose");
  }

  return (
    <>
      {!showOutsider ? (
        <section className="voteSection">
          <h3 className="headTitle">{props.playerNames[playerIndex][0]}</h3>
          <p className="paragraph">
            صوت على البني آدم اللي بتعتقد <br /> انو برا السولافة
          </p>
          {props.playerNames.map((player, index) => {
            return (
              <>
                {player[0] != props.playerNames[playerIndex][0] ? (
                  <button
                    key={index}
                    className="voteButton"
                    onClick={() => handelVoteClick(player)}
                  >
                    {player[0]}
                  </button>
                ) : (
                  true
                )}
              </>
            );
          })}
        </section>
      ) : (
        <section className="displayContainer">
          <p className="paragraph">
            الشخص اللي برا السولافة هو <br /> {props.outsider[0]}
          </p>
          <button className="nextButton" onClick={handleChoose}>
            اللي بعدو
          </button>
        </section>
      )}
    </>
  );
}

export default Vote;
