import { TurnOrder } from "boardgame.io/core";

export const UpwardsMobility = {
  setup: () => ({
    cells: Array(25).fill(null),

    // Initialize game.
    upwards: {
      board: [
        { event: 'start' },
        { event: 'none' },
        { event: 'advance', steps: 2 },
        { event: 'reverse' },
        { event: 'advance', steps: 3 },
        { event: 'none' },
        { event: 'advance', steps: 1 },
        { event: 'none' },
        { event: 'none' },
        { event: 'win' },
        {
          event: 'go-to-start',
          description: 'Go back to the starting cell',
        },

      ],
      players: {
        '0': { position: 0 },
        '1': { position: 0 },
      },
    },
  }),

  // Define the turn order for the game.
  turn: {
    order: TurnOrder.ONCE,
    minMoves: 1,
    maxMoves: 1,

    // Define the moves for rolling the dice and updating the game state.
    moves: {
      rollDie: ({G, random, ctx}, id) => {
        //rolling dice
        const die1 = random.rollDie(6);
        const die2 = random.rollDie(6);
        let moveDist = die1 + die2;

        //moveing players in array
        G.cells[G.upwards.players[ctx.currentPlayer].position] = null;

        // Check if the player lands on an event cell
        const eventCell = G.upwards.board[G.upwards.players[ctx.currentPlayer].position + moveDist];
        if (eventCell.event === 'advance') {
          moveDist += eventCell.steps;
        } else if (eventCell.event === 'reverse') {
          moveDist = -moveDist;
        } else if (eventCell.event === 'win') {
          // End the game if a player has won.
          ctx.events.endGame({ winner: ctx.currentPlayer });
          return;
        } else if (eventCell.event === 'go-to-start') {
          moveDist = -G.upwards.players[ctx.currentPlayer].position;
        }

        G.upwards.players[ctx.currentPlayer].position += moveDist;
        G.cells[G.upwards.players[ctx.currentPlayer].position] = id;

        ctx.events.endTurn();
      },
    },

  },

};
