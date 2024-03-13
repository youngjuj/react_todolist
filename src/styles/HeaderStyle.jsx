import styled from "styled-components";

export const NavBox = styled.header`
    height: 44px;
    position: sticky;
    margin: 14px;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const NavButton = styled.span`
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