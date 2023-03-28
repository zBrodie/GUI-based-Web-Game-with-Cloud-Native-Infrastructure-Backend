import { TurnOrder, Client, Server, Game } from "boardgame.io/core";
import { getEvent} from "./eventsfile";
import react from 'react';
import { UpwardMobilityBoard } from "./Board";

function clearElement(elementID) {
    document.getElementById(elementID).innerHTML = "";
}
export function hideRollScreen() {
    console.log("hideRollScreen function");
    document.getElementById("rollVal").style.visibility = "hidden";
    document.getElementById("rollVal").setAttribute("disabled", "True");

    document.getElementById("proceedButton").style.visibility = "hidden";
    document.getElementById("proceedButton").setAttribute("disabled", "True");
}
export function showRollScreen() {
    console.log("showRollScreen function");
    // Show the dice and roll button
    document.getElementById("A_pair_of_strange_dice_lay_bef").style.visibility = "visible";
    document.getElementById("A_pair_of_strange_dice_lay_bef").removeAttribute("disabled");

    document.getElementById("DiceButton").style.visibility = "visible";
    document.getElementById("DiceButton").removeAttribute("disabled");

    // Hide the roll result and event buttons
    document.getElementById("temp").style.display = "none";
}
export const UpwardsMobility = {

    // Turn phase flow
    // 1) Roll dice move piece
    // 2) Choose event or use item
    // 3a) If event, show event, if answer question correctly something good happens otherwise something bad happens
    // if correct answer than they pick up item and or gain currency then end turn
    // if incorrect answer than negativeness happens then end turn
    // 3b) If they choose the item, activate the item and do item thing and then show event

    // rollScreen
    // eventOrItemScreen
    // itemScreen
    // eventScreen
    // correctAnswerScreen
    // wrongAnswerScreen
    // endTurnScreen

  setup: () => ({
    players: {
      0: {
        position: 0,
        inventory: ['Staff of MoMoney', 'Staff of NoMoney', 'Orb of Steal Yo Buffs'],
          buffs: [],
          currency: 0,
      },
      1: {
        position: 0,
        inventory: ['Orb of MoMoney', 'Orb of NoMoney', 'Orb of Steal Yo Buffs'],
          buffs: [],
          currency: 0,
      },
        moveDist: 0,
    },
    board: {
        0: { event: 'start',    currency: 0 },
        1: { event: 'advance',  currency: 2 },
        2: { event: 'advance',  currency: 2 },
        3: { event: 'reverse',  currency: -1 },
        4: { event: 'advance',  currency: 3 },
        5: { event: 'wizardEvent',  currency: 5, item: 'Staff of MoMoney'},
        6: { event: 'advance',  currency: 1 },
        7: { event: 'none',     currency: 0 },
        8: { event: 'none',     currency: 0 },
        9: { event: 'reverse',  currency: -2 },
        10: { event: 'none',    currency: 0 },
        11: { event: 'none',    currency: 0 },
        12: { event: 'advance', currency: 2 },
        13: { event: 'advance', currency: 2 },
        14: { event: 'reverse', currency: -1 },
        15: { event: 'advance', currency: 3 },
        16: { event: 'advance', currency: -2 },
        17: { event: 'advance', currency: 1 },
        18: { event: 'advance', currency: 2 },
        19: { event: 'none',    currency: 0 },
        20: { event: 'reverse', currency: -2 },
        21: { event: 'advance', currency: 2 },
        22: { event: 'reverse', currency: -2 },
        23: { event: 'reverse', currency: -2 },
        24: { event: 'win', currency: 0 },
    },
  }),
    turn: {
        order: TurnOrder.DEFAULT,
    },

    // Define the moves for rolling the dice and updating the game state.
    moves: {
      rollDice: ({G, ctx, events}) => {
          const die1 = Math.floor(Math.random() * 6) + 1;
          const die2 = Math.floor(Math.random() * 6) + 1;
          // let moveDist = die1 + die2;
          let moveDist = 5;
          G.moveDist = moveDist;
          G.players[ctx.currentPlayer].position += moveDist;
          if (G.players[ctx.currentPlayer].position >= 25) {
              ctx.events.endGame({ winner: ctx.currentPlayer });
          }
          const eventCell = G.board[G.players[ctx.currentPlayer].position + moveDist];

          // Check for players active buffs
          G.players[ctx.currentPlayer].buffs.forEach((buff) => {
              if (buff.type === "moMoneyBuff") {
                  moveDist += 1;
                  buff.duration--;
                  if (buff.duration === 0) {
                      G.players[ctx.currentPlayer].buffs.splice(
                          G.players[ctx.currentPlayer].buffs.indexOf(buff),
                          1
                      );
                  }
              }
          });
          events.setPhase("eventOrItemScreen");
      },

      tempRoll: ({G ,ctx, events}) => {
          const die1 = Math.floor(Math.random() * 6) + 1;
        const die2 = Math.floor(Math.random() * 6) + 1;
        // let moveDist = die1 + die2;
        // G.players[ctx.currentPlayer].position += moveDist;
        let moveDist = 5;
        if (G.players[ctx.currentPlayer].position >= 25) {
            ctx.events.endGame({ winner: ctx.currentPlayer });
        }
        const eventCell = G.board[G.players[ctx.currentPlayer].position + moveDist];

          // Check for players active buffs
          G.players[ctx.currentPlayer].buffs.forEach((buff) => {
              if (buff.type === "moMoneyBuff") {
                  moveDist += 1;
                  buff.duration--;
                  if (buff.duration === 0) {
                      G.players[ctx.currentPlayer].buffs.splice(
                          G.players[ctx.currentPlayer].buffs.indexOf(buff),
                          1
                      );
                  }
              }
          });

          // new code
          G.phase = "pick item";
          let useItemDropdown = document.createElement("select");
          useItemDropdown.setAttribute("class", "useItemDropdown");
          let option = document.createElement("option");
          option.style.display = "hidden";
          option.selected = "selected";
          option.disabled = true; // Disable the default label
          option.innerHTML = "Inventory";
          useItemDropdown.add(option)
          G.players[ctx.currentPlayer].inventory.forEach((item) => {
              let option = document.createElement("option");
              option.text = item;
              useItemDropdown.add(option);
          });

            // Add a button to use the selected item
          let useItemButton = document.createElement("button");
          useItemButton.setAttribute("class", "inGameButton");
          // useItemButton.setAttribute("class", "inGameButton");
          useItemButton.innerHTML = "Use Item";
          useItemButton.addEventListener("click", function () {
              let selectedItem = useItemDropdown.value;
              if (selectedItem) {
                  console.log(ctx);
                  ctx.events.move("useItem", selectedItem);
              }
          });

          useItemButton.style.position = "absolute";
          useItemButton.style.left = "75%";
          useItemButton.style.top = "50%";
          useItemButton.style.transform = "translate(-50%, -50%)";
          useItemButton.style.width = "200px";

          // new code
        let event = eventCell.event;

        switch (eventCell.event) {
            case 'advance':
                moveDist += eventCell.currency;
                break;
            case 'reverse':
                moveDist -= eventCell.currency;
                break;
            case 'win':
                ctx.events.endGame({ winner: ctx.currentPlayer });
                break;
        }

        G.players[ctx.currentPlayer].position += moveDist;

        document.getElementById("A_pair_of_strange_dice_lay_bef").style.visibility = "hidden";
        document.getElementById("A_pair_of_strange_dice_lay_bef").setAttribute("disabled", "True");

        document.getElementById("DiceButton").style.visibility = "hidden";
        document.getElementById("DiceButton").setAttribute("disabled", "True");

        document.getElementById("NoPath_-_Copy_8").style.visibility = "hidden";
        document.getElementById("A_pair_of_strange_dice_lay_bef").style.top = "20%";

        // show event button code

        let showProceedButton = document.createElement(`button`);
        showProceedButton.setAttribute("class", "inGameButton");
        showProceedButton.setAttribute("id", "proceedButton");
        showProceedButton.addEventListener("click", function() {
            testDiv.removeChild(useItemDropdown);
            testDiv.removeChild(useItemButton);
            getEvent(event, G, ctx, events);
        });

        showProceedButton.style.position = "absolute";
        showProceedButton.style.left = "25%";
        showProceedButton.style.top = "50%";
        showProceedButton.style.transform = "translate(-50%, -50%)";
        showProceedButton.style.width = "200px";

        showProceedButton.innerHTML = "Show Event";

        showProceedButton.display = "inline-block";
        useItemDropdown.display = "inline-block";
        useItemButton.display = "inline-block";

        // show event button code ends

        let showRollVal = document.createElement("span");
        showRollVal.setAttribute("class", "inGameText");
        showRollVal.setAttribute("id", "rollVal");
        // showRollVal.innerHTML = "Player 1 rolled " + moveDist + "!"
        showRollVal.innerHTML = "Player " + (ctx.currentPlayer + 1) + " rolled " + moveDist + " landing on the event: " + eventCell.event + " as " +
            "well as collecting " + eventCell.currency +" $$ ! Current cell space: " + G.players[ctx.currentPlayer].position + ".";

        let testDiv = document.createElement("div");
        testDiv.setAttribute("class", "tempDiv");
        testDiv.setAttribute("id", "temp");

        testDiv.appendChild(showRollVal);
        // testDiv.appendChild(eventScreenContainer);
        testDiv.appendChild(showProceedButton);
        testDiv.appendChild(useItemDropdown);
        testDiv.appendChild(useItemButton);

        document.getElementById("eventScreen").append(testDiv);

        },

        pickUpItem: ({G, ctx, events}) => {
            const itemCell = G.board[G.players[ctx.currentPlayer].position];
            const itemRef = itemCell.item;

            G.players[ctx.currentPlayer].inventory.push(itemRef);

            events.setPhase("endTurnScreen");
        },

        useItem: ({G, ctx, events}, item) => {

          console.log("use item function");

          const itemIndex = G.players[ctx.currentPlayer].inventory.indexOf(item);
          G.players[ctx.currentPlayer].inventory.splice(itemIndex, 1);

          switch (item) {
              case 'Staff of MoMoney':
                    G.players[ctx.currentPlayer].currency += 2;
                    document.getElementById("eventScreen").removeChild(document.getElementById("temp"));
                    break;
              case 'Staff of NoMoney':
                  break;
                  case 'Orb of Steal Yo Buffs':
                      break;

          }
        },

        applyBuff: ({ G, ctx }, playerId, buffType, duration) => {
            G.players[playerId].buffs.push({ type: buffType, duration: duration });
        },

        moveNoEvent: ({ G, ctx }) => {
          let moveDist = 5;
          G.players[ctx.currentPlayer].position += moveDist;
          console.log(G.players[ctx.currentPlayer].position)
          if (G.players[ctx.currentPlayer].position >= 25) {
              ctx.events.endGame({ winner: ctx.currentPlayer });
          }


        },

        // endTurn({G, ctx, events}) {
        //   events.endTurn();
        //   events.setPhase("rollScreen");
        // }

    },
    phases: {
        rollScreen: {
            start: true
        },
        eventOrItemScreen: {

        },
        itemScreen: {

        },
        eventScreen: {

        },
        correctAnswerScreen: {

        },
        wrongAnswerScreen: {

        },
        endTurnScreen: {

        },
        pickUpItemScreen: {

        }
    },
}