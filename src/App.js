import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState } from "react";
import Home from "./Components/Home.jsx";
import Categories from "./Components/Categories";
import Players from "./Components/Players";
import Display from "./Components/Display";
import Questions from "./Components/Questions";
import Vote from "./Components/Vote";
import Choose from "./Components/Choose";

function App() {
  let [categoryName, setCategoryName] = useState();
  let [selectedName, setSelectedName] = useState();
  let [playerNames, setPlayerNames] = useState([]);
  let [outsider, setOutsider] = useState();

  function handleCategoryUpdate(categoryName, selectedName) {
    console.log(categoryName);
    console.log(selectedName);
    setCategoryName(categoryName);
    setSelectedName(selectedName);
  }

  function handlePlayersUpdate(playersArray, outsiderPlayer) {
    setPlayerNames([...playersArray]);
    setOutsider(outsiderPlayer);
  }

  return (
    <Router>
      <main className="mainContainer">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/startgame">
            <Categories handleStateFunction={handleCategoryUpdate} />
          </Route>
          <Route exact path="/players">
            <Players handleStateFunction={handlePlayersUpdate} />
          </Route>
          <Route exact path="/display">
            <Display
              categoryName={categoryName}
              selectedName={selectedName}
              playerNames={playerNames}
              outsider={outsider}
            />
          </Route>
          <Route exact path="/questions">
            <Questions playerNames={playerNames} />
          </Route>
          <Route exact path="/vote">
            <Vote playerNames={playerNames} outsider={outsider} />
          </Route>
          <Route exact path="/choose">
            <Choose
              categoryName={categoryName}
              outsider={outsider}
              selectedName={selectedName}
            />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
