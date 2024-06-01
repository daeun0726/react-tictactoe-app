import React, { Component } from 'react'
import Square from './Square'
import './Board.css'

export default class Board extends Component {

    renderSquare(i){
        return <Square/>
    }

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
