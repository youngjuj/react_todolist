import React from "react";
import styled from "styled-components";

const Container = styled.div`
    flex-direction: column;
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

const Title = styled.h1`
    text-align: center;
`

const Home = () => {

    return (
        <Container>
            <Title >🏡 Home입니다 🏡</Title>
        </Container>
    );
};

export default Home;