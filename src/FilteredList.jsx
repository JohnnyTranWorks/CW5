import React, { useState } from "react";
import List from "./List";

const items = [
  { name: "Apple", type: "Fruit" },
  { name: "Pineapple", type: "Fruit" },
  { name: "Banana", type: "Fruit" },
  { name: "Pear", type: "Fruit" },
  { name: "Strawberry", type: "Fruit" },
  { name: "Orange", type: "Fruit" },
  { name: "Lettuce", type: "Vegetable" },
  { name: "Cucumber", type: "Vegetable" },
  { name: "Eggplant", type: "Vegetable" },
  { name: "Squash", type: "Vegetable" },
  { name: "Bell pepper", type: "Vegetable" },
  { name: "Onion", type: "Vegetable" },
];

function FilteredList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("All");

  function handleFilterChange(type) {
    setFilter(type);
  }

  const filteredItems = items.filter((item) => {
    return (
      (filter === "All" || item.type === filter) &&
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginBottom: "10px" }}>
        <button onClick={() => handleFilterChange("All")}>All</button>
        <button onClick={() => handleFilterChange("Fruit")}>Fruit</button>
        <button onClick={() => handleFilterChange("Vegetable")}>Vegetable</button>
      </div>

      <div>
        <label>Search </label>
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <ul style={{ listStyleType: "none", padding: 0 }}>
        {filteredItems.map((item, index) => (
          <List key={index} item={item.name} />
        ))}
      </ul>
    </div>
  );
}

export default FilteredList;