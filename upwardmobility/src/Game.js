import { TurnOrder } from "boardgame.io/core";

function setEvent() {
  console.log("WORKS")

  //hides the confirm button from displaying roll amount, also disables and hides the roll amount text
  document.getElementById("confirmButton").setAttribute("disabled", true)
  document.getElementById("confirmButton").style.visibility = "hidden"
  document.getElementById("rollVal").style.visibility = "hidden"

  //creates the tags for events
  let eventPic = document.createElement("img")
  eventPic.setAttribute("class", "gameImg")
  eventPic.src = ""

  let eventDesc = document.createElement("span")
  eventDesc.setAttribute("class", "eventDesc")
  eventDesc.innerHTML = ""

  let eventButton = document.createElement("button")
  eventButton.setAttribute("class", "eventButton")
  eventButton.innerHTML = "Confirm"

  //clears the temp div
  document.getElementById("temp").innerHTML = ""
  document.getElementById("temp").append(eventPic)
  document.getElementById("temp").append(eventDesc)
  document.getElementById("temp").append(eventButton)
}

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


    // Define the moves for rolling the dice and updating the game state.
    moves: {
      tempRoll: ({G,ctx}, id) => {
        const die1 = Math.floor(Math.random() * 6) + 1
        const die2 = Math.floor(Math.random() * 6) + 1
        let moveDist = die1 + die2;
        document.getElementById("A_pair_of_strange_dice_lay_bef").style.visibility = "hidden"
        document.getElementById("A_pair_of_strange_dice_lay_bef").setAttribute("disabled", "True")

        document.getElementById("DiceButton").style.visibility = "hidden"
        document.getElementById("DiceButton").setAttribute("disabled", "True")

        document.getElementById("NoPath_-_Copy_8").style.visibility = "hidden"
        document.getElementById("A_pair_of_strange_dice_lay_bef").style.top = "20%"

        let showConfirmButton = document.createElement(`button`)
        showConfirmButton.setAttribute("class", "inGameButton")
        showConfirmButton.setAttribute("id", "confirmButton")
        showConfirmButton.addEventListener("click", setEvent)
        showConfirmButton.innerHTML = "Confirm"

        let showRollVal = document.createElement("span")
        showRollVal.setAttribute("class", "inGameText")
        showRollVal.setAttribute("id", "rollVal")
        showRollVal.innerHTML = "Player 1 rolled " + moveDist + "!"

        let testDiv = document.createElement("div")
        testDiv.setAttribute("class", "tempDiv")
        testDiv.setAttribute("id", "temp")

        testDiv.appendChild(showRollVal)
        testDiv.appendChild(showConfirmButton)
        document.getElementById("eventScreen").append(testDiv)
      },
      rollDie: ({G, random, ctx}, id) => {
        //rolling dice
        const die1 = Math.floor(Math.random() * 6) + 1
        const die2 = Math.floor(Math.random() * 6) + 1
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
      },
    },
  turn: {
    order: TurnOrder.ONCE,
    minMoves: 1,
    maxMoves: 1,
  },
};


