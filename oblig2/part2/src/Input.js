function Input(props){

    const onChange = (event) => {
        props.setSearchQuery(event.target.value);
    };

    return <input onChange={onChange} />
}
export default Input;