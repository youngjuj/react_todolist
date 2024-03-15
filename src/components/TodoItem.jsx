import React, { useEffect, useState } from "react";
import * as S from "../styles/TodoItemStyle"


const TodoItem = ({ index, todoItem, onRemove, checkHandler }) => {
    const {task, check} = todoItem;
    const [isChecked, setIsChecked] = useState(false);
    const itemCheck = (e) => {
        if (e.target.checked) {
            checkHandler(e.target.checked, index);
            setIsChecked(true);
        } else {
            checkHandler(e.target.check, index);
            setIsChecked(false);
        }
    }

    useEffect(() => {
        setIsChecked(check);
    }, [todoItem]);


    return (
        <S.ListItem className="task-list-item">
            <label className="task-list-item-label">
                <S.TodoInput type="checkbox" checked={isChecked} onChange={itemCheck} />
                <span className="task-item" style={{ textDecoration: check ? "line-through" : "" }}>{task}</span>
            </label>
            <S.DeleteButtonSpan onClick={() => {
                onRemove(index);
                console.log('clicked')
            }}></S.DeleteButtonSpan>
        </S.ListItem>
    );
};

export default TodoItem;