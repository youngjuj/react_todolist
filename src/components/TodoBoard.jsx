import React from "react";
import TodoItem from "./TodoItem";
import * as S from "../styles/TodoBoardStyle"

function TodoBoard({ todoList, onRemove, checkHandler }) {

    return (
        <div className="task-list">
            <S.TodoList className="task-list">
                {todoList.map((todoItem, index) => (<TodoItem index={index} todoItem={todoItem} onRemove={onRemove} checkHandler={checkHandler} />))}
            </S.TodoList>
        </div>

    );
};

export default TodoBoard;