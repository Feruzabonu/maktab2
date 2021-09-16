import Navbar from './Navbar'
import './App.css';
import Boshsahifa from './Boshsahifa';
import Maktabhayoti from './Maktabhayoti';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
      <Route exact path="/">
         <Boshsahifa />
      </Route>
      <Route exact path="/home">
         <Boshsahifa />
      </Route>
      <Route exact path="/maktabhayoti">
        <Navbar/>
         <Maktabhayoti/>
      </Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
