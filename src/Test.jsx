import React from 'react';
import './Test.css';

function Test() {
    const name = 'react';
    const style = {
        backgroundColor: 'black',
        color: 'aqua',
        fontSize: 24, // 기본 단위 px
        padding: '1rem' // 다른 단위 사용 시 문자열로 설정
    }
    return (// class 설정시 className으로
        <>
            <div style={style}>{name}</div>
            <div className="gray-box"></div> 
        </>
    );
}

export default Test;