import React, { Component } from 'react'
import './Square.css'

export default class Square extends Component {


  render() {
    return (
      <button 
        className='square' 
        onClick={() => this.props.onClick()} //bored 컴포넌트에서 props로 전달받은 함수
      >
        {this.props.value}
      </button>
    );
  }
}

//rcc 단축어로 생성 가능