import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "@fontsource/barlow";
import {Routes,Route} from "react-router-dom";
import Login from './components/Screens/Login';
import Auth from './components/Screens/Auth';
import { TaskProvider } from './components/AddTask/TasksContext';



function App() {
  return (
 <div className="app">
  <TaskProvider>
  <Routes>
     <Route exact path="/" element={<Login/>}/>
     <Route  path="/*" element={<Auth/>}/>
     
  </Routes>
  </TaskProvider>
  </div>


  );
}

export default App;
