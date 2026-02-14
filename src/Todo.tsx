import { useState } from "react";

// export function todoList() {
//   const [items, setItems] = useState<String[]>(["Milk", "Bread", "Eggs"]);
//   const [input, setInput] = useState("");

//   const addItems = () => {
//     if (input.trim() !== "") {
//       setItems([...items, input]);
//       setInput("");
//     }
//   };
//   const removeItems = (index: number) => {
//     setItems(items.filter((_, i) => i !== index));
//   };

//   return (
//     <div>
//       <div>
//         <input
//           type="text"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           placeholder="search Items...."
//         />
//         <button onClick={addItems}> Add Items</button>
//       </div>
//       <ul>
//         {items.map((item, index) => (
//           <li key={index}>
//             {item} <button onClick={() => removeItems(index)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

export function todoList() {
  const [todos, setTodos] = useState<String[]>(["Milk", "Bread", "Eggs"]);
  const [items, setItems] = useState("");
  const addItems = () => {
    if (items.trim() !== "") {
      setTodos([...todos, items]);
      setItems("");
    }
  };
  const deleteItem = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={items}
          onChange={(e) => {
            e.target.value;
          }}
          placeholder="Add items...."
        />
        <button onClick={addItems}></button>
      </div>
      <ul>
        {todos.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
        <button onClick={deleteItem}>Delete</button>
      </ul>
    </div>
  );
}
