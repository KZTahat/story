import "../Styling-Sheets/Vote.css";
import { useState } from "react";

function Vote(props) {
  let [playerIndex, setPlayerIndex] = useState(0);

  function handelVoteClick(player) {
    if (player == props.outsider) {
      props.playerNames[playerIndex][1]++;
      console.log(props.playerNames[playerIndex][1]);
    }
    if (playerIndex < props.playerNames.length-1) {
      setPlayerIndex(playerIndex + 1);
    }
  }

  return (
    <>
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
    </>
  );
}

export default Vote;
