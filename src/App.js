import { useState, useEffect } from 'react';
import FormTodo from './components/FormTodo';
import TodoList from './components/TodoList';

function App() {

  const [ todos, setTodos ] = useState([]);

  // cara fetch dengan promise
  // function fetchTodo() {
  //   fetch(`https://jsonplaceholder.typicode.com/todos`)
  //   .then(response => {
  //     if (response.ok) {
  //       return response.json()
  //     } else {
  //       throw Error ('There is Error')
  //     }
  //   })
  //   .then(data => {
  //     setTodos(data);
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   })
  // }

  // async function fetchTodo() {
  //   try {
  //     let response = await fetch(`https://jsonplaceholder.typicode.com/todos`);
      
  //     if (response.ok) {
  //       let data = await response.json();
  //       setTodos(data);
  //     } else {
  //       throw Error ('Something happened when fetch!')
  //     }
      
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  const fetchTodo = async () => {
    try {
      let response = await fetch(`https://jsonplaceholder.typicode.com/todos`);
      
      if (response.ok) {
        let data = await response.json();
        setTodos(data);
      } else {
        throw Error ('Something happened when fetch!')
      }
      
    } catch (err) {
      console.log(err);
    }
  }

  const saveTodo = async (newTodo, status) => {
    try {
      let response = await fetch(`https://jsonplaceholder.typicode.com/todos`, {
        method: 'POST',
        body: JSON.stringify({
          userId: 2,
          title: newTodo,
          completed: status
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })

      if (response.ok) {
        let data = await response.json();
        console.log(data);

        setTodos((currentState) => {
            return [ ...currentState, data ];
        })
      } else {
        throw Error ('Something happened when create todo!')
      }

    } catch(err) {
      console.log(err);
    }
  }

  const removeTodoApi = async (id) =>{
    console.log("DELETE API DARI ORANG TUA");
    try {
        let response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);

        if (response.ok) {
          setTodos((currentState) => {
            return currentState.filter(state => {
              if (state.id !== id) {
                return state;
              }
            })
          })
        }
    } catch (err) {
        console.log(err);
    }
  }
  
  useEffect(() => {
    fetchTodo();
  }, [])

  function save(newTodo, status) {
    console.log("FUNCTION SAVE DARI ORANG TUA");
    console.log("MAU DI SAVE: ");
    
    saveTodo(newTodo, status);
  }

  return (
    <div>
      <h1>Hello World</h1>
      <FormTodo handleSaveTodo={ save } username="Calvin" email="mail"/>

      <TodoList todos={ todos } handleRemove={removeTodoApi}/>
      {/* {
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
    } */}
    </div>
  );
}



export default App;
