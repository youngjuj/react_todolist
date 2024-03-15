import React from "react";
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
    const setOpenModal = props.setOpenModal;
    const openModal = props.openModal;
    const modalIndex = props.modalIndex;
    const setModalIndex = props.setModalIndex;

    return (
        <ModalBox className={openModal ? '' : 'none'}>
            <button onClick={() => {
                console.log(modalIndex)
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