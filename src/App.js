import { useEffect, useState } from 'react';
import './App.css';
import TodoBoard from "./components/TodoBoard";
import * as S from "./styles/TodoStyles"


function App() {
  const [inputValue, setInputValue] = useState("");
  
  const [todoList, setTodoList] = useState([]);

  const setValue = (e) => {
    setTodoList([...todoList, inputValue]);
    setInputValue('');
  };
  
  useEffect(() => {
    console.log(todoList);
  })
  
  const onRemove = data => {
    
    // filter함수도 map처럼 ,로 여러개 보내기 가능
    // index는 항상 두번째 인자로 보내기
    // element는 문자열임 ㅇㅇ
    const new_data = todoList.filter((element,index) => index !== data)
    setTodoList(new_data);
  };
  
  // const checkItemHandler = (isChecked) => {
  //   // const [isChecked, setIsChecked] = useState(false);
  //   if(isChecked) {
      
  //   }

  //   };

  return (
    <div className='App'>
      <div className='app-container' id='taskList'>
        {/* <Title className='a'>TO DO LIST</Title> */}
        <S.Title>TO DO LIST</S.Title>
        <div className='add-task'>
          <input className='task-input' type='text' value={inputValue} placeholder='Add New Task' onChange={(e) => setInputValue(e.target.value)}/>
          <S.AddItem className='submit-task' onClick={setValue}></S.AddItem>
        </div>
        <TodoBoard todoList={todoList} onRemove={onRemove}/>
      </div>
    </div>
  );
}

export default App;
