import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Routing
import PrivateRoute from './components/routing/PrivateRoute';

//Screens
import PrivateScreen from './components/screens/PrivateScreen.js';
import LoginScreen from './components/screens/LoginScreen.js';
import RegisterScreen from './components/screens/RegisterScreen.js';
import ForgotPasswordScreen from './components/screens/ForgotPasswordScreen.js';
import ResetPasswordScreen from './components/screens/ResetRasswordScreen.js';

const App = () => {
  return (
    <Router>
      <div classname="app">
        <Switch>
          <PrivateRoute exact path ="/" component={PrivateScreen} />
          <Route exact path ="/login" component={LoginScreen} />
          <Route exact path ="/register" component={RegisterScreen} />
          <Route exact path ="/forgotpassword" component={ForgotPasswordScreen} />
          <Route exact path ="/passwordreset/:resetToken" component={ResetPasswordScreen} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
