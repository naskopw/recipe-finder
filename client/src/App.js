import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {Home} from "./Components/Home/Home"
import {Search} from "./Components/Search/Search";
import {RecipeDetails} from "./Components/RecipeDetails/RecipeDetails";
import Register from "./Components/Authentication/RegisterComponent";
import Profile from "./Components/Authentication/ProfileComponent";
import Login from "./Components/Authentication/LoginComponent";
import {CategoryDetails} from "./Components/CategoryDetails/CategoryDetails";
import PrivateRoute from './Components/PrivateRoute';
import ShoppingList from "./Components/Tools/Shopping/ShoppingList";
import ShoppingItemEdit from "./Components/Tools/Shopping/ShoppingItemEdit";
import LogoutComponent from "./Components/Authentication/LogoutComponent";
import CalendarComponent from "./Components/Tools/Calendar/CalendarComponent";
import PlanRecipeComponent from "./Components/Tools/Calendar/PlanRecipe/PlanRecipeComponent";
import FavoriteComponent from "./Components/Tools/Favorite/FavoriteComponent";
import CookbookComponent from "./Components/Tools/Favorite/Cookbook/CookbookComponent";

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <PrivateRoute path="/recipes/fav/:id" component={PlanRecipeComponent}/>
                    <Route path="/recipes"><RecipeDetails/></Route>
                    <PrivateRoute path="/cookbook/:id" component={CookbookComponent}/>
                    <Route path="/categories/:id" component={CategoryDetails}/>
                    <Route path="/categories" component={Search}/>
                    <Route path="/register" component={Register}/>
                    <PrivateRoute path="/profile" component={Profile}/>
                    <Route path="/login" component={Login}/>
                    <PrivateRoute path="/logout" component={LogoutComponent}/>

                    <PrivateRoute path="/tools/shopping/edit/:id" component={ShoppingItemEdit}/>
                    <PrivateRoute path="/tools/calendar" component={CalendarComponent}/>
                    <PrivateRoute path="/tools/favorite" component={FavoriteComponent}/>
                    <PrivateRoute path="/tools/shopping" component={ShoppingList}/>
                    <Route path="/">
                        <Home/>
                    </Route>

                </Switch>
            </div>
        </Router>
    );
}

export default App;
