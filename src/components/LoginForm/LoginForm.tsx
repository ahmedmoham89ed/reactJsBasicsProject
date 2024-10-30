import "./LoginForm.scss"
import { ChangeEvent, useState } from "react"
import { GrClose } from "react-icons/gr";
import { IuserData } from "../../Interface/Interface";
import {Forminputitems} from "../../data/Index"
export interface Icompany{
    setlogintxt:(val:boolean)=>void;
    userData:IuserData,
    setUserData:(user:IuserData)=>void;
}
const LoginForm = ({setlogintxt,userData,setUserData}:Icompany) => {
    
    const [inputArr,setinputArr]=useState(Forminputitems);
    
    const onchangeHandler=(event:ChangeEvent<HTMLInputElement>)=>{
       const {value,name}=event.target;
       setUserData({
        ...userData,
        [name]:value
    })}

    const renderformdata=inputArr.map((input,index)=>(
        <div key={index} style={{display:"flex",alignItems:"end",gap:"20px"}}>
            <div  className="part-warper">
                <label htmlFor={input.for}>{input.label}</label>
                <input type={input.type} name={input.name} id={input.id} value={userData[input.name]} onChange={onchangeHandler} />
            </div>
            <button 
                onClick={()=>{
                    const filtered=inputArr.filter(input=>input.name===Forminputitems[index]["name"]);
                    setinputArr(filtered);
                }}
            ><GrClose /></button> 
        </div>
    ))


  return (
    <>
    <div className="section-warper"  onSubmit={(e)=>e.preventDefault()} >
         {renderformdata}
        <button onClick={()=>setlogintxt(true)} >Login</button>
    </div>
      
    </>
  )
}

export default LoginForm
