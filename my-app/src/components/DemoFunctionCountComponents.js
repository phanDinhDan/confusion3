import React,{useState} from "reactstrap";
function Function(){
    const [count ,setCount]=useState(0);
    function increment(){
        setCount(count +1);
    }
    return(
        <div>
            <p>Count : {count}</p>
            <button onClick={increment}>increment</button>
        </div>
    );
}
export default Function;