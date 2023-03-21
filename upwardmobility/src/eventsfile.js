import { hideRollScreen, showRollScreen} from "./Game";
export function getEvent(event, G, ctx, events) {
    let eventScreen = document.getElementById("eventScreen");
    let container = document.createElement("div");
    let btnContainer = document.createElement("div");
    let eventText;
    switch (event) {
        case "wizardEvent":
            console.log("switch case function wizardEvent");

            eventScreen = document.getElementById("eventScreen");

            hideRollScreen();

            // Create container div element
            container = document.createElement("div");
            container.style.display = "flex";
            container.style.flexDirection = "column";
            container.style.alignItems = "center";
            container.style.height = "50%"; // reduce height
            container.style.width = "100%";
            container.style.bottom = "40%"; // move container to bottom
            container.style.position = "absolute";

            btnContainer = document.createElement("div");
            btnContainer.style.display = "flex";
            btnContainer.style.justifyContent = "center";
            btnContainer.style.alignItems = "center";
            btnContainer.style.flexDirection = "row";
            btnContainer.style.gap = "10px";
            btnContainer.style.position = "absolute";
            btnContainer.style.bottom = "0"; // move buttons down
            btnContainer.style.width = "100%";

            eventText = document.createElement("span");
            eventText.innerHTML = "A mysterious raggedy wizard appears before you and asks the question... \"What is the airspeed velocity of an unladen swallow?\"";
            eventText.setAttribute("class", "inGameText");
            eventText.style.width = "60%";

            // let eventImg = document.createElement("img");
            // let promptToAnswer = document.createElement("span");
            // promptToAnswer.setAttribute("class", "questionText");
            // promptToAnswer.innerHTML = "Choose your answer:";

            // eventImg.id = "montyPython";
            // eventImg.src = "explosion.jpeg";

            let ans1 = document.createElement("button");
            let ans2 = document.createElement("button");
            let ans3 = document.createElement("button");

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
                btnContainer.removeChild(ans1);
                btnContainer.removeChild(ans2);
                btnContainer.removeChild(ans3);

                let endTurnBtn = document.getElementById("GameEndTurn");
                btnContainer.appendChild(endTurnBtn);

                endTurnBtn.style.visibility = "visible";

                eventText.innerHTML = "The wizard is dumbfound and spontaneously combusts into 100 coins which are " +
                    "added to your wallet!";



            });
            break;
            case "testEventGeezer":
                console.log("switch case function dragonEvent");

                 eventScreen = document.getElementById("eventScreen");

                 hideRollScreen();

                container = document.createElement("div");
                container.style.display = "flex";
                container.style.flexDirection = "column";
                container.style.alignItems = "center";
                container.style.height = "50%"; // reduce height
                container.style.width = "100%";
                container.style.bottom = "40%"; // move container to bottom
                container.style.position = "absolute";

                btnContainer = document.createElement("div");
                btnContainer.style.display = "flex";
                btnContainer.style.justifyContent = "center";
                btnContainer.style.alignItems = "center";
                btnContainer.style.flexDirection = "row";
                btnContainer.style.gap = "10px";
                btnContainer.style.position = "absolute";
                btnContainer.style.bottom = "0"; // move buttons down
                btnContainer.style.width = "100%";

                eventText = document.createElement("span");
                eventText.innerHTML = "Day in the life of a true Techxit geezer.";
                eventText.setAttribute("class", "inGameText");
                eventText.style.width = "60%";

                let next = document.createElement("button");
                next.setAttribute("class", "answerButton");

                next.innerHTML = "next";

                container.appendChild(eventText);
                btnContainer.appendChild(next);
                container.appendChild(btnContainer);
                eventScreen.appendChild(container);

                next.addEventListener("click", function() {
                    eventText.innerHTML = "Wake up and meet the wife Suzan.";
                    next.addEventListener("click", function() {
                        eventText.innerHTML = "My little princess, isn't she beautiful?";
                        next.addEventListener("click", function() {
                            eventText.innerHTML = "Time to take George to football.";
                            next.addEventListener("click", function() {
                                eventText.innerHTML = "Rev up the Bugatti!";
                                next.innerHTML = "whey!";
                                next.addEventListener("click", function() {
                                    eventText.innerHTML = "Quick stop at Toby's and load up that plate.";
                                    next.innerHTML = "next";
                                    next.addEventListener("click", function() {
                                        eventText.innerHTML = "Get a pint.";
                                        next.addEventListener("click", function(){
                                            eventText.innerHTML = "Pitch lookin' lovely today lads.";
                                            next.addEventListener("click", function() {
                                                eventText.innerHTML = "Just a bit of banter.";
                                                next.addEventListener("click", function() {
                                                    eventText.innherHTML = "Chippy makes a 38-nil loss better.";
                                                    next.addEventListener("click", function() {
                                                        eventText.innerHTML = "Pop down local pride.";
                                                        next.addEventListener("click", function() {
                                                            eventText.innerHTML = "Good ol' pie look at that!";
                                                            next.addEventListener("click", function() {
                                                                eventText.innerHTML = "Susan made dinner!";
                                                                next.innerHTML = "lovely!";
                                                                next.addEventListener("click", function() {
                                                                    eventText.innerHTML = "Pop down have a couple pints with the lads,";
                                                                    next.innerHTML = "next";
                                                                    next.addEventListener("click", function() {
                                                                        let endTurnBtn = document.getElementById("GameEndTurn");
                                                                        btnContainer.removeChild(next);
                                                                        btnContainer.appendChild(endTurnBtn);

                                                                        endTurnBtn.style.visibility = "visible";
                                                                        eventText.innerHTML = "And finish up in the fortress of dreams.";

                                                                    })
                                                                })
                                                            })
                                                        })
                                                    })
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        });
                    });

                });




                break;
    }
}