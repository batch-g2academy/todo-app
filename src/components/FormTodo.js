import { useState, useEffect } from 'react';

function FormTodo(props) {
    // const saveTodo = props.handleSaveTodo;
    // const username = props.username;

    //destructure 
    const { handleSaveTodo, username } = props;

    const [ status, setStatus ] = useState('');
    const [ newTodo, setNewTodo ] = useState('');
    const [ image, setImage ] = useState({});

    const [ isError, setIsError ] = useState(false);

    // useEffect(() => {
    //     console.log("FormTodo Component");
    //     console.log("status berubah atau pertama kali dirender");
    //     if (status.length > 0 && status.length < 5) {
    //         setIsError(true);
    //     } else {
    //         setIsError(false);
    //     }

    // }, [ status ]) 

    //empty array dependency kita gunakan ketika ingin mengambil data di server

    function handleChangeInput(event) {
        setNewTodo(event.target.value);
    }

    // function handleImage(event) {
    //     setImage((currState) => {
    //         return { ...currState,  event.target.files[0] }
    //     })
       
    // }

    function save(event) {
        event.preventDefault();
        console.log("FUNCTION SAVE DARI CHILD");
        handleSaveTodo(newTodo, status);

        //reset input text
        setNewTodo('');
        setStatus('');
    }

    return (
        <div>
        <h1>Hi {username} </h1>
        <form>
            <input id="input-todo" value= { newTodo } placeholder="Input your todo" onChange={ handleChangeInput }/>
            <input value={status} placeholder="Input status" onChange={(event) => setStatus(event.target.value)} />
            { isError===true ?  <p style={ {color: "red"}}>Add Error</p> : <p></p> }
            {/* <input value={image} type="file" accept="image/jpeg, image/png" onChange={handleImage}/> */}
            <button onClick={save}>Save</button>
            <h1>Title: { newTodo }</h1>
        </form>
        </div>
    )
}

export default FormTodo;