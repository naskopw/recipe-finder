import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import {Home} from "./Components/Home"
import { RecipeDetails } from './Components/RecipeDetails';
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
        <Route path="/details">
            <RecipeDetails></RecipeDetails>
          </Route>
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
