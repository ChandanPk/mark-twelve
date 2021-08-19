import AnglesOfTri from "./comps/AnglesOfTri";
import CalculateArea from "./comps/CalculateArea";
import Hypotenuse from "./comps/Hypotenuse";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from "./comps/Header";
import Home from "./comps/Home";
import Quizz from "./comps/Quizz";

function App() {

  return (
    <Router>
      <div className="App">
        <Header />

        <div className="contents">
          <Switch>

            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/angleoftri">
              <AnglesOfTri />
            </Route>

            <Route path="/calculatearea">
              <CalculateArea />
            </Route>

            <Route path="/hypotenuse">
              <Hypotenuse />
            </Route>

            <Route path="/quizz">
              <Quizz />
            </Route>

          </Switch>
        </div>

        {/* <AnglesOfTri />
        <Hypotenuse />
        <CalculateArea /> */}
      </div>
    </Router>
  );
}

export default App;














