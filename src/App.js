import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AddProduct from './Components/AddProduct/AddProduct';
import Explore from './Components/Explore/Explore';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import MyOrders from './Components/MyOrders/MyOrders';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Purches from './Components/Purches/Purches';
import Register from './Components/Register/Register';
import Reviews from './Components/Reviews/Reviews';
import UserDashboard from './Components/UserDashboard/UserDashboard';
import AuthProvider from './Context/AuthProvider';

function App() {
  return (
    <div className="App">
     <AuthProvider>
     <Router>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/explore'>
            <Explore></Explore>
          </Route>
          <Route path='/reviews'>
            <Reviews></Reviews>
          </Route>
          <PrivateRoute path='/purches/:productId'>
            <Purches></Purches>
          </PrivateRoute>
          <Route path='/register'>
            <Register></Register>
          </Route>
          <Route path='/userDashboard'>
            <UserDashboard></UserDashboard>
          </Route>
          <Route path='/myOrders'>
            <MyOrders></MyOrders>
          </Route>
          <Route path='/logIn'>
            <Login></Login>
          </Route>
        </Switch>
      </Router>
     </AuthProvider>
    </div>
  );
}

export default App;
