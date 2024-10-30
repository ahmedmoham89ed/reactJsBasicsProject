import './App.css'
// import Heading from './components/Heading/Heading';
import NavbarApp from './components/Navbar/Navbar'
import {IoSearch,BsBagPlusFill} from "./components/Links"
import LoginForm from './components/LoginForm/LoginForm';
import { useState } from 'react';
import UserDetails from './components/UserDetails/UserDetails';
import { IuserData } from './Interface/Interface';
function App() {
  const maintxt="Main";
  const contacttxt="contact";
  const [userData,setUserData]=useState<IuserData>({
    username:"",
    email:"",
    password:"",
    address:"",
    phone:""
  })

  const [logintxt,setlogintxt]=useState(false);
  return (
    <>
      <NavbarApp companyName={"codeawy"} logintxt={logintxt} setlogintxt={setlogintxt} Home={"Home"}  about={"About"} terminal={"terminal"} main={maintxt}  contact={contacttxt} >
          <span style={{display:"flex",alignItems:"center",gap:"10px"}}><IoSearch /><BsBagPlusFill /></span>
      </NavbarApp>
      {/* <Heading headertitle={"Hello world"} >
        <span ><FcConferenceCall /> </span>  
      </Heading>  */}
      {logintxt?<UserDetails user={userData} />:<LoginForm setlogintxt={setlogintxt} userData={userData} setUserData={setUserData}  />}

    </>
  )
}

export default App
