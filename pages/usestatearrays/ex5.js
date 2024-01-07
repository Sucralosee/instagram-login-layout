import { useState } from "react";

export default function ex5() {
    const [name, setName] = useState('');

    function handleReset(){
        setName("");
    }

    return (
        <>
            <button onClick={handleReset}>Reset</button>
            <input
                value={name}
                onChange={e => setName(e.target.value)}
            />

            <p>{name}</p>
        </>
    )
}