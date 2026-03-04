import { useReducer } from "react";

const initialState={count:0}
function reducer(state,aciton) {
    switch(aciton.type){
        case "Increment":
            return {count:state.count+1}
        case "Decrement":
            return {count:state.count-1}
        case "Reset":
            return {count:0}
        default:
            return state;
    }
}
const Reducer=()=>{
    const [state,dispatch]=useReducer(reducer,initialState)
    return(
        <div>
            <h1>UseReducer Example</h1>
            <h2>Count:{state.count}</h2>
            <button style={{margin:10}} onClick={()=>dispatch({type:Increment})}>+</button>
            <button style={{margin:10}} onClick={()=>dispatch({type:Decrement})}>-</button>
            <button style={{margin:10}} onClick={()=>dispatch({type:Reset})}>Reset</button>
        </div>
    );
}
export default Reducer;