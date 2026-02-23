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

// export function todoList() {
//   const [todos, setTodos] = useState<String[]>(["Milk", "Bread", "Eggs"]);
//   const [items, setItems] = useState("");
//   const addItems = () => {
//     if (items.trim() !== "") {
//       setTodos([...todos, items]);
//       setItems("");
//     }
//   };
//   const deleteItem = (index: number) => {
//     setTodos(todos.filter((_, i) => i !== index));
//   };

//   return (
//     <div>
//       <div>
//         <input
//           type="text"
//           value={items}
//           onChange={(e) => {
//             setItems(e.target.value);
//           }}
//           placeholder="Add items...."
//         />
//         <button onClick={addItems}>Add Item</button>
//       </div>
//       <ul>
//         <li>
//           {todos.map((item, index) => {
//             return (
//               <li key={index}>
//                 {item}
//                 <button onClick={() => deleteItem(index)}>Delete</button>
//               </li>
//             );
//           })}
//         </li>
//       </ul>
//     </div>
//   );
// }

export function todoList() {
  const [items, setItems] = useState<String[]>(["Milk", "Bread", "Jam"]);
  const [input, setInput] = useState("");
  const [edit, setEdit] = useState<number | null>(null);
  const addItem = () => {
    if (input.trim() === "") return;

    if (edit !== null) {
      //Update new item
      const newItems = [...items];
      newItems[edit] = input;
      setItems(newItems);
      setEdit(null);
    } else {
      //Add new item

      setItems([...items, input]);
    }
    setInput("");
  };
  const deleteItem = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const editItem = (index: number) => {
    setInput(items[index] as string);
    setEdit(index);
  };
  return (
    <>
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <button onClick={addItem}>Add Item</button>
      </div>
      <ul>
        <li>
          {items.map((item, index) => {
            return (
              <li key={index}>
                {item}
                <button onClick={() => editItem(index)}> Edit</button>
                <button onClick={() => deleteItem(index)}> Delete</button>
              </li>
            );
          })}
        </li>
      </ul>
    </>
  );
}
