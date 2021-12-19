import {BrowserRouter,Routes,Route} from "react-router-dom";
import Login from "./Login";
import Reset from "./Reset";
import NewPassword from './NewPassword';
import SignUp from './SignUp';
function App() {
  return (
    
    <BrowserRouter>
      <Route path='/' exact component={Login} />
      <Route path='/signup' exact component={SignUp} />
      <Route exact path='/reset' component={Reset} />
     
      <Route exact path='/reset/:token' component={NewPassword} />
    </BrowserRouter>
  );
}

export default App;