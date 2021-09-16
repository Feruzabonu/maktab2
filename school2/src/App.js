import Navbar from './pages/Navbar'
import './App.css';
import Boshsahifa from './pages/Boshsahifa';
import Maktabhayoti from './pages/Maktabhayoti';
import Footer from './pages/Footer';
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
         <Footer/>
      </Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
