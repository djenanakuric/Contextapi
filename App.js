import React from "react";
import NavBar from "./components/navBar";
import ToDoList from "./components/toDoList";
import ThemeContextProvider, { ThemeContext } from "./context/themeContext";
import AuthContextProvider from "./context/authContext";
import ToDoListContextProvider, { ToDoListContext } from "./context/todoListContext";

function App() {
  return (
    <div className="App">
      <div className="ui raised very padded text container segment">
         <AuthContextProvider>
              <ToDoListContextProvider>
                <ThemeContextProvider>
                    <NavBar /> 
                    <ToDoList />
                </ThemeContextProvider>
              </ToDoListContextProvider>
         </AuthContextProvider>
         
      </div>
    </div>
  );
}

export default App;
