import React from 'react';
import { Route, Routes} from "react-router-dom";
import Sidebar from '../Navigation/Sidebar';
import Homepage from '../MainPages/Homepage';
import Inbox from '../MainPages/Inbox';
import Dashboard from '../MainPages/Dashboard';
import DailyTasks from '../MainPages/DailyTasks';
import Team from '../MainPages/Team';
import Marketing from '../MainPages/Departments/Marketing';
import Sales from '../MainPages/Departments/Sales';
import HR from '../MainPages/Departments/HR';
import "../Navigation/Sidebar";



function Auth() {
  return (  
    <>

   <Sidebar>
     <Routes>
        <Route exact path="/homepage" element={<Homepage/>} />
        <Route exact path="/dashboard" element={<Dashboard/>} />
        <Route exact path="/dailyTasks" element={<DailyTasks/>} />
        <Route exact path="/inbox" element={<Inbox/>} />
        <Route exact path="/team" element={<Team/>} />
        <Route exact path="/marketing" element={<Marketing/>} />
        <Route exact path="/sales" element={<Sales/>} />
        <Route exact path="/hr" element={<HR/>} /> 
     </Routes>
   </Sidebar>
   </>
 
  )
}

export default Auth