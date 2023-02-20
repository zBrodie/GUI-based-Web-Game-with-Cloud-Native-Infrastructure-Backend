import React, { Component } from 'react'
import Circle from './Curcle'

function Board(props) {
    const rows = [];

    for (let i = 0; i < 50; i++) {
        const cells = [];


        for (let j = 0; j = 4; j++) {
            cells.push(<div key={i * 50 + j} className="Cell"></div>);
        }
        rows.push(<div key={i} className="row">{cells}</div>)
    }
    return <div className="board">{rows}</div>;
}
export default Board;

