import "../Styling-Sheets/Display.css";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

function Display(props) {
  const history = useHistory();
  let [playerIndex, setPlayerIndex] = useState(0);
  let [displayFirstP, setDisplayFirstP] = useState(true);

  function handleNext() {
    if (playerIndex < props.playerNames.length) {
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
        <h2 className="headTitle">{props.playerNames[playerIndex][0]}</h2>
        <div className="sentanceDisplay">
          {displayFirstP ? (
            playerIndex < props.playerNames.length ? (
              <p className="paragraph">
                اعطي التلفون ل{props.playerNames[playerIndex][0]}
                <br />
                <br />
                اكبس اللي بعدو عشان تعرف انت <br />
                جوا ولا برا السولافة
              </p>
            ) : (
              true
            )
          ) : props.playerNames[playerIndex] == props.outsider ? (
            <p className="paragraph">
              انت اللي برا السولافة! حاول <br />
              حاول تعرف ايش هي من <br />
              الأسئلة, خليهم يصوتو <br />
              على الشخص الخطأ<br />
              <br />
               ملاحظة: السولافة عن ال{props.categoryName}
            </p>
          ) : (
            <p className="paragraph">
              أنت جوا السولافة واللي هي <br /> {props.selectedName} <br />{" "}
              حاول تعرف مين برا السولافة
              <br />
              يلا اللي بعدو
            </p>
          )}
        </div>
        <button className="nextButton" onClick={handleNext}>
          اللي بعدو
        </button>
      </section>
    </>
  );
}

export default Display;
