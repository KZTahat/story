import "../Styling-Sheets/Home.css";
import { useHistory } from "react-router-dom";
import { Howl, Howler } from "howler";

function Home() {
  const history = useHistory();

  let startGame = new Howl({
    src: ["./Assets/sfxs/start-game.mp3"],
  });

  function changeRoute() {
    startGame.play();
    history.push("/startgame");
  }

  return (
    <>
      <section className="homeContent">
        <h1 className="mainHeader">
          لعبة برا <br />
          السولافة
        </h1>
        <button onClick={changeRoute} className="playButton">
          العب
        </button>
      </section>
    </>
  );
}

export default Home;
