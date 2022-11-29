import { useState } from "react";
import Main from "./Components/Main";
import Navbar from "./Components/Navbar";
import Lose from "./Components/Lose";
import "./styles.css"

function App() {

  const [points, setPoints] = useState(0)

  const [lost, setLost] = useState(false)

  const changePoints = (clicked) => {
    setPoints(clicked)
  }

  const lose = () => {
    setLost(!lost)
  }

  if (lost) {
    return (
      <div className="App">
        <Lose lose={lose}></Lose>
      </div>
    )
  } else {
    return (
      <div className="App">
        <Navbar points={points}></Navbar>
        <Main changePoints={changePoints} lose={lose}></Main>
      </div>
    );
  }

}

export default App;
