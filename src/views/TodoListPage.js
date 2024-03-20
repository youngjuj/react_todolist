import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import TodoItem from "../components/TodoItem";
import styled from "styled-components";

const Container = styled.div`
    flex-direction: column;
    width: 100%;
    height: 100vh;
    margin: 0;
    padding: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: linear-gradient(62deg, rgba(1, 95, 183, 0.9732216701223994) 13%, rgba(255, 122, 151, 0.5) 4%),linear-gradient(44deg, rgba(0, 43, 99, 0.07922090238615942) 39%, rgba(242, 140, 143, 0.5) 18%),linear-gradient(118deg, rgba(84, 202, 242, 0.03152997265339608) 40%, rgba(247, 155, 187, 0.5) 54%),linear-gradient(58deg, rgba(90, 90, 237, 0.16144443572260592) 83%, rgba(249, 156, 142, 0.5) 23%); background-blend-mode: normal,lighten,multiply,hard-light;
    font-family: 'DM Sans', sans-serif;
    overflow: hidden;
`

const TodoBox = styled.div`
    border-radius: 8px;
    width: 100%;
    min-width: 246px;
    max-width: 690px;
    max-height: 400px;
    background-color: #10101d;
    padding: 24px;
    padding-left: 30px;
    overflow: auto;
    color: white;
    &.pc{
        /* width: 98%; */
        min-width: 480px;
        justify-content: space-between;

    };
    /* &.screen{
        width: 98%;
        min-width: 684px;
    }; */
    &::-webkit-scrollbar-thumb{
        background-color: black;
    }
`

const Title = styled.h1`
    font-size: 20px;
    line-height: 32px;
    margin: 0 0 12px 0;
    color: #fff;
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
        max-width: 240px;
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

const TodoList = styled.ul`
    list-style: none;
    padding: 0;
    &.pc{
        display: flex;
        flex-wrap: wrap;
        padding: 0;
        margin-top: 10;
    }
    &.screen{
        display: flex;
        flex-wrap: wrap;
        padding: 0;
        margin-top: 10;
    }
`

const TodoListPage = () => {
    const isMobile = useMediaQuery({ query: "(max-width: 480px)" });
    // const isScreen = useMediaQuery({ query: "(min-width: 1225px)" });
    const displayType = isMobile ? "mobile" : "pc";
    // input 태그 value설정
    const [inputValue, setInputValue] = useState("");
    // savedList 관리
    const [savedList, setSavedList] = useState(localStorage.getItem("todoList"));
    // todolist 관리
    const [todoList, setTodoList] = useState([]);

    // useState는 비동기 방식이라 바로 반영된 콘솔찍고 싶으면 useEffect로 찍어보기
    // 끝에 [] 있으면 딱 한 번 실행, 또는 안에 요소 들어있으면 요소 변경될 때마다 실행, [] 없으면 무한반복
    useEffect(() => {
        setSavedList(savedList);
        if (savedList == null || savedList === "") {
            setTodoList([]);
        } else {
            setTodoList(JSON.parse(savedList));
        }
        return
    }, [savedList]);

    useEffect(() => {
        localStorage.setItem("todoList", JSON.stringify(todoList));
        return
    }, [todoList]);

    // inputValue todoList에 추가, input태그 비우기
    const setValue = (e) => {
        if (inputValue === '') {
            alert('please, Fill in the blank.')
        } else {
            setTodoList([...todoList, { task: inputValue, check: false }]);
            setInputValue('');
        }
    };

    // input태그 enter키로 입력하기
    const handleOnKeyPress = (e) => {
        // onKeyDown || onKeyUp은 한글입력시 두 번 입력되는 오류 있
        // 그래서 isComposing & keyCode로 강제 리턴시키는 문제 해결
        if (e.isComposing || e.keyCode === 229) return;
        if (e.key === 'Enter') {
            setValue();
        }
    };

    // 할 일 체크 관리
    const checkHandler = (check, index) => {
        check ? todoList[index].check = true : todoList[index].check = false;
        setTodoList([...todoList]);
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
        <Container>
            <TodoBox className={displayType}>
                <Title>TO DO LIST
                    <DeleteButtonSpan onClick={() => {
                        localStorage.setItem("todoList", JSON.stringify([]))
                        setTodoList([]);
                    }} />
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

                    <AddButton className='submit-task' onClick={setValue} />
                </AddTodoBox>

                <TodoList className={"task-list " + displayType}>
                    {todoList.map((todoItem, index) => (
                        <TodoItem
                            key={index}
                            index={index}
                            displayType={displayType}
                            todoItem={todoItem}
                            onRemove={onRemove}
                            checkHandler={checkHandler}
                        />))}
                </TodoList>


            </TodoBox>
        </Container>
    );
};

export default TodoListPage;