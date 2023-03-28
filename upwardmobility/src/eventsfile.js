import { hideRollScreen, showRollScreen} from "./Game";
export function getEvent(event, G, ctx, events) {

    let eventScreen = document.getElementById("eventScreen");
    const container = document.createElement("div");
    const btnContainer = document.createElement("div");
    let eventText = document.createElement("span");
    let ans1 = document.createElement("button");
    let ans2 = document.createElement("button");
    let ans3 = document.createElement("button");
    switch (event) {
        case "wizardEvent":
            console.log("switch case function wizardEvent");

            hideRollScreen();

            // Create container div element
            //const container = document.createElement("div");
            container.setAttribute("class", "eventContainer");
            container.style.display = "flex";
            container.style.flexDirection = "column";
            container.style.alignItems = "center";
            container.style.height = "50%"; // reduce height
            container.style.width = "100%";
            container.style.bottom = "40%"; // move container to bottom
            container.style.position = "absolute";

            //const btnContainer = document.createElement("div");
            btnContainer.setAttribute("class", "eventButtonContainer");
            btnContainer.style.display = "flex";
            btnContainer.style.justifyContent = "center";
            btnContainer.style.alignItems = "center";
            btnContainer.style.flexDirection = "row";
            btnContainer.style.gap = "10px";
            btnContainer.style.position = "absolute";
            btnContainer.style.bottom = "0"; // move buttons down
            btnContainer.style.width = "100%";

            //let eventText = document.createElement("span");
            eventText.innerHTML = "A mysterious raggedy wizard appears before you and asks the question... \"What is the airspeed velocity of an unladen swallow?\"";
            eventText.setAttribute("class", "inGameText");
            eventText.style.width = "60%";

            // let eventImg = document.createElement("img");
            // let promptToAnswer = document.createElement("span");
            // promptToAnswer.setAttribute("class", "questionText");
            // promptToAnswer.innerHTML = "Choose your answer:";

            // eventImg.id = "montyPython";
            // eventImg.src = "explosion.jpeg";

            //let ans1 = document.createElement("button");
            //let ans2 = document.createElement("button");
           // let ans3 = document.createElement("button");

            ans1.setAttribute("class", "answerButton");
            ans2.setAttribute("class", "answerButton");
            ans3.setAttribute("class", "answerButton");

            ans1.innerHTML = "What do you mean? African or European swallow?";
            ans2.innerHTML = "I don't know that!";
            ans3.innerHTML = "What is an unladen swallow?";

            // Append child elements to container div element
            container.appendChild(eventText);
            btnContainer.appendChild(ans1);
            btnContainer.appendChild(ans2);
            btnContainer.appendChild(ans3);
            container.appendChild(btnContainer);

            // Append container div element to eventScreen
            eventScreen.appendChild(container);

            ans1.addEventListener("click", function() {
                let resultText = document.createElement("div");
                let pickUpItem = document.getElementById("GamePickUpItem");
                btnContainer.removeChild(ans1);
                btnContainer.removeChild(ans2);
                btnContainer.removeChild(ans3);

                // let endTurnBtn = document.getElementById("GameEndTurn");
                // btnContainer.appendChild(endTurnBtn);

                // endTurnBtn.style.visibility = "visible";

                pickUpItem.style.visibility = "visible";
                btnContainer.appendChild(pickUpItem);

                eventText.innerHTML = "The wizard is dumbfound and spontaneously combusts into 2 coins which are " +
                    "added to your wallet! He also drops his \"Staff of MoMoney\"!";

                pickUpItem.addEventListener("click", function() {

                    pickUpItem.style.visibility = "hidden";

                    eventText.innerHTML = "You pick up the \"Staff of NoMoney\" and feel a surge of power and greed!";

                    btnContainer.removeChild(pickUpItem);
                    let endTurnBtn = document.getElementById("GameEndTurn");
                    btnContainer.appendChild(endTurnBtn);

                    endTurnBtn.style.visibility = "visible";

                });
            });
            break;

        case "EventTemplateMC":
            console.log("Load EVent template");

            hideRollScreen();

            // Create container div element
            //const container = document.createElement("div");
            container.setAttribute("class", "eventContainer");
            container.style.display = "flex";
            container.style.flexDirection = "column";
            container.style.alignItems = "center";
            container.style.height = "50%"; // reduce height
            container.style.width = "100%";
            container.style.bottom = "40%"; // move container to bottom
            container.style.position = "absolute";

            //const btnContainer = document.createElement("div");
            btnContainer.setAttribute("class", "eventButtonContainer");
            btnContainer.style.display = "flex";
            btnContainer.style.justifyContent = "center";
            btnContainer.style.alignItems = "center";
            btnContainer.style.flexDirection = "row";
            btnContainer.style.gap = "10px";
            btnContainer.style.position = "absolute";
            btnContainer.style.bottom = "0"; // move buttons down
            btnContainer.style.width = "100%";

            //let eventText = document.createElement("span");
            eventText.innerHTML = "Event Text Goes here";
            eventText.setAttribute("class", "inGameText");
            eventText.style.width = "60%";

            // let eventImg = document.createElement("img");
            // let promptToAnswer = document.createElement("span");
            // promptToAnswer.setAttribute("class", "questionText");
            // promptToAnswer.innerHTML = "Choose your answer:";

            // eventImg.id = "montyPython";
            // eventImg.src = "explosion.jpeg";

           // let ans1 = document.createElement("button");
           // let ans2 = document.createElement("button");
           // let ans3 = document.createElement("button");

            ans1.setAttribute("class", "answerButton");  //button to progress event
            ans2.setAttribute("class", "answerButton");  //optional additional buttons
            ans3.setAttribute("class", "answerButton");

            ans1.innerHTML = "Text in button 1";
            ans2.innerHTML = "Text in button 2";
            ans3.innerHTML = "Text in button 3";

            // Append child elements to container div element
            container.appendChild(eventText);
            btnContainer.appendChild(ans1);
            btnContainer.appendChild(ans2);
            btnContainer.appendChild(ans3);
            container.appendChild(btnContainer);

            // Append container div element to eventScreen
            eventScreen.appendChild(container);

            ans1.addEventListener("click", function() {    //below here is everything that happens after first button press
                let resultText = document.createElement("div");
                let pickUpItem = document.getElementById("GamePickUpItem");
                btnContainer.removeChild(ans1);
                btnContainer.removeChild(ans2);
                btnContainer.removeChild(ans3);

                // let endTurnBtn = document.getElementById("GameEndTurn");
                // btnContainer.appendChild(endTurnBtn);

                // endTurnBtn.style.visibility = "visible";

                pickUpItem.style.visibility = "visible";
                btnContainer.appendChild(pickUpItem);

                eventText.innerHTML = "Followup event text";

                pickUpItem.addEventListener("click", function() {  //below here is everything that happens after the button press

                    //pickUpItem.style.visibility = "hidden";  // optional item adder
                    eventText.innerHTML = "additional follow up text";

                    btnContainer.removeChild(pickUpItem);
                    let endTurnBtn = document.getElementById("GameEndTurn");
                    btnContainer.appendChild(endTurnBtn);

                    endTurnBtn.style.visibility = "visible";

                });
            });
            break;
            case "dragonEvent":
                console.log("switch case function dragonEvent");


                eventScreen = document.getElementById("eventScreen");
                break;
    }
}