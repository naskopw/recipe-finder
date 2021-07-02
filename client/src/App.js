import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { CategoryDetails } from './Components/CategoryDetails/CategoryDetails';
import { Search } from './Components/Search/Search';
import {Home} from "./Components/Home"
import {Register} from "./Components/Register/Register"
import { RecipeDetails } from './Components/RecipeDetails/RecipeDetails';

import { ToastProvider, useToasts } from 'react-toast-notifications'
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
        <Route path="/recipes">
          <ToastProvider><RecipeDetails></RecipeDetails></ToastProvider>
          </Route>
          <Route path="/categories/:id" component={CategoryDetails}></Route>
          <Route path="/categories" component={Search}></Route>
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
