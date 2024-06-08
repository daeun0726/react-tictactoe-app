import { useState } from "react";
import Board from "./components/Board";
import './App.css'


function App() {

  const  [history, setHistory] = useState([
    {
      squares: Array(9).fill(null),
      xIsNext: true,
    },
  ]);
  const [xIsNext, setXIsNext] = useState(true);
  const [stepNumber, setStepNumber] = useState(0);
  //현재 몇 번째 스텝인지 알 수 있는 state 생성
  const current = history[stepNumber];

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

const handleClick = (i) => {
  const newHistory = history.slice(0, stepNumber + 1);
  const newCurrent = newHistory[newHistory.length - 1];
  const newSquares = current.squares.slice(); //squares 배열 얉은 복사 얉은 복사: 원본 데이터 변경 X 
  if(calculateWinner(newSquares) || newSquares[i]){
      return; //이미 승자가 있거나 이미 square가 채워져있으면 값 변경 X
  }
  newSquares[i] = xIsNext? 'X' : 'O';
  setHistory([...history, {squares: newSquares}]); //전개 연산자 사용
  setXIsNext(current => !current);

  setStepNumber(newHistory.length);
}
//xIsNext 값을 뒤집는 기능

const moves = history.map((step, move) => {
  const desc = move?
    'Go to move #' + move :
    'Go to game start';
  return (
    <li key={move}>
      <button className="move-button" onClick={() => jumpTo(move)}>{desc}</button>
    </li>
  );
});
let status;
const winner = calculateWinner(current.squares);
if(winner){
  status = 'Winner:'+ winner;
}else{
  status = 'Next Player:'+ (xIsNext? 'X' : 'O');
}

const jumpTo = (step) => {
  setStepNumber(step);
  setXIsNext(step % 2 === 0); //stepNumber가 짝수일 때는 true, 홀수일 때는 false로 변경
}
//stepNumber 값 업데이트

  return (
    <div className='game'>
      <div className='game=board'>
        <Board
          squares={current.squares}
          onClick={(i) => handleClick(i)}
        />
      </div>
      <div className='game-info'>
        <div className="status">{status}</div>
        <ol style={{listStyle: 'none'}}>{moves}</ol>
      </div>
    </div>
  );
}

export default App;
