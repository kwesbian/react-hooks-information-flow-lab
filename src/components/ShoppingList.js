import React from "react";

function ShoppingList({ items, category }) {
  const filteredItems = items.filter((item) => {
    if (category === "all") return true;
    return item.category === category;
  });

  return (
    <ul>
      {filteredItems.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}

export default ShoppingList;
