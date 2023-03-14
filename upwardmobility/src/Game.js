import { TurnOrder } from "boardgame.io/core";

function clearElement(elementID) {
    document.getElementById(elementID).innerHTML = "";
}

function showRollScreen() {
    console.log("showRollScreen function");

    // Show the dice and roll button
    document.getElementById("A_pair_of_strange_dice_lay_bef").style.visibility = "visible";
    document.getElementById("A_pair_of_strange_dice_lay_bef").removeAttribute("disabled");

    document.getElementById("DiceButton").style.visibility = "visible";
    document.getElementById("DiceButton").removeAttribute("disabled");

    // Hide the roll result and event buttons
    document.getElementById("temp").style.display = "none";

    }


function showEndTurnButton(parentContainer, resultText) {
    let container = document.createElement("div");
    container.style.display = "flex";
    container.style.flexDirection = "column";
    container.style.alignItems = "center";
    container.style.height = "50%"; // reduce height
    container.style.width = "100%";
    container.style.bottom = "40%"; // move container to bottom
    container.style.position = "absolute";

    // Append the result text to the container
    container.appendChild(resultText);

    let endTurnBtn = document.createElement("button");
    endTurnBtn.setAttribute("class", "answerButton");
    endTurnBtn.innerHTML = "End Turn";
    endTurnBtn.id = "endTurnBtn";
    endTurnBtn.style.position = "absolute";
    endTurnBtn.addEventListener("click", () => {
        parentContainer.innerHTML = "";
        parentContainer.style.display = "none";
        showRollScreen();
        // ctx.events.endTurn();
    });

    // Append the end turn button to the container
    container.appendChild(endTurnBtn);

    // Append the container to the parent container
    parentContainer.appendChild(container);
}


function getEvent(event) {
    switch (event) {
        case "randomNumberGuessing":
            console.log("switch case function randomNumberGuessing");

            const eventScreen = document.getElementById("eventScreen");

            hideRollScreen();

            // let endTurnBtn = document.createElement("button");
            // endTurnBtn.setAttribute("class", "answerButton");
            // endTurnBtn.innerHTML = "End Turn";
            // endTurnBtn.id = "endTurnBtn";

            // document.getElementById("endTurnBtn").style.visibility = "hidden";
            // document.getElementById("endTurnBtn").setAttribute("disabled", "True");

            // Create container div element
            const container = document.createElement("div");
            container.style.display = "flex";
            container.style.flexDirection = "column";
            container.style.alignItems = "center";
            container.style.height = "50%"; // reduce height
            container.style.width = "100%";
            container.style.bottom = "40%"; // move container to bottom
            container.style.position = "absolute";

            const btnContainer = document.createElement("div");
            btnContainer.style.display = "flex";
            btnContainer.style.justifyContent = "center";
            btnContainer.style.alignItems = "center";
            btnContainer.style.flexDirection = "row";
            btnContainer.style.gap = "10px";
            btnContainer.style.position = "absolute";
            btnContainer.style.bottom = "10%"; // move buttons down
            btnContainer.style.width = "100%";

            let eventText = document.createElement("span");
            eventText.innerHTML = "A mysterious raggedy wizard appears before you and asks the question... \"What is the airspeed velocity of an unladen swallow?\"";
            eventText.setAttribute("class", "generalText");
            eventText.style.width = "60%";

            let eventImg = document.createElement("img");
            let promptToAnswer = document.createElement("span");
            promptToAnswer.setAttribute("class", "generalText");
            promptToAnswer.innerHTML = "Choose your answer:";

            eventImg.id = "montyPython";
            eventImg.src = "explosion.jpeg";

            let ans1 = document.createElement("button");
            let ans2 = document.createElement("button");
            let ans3 = document.createElement("button");

            ans1.setAttribute("class", "answerButton");
            ans2.setAttribute("class", "answerButton");
            ans3.setAttribute("class", "answerButton");

            ans1.innerHTML = "What do you mean? African or European swallow?";
            ans1.addEventListener("click", function() {
                // Remove all child elements from eventScreen
                clearElement("eventScreen");
                const eventScreen = document.getElementById("eventScreen");
                while (eventScreen.firstChild) {
                    eventScreen.removeChild(eventScreen.firstChild);
                }
                // Show text saying "The wizard spontaneously combusts into 100 coins!"
                let resultText = document.createElement("div");
                resultText.innerHTML = "The wizard is dumbfound and spontaneously combusts into 100 coins which are " +
                    "added to your inventory!";
                resultText.style.display = "flex";
                resultText.style.flexDirection = "column";
                resultText.style.alignItems = "center";
                resultText.style.height = "50%"; // reduce height
                resultText.style.width = "100%";
                resultText.style.bottom = "40%"; // move container to bottom
                resultText.style.position = "absolute";
                resultText.setAttribute("class", "generalText");


                // resultText.style.position = "absolute";
                eventScreen.appendChild(resultText);
                // eventScreen.appendChild(endTurnBtn);
                // showEndTurnButton(eventScreen);
                showEndTurnButton(eventScreen, resultText);



            });

            ans2.innerHTML = "I don't know that!";
            ans3.innerHTML = "What is an unladen swallow?";

            // Append child elements to container div element
            container.appendChild(eventText);
            container.appendChild(eventImg);
            container.appendChild(promptToAnswer);
            btnContainer.appendChild(ans1);
            btnContainer.appendChild(ans2);
            btnContainer.appendChild(ans3);
            container.appendChild(btnContainer);

            // Append container div element to eventScreen
            eventScreen.appendChild(container);

            break;
    }
}


