import React, { useState } from "react";
import items from "./data";
import "./App.css";
import Menu from "./Menu";

function App() {
  const [menuItems, setMenuItems] = useState(items);

  const changeHandler = (e) => {
    const selectedCategoty = e.target.value;
    switch (selectedCategoty) {
      case "all":
        setMenuItems(items);
        break;
      default:
        const filteredBreak = items.filter(
          (i) => i.category === selectedCategoty
        );
        setMenuItems(filteredBreak);
        break;
    }
  };

  return (
    <div className="App">
      <h1>Our Menu</h1>
      <div className="divider"></div>
      <div className="btns">
        <button value="all" className="btn" onClick={(e) => changeHandler(e)}>
          All
        </button>
        <button
          value="breakfast"
          className="btn"
          onClick={(e) => changeHandler(e)}
        >
          Breakfast
        </button>
        <button value="lunch" className="btn" onClick={(e) => changeHandler(e)}>
          Lunch
        </button>
        <button
          value="shakes"
          className="btn"
          onClick={(e) => changeHandler(e)}
        >
          Shakes
        </button>
      </div>
      <div className="items">
        {menuItems.map((item) => (
          <Menu item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default App;
