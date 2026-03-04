const { useEffect } = require("react");

// use state demo
const State=()=>{
    const[count,setCount]=useState(0);
    const[like,setLike]=useState(0);
    useEffect(()=>{
        document.title=`Count:${count} Like:${like}`;
        console.log("use effect called");
    },[count,like]);
    return(
        <div>
            <h1>Count:{count}</h1>
            <button onClick={()=>setCount(count+1)}>+</button>
            <button onClick={()=>setCount(count-1)}>-</button>
            <h1>Like:{like}</h1>
            <button onClick={()=>setLike(like+1)}>Like</button>
        </div>
    )
}