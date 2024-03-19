import { useState, useEffect } from "react";
import React from "react";

export default function App() {
  const [todoItems, setTodoItems] = useState([]);

  // useEffect is for when we want something to happen when the page loads
  // we can also use it to listen to certain state state variables, and run
  useEffect(() => {
    handleGetTodoItems();
    // everytime count changes, do what is in []
  }, []); // Empty dependency array means it runs only once when the component mounts

  // handle = event handler Get = getting the todo items
  async function handleGetTodoItems() {
    // make a fetch request to my API
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();

    // set todoItems to be the response
    setTodoItems(data);
  }

  return (
    <div>
      <h1>To Do List</h1>
      <ul>
        {todoItems.map((item) => (
          // Use a combination of id and title as the key
          <li key={item.id + item.title}>{item.title}</li>
        ))}
      </ul>
      <button onClick={handleGetTodoItems}>Get Items</button>
    </div>
  );
}
