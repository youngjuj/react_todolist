import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const NavBox = styled.header`
    height: 44px;
    position: sticky;
    margin: 14px;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`

const NavButton = styled.span`
    padding: 10px;
    margin: 10px;
    font-weight: bold;
    color: #333333e6;
    border-radius: 10px;
    background-color: #ffffff2a;
    &:hover{
        text-decoration: underline;
        cursor: pointer;
    }
`
const Header = () => {
    const navigate = useNavigate();
    const goHome = () => {
        navigate("/");
    };
    const goTodoList = () => {
        navigate("/todoList");
    };

    // const emptyStorage = () => {
    //     localStorage.setItem("todoList", JSON.stringify([]));
    // }

    return (
        <>
            <NavBox>
                <NavButton onClick={goHome}>HOME</NavButton>
                <NavButton onClick={goTodoList}>TO DO LIST</NavButton>
            </NavBox>
            <main>
                <Outlet />
            </main>
        </>
    );
};

export default Header;