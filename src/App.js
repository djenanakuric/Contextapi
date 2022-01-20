import React from "react";
import NavBar from "./components/navBar";
import ToDoList from "./components/toDoList";
import ThemeContextProvider, { ThemeContext } from "./context/themeContext";

function App() {
  return (
    <div className="App">
      <div className="ui raised very padded text container segment">
        <ThemeContextProvider>
            <NavBar />
            <ToDoList />
        </ThemeContextProvider>
      </div>
    </div>
  );
}

export default App;
