import "../Styling-Sheets/Home.css";
import { useHistory } from "react-router-dom";

function Home() {
  const history = useHistory();

  function changeRoute() {
    history.push("/startgame");
  }

  return (
    <>
      <section className="homeContent">
        <h1 className="mainHeader">
          Story Guess <br />
          Game
        </h1>
        <button onClick={changeRoute} className="playButton">
          Play
        </button>
      </section>
    </>
  );
}

export default Home;
