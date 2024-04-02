import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Login from "./Page/Login";
import Signup from "./Page/Signup";
import { useSelector } from 'react-redux';
import Home from './Page/Home';
import Profile from './Page/Profile';
import Update from './Page/Update';
import { display } from './Page/Axioscreate';



function App() {

  const LoginInfo=useSelector((state)=>state.login.LoginInformation[0])
  if(LoginInfo){
    var Token=LoginInfo.token 
  }
 

  console.log("Token value in App.js",Token);

  const ok=createBrowserRouter([
    {
     path:'/',
     element:Token ? <Home/> : <Login/>
    },
    {
     path:'signup',
     element:<Signup/>
    },
    {
      path:'profile',
      element:Token ? <Profile/> :<Login/>
    },
    {
      path:'update',
      element:Token ? <Update/> :<Login/>
    }
  ])

  return (
    
  <RouterProvider router={ok}/> 
  );
}

export default App;
