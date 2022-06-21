import "../Styling-Sheets/Players.css";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Icon } from "@iconify/react";

function Players(props) {
  const history = useHistory();
  let [namesArray, setNamesArray] = useState([]);
  let [showForm, setShowForm] = useState(false);

  function getRandomNumber(maxLimit) {
    let rand = Math.random() * maxLimit;
    return Math.floor(rand);
  }

  function handleModel(status) {
    setShowForm(status);
  }

  function pushHistory() {
    history.push("/startgame");
  }

  function handleAddtion(event) {
    let playerName = event.target.playerName.value;
    event.preventDefault();
    if (playerName != "" && isNaN(playerName)) {
      setNamesArray([...namesArray, playerName]);
    }
  }

  function handleNextClick() {
    let randomNumber = getRandomNumber(namesArray.length);
    console.log(randomNumber);
    props.handleStateFunction(namesArray, namesArray[randomNumber]);
  }

  function deletePlayer(playerIndex) {
    let newArray = [...namesArray];
    newArray.splice(playerIndex, 1);
    setNamesArray(newArray);
  }

  return (
    <>
      <section className="playersPageContainer">
        <button className="outsideBackButton" onClick={pushHistory}>
          <Icon
            icon="akar-icons:arrow-back-thick"
            color="#02a556"
            width="24"
            height="24"
          />
        </button>
        {namesArray.length < 3 ? (
          <p>
            Add at least three <br />
            players then press <br />
            Next
          </p>
        ) : (
          <p>
            You can add more
            <br />
            players if you wish
            <br />
            or just start
          </p>
        )}

        <section className="playersNamesContainer">
          {namesArray.length
            ? namesArray.map((playername, index) => {
                return (
                  <div key={index}>
                    <div key={index} className="playerBox">
                      <span>{playername}</span>
                    </div>
                    <Icon
                      className="deleteButton"
                      onClick={() => deletePlayer(index)}
                      icon="eva:person-delete-fill"
                      color="#e73040"
                      width="24"
                      height="24"
                    />
                  </div>
                );
              })
            : true}
        </section>
        <section className="buttonsContainer">
          <button
            className="nextButton"
            disabled={namesArray.length < 3}
            onClick={handleNextClick}
          >
            Next
          </button>
          <button
            className="outsideAddtionButton"
            disabled={namesArray.length == 10}
            onClick={() => handleModel(true)}
          >
            <Icon icon="eva:person-add-fill" color="#02a556" />
          </button>
        </section>

        {showForm ? (
          <div className="addtionForm">
            <form onSubmit={handleAddtion}>
              <input type="text" name="playerName" className="inputField" />
              <button type="submit" className="insideAddtionButton">
                +
              </button>
            </form>
            <button
              className="insideBackButton"
              onClick={() => handleModel(false)}
            >
              Back
            </button>
          </div>
        ) : (
          true
        )}
      </section>
    </>
  );
}

export default Players;
