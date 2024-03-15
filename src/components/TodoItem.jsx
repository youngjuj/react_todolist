import React, { useEffect, useState } from "react";
import * as S from "../styles/TodoItemStyle"
import DeleteModal from "./DeleteModal";


const TodoItem = (props) => {
    const index = props.index;
    const { task, check } = props.todoItem;
    const onRemove = props.onRemove;
    const checkHandler = props.checkHandler;
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

    // useEffect(() => {
    //     setIsChecked(check);
    // }, [check]);

    const [openModal, setOpenModal] = useState(false);
    const open_del_modal = () => {
        setOpenModal(true)
    };

    const [modalIndex, setModalIndex] = useState(index);

    return (
        <div>
            <S.ListItem className="task-list-item">
                <label className="task-list-item-label">
                    <S.TodoInput type="checkbox" checked={isChecked} onChange={itemCheck} />
                    <span className="task-item" style={{ textDecoration: check ? "line-through" : "" }}>{task}</span>
                </label>
                <S.DeleteButtonSpan onClick={open_del_modal}></S.DeleteButtonSpan>
            </S.ListItem>
            <DeleteModal
                task={task}
                openModal={openModal}
                setOpenModal={setOpenModal}
                modalIndex={modalIndex}
                setModalIndex={setModalIndex}
            />
        </div>
    );
};

export default TodoItem;