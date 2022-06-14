import './App.css';
import { useState } from 'react';

const App = () => {
const[todos,setTodos]=useState([])
const[todo,setTodo]=useState("")

  return (
    <div className='App'>
      <h2>Todo app</h2>
     <form>
      <input type='text' onChange={(e)=>setTodo(e.target.value)}/>
      <button>Add Todo</button>
     </form>
    </div>
  )
}

export default App