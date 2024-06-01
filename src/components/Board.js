import React, { useState } from 'react'
import Square from './Square'
import './Board.css'

const Board = () => {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    //플레이어가 수를 둘 때마다 xIsNext 값이 뒤집혀 다음 플러이어가 누군지 결정하고 게임의 state가 저장

    const calculateWinner = (squares) => {
        const Lines = [ //이길 수 있는 경우 전체 저장
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6],
        ];

        for(let i=0;i<Lines.length;i++){
            const[a,b,c] = Lines[i]; //만약 i=0이면 a=0,b=1,c=2
            if( 
                squares[a] // 만약 squares[0]이 X이고
                && squares[a] === squares[b] //만약 squares[0]와 squares[1]이 X로 같고
                && squares[a] === squares[c] ////만약 squares[0]와 squares[2]이 X로 같으면
            ){ // 첫 번째 줄이 다 X이므로 승자가 된다
                return squares[a]; //X 리턴
            }
        }
        return null; //일치하는 경우가 없으면 null 리턴
    }

    const winner = calculateWinner(squares);
    let status;
    if(winner){
        status = 'Winner:'+ winner;
    }else{
        status = 'Next Player:'+ (xIsNext? 'X' : 'O');
    }

    const handleClick = (i) => {
        const newSquares = squares.slice(); //squares 배열 얉은 복사 얉은 복사: 원본 데이터 변경 X 
        if(winner || newSquares[i]){
            return; //이미 승자가 있거나 이미 square가 채워져있으면 값 변경 X
        }
        newSquares[i] = xIsNext? 'X' : 'O';
        setSquares(newSquares);
        setXIsNext(current => !current);
      }
    //xIsNext 값을 뒤집는 기능

    const renderSquare = (i) => {
        return (<Square 
                value={squares[i]}
                onClick={()=> handleClick(i)}
            />
        );
    }
    //각각의 square 컴포넌트에 props를 이용해서 board 컴포넌트의 state값, 함수 전달

    return (
        <div>
            <div className='status'>{status}</div>
            <div className='board-row'>
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className='board-row'>
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className='board-row'>
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </div>
    )
}

export default Board