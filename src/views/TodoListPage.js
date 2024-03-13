import React, { useState, useEffect } from "react";
import * as S from "../styles/TodoListStyle";
import TodoBoard from "../components/TodoBoard";

const TodoListPage = () => {
    // input 태그 value설정
    const [inputValue, setInputValue] = useState("");


    // todolist 관리
    const [todoList, setTodoList] = useState([]);


    // inputValue todoList에 추가, input태그 비우기
    const setValue = (e) => {
        if (inputValue === '') {
            alert('please, Fill in the blank.')
        } else {
            setTodoList([...todoList, inputValue]);
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
    }


    // useState는 비동기 방식이라 콘솔찍고 싶으면 useEffect로 찍어보기
    useEffect(() => {
        console.log(todoList);
    })


    // list item 삭제하기
    const onRemove = data => {

        // filter함수도 map처럼 ,로 여러개 보내기 가능
        // index는 항상 두번째 인자로 보내기
        // element는 문자열임 ㅇㅇ
        const new_data = todoList.filter((element, index) => index !== data)
        setTodoList(new_data);
    };

    return (
        <div className='App'>
            <S.TodoBox>
                <S.Title>TO DO LIST</S.Title>
                <S.AddTodoBox>
                    <S.TodoInput
                        className='task-input'
                        type='text'
                        value={inputValue}
                        placeholder='Add New Task'
                        onKeyDown={handleOnKeyPress}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                    <S.AddButton className='submit-task' onClick={setValue}></S.AddButton>
                </S.AddTodoBox>
                <TodoBoard todoList={todoList} onRemove={onRemove} />
            </S.TodoBox>
        </div>
    );
};

export default TodoListPage;