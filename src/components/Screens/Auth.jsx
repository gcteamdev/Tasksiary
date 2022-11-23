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
import Alerts from '../MainPages/Alerts';
import Profile from '../MainPages/Profile';
import Calendar from '../MainPages/Calendar';



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
        <Route exact path="/alerts" element={<Alerts/>} /> 
        <Route exact path="/profile" element={<Profile/>} /> 
        <Route exact path= "/calendar" element={<Calendar />} />

     </Routes>
   </Sidebar>
   </>
 
  )
}

export default Auth