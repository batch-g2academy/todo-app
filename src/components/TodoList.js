import Todo from "./Todo";

function TodoList(props) {
    const { todos, handleRemove } = props;
    
    return (
        <div>
            { todos.map(todo => (
                <Todo todo={todo} handleRemove={handleRemove}/>
            ))}
        </div>
    )
}

export default TodoList;