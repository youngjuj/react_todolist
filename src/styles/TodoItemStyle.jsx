import styled from "styled-components";

export const ListItem = styled.li`
        background-color: #191933;
        border-radius: 4px;
        margin-bottom: 12px;
        display: flex;
        align-items: center;
        text-align: center;
        padding: 8px;
        
        input {
            width: 16px;
            height: 16px;
            border-radius: 50%;
            border: 1px solid #fff;
            background-color: transparent;
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-check' stroke='%23fff'%3E%3Cpolyline points='20 6 9 17 4 12'/%3E%3C/svg%3E");
            background-repeat: no-repeat;
            background-position: center;
            background-size: 0;
            transition: .2s;
            margin-right: 8px;
            flex-shrink: 0;
            margin-top: 4px;
            appearance: none;
            
            
            &:hover {
            border-color: var(--checkbox-color);
            box-shadow: 0 0 0 3px var(--checkbox-shadow);
            }
            
            &:checked {
            background-size: 10px;
            border: 1px solid var(--checkbox-color);
            background-color: var(--checkbox-color);
            
            + span {
                color: rgba(255, 255, 255, 0.5);
                text-decoration: line-through rgba(255, 255, 255, 0.8);
            }
            }
        }
        /* css 적용이 안될 때는 직접쓰자 */
        .task-list-item-label{
            display: flex;
            align-items: flex-start;
            color: #fff;
            margin-right: 8px;
            font-size: 14px;
            line-height: 24px;
            position: relative;
            transition: .2s;
            cursor: pointer;
        }
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

export const DeleteButtonSpan = styled.span`
    margin-left: auto;
    display: block;
    width: 16px;
    height: 16px;
    background-repeat: no-repeat;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23ff3d46' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-trash-2'%3E%3Cpolyline points='3 6 5 6 21 6'/%3E%3Cpath d='M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2'/%3E%3Cline x1='10' y1='11' x2='10' y2='17'/%3E%3Cline x1='14' y1='11' x2='14' y2='17'/%3E%3C/svg%3E");
    background-size: 16px;
    background-position: center;
    cursor: pointer;
`