import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { CategoryDetails } from './Components/CategoryDetails';
import {Home} from "./Components/Home"
import {Register} from "./Components/Register/Register"
import { RecipeDetails } from './Components/RecipeDetails';
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
        <Route path="/recipes">
            <RecipeDetails></RecipeDetails>
          </Route>
          <Route path="/categories">
            <CategoryDetails></CategoryDetails>
          </Route>
          <Route path="/register">
            <Register></Register>
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
