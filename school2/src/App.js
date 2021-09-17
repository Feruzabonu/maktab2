import Navbar from './pages/Navbar'
import './App.css';
import Boshsahifa from './pages/Boshsahifa';
import Maktabhayoti from './pages/Maktabhayoti';
import Footer from './pages/Footer';
import Yangiliklar from './pages/Yangiliklar'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Maktabalochilari from './pages/Maktabalochilari';
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
      <Route exact path="/yangiliklar">
        <Navbar/>
         <Yangiliklar/>
         <Footer/>
      </Route>
     
      <Route exact path="/maktabalochilari">
        <Navbar/>
         <Maktabalochilari style={{backgroundColor:'#F8F8F8'}}/>
         <Footer/>
      </Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
