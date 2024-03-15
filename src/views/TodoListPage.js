import React, { useState, useEffect } from "react";
import TodoBoard from "../components/TodoBoard";
import styled from "styled-components";

const TodoBox = styled.div`
    border-radius: 8px;
    width: 100%;
    max-width: 480px;
    max-height: 100%;
    background-color: #10101d;
    padding: 24px;
    overflow: auto;
    color: white;
`

const Title = styled.h1`
        font-size: 20px;
        line-height: 32px;
        margin: 0 0 12px 0;
        color: #fff;

        &.a{
            background-color: yellow;
        }
        `

const AddTodoBox = styled.div`
    height: 40px;
    font-size: 14px;
    display: flex;
`

const TodoInput = styled.input`
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

const AddButton = styled.button`
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

const DeleteButtonSpan = styled.span`
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

const TodoListPage = () => {
    // input 태그 value설정
    const [inputValue, setInputValue] = useState("");

    // todolist 관리
    const [todoList, setTodoList] = useState([]);

    // savedList 관리
    const [savedList, setSavedList] = useState(localStorage.getItem("todoList"));

    // useState는 비동기 방식이라 바로 반영된 콘솔찍고 싶으면 useEffect로 찍어보기
    // 끝에 [] 있으면 딱 한 번 실행, 또는 안에 요소 들어있으면 요소 변경될 때마다 실행, [] 없으면 무한반복
    useEffect(() => {
        // console.log("저장된 리스트 " ,savedList);
        // console.log("todotype", typeof(todoList));
        setSavedList(savedList);
        if (savedList == null || savedList === "") {
            setTodoList([]);
        } else {
            setTodoList(JSON.parse(savedList));
        }

    }, [savedList]);

    useEffect(() => {
        localStorage.setItem("todoList", JSON.stringify(todoList));
    }, [todoList]);

    // inputValue todoList에 추가, input태그 비우기
    const setValue = (e) => {
        if (inputValue === '') {
            alert('please, Fill in the blank.')
        } else {
            setTodoList([...todoList, { task: inputValue, check: false }]);
            setInputValue('');
        }
        console.log("here todoList", todoList);

    };

    // input태그 enter키로 입력하기
    const handleOnKeyPress = (e) => {
        // onKeyDown || onKeyUp은 한글입력시 두 번 입력되는 오류 있
        // 그래서 isComposing & keyCode로 강제 리턴시키는 문제 해결
        if (e.isComposing || e.keyCode === 229) return;
        if (e.key === 'Enter') {
            setValue();
        }
    }

    // 할 일 체크 관리
    const checkHandler = (check, index) => {
        console.log(todoList[index].check);
        if (check) {
            todoList[index].check = true;
            setTodoList([...todoList]);
        } else {
            todoList[index].check = false;
            setTodoList([...todoList]);
        }
    };

    // list item 삭제하기
    const onRemove = itemIndex => {

        // filter함수도 map처럼 ,로 여러개 보내기 가능
        // index는 항상 두번째 인자로 보내기
        // element는 문자열임
        const new_data = todoList.filter((element, index) => index !== itemIndex)
        setTodoList([...new_data]);
    };


    return (
        <div className='App'>
            <TodoBox>
                <Title>TO DO LIST
                    <DeleteButtonSpan onClick={() => {
                        localStorage.setItem("todoList", JSON.stringify([]))
                        setTodoList([]);
                    }}>
                    </DeleteButtonSpan>
                </Title>

                <AddTodoBox>
                    <TodoInput
                        className='task-input'
                        type='text'
                        value={inputValue}
                        placeholder='Add New Task'
                        onKeyDown={handleOnKeyPress}
                        onChange={(e) => { setInputValue(e.target.value) }}
                    />
                    <AddButton className='submit-task' onClick={setValue}></AddButton>
                </AddTodoBox>
                <TodoBoard
                    todoList={todoList}
                    onRemove={onRemove}
                    checkHandler={checkHandler}
                />
            </TodoBox>
        </div>
    );
};

export default TodoListPage;