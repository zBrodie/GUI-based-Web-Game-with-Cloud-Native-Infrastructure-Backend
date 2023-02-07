import {TurnOrder} from "boardgame.io/core";


export const UpwardsMobility = {
    setup: () => ( { cells: Array(50).fill(null),
        // player1Position: 0,
        // plsyer2Position: 0
        players: {
            "0" : {position: 0},
            "1" : {position: 0}
        }
    } ),

    moves: {
        moveCell: ({G, ctx}, moveDist, id) => {
            console.log(G)
            let die1 = Math.ceil(Math.random() * 6)
            let die2 = Math.ceil(Math.random() * 6)
            moveDist = die1 + die2
            console.log(moveDist)
            // if (ctx.currentPlayer === "0") {
            //     G.player1Position += moveDist;
            //     G.cells[G.player1Position] = id
            // } else {
            //     G.player2Position += moveDist;
            //     G.cells[G.player2Position] = id
            // }
            G.players[ctx.currentPlayer].position += moveDist

            G.cells[G.players[ctx.currentPlayer].position] = id
        },
    },

    turn: {
        order: TurnOrder.ONCE,
        minMoves: 1,
        maxMoves: 1,
    },
};
