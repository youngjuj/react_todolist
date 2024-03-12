import React from "react";
import TodoItem from "./TodoItem";

function TodoBoard({todoList, onRemove, checkItem}) {

    return(
        <div className="task-list">
            <ul className="task-list">
                {todoList.map( (todoItem,index) => <TodoItem index={index} todoItem={todoItem} onRemove={onRemove} />)}
            </ul>
        </div>

    );
};

export default TodoBoard;