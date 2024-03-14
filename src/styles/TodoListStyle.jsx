import styled from "styled-components";

export const TodoBox = styled.div`
    border-radius: 8px;
    width: 100%;
    max-width: 480px;
    max-height: 100%;
    background-color: #10101d;
    padding: 24px;
    overflow: auto;
    color: white;
`

export const Title = styled.h1`
        font-size: 20px;
        line-height: 32px;
        margin: 0 0 12px 0;
        color: #fff;

        &.a{
            background-color: yellow;
        }
        `

export const AddTodoBox = styled.div`
    height: 40px;
    font-size: 14px;
    display: flex;
`

export const TodoInput = styled.input`
    outline: none;

    &.task-input{
        border-right: none;
        width: 100%;
        padding: 0 4px;
        outline: none;
        border: none;
        border-bottom: 1px solid #fff;
        background-color: transparent;
        margin-right: 12px;
        color: #fff;
        box-shadow: none;
        border-radius: 0;
        
        &::placeholder {
            /* color: #fff;  */
            font-weight: 1000;
            font-size: 0.9rem;
        }
    }
`

export const AddButton = styled.button`
        width: 32px;
        height: 32px;
        flex-shrink: 0;
        border: none;
        background: var(--add-button);
        color: #fff;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23ffffff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-plus'%3E%3Cline x1='12' y1='5' x2='12' y2='19'/%3E%3Cline x1='5' y1='12' x2='19' y2='12'/%3E%3C/svg%3E");
        background-size: 18px;
        background-position: center;
        background-repeat: no-repeat;
        border-radius: 50%;
        cursor: pointer;
        box-shadow: 0 0 12px 0 var(--add-button-shadow);
        `

export const DeleteButtonSpan = styled.span`
    margin-left: 20px;
    display: inline-block;
    width: 16px;
    height: 16px;
    background-repeat: no-repeat;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23ff3d46' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-trash-2'%3E%3Cpolyline points='3 6 5 6 21 6'/%3E%3Cpath d='M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2'/%3E%3Cline x1='10' y1='11' x2='10' y2='17'/%3E%3Cline x1='14' y1='11' x2='14' y2='17'/%3E%3C/svg%3E");
    background-size: 16px;
    background-position: center;
    cursor: pointer;
`