import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './views/Home';
import TodoListPage from './views/TodoListPage';
import { useMediaQuery } from 'react-responsive';

function App() {
  return (
    <Routes>
      <Route element={<Header />} >
        <Route path="/" element={<Home />} />
        <Route path='/todoList' element={<TodoListPage />} />
      </Route>
    </Routes>
  )
}

export default App;