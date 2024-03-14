import React, { useEffect, useState } from "react";
import * as S from "../styles/TodoItemStyle"


const TodoItem = ({ index, todoItem, onRemove, checkHandler }) => {
    const [isChecked, setIsChecked] = useState(false);
    const itemCheck = (e) => {
        if (e.target.checked) {
            setIsChecked(true);
        } else {
            setIsChecked(false);
        }
    }

    useEffect(()=> {
        console.log('click');
        checkHandler(isChecked, index);
    },[isChecked]);


    return (
        <S.ListItem className="task-list-item" id={todoItem}>
            <label className="task-list-item-label">
                <S.TodoInput type="checkbox" checked={isChecked} onChange={itemCheck} />
                <span className="task-item" style={{ textDecoration: todoItem.check ? "line-through" : "" }}>{todoItem.task}</span>
            </label>
            <S.DeleteButtonSpan onClick={() => {
                onRemove(index);
                console.log('clicked')
            }}></S.DeleteButtonSpan>
        </S.ListItem>
    );
};

export default TodoItem;