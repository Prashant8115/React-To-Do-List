import './App.css';
import { useState } from 'react';
function App() {
  let [todo, setTodo] = useState([]);
  let [input, setInput] = useState("");

  let addTodo = () => {
    if (input.trim() === "") return;
    setTodo([...todo, { text: input ,completed:false }]);
    setInput("");
  }

  let handleToggle=(index)=>{
    let newTodo=[...todo];
    newTodo[index].completed=!newTodo[index].completed;
    setTodo(newTodo);
  }

  let deleteTodo=(index)=>{
    let newTodo=todo.filter((_,i)=>i !==index);
    setTodo(newTodo);
  }

  return (
    <div style={body}>

      <h1>React To Do List</h1>

      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: "10px",
        alignItems:"center",
        marginBottom:"15px"
      }}>

        <input
          style={inputStyle}
          type="text"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder='Enter The Value' />

        <button onClick={addTodo} style={btnStyle}>Add Todo</button>
      </div>

      {
        todo.map((item,index) => (
          <div key={index} style={itemStyle}>
            <ul style={{ textDecoration: item.completed ? 'line-through' : 'none',
              width:"61%"
             }} >
              <li > 
                <span>{item.text}</span>
              </li>
            </ul>
            <div style={{display:"flex",gap:"10px"}}>
            <button style={{backgroundColor:item.completed?"green":"red",height:"7vh",borderRadius:"10px", padding: "10px 20px 10px 20px"}} onClick={()=>handleToggle(index)}>{item.completed?"Completed":"Undo"}</button>
            <button style={btnStyle} onClick={()=>deleteTodo(index)}>delete</button>
            </div>
          </div>
        ))
      }

    </div>
  );
}

let body = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "10px",
  backgroundColor: "grey",
  height: "100vh",
  width: "100vw"
}

let inputStyle = {
  width: "35vw",
  padding: "12px 10px 12px 10px"
}

let itemStyle =
{
  width: "50vw",
  display: "flex",
  justifyContent:"space-between",
  alignItems:"center",
  gap: "10px",
  border: "2px solid black",
  borderRadius: "10px",
  padding: "10px",
  backgroundColor: "darkGray",
  wordBreak: "break-word",
}

let btnStyle = {
  padding: "10px 20px 10px 20px",
  height:"7vh",
  backgroundColor:"green",
  borderRadius:"10px"
}


export default App;
