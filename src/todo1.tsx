import { useState } from "react";
export function todoList() {
  const [todos, setTodos] = useState<string[]>(["Milk", "Bread", "Butter"]);
  const [input, setInput] = useState("");
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        count : {count}
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          {" "}
          Add
        </button>
        <button
          onClick={() => {
            setCount(count - 1);
          }}
        >
          {" "}
          Minus
        </button>
        <button
          onClick={() => {
            setCount(0);
          }}
        >
          {" "}
          Reset
        </button>
      </div>
    </>
  );
}
