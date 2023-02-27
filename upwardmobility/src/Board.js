import React, { Component } from 'react'


export function Board(props) {
    const numSpaces = 10;
    const spaceWidth = 50;

    const renderSpaces = () => {
        const spaces = [];
        for (let i = 0; i < numSpaces; i++) {
            spaces.push(
                <div
                    key={i}
                    className="space"
                    style={{ width: `${spaceWidth}px` }}
                >
                    {i + 1}
                </div>
            );
        }
        return spaces;
    };

    const renderToken = () => {
        return (
            <div
                className="token"
                style={{ left: `${props.tokenPosition * spaceWidth}px` }}
            />
        );
    };

    return (
        <div className="board">
            {renderSpaces()}
            {renderToken()}
        </div>
    );
}

export default Board;

/*
export function Board(props) {
    const rows = [];

    for (let i = 0; i < 50; i++) {
        const cells = [];


        for (let j = 0; j == 4; j++) {
            cells.push(<div key={i * 50 + j} className="Cell"></div>);
        }
        rows.push(<div key={i} className="row">{cells}</div>)
    }
    return <div className="board">{rows}</div>;
}
export default Board;

*/