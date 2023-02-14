import React from 'react';
import { Board } from 'boardgame.io/react';
import props from "../dist/App.f684dadd";


export function setBoard(prop){
    const board = [];
    const numRows = 50;
    const numCols = 2;

    for(let row = 0; row < numRows; row++){
        const rowCells = [];
        for(let col = 0; col < numCols; col++){
            rowCells.push(<div key={row * numCols + col} className="cell"></div>);
        }
        board.push(<div key={row} className="row">{rowCells}</div>)
    }

    const player1Pos = props.G.plater1Pos;
    const player2Pos = props.G.player2Pos;
    board[numRows - player1Pos - 1].props.children[0] = <div className="player1"></div>;
    board[numRows - player2Pos - 1].props.children[1] = <div className="player2"></div>;

    return(<div className="board">{board}</div>);
}
export function TicTacToeBoard({ ctx, G, moves }) {
    const onClick = (id) => moves.moveCell(id);

    const cellStyle = {
        border: '1px solid #555',
        width: '50px',
        height: '50px',
        lineHeight: '50px',
        textAlign: 'center',
    };

    let tbody = [];
    for (let i = 0; i < 3; i++) {
        let cells = [];
        for (let j = 0; j < 3; j++) {
            const id = 3 * i + j;
            cells.push(
                <td key={id}>
                    {G.cells[id] ? (
                        <div style={cellStyle}>{G.cells[id]}</div>
                    ) : (
                        <button style={cellStyle} onClick={() => onClick(id)} />
                    )}
                </td>
            );
        }
        tbody.push(<tr key={i}>{cells}</tr>);
    }

    let ubody = [];
    for (let i = 0; i < 10; i++) {
        let cells = [];
        cells.push(
            <td key={id}>
                {G.cells[id] ? (
                    <div style={cellStyle}>{G.cells[id]}</div>
                ) : (
                    <button style={cellStyle} onClick={() => onClick(id)} />
                )}
            </td>)
        }
        tbody.push(<tr key={i}>{cells}</tr>);


    return (
        <div>
            <table id="board">
                <tbody>{ubody}</tbody>
            </table>
            {winner}
        </div>
    );
    export default setBoard;
}

