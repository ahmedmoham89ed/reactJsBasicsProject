import { ReactNode } from "react";


const styles={
    list:{fontSize:"25px",color:"purple"},
}
interface Iheader{
    headertitle:string,
    children:ReactNode
}
const Heading=(props:Iheader)=>{
     const {headertitle,children}=props;
    return(
        <>
            <h2 style={{...styles.list,textAlign:"center",textTransform:"capitalize"}}>{headertitle}{children}</h2>
            
        </>
    )

}
export default Heading