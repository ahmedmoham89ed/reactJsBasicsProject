import { ReactNode, useState } from "react";
import "./Navbar.scss"

const styles={
    list:{width:"90%",display:"flex",listStyle:"none",justifyContent:"space-evenly",alignItems:"center",margin:"20px auto",padding:20,borderRadius:5},
    listitems:{textDecoration:"none",fontSize:21,textTransform:"capitalize",color:"white"},
    searchicon:{fontSize:"22px",color:"white",fontWeight:"900"},
    btn:{border:"0",outline:"none",color:"white",backgroundColor:"#123123",padding:"11px 20px",fontSize:"16px",borderRadius:"5px",cursor:"pointer"}
}

interface Icompany{
    companyName:string,
    about:string,
    terminal:string,
    main:string,
    contact:string,
    Home:string,
    children:ReactNode,
    logintxt:boolean,
    setlogintxt:(val:boolean)=>void
}

// const Navbar:FC<Icompany>=(props)=>{}
const Navbar=(props:Icompany)=>{
    // const Backcolor="purple"
   const {Home,about,companyName,contact,main,terminal,children,logintxt,setlogintxt}=props;
   return(
    <>
      <ul className="navbar-list" style={{...styles.list}}>
        <li><a href="/logo">{companyName}</a></li>
        <li><a href="/home">{Home}</a></li>
        <li><a href="/about">{about}</a></li>
        <li><a href="/terminal">{terminal}</a></li>
        <li><a href="/main">{main}</a></li>
        <li><a href="/contact">{contact}</a></li>
        <li><a href="/" style={styles.searchicon} >{children}</a></li>
        <li><button style={{...styles.btn,textTransform:"uppercase"}} onClick={()=>setlogintxt(!logintxt)} >{logintxt?"Logout":"Login"}</button></li>
      </ul>
    </>
   )
}
export default Navbar;