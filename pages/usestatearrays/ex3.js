import{ useState } from "react";

export default function exampleThree() {
    const [number, setNumber] = useState(0);

    function handleClick(change) {
        if(change) {
            setNumber(number + 1);
        }else{
            setNumber(number - 1);
        }
    }

    return(
        <div>
            <button onClick={() => handleClick(true)}> Increment </button>
            <button onClick={() => handleClick(false)}> decrement </button>
            {number}
        </div>
    )
}