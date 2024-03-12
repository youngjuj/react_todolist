import React, {useState} from "react";
import * as S from "../styles/TodoStyles"

function TodoItem({index, todoItem, onRemove }) {    
    const [isChecked, setIsChecked] = useState(false);
    const checkHandler = (e) => {
        if(e.target.checked){
            setIsChecked(true);
        } else {
            setIsChecked(false);
        }
    }


    return(
        <S.Item className="task-list-item" id={todoItem} style={{textDecoration: isChecked? "line-through" : "" }}>
            <label className="task-list-item-label">
                <input type="checkbox" checked={isChecked} onChange={checkHandler}/>
                <span className="task-item">{todoItem}</span>
            </label>
                <span className="delete-btn" onClick={() => {
                    onRemove(index);
                    console.log('clicked')
                    }}></span>
        </S.Item>
    );
};

export default TodoItem;