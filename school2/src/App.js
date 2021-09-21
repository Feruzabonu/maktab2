import Navbar from './pages/Navbar'
import './App.css';
import Boshsahifa from './pages/Boshsahifa';
import Maktabhayoti from './pages/Maktabhayoti';
import Footer from './pages/Footer';
import Yangiliklar from './pages/Yangiliklar'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Maktabalochilari from './pages/Maktabalochilari';
import Qabul from './pages/Qabul';
import Maktabmamuriyati from './pages/Maktabmamuriyati';
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
       
         <Maktabhayoti/>
         
      </Route>
      <Route exact path="/yangiliklar">
        
         <Yangiliklar/>
        
      </Route>
     
      <Route exact path="/maktabalochilari">
        
         <Maktabalochilari/>
         
      </Route>
      <Route exact path="/qabul">
   
         <Qabul/>
     
      </Route>
      <Route exact path="/maktabmamuriyati">
   
         <Maktabmamuriyati/>
     
      </Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
