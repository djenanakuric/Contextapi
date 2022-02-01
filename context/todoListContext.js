import React, {createContext, useReducer, useState} from "react";
import ToDoList from "../components/toDoList";

export const ToDoListContext = createContext();
const todoReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_todo':
            return [
                ...state, 
                {text: action.text, id: Math.random()}
            ];
        case 'REMOVE_todo': 
        return state.filter ((todo) => todo.id !== Number(action.id));

        default:
            return state;
}
};
const ToDoListContextProvider = ({ children }) => {
    const [todos, dispatch] = useReducer(todoReducer, [
        {text: 'Plan the family trip', id: 1},
        {text: 'Go shoppinf for dinner', id: 2},
        {text: 'Go for a walk', id: 3}
    ]);
/*
    const addTodo = (todo) => {
        setTodos( [
            ...todos, 
            {text: todo, id: Math.random()} 
        ] )
    }

    const removeTodo = (id) => {
        setTodos(todos.filter( (todo) => {
            return todo.id !== Number(id);
        }))
    }
    */
    return (
        <ToDoListContext.Provider value={{todos, dispatch}}>
            {children}
        </ToDoListContext.Provider>
    )
};

export default ToDoListContextProvider;