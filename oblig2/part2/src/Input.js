import {useState} from "react";

function Input(props){

    const [inputText, setInputText] = useState("");

    const onClick = function (){
        props.setPageNumber(1) // To avoid error that happens when pageNumber is set higher than the NEW amount of pages after search result
        props.setSearchQuery(inputText)
    }

    return <>
        <input onChange={(e) => setInputText(e.target.value)}/>
        <button onClick={() => onClick()}>Search</button>
    </>
}
export default Input;