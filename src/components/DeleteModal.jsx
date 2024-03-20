import React from "react";
import styled from "styled-components";

const ModalBack = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    align-items: center;
    justify-content: center;
    display: flex;
    z-index: 150;
    width: 100%;   
    height: 100%;
    background-color: rgba(68, 68, 68, 0.5);
    padding: 8px;
    color: black;
    &.none{
        display: none;
    };
`;

const ModalBox = styled.div`
    /* height: 18%; */
    width: 36%;
    min-width: 220px;
    display: inline-block;
    margin-top: 40px;
    padding: 18px;
    border-radius: 8px;
    background-color: rgba(0, 0, 0, 0.9);
    color: white;
`;

const ModalContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ModalBtn = styled.button`
    margin: 6px;
    width: 40%;
    padding: 6px;
    display: flex;
    text-align: center;
    font-weight: bold;
    justify-content: center;
    bottom: 10px;
    border-radius: 4px;
    border: none;
    box-shadow: 11;
    color: white;
    cursor: pointer;
    &.del_btn{
        background-color: #df6d34;
    };
    &.cancel_btn{
        background-color: gray;
    };
`;

const DeleteModal = (props) => {
    const index = props.index;
    const task = props.task;
    const setOpenModal = props.setOpenModal;
    const openModal = props.openModal;
    const onRemove = props.onRemove;


    return (
        <ModalBack className={openModal ? '' : 'none'}>
            <ModalBox>
                <h4>"{task}" <br/> 항목을 삭제하시겠습니까?</h4>
                <ModalContent>
                    <ModalBtn className="del_btn" onClick={() => {
                        console.log(index);
                        onRemove(index);
                        setOpenModal(false);
                    }}>
                        삭제</ModalBtn>
                    <ModalBtn className="cancel_btn" onClick={() => {
                        setOpenModal(false)
                    }}> 취소</ModalBtn>
                </ModalContent>
            </ModalBox>
        </ModalBack>
    )
};

export default DeleteModal;