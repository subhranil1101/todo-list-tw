import Navbar from "./components/Navbar"
import { useState } from "react"

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([])


  const handleAdd = () => {
    setTodos([...todos,{todo, isCompleted:false}])
    setTodo("")
    // console.log(todos)
  }
  const handleEdit = () => {
    
  }
  const handleDelete = () => {
    
  }

  const handleChange = (e) => {
    setTodo(e.target.value)
  }
  
  

  return (
    <>
    <Navbar/> 
      <div className="container w-3/4 mx-auto bg-violet-300 p-3 rounded-2xl my-5 min-h-[80vh]">
        <div className="addTodo">
          <h2 className="my-3 text-lg font-bold">Add Todos</h2>
          <input onChange={handleChange} value={todo} type="text" name="" id="" className="w-3/4" />
          <button onClick={handleAdd} className="bg-green-600 hover:bg-green-700 text-white py-1 px-3 rounded-xl mx-8 font-bold">Add</button>
        </div>
        <h2 className='mt-10 font-bold text-lg'>Your Todos</h2>
        <div className="todos">
          {todos.map(item =>{
          return( 
          <div key={item.todo} className="todo flex w-1/4 justify-between">
            <div className={!item.isCompleted?"":"line-through"}>{item.todo}</div>
            <div className="buttons">
              <button onClick={handleEdit} className="bg-green-600 hover:bg-green-700 text-white font-bold py-1 px-3 rounded-xl mx-1">Edit</button>
              <button onClick={handleDelete} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded-xl mx-1">Delete</button>
            </div>
          </div>
          )})}
        </div>
      </div>
    </>
  )
}

export default App
