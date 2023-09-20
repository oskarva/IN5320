import {useState} from "react";

function Input(props){

    const [inputText, setInputText] = useState("");

    return <>
        <input onChange={(e) => setInputText(e.target.value)}/>
        <button onClick={() => props.setSearchQuery(inputText)}>Search</button>
    </>
}
export default Input;