export const UpwardsMobility = {
    setup: () => ({ track1: Array(10).fill(null)}
            // ,
        // {track2: Array(10).fill(null)},
        // {track3: Array(10).fill(null)}
    ),

    turn: {
        minMoves: 1,
        maxMoves: 1,
    },

    moves: {
    moveCell: ({ G, playerID }, id) => {
        G.cells[id] = playerID;
        },
    },

};

function IsVictory(playerPosition) {
    if (playerPosition == true) {
        return true;
    }
    else
        return false;
}
