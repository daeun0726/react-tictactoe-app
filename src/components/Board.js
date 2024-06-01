import React, { Component } from 'react'
import Square from './Square'
import './Board.css'

export default class Board extends Component {

    constructor(props){
        super(props);
        this.state = {
            squares: Array(9).fill(null),
        };
        //생성자를 추가하고 9개의 square에 해당하는 9개의 null 배열을 초기 state로 설정
    }

    handleClick(i){
        const squares = this.state.squares.slice(); //squares 배열 얉은 복사 얉은 복사: 원본 데이터 변경 X 
        squares[i] = 'X';
        this.setState({squares:squares});
      }
    //각각의 square 컴포넌트 클릭 시 호출

    renderSquare(i){
        return (<Square 
                value={this.state.squares[i]}
                onClick={()=> this.handleClick(i)}
            />
        );
    }
    //각각의 square 컴포넌트에 props를 이용해서 board 컴포넌트의 state값, 함수 전달

    render() {
        return (
            <div>
                <div className='status'>Next Plater: X,O</div>
                <div className='board-row'>
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(3)}
                </div>
                <div className='board-row'>
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                    {this.renderSquare(6)}
                </div>
                <div className='board-row'>
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                    {this.renderSquare(9)}
                </div>
            </div>
        )
    }
}
