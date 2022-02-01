
import React, {useContext, useState} from "react";
import {ThemeContext} from '../context/themeContext';
import { ToDoListContext } from "../context/todoListContext";


/*
class ToDoList extends React.Component {
    static contextType = ThemeContext;
    
    render () {
        const {isDarkTheme, lightTheme, darkTheme, changeTheme} = this.context;
        const theme = isDarkTheme ? darkTheme : lightTheme;
        return(
            
            <div style = {{background: theme.background, color: theme.text, height: '140px', textAlign: 'center', margin: '0px'}} className="ui list">
                <p className="item">Plan the family trip</p>
                <p className="item">Go for shopping for dinner</p>
                <p className="item">Go for a walk</p>
                <button className="ui button primary"  onClick={changeTheme} style={{background: '#a8ddf8' }}>Change the theme...</button>
            </div>
        )
    };
}
*/

const ToDoList = () => {
    const [todo, setTodo] = useState('');
    const {todos, dispatch} = useContext(ToDoListContext);
    const {isDarkTheme, lightTheme, darkTheme, changeTheme} = useContext(ThemeContext);
    const theme = isDarkTheme ? darkTheme : lightTheme;

    const handleChange = (e) => {
        setTodo(e.target.value)
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        //addTodo(todo);
        dispatch({type: 'ADD_todo', text: todo});
    }

    const handleRemoveTodo = (e) => {
        const id = e.target.id;
        //removeTodo(id);
        dispatch({type: 'REMOVE_todo', id: id});
    };

    return (
        <div style = {{background: theme.background, color: theme.text, textAlign: 'center', margin: '0px'}} className="ui list">
               {
                   todos.length ? (
                       todos.map( (todo) => {
                            return <p id = {todo.id} onClick={handleRemoveTodo} key={todo.id} className="item">{todo.text}</p>
                       })
                   ) : (
                       <div>You have no todos </div>
                   )
               }
               
               <form onSubmit = {handleFormSubmit}>
                   <label htmlFor="todo">Add todo:</label>
                   <input type = 'text' id='todo' onChange = {handleChange} />
                   <input type='submit' value='Add new todo' className="ui button primary" />
               </form>
                <button className="ui button primary"  onClick={changeTheme} style={{background: '#a8ddf8' }}>Change the theme...</button>
        </div>
    );
};

export default ToDoList;