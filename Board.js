import React from 'react';

export function upwardsMobilityBoard({ ctx, G, moves }) {

    const cellStyle = {
        border: '1px solid #555',
        width: '20px',
        height: '20px',
        lineHeight: '20px',
    };

    const playerPos = {

    }
    const onClick = (id) => moves.clickCell(id);

    let winner = '';
    if (ctx.gameover) {
        winner =
            ctx.gameover.winner !== undefined ? (
                <div id="winner">Winner: {ctx.gameover.winner}</div>
            ) : (
                <div id="winner">Draw!</div>
            );
    }

    // let tbody = [];
    // for (let i = 0; i < 3; i++) {
    //     let cells = [];
    //     for (let j = 0; j < 3; j++) {
    //         const id = 3 * i + j;
    //         cells.push(
    //             <td key={id}>
    //                 {G.cells[id] ? (
    //                     <div style={cellStyle}>{G.cells[id]}</div>
    //                 ) : (
    //                     <button style={cellStyle} onClick={() => onClick(id)}/>
    //                 )}
    //             </td>
    //         );
    //     }
    //     tbody.push(<tr key={i}>{cells}</tr>);
    // }

    let ubody = [];
    for (let i = 0; i < 25; i++) {
        let cells = []
        let cells2 = []

        const id = i;
        cells.push(
            <tr key={id}>
                {G.cells[id] ? (
                    <div style={playerPos} style={cellStyle}>{G.cells[id]}</div>
                ) : (
                    <button style={cellStyle} onClick={() => onClick(id)} />
                )}
            </tr>
        );
        cells2.push(
            <tr key={id}>
                {G.cells2[id] ? (
                    <div style={playerPos} style={cellStyle}>{G.cells[id]}</div>
                ) : (
                    <button style={cellStyle} onClick={() => onClick(id)} />
                )}
            </tr>
        );
        ubody.push(<td key={i}>{cells}</td>)
        ubody.push(<td key={i}>{cells2}</td>)
    }

    return (
        <div>
            <table id="board">
                <tbody>{ubody}</tbody>
            </table>
            {winner}
        </div>
    );


}