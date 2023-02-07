import {TurnOrder} from "boardgame.io/core";


export const UpwardsMobility = {
    setup: () => ( { cells: Array(25).fill(null),
        players: {
            "0" : {position: 0},
            "1" : {position: 0}
        }
    } ),

    moves: {
        moveCell: ({G, ctx}, id) => {
            console.log("This is G: " + G)
            const die1 = Math.ceil(Math.random() * 6)
            const die2 = Math.ceil(Math.random() * 6)
            const moveDist = die1 + die2
            // const id = G.players[ctx.currentPlayer]
            // console.log("Current player: " + G.players[ctx.currentPlayer])
            console.log("Roll value: " + moveDist)
            G.cells[G.players[ctx.currentPlayer].position] = null;
            G.players[ctx.currentPlayer].position += moveDist
            G.cells[G.players[ctx.currentPlayer].position] = id
            console.log("Logging player ID: " + id + G.players[ctx.currentPlayer].position)
        },
    },

    endIf: ({G, ctx}) => {
        for (const player in G.players) {
            if (G.players[ctx.currentPlayer].position >= 25) {
                console.log("Winning condition has been triggered for player: " + {winner: player} )
                return { winner: player }
            }
        }
    },

    turn: {
        order: TurnOrder.ONCE,
        minMoves: 1,
        maxMoves: 1,
    },
};
