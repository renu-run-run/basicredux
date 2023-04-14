import { useState } from "react";
import mystore from "../Redux/Store";

const InputComp = () =>{
   const [state, setState] = useState("")
    const callDispatch = () => {
        mystore.dispatch({
            type:"name",
            username:state,
        });
    };
    return(
        <>
          <div style={{marginTop: "100px" , textAlign:"center"}}>
            <h2>Input Component</h2>
            <input type="text" onChange={(e) => {setState(e.target.value)}} />
            <button onClick={callDispatch}>send data</button>
          
          </div>
        </>
    )
}

export default InputComp;