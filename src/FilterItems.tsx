import { useState } from "react";

export function FilteredListExample() {
  const [filter, setFilter] = useState("");
  const allItems = ["apple", "banana", "grape", "orange", "watermelon"];

  const filteredItems = allItems.filter((items) =>
    items.toLowerCase().includes(filter.toLowerCase()),
  );

  return (
    <div>
      <input
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      {filteredItems.length === 0 && <p>No Items found...</p>}
    </div>
  );
}
