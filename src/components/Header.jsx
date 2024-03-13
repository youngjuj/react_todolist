import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import * as S from "../styles/HeaderStyle";

const Header = () => {
    const navigate = useNavigate();
    const goHome = () => {
        navigate("/");
    };
    const goTodoList = () => {
        navigate("/todoList");
    };
    return(
        <>
            <S.NavBox>
                <S.NavButton onClick={goHome}>HOME</S.NavButton>
                <S.NavButton onClick={goTodoList}>TO DO LIST</S.NavButton>
            </S.NavBox>
            <main>
                <Outlet />
            </main>
        </>
    );
};

export default Header;