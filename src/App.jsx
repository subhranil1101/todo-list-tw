import Navbar from "./components/Navbar"
import { useState, useEffect } from "react"
import { v4 as uuidv4 } from 'uuid';


function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([])
  const [showFinished, setShowFinished] = useState(true)

  const toggleFinished = () => {
    setShowFinished(!showFinished)
  }
  

  useEffect(() => {
    let todoString = localStorage.getItem("todos")
    if(todoString){ 
      let todos = JSON.parse(localStorage.getItem("todos"))
      setTodos(todos)  
    }
  }, [])
  
  const saveToLS = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }
  
  const handleAdd = () => {
    setTodos([...todos,{id:uuidv4(), todo, isCompleted:false}])
    setTodo("")
    localStorage.setItem("todos", JSON.stringify(todos))
  }
  const handleEdit = (e, id) => {
    let t = todos.filter((i)=>i.id === id)
    setTodo(t[0].todo)
    handleDelete(e, id)
    saveToLS()
  }
  const handleDelete = (e, id) => {
    let newTodos = todos.filter((item)=>{return item.id !== id});
    setTodos(newTodos);
    saveToLS()
  }

  const handleChange = (e) => {
    setTodo(e.target.value)
  }
  
  const handleCheckbox = (e) => {
    let id = e.target.name;
    let index = todos.findIndex(item=>{
      return item.id === id;
    })
    let newTodos = [...todos]
    newTodos[index].isCompleted = (!newTodos[index].isCompleted);
    setTodos(newTodos);
    saveToLS()
  }
  
  

  return (
    <>
    <Navbar/> 
      <div className="container w-1/2 mx-auto bg-violet-300 p-3 rounded-2xl my-5 min-h-[80vh]">
      <h1 className="text-xl font-bold italic">iTodo - Manage your daily things to do</h1>
        <div className="addTodo flex flex-col gap-3 justify-center items-center">
          <h2 className="my-3 text-lg font-bold text-orange-700">Add Todos</h2>
          <input onChange={handleChange} value={todo} type="text" name="" id="" className="w-full" />
          <button onClick={handleAdd} disabled={todo.length <= 3} className="bg-green-600 hover:bg-green-700 disabled:bg-green-500 text-white py-1 px-3 rounded-xl mx-8 font-bold w-14">Save</button>
        </div>
        <input type="checkbox" onChange={toggleFinished} checked={showFinished} className="mt-10" />Show Finished
        <h2 className='mt-10 font-bold text-lg'>Your Todos</h2>
        <div className="todos">
          {todos.length === 0 && <div className="mx-auto my-1 font-bold text-lg text-orange-600">No todos to display</div>}
          {todos.map(item =>{
          
          return (showFinished || !item.isCompleted) &&( 
          <div key={item.id} className="todo flex w-1/2 min-w-96 items-center justify-between my-3">
            <div className="flex items-center gap-3">
              <input name={item.id} onChange={handleCheckbox} type="checkbox"  id="" checked={item.isCompleted} />
             <div className={item.isCompleted?"line-through":"font-bold text-wrap"}>{item.todo}</div>
            </div>
            <div className="buttons flex">
              <button onClick={(e)=>handleEdit(e,item.id)} className="bg-green-600 hover:bg-green-700 text-white font-bold py-1 px-3 rounded-xl mx-1">Edit</button>
              <button onClick={(e)=>{handleDelete(e, item.id)}} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded-xl mx-1">Delete</button>
            </div>
          </div>
          )})}
        </div>
      </div>
    </>
  )
}

export default App