function hideRollScreen() {
    console.log("hideRollScreen function");
    document.getElementById("rollVal").style.visibility = "hidden";
    document.getElementById("rollVal").setAttribute("disabled", "True");

    document.getElementById("proceedButton").style.visibility = "hidden";
    document.getElementById("proceedButton").setAttribute("disabled", "True");
}

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
        0: { event: 'start',    steps: 0 },
        1: { event: 'advance',  steps: 2 },
        2: { event: 'advance',  steps: 2 },
        3: { event: 'reverse',  steps: -1 },
        4: { event: 'advance',  steps: 3 },
        5: { event: 'randomNumberGuessing',  steps: 0 },
        6: { event: 'advance',  steps: 1 },
        7: { event: 'none',     steps: 0 },
        8: { event: 'none',     steps: 0 },
        9: { event: 'reverse',  steps: -2 },
        10: { event: 'none',    steps: 0 },
        11: { event: 'none',    steps: 0 },
        12: { event: 'advance', steps: 2 },
        13: { event: 'advance', steps: 2 },
        14: { event: 'reverse', steps: -1 },
        15: { event: 'advance', steps: 3 },
        16: { event: 'advance', steps: -2 },
        17: { event: 'advance', steps: 1 },
        18: { event: 'advance', steps: 2 },
        19: { event: 'none',    steps: 0 },
        20: { event: 'reverse', steps: -2 },
        21: { event: 'advance', steps: 2 },
        22: { event: 'reverse', steps: -2 },
        23: { event: 'reverse', steps: -2 },
        24: { event: 'win', steps: 0 },
    },
  }),
    turn: {
        order: TurnOrder.DEFAULT,
    },

    // Define the moves for rolling the dice and updating the game state.
    moves: {
      tempRoll: ({G,ctx}) => {
        const die1 = Math.floor(Math.random() * 6) + 1;
        const die2 = Math.floor(Math.random() * 6) + 1;
        // let moveDist = die1 + die2;
        // G.players[ctx.currentPlayer].position += moveDist;
        let moveDist = 5;
        if (G.players[ctx.currentPlayer].position >= 25) {
            ctx.events.endGame({ winner: ctx.currentPlayer });
        }
        const eventCell = G.board[G.players[ctx.currentPlayer].position + moveDist];

        let event = eventCell.event;

        switch (eventCell.event) {
            case 'advance':
                moveDist += eventCell.steps;
                break;
            case 'reverse':
                moveDist -= eventCell.steps;
                break;
            // case 'randomNumberGuessing':
            //     console.log("randomNumberGuessing");
            //     hideRollScreen();
            //     break;
            case 'win':
                ctx.events.endGame({ winner: ctx.currentPlayer });
                break;
        }

        G.players[ctx.currentPlayer].position += moveDist;

        // Show all values of current player in console

        console.log("This is board length: " + Object.keys(G.board).length);
        console.log("This is move distance: " + moveDist);
        console.log("This is eventCell.event value: " + eventCell.event);
        console.log("This is eventCell.steps value: " + eventCell.steps);
        console.log("This is current player: " + ctx.currentPlayer);
        console.log("This is current player position: " + G.players[ctx.currentPlayer].position);

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
            getEvent(event);
        });
        showProceedButton.innerHTML = "Show Event";

        let showRollVal = document.createElement("span");
        showRollVal.setAttribute("class", "inGameText");
        showRollVal.setAttribute("id", "rollVal");
        // showRollVal.innerHTML = "Player 1 rolled " + moveDist + "!"
        showRollVal.innerHTML = "Player " + (ctx.currentPlayer) + " rolled " + moveDist + " with an added value of " + eventCell.steps + " from event cell: " + eventCell.event + "resulting in a total move space of: " + (moveDist + eventCell.steps) + " !";

        let testDiv = document.createElement("div");
        testDiv.setAttribute("class", "tempDiv");
        testDiv.setAttribute("id", "temp");

        testDiv.appendChild(showRollVal);
        testDiv.appendChild(showProceedButton);
        // testDiv.appendChild(showPassButton);
        document.getElementById("eventScreen").append(testDiv);

        showProceedButton.style.position = "absolute";
        showProceedButton.style.left = "50%";
        showProceedButton.style.top = "50%";
        showProceedButton.style.transform = "translate(-50%, -50%)";
        showProceedButton.style.width = "200px";

      },
        endTurn: ({ G, ctx }) => {
            ctx.events.endTurn();
        },


    },
}



