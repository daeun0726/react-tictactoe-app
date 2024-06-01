import React from 'react'
import './Square.css'

const Square = ({onClick, value}) => {

  return (
    <button 
      className='square' 
      onClick={onClick} //bored 컴포넌트에서 props로 전달받은 함수
    >
      {value}
    </button>
  );
}

export default Square