import "./UserDetails.scss"
import { IuserData } from "../../Interface/Interface";
interface IuserData{
    user:IuserData;
}

const UserDetails = ({user}:IuserData) => {
  return (
    <div style={{margin:70,color:"white",textTransform:"capitalize",padding:10}}>
      <h1>username: {user.username}</h1>
      <h1>address: {user.address}</h1>
      <h1>email: {user.email}</h1>
      <h1>phone: {user.phone}</h1>
      <h1>password: {user.password}</h1>
    </div>
  )
}

export default UserDetails
