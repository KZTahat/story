import { useState } from "react";
import { useHistory } from "react-router-dom";

function Questions(props) {
  let [playerIndex, setPlayerIndex] = useState(0);
  let [stage, setStage] = useState(1);
  const history = useHistory();

  function handleNext() {
    if (stage == 1) {
      if (props.playerNames.length - (playerIndex + 1) >= 2) {
        setPlayerIndex(playerIndex + 2);
      } else {
        setStage(2);
      }
    } else {
      history.push("/vote");
    }
  }

  function gotToVote() {}

  return (
    <>
      <section className="displayContainer">
        <h2 className="headTitle">
          {stage == 1 ? "وقت الأسئلة" : "المرحلة الأخيرة"}
        </h2>
        {stage == 1 ? (
          <p className="paragraph">
            {props.playerNames[playerIndex][0]} اسأل{" "}
            {playerIndex + 1 <= props.playerNames.length - 1
              ? props.playerNames[playerIndex + 1][0]
              : props.playerNames[0][0]}{" "}
            سؤال الو علاقة <br />
            بالسولافة حاول ما تخلي سؤالك يبين <br /> ايش هي السولافة
          </p>
        ) : (
          <p className="paragraph">
            هسع كل واحد يختار لاعب ثاني
            <br />
            ويسألو سؤال واحد بس, بعدين
            <br /> صوتو
          </p>
        )}
        <button className="nextButton" onClick={handleNext}>
          {stage == 1 ? "اللي بعدو" : "تصويت"}
        </button>
      </section>
    </>
  );
}

export default Questions;
