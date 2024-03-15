import React from "react";
import TodoItem from "./TodoItem";
import styled from "styled-components";

const TodoList = styled.ul`
    list-style: none;
    padding: 0;
`

function TodoBoard({ todoList, onRemove, checkHandler, }) {

    return (
        <div className="task-list">
            <TodoList className="task-list">
                {todoList.map((todoItem, index) => (
                    <TodoItem
                        key={index}
                        index={index}
                        todoItem={todoItem}
                        onRemove={onRemove}
                        checkHandler={checkHandler}
                    />))}
            </TodoList>
        </div>

    );
};

export default TodoBoard;