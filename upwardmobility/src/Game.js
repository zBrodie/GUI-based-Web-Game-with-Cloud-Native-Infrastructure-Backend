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

    document.getElementById("NoPath_-_Copy_8").style.visibility = "visible";
    document.getElementById("NoPath_-_Copy_8").removeAttribute("disabled");

    // Hide the roll result and event buttons
    document.getElementById("temp").style.display = "none";
}


// function showEndTurnButton(G, ctx) {
//     let endTurnBtn = document.createElement("button");
//     endTurnBtn.setAttribute("class", "answerButton");
//     endTurnBtn.innerHTML = "End Turn";
//     endTurnBtn.id = "endTurnBtn";
//     let btnContainer = document.createElement("btnContainer");
//     if (btnContainer != null) {
//         btnContainer.appendChild(endTurnBtn);
//     }
//     endTurnBtn.addEventListener("click", () => {
//         // clearElement("eventScreen");
//         // ctx.events.endTurn();
//         // showRollScreen({G, ctx});
//     });
// }

// function getEvent(event, G, ctx, events) {
//     switch (event) {
//         case "randomNumberGuessing":
//             console.log("switch case function randomNumberGuessing");
//
//             const eventScreen = document.getElementById("eventScreen");
//
//             hideRollScreen();
//
//             // Create container div element
//             const container = document.createElement("div");
//             container.style.display = "flex";
//             container.style.flexDirection = "column";
//             container.style.alignItems = "center";
//             container.style.height = "50%"; // reduce height
//             container.style.width = "100%";
//             container.style.bottom = "40%"; // move container to bottom
//             container.style.position = "absolute";
//
//             const btnContainer = document.createElement("div");
//             btnContainer.style.display = "flex";
//             btnContainer.style.justifyContent = "center";
//             btnContainer.style.alignItems = "center";
//             btnContainer.style.flexDirection = "row";
//             btnContainer.style.gap = "10px";
//             btnContainer.style.position = "absolute";
//             btnContainer.style.bottom = "0"; // move buttons down
//             btnContainer.style.width = "100%";
//
//             let eventText = document.createElement("span");
//             eventText.innerHTML = "A mysterious raggedy wizard appears before you and asks the question... \"What is the airspeed velocity of an unladen swallow?\"";
//             eventText.setAttribute("class", "inGameText");
//             eventText.style.width = "60%";
//
//             // let eventImg = document.createElement("img");
//             // let promptToAnswer = document.createElement("span");
//             // promptToAnswer.setAttribute("class", "questionText");
//             // promptToAnswer.innerHTML = "Choose your answer:";
//
//             // eventImg.id = "montyPython";
//             // eventImg.src = "explosion.jpeg";
//
//             let ans1 = document.createElement("button");
//             let ans2 = document.createElement("button");
//             let ans3 = document.createElement("button");
//
//             ans1.setAttribute("class", "answerButton");
//             ans2.setAttribute("class", "answerButton");
//             ans3.setAttribute("class", "answerButton");
//
//             ans1.innerHTML = "What do you mean? African or European swallow?";
//             ans2.innerHTML = "I don't know that!";
//             ans3.innerHTML = "What is an unladen swallow?";
//
//             // Append child elements to container div element
//             container.appendChild(eventText);
//             // container.appendChild(eventImg);
//             // container.appendChild(promptToAnswer);
//             btnContainer.appendChild(ans1);
//             btnContainer.appendChild(ans2);
//             btnContainer.appendChild(ans3);
//             container.appendChild(btnContainer);
//
//             // Append container div element to eventScreen
//             eventScreen.appendChild(container);
//
//             ans1.addEventListener("click", function() {
//                 let resultText = document.createElement("div");
//                 btnContainer.removeChild(ans1);
//                 btnContainer.removeChild(ans2);
//                 btnContainer.removeChild(ans3);
//                 // showEndTurnButton({ G, ctx });
//
//                 // let endTurnBtn = document.createElement("endTurnBtn");
//                 let endTurnBtn = document.getElementById("GameEndTurn");
//                 // endTurnBtn.setAttribute("class", "answerButton");
//                 btnContainer.appendChild(endTurnBtn);
//
//                 endTurnBtn.style.visibility = "visible";
//                 // endTurnBtn.removeAttribute("disabled");
//
//                 // endTurnBtn.style.display = "flex";
//                 // endTurnBtn.style.justifyContent = "center";
//                 // endTurnBtn.style.alignItems = "center";
//
//                 // endTurnBtn.innerHTML = "End Turn";
//                 eventText.innerHTML = "The wizard is dumbfound and spontaneously combusts into 100 coins which are " +
//                     "added to your wallet!";
//
//                 // endTurnBtn.addEventListener("click", ({G, ctx, events}) => {
//                 //     eventText.innerHTML = "";
//                 //     btnContainer.removeChild(endTurnBtn);
//                 //     console.log("This is events: ", events);
//                 //     // console.log("Logged event endturn function function: ", events);
//                 //     // UpwardsMobility.moves.endTurn(G, ctx, events);
//                 //     console.log("This is current Player from getEvent function", ctx.currentPlayer)
//                 //     showRollScreen();
//
//                 // });
//             });
//
//             break;
//     }
// }
export const UpwardsMobility = {
  setup: () => ({
    players: {
      0: {
        position: 0,
        items: [],
      },
      1: {
        position: 0,
        items: [],
      }
    },
    board: {
        0: { event: 'start',    currency: 0 },
        1: { event: 'advance',  currency: 2 },
        2: { event: 'advance',  currency: 2 },
        3: { event: 'reverse',  currency: -1 },
        4: { event: 'advance',  currency: 3 },
        5: { event: 'wizardEvent',  currency: 0, item: 'moMoney', },
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
      // ctx: {
      //     currentPlayer: "0",
      //     phase: 0,
      //     numPlayers: 2,
      // },
  }),
    // movesPerTurn: 1,
    turn: {
        order: TurnOrder.ONCE,
        // moveLimit: 1,
        // minMoves: 1,
        // maxMoves: 1,
    },

    // Define the moves for rolling the dice and updating the game state.
    moves: {
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
        console.log(ctx.currentPlayer)

        let currPlayerNum = parseInt(ctx.currentPlayer + 1)
        let tokenID = "player" + currPlayerNum + "Token"
          console.log(tokenID)
          const element = document.getElementById(tokenID); // Replace "yourElementId" with the ID of your element
          const calcStyle = getComputedStyle(element)
          const currentTop = parseFloat(calcStyle.top); // Get the current value of the "top" property and convert it to a floating-point number
          const newTop = currentTop - currentTop * 0.05; // Calculate 10% less than the current value
          document.getElementById(tokenID).style.top = `${newTop}px`

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

        let showProceedButton = document.createElement(`button`);
        showProceedButton.setAttribute("class", "inGameButton");
        showProceedButton.setAttribute("id", "proceedButton");
        showProceedButton.addEventListener("click", function() {
            getEvent(event, G, ctx, events);
        });
        showProceedButton.innerHTML = "Show Event";

        // let showPassEventButton = document.createElement(`button`);
        // showProceedButton.setAttribute("class", "inGameButton");
        // showProceedButton.setAttribute("id", "proceedButton");
        // showProceedButton.addEventListener("click", function() {
        //     // ctx.events.endTurn();
        //     // ctx.events.endPhase();
        // });
        // showProceedButton.innerHTML = "Pass Event";

        let showRollVal = document.createElement("span");
        showRollVal.setAttribute("class", "inGameText");
        showRollVal.setAttribute("id", "rollVal");
        // showRollVal.innerHTML = "Player 1 rolled " + moveDist + "!"
        showRollVal.innerHTML = "Player " + (ctx.currentPlayer) + " rolled " + moveDist +
            " with an added currency count of " + eventCell.currency + " from event cell: " + eventCell.event
            + "resulting in a total move space of: " + (moveDist + eventCell.currency) + " !";

        let testDiv = document.createElement("div");
        testDiv.setAttribute("class", "tempDiv");
        testDiv.setAttribute("id", "temp");

        testDiv.appendChild(showRollVal);
        testDiv.appendChild(showProceedButton);
        // testDiv.appendChild(showPassEventButton);
        document.getElementById("eventScreen").append(testDiv);

        showProceedButton.style.position = "absolute";
        showProceedButton.style.left = "50%";
        showProceedButton.style.top = "50%";
        showProceedButton.style.transform = "translate(-50%, -50%)";
        showProceedButton.style.width = "200px";

        // if (turnFlag == true) {
        //     console.log("hello from turn flag")
        //     events.endTurn();
        // }

        // showPassEventButton.style.position = "absolute";
        // showPassEventButton.style.left = "50%";
        // showPassEventButton.style.top = "50%";
        // showPassEventButton.style.transform = "translate(-50%, -50%)";
        // showPassEventButton.style.width = "200px";

          // events.endTurn();

        },

        endTurn({G, ctx, events}) {
            events.endTurn();
        }

    },
}