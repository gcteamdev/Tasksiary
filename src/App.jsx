import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "@fontsource/barlow";
import {Routes,Route} from "react-router-dom";
import Login from './components/Screens/Login';
import Auth from './components/Screens/Auth';



function App() {
  return (
 <div className="app">
  <Routes>
     <Route exact path="/" element={<Login/>}/>
     <Route  path="/*" element={<Auth/>}/>
     
  </Routes>
  </div>


  );
}

export default App;
