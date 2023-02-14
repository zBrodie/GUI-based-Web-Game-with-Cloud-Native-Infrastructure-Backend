import React from 'react';
import {Board, Client} from 'boardgame.io/react';
import { setBoard } from './Board';
import { UpwardsMobility } from './Game';
import { composeWithDevTools } from 'redux-devtools-extension';

const GameClient = Client({
    game: UpwardsMobility,
    board: setBoard,
    debug: true,
    enhancer: composeWithDevTools(),
});

function GameUI(){
    const boardProps = {
        G: {player1Pos: 0, player2Pos: 0},
        moves: {
            UpwardsMobility: (G, ctx, die1, die2) => {
            const player1Pos = G.player1Pos + die1;
            const player2Pos = G.player2Pos + die2;
            return { ...G, player1Pos, player2Pos };
        },
        },
    };
    return (
        <div>
            <Board {...boardProps} board={setBoard} />
        </div>
    )
}
export default App;
