import React, { useState } from "react";
import Header from "./Header";
import Filter from "./Filter";
import ShoppingList from "./ShoppingList";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [category, setCategory] = useState("all");
  const [items] = useState([
    { id: 1, name: "Apple", category: "fruit" },
    { id: 2, name: "Banana", category: "fruit" },
    { id: 3, name: "Carrot", category: "vegetable" },
    { id: 4, name: "Broccoli", category: "vegetable" },
  ]);

  const handleDarkModeClick = () => {
    setDarkMode(!darkMode);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <div className={darkMode ? "dark-mode" : ""}>
      <Header onDarkModeClick={handleDarkModeClick} />
      <Filter onCategoryChange={handleCategoryChange} />
      <ShoppingList items={items} category={category} />
    </div>
  );
}

export default App;