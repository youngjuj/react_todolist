import React, { useEffect } from "react";
import styled from "styled-components";

const ModalBox = styled.div`
    position: absolute;
    z-index: 3;
    width: 10rem;   
    height: 10rem;
    background-color: white;
    color: black;
    &.none{
        display: none;
    }
`

const DeleteModal = (props) => {
    const task = props.task;
    const check = props.check;
    const setOpenModal = props.setOpenModal;
    const openModal = props.openModal;
    const modalIndex = props.modalIndex;
    const setIsChecked = props.setIsChecked;
    const onRemove = props.onRemove;

    useEffect(() => {
        setIsChecked(check);
    }, [check])

    return (
        <ModalBox className={openModal ? '' : 'none'}>
            <button onClick={() => {
                console.log(modalIndex);
                onRemove(modalIndex);
                setOpenModal(false);
            }}>
                삭제</button>
            <button onClick={() => {
                setOpenModal(false)
                console.log(task);
            }}> 취소</button>
        </ModalBox>
    )
};

export default DeleteModal;