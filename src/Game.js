import {INVALID_MOVE} from "boardgame.io/core";

function IsVictory(cells) {

}

export const GameBase = {
    setup: () => ({ cells: Array(9).fill(null) }),

    moves: {
        clickCell: ({ G, playerID }, id) => {
            if(G.cells[id] !== null){
                return INVALID_MOVE;
            }
            G.cells[id] = playerID;
        },
    },

    turn: {
        minMoves: 1,
        maxMoves: 1,
    },


};