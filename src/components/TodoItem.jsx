import React, { useState } from "react";
import * as S from "../styles/TodoItemStyle"


const TodoItem = ({ index, todoItem, onRemove }) => {
    const [isChecked, setIsChecked] = useState(false);
    const checkHandler = (e) => {
        if (e.target.checked) {
            setIsChecked(true);
        } else {
            setIsChecked(false);
        }
    }


    return (
        <S.ListItem className="task-list-item" id={todoItem} style={{ textDecoration: isChecked ? "line-through" : "" }}>
            <label className="task-list-item-label">
                <S.TodoInput type="checkbox" checked={isChecked} onChange={checkHandler} />
                <span className="task-item">{todoItem}</span>
            </label>
            <S.DeleteButtonSpan onClick={() => {
                onRemove(index);
                console.log('clicked')
            }}></S.DeleteButtonSpan>
        </S.ListItem>
    );
};

export default TodoItem;