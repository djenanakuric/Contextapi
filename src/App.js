import React from "react";
import NavBar from "./components/navBar";
import ToDoList from "./components/toDoList";
import ThemeContextProvider, { ThemeContext } from "./context/themeContext";
import AuthContextProvider from "./context/authContext";

function App() {
  return (
    <div className="App">
      <div className="ui raised very padded text container segment">
         <AuthContextProvider>
          <ThemeContextProvider>
            <NavBar /> 
            <ToDoList />
         </ThemeContextProvider>
         </AuthContextProvider>
         
      </div>
    </div>
  );
}

export default App;
