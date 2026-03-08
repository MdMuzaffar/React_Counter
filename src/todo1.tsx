import { useState } from "react";

export function todoLIst() {
  const [todos, setTodos] = useState<string[]>(["Milk", "Bread"]);
  const [input, setInput] = useState<string>("");
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const addTask = () => {
    setTodos([...todos, input]);
    setInput("");
  };
  const deleteTask = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const editTask = (index: number) => {
    setInput(todos[index] as string);
    setIsEditing(true);
  };
  return (
    <>
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={"Please enter the task..."}
        />
        <button onClick={addTask}>Submit</button>
      </div>
      <ul>
        {todos.map((todo, index) => [
          <li key={index}>
            {todo} <button onClick={() => editTask(index)}> Edit</button>
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>,
        ])}
      </ul>
    </>
  );
}
