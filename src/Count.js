import { useState } from "react";




function Count() {
    const [count, setCount] = useState(1)
    const [savedCount, setsavedCount] = useState(0)
    const [input, setInput] = useState("")

    function incrementValue() {
        
        setCount((prevCount) => prevCount + 1)
        if (count >= 10) {
            setCount(10);
        }
    }


function decrementValue() {
    
    setCount((prevCount) => prevCount - 1)
    if (count <= 0) {
        setCount(0);
    }
}

// function saveCount() {
//     setsavedCount(count)
// }

function handleOnChange(e) {
    
    setInput((prevInput) => e.target.value);
}



return (
    <>
        <span>{count}</span>
        <br />
        <button onClick={decrementValue} className="incbtn butbut pushable"><span className="front">-</span></button>
        <button onClick={incrementValue} className="incbtn pushable"><span className="front">+</span></button>

        <br /><br />
        {/* <button className="pushable2" onClick={saveCount}><span class="front2">Save Count</span></button> <span>{savedCount}</span> */}
        <br /><br />
        <input type="text" onChange={handleOnChange} value={input}></input>

    </>
)

}

export default Count;