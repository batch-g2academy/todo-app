function Todo(props) {
    const { todo, handleRemove } = props;

    const remove = () => {
        console.log(`Remove todo ID: ${todo.id}`);
        handleRemove(todo.id)
    }

    return (
        <div>
            <h2>{todo.id}. {todo.title}</h2>
            <h3>status: { todo.completed ? <span>Complete</span> : <span>incomplete</span> }</h3>
            <button onClick={remove}>Delete</button>
        </div>
    )
}

export default Todo;