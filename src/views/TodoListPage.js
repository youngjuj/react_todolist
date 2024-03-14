import React, { useState, useEffect } from "react";
import * as S from "../styles/TodoListStyle";
import TodoBoard from "../components/TodoBoard";

const TodoListPage = () => {
    // input 태그 value설정
    const [inputValue, setInputValue] = useState({
        task: "",
        check: false,
    });

    // todolist 관리
    const [todoList, setTodoList] = useState([]);
    
    // savedList 관리
    const [savedList, setSavedList] = useState(localStorage.getItem("todoList"));

    // useState는 비동기 방식이라 바로 반영된 콘솔찍고 싶으면 useEffect로 찍어보기
    // 끝에 [] 있으면 딱 한 번 실행, 또는 안에 요소 들어있으면 요소 변경될 때마다 실행, [] 없으면 무한반복
    useEffect(() => {
        console.log("저장된 리스트 " ,savedList);
        setSavedList(savedList);
        if(savedList == null || savedList === ""){
            setTodoList([]);
        } else{
            setTodoList(JSON.parse(savedList));
        }        

    },[savedList]);

    useEffect(() => {
        
        localStorage.setItem("todoList", JSON.stringify(todoList));
    },[todoList]);
    
    
    // inputValue todoList에 추가, input태그 비우기
    const setValue = (e) => {
        if (inputValue.task === '') {
            alert('please, Fill in the blank.')
        } else {
            setTodoList([...todoList, {task:inputValue.task, check: false}]);
            setInputValue({...inputValue, task:''});
        }
        console.log("here todoList",todoList);
        
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

    const checkHandler = (data, index) => {
        console.log(todoList[index].check);
        if(data) {
            // setTodoList(todoList[index].check = true);
            setTodoList(todoList[index].check = true);
        } else {
            setTodoList(todoList[index].check = false);
        }
        console.log(todoList[index].check);
    }

    // list item 삭제하기
    const onRemove = data => {

        // filter함수도 map처럼 ,로 여러개 보내기 가능
        // index는 항상 두번째 인자로 보내기
        // element는 문자열임 ㅇㅇ
        const new_data = todoList.filter((element, index) => index !== data)
        setTodoList(new_data);
        // localStorage.setItem("todoList", JSON.stringify(...new_data));
    };

    return (
        <div className='App'>
            <S.TodoBox>
                <S.Title>TO DO LIST
                    <S.DeleteButtonSpan onClick={()=>{
                        localStorage.setItem("todoList", JSON.stringify([]))
                        setTodoList([]);
                        }}></S.DeleteButtonSpan>
                </S.Title>
                <S.AddTodoBox>
                    <S.TodoInput
                        className='task-input'
                        type='text'
                        value={inputValue.task}
                        placeholder='Add New Task'
                        onKeyDown={handleOnKeyPress}
                        onChange={(e) => {setInputValue({...inputValue, task:e.target.value}) 
                        console.log("here",inputValue.task);}}
                        // onChange={(e) => console.log(e.target.value)}
                    />
                    <S.AddButton className='submit-task' onClick={setValue}></S.AddButton>
                </S.AddTodoBox>
                <TodoBoard todoList={todoList} onRemove={onRemove} checkHandler={checkHandler}/>
            </S.TodoBox>
        </div>
    );
};

export default TodoListPage;