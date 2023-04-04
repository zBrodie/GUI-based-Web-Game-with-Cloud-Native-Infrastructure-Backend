import React, {Component, useEffect, useState} from 'react'
import { Dropdown } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


import dice from './GameDieBigpng.png'
import playerList from './PlayerListBackground.png'
import gamelogo from './Upward_Mobility_big.png'
import { moveDist } from "./Game";
import { eventsArray} from "./eventsfile";

// console.log("Events array: " + eventsArray)

export function UpwardMobilityBoard ({ctx, G, moves, events, eventsArray}){
    let alreadyGen = false;
    useEffect(() => {
        // console.log("testing useEffect")
    }, );


    useEffect(() => {
        if(alreadyGen === false){
            for(let i = 0; i< 2; i++){
                if(G.players[i] !== undefined){
                    let playerToken = document.createElement("div")
                    playerToken.setAttribute("id", "playerToken" + i);
                    playerToken.setAttribute("class", "playerToken")
                    playerToken.style.top = "93%"
                    if(i ==0)
                        playerToken.style.backgroundColor = "rgba(234,0,217,1)"
                    if(i ==1)
                        playerToken.style.backgroundColor = "rgba(115,248,255,1)"
                    if(i == 2)
                        playerToken.style.backgroundColor = "rgba(0,201,60,1)"
                    if(i == 3)
                        playerToken.style.backgroundColor = "rgba(196,0,0,1)"
                    if(i == 4)
                        playerToken.style.backgroundColor = "rgba(105,0,225,1)"
                    if(i == 5)
                        playerToken.style.backgroundColor = "rgba(0,61,204,1)"

                    document.getElementById("progressionDiv").append(playerToken)
                }
            }
            alreadyGen = true;
        }
    })


    const { moveDist } = G;

    const [selectedItem, setSelectedItem] = useState(null);

    let eventScreenContents = "";
    let inventoryScreenContents = "";

    switch (ctx.phase) {
        case "rollScreen":
            eventScreenContents = (
                <div>
                    <button onClick = {() => moves.rollDice()}  className="DiceButton" id="DiceButton"></button>
                    <img  onClick = {() => moves.rollDice()} className="DiceImage" id="NoPath_-_Copy_8" src="NoPath_-_Copy_8.png" srcSet="NoPath_-_Copy_8.png 1x, NoPath_-_Copy_8@2x.png 2x"/>
                    <div id="A_pair_of_strange_dice_lay_bef">
                        A pair of strange dice lay before you...
                    </div>
                </div>
            )
            if (G.players[ctx.currentPlayer].position === 25) {
                events.setPhase("winningGameScreen");
                G.winningPlayer = ctx.currentPlayer;
            }
            break;
        case "eventOrItemScreen":
            eventScreenContents = (
                <div>
                    <span id="rollVal" className="inGameText"> Player {ctx.currentPlayer + 1} with job title rolls a {moveDist} landing on cell {G.players[ctx.currentPlayer].position}</span>
                    <button onClick={() => events.setPhase("eventScreen")} className="inGameButton" id="showEventButton">Show Event</button>
                    <button onClick={() => events.setPhase("useItemScreen")} className="inGameButton" id="use-item-button">Use Item</button>
                </div>
            )
            break;
        case "eventScreen":
            // console.log("This is current event state description: " + currentEvent.description)
            // let randInt = Math.floor(Math.random() * eventsArray.length);
            // let currentEvent = eventsArray[randInt];

            eventScreenContents = (
                <div>
                    <div>
                        <span className="inGameText">{G.currentEvent.description}</span>
                        <img className="EventImage" id="EventImage" src={G.currentEvent.image} />
                    </div>
                    <div className="event-button-container">
                        {G.currentEvent.options && G.currentEvent.options.map((option, index) => (
                            <button key={index} onClick={() => {
                                if (index === G.currentEvent.correctAnswer) {
                                    // moves.addCurrency(2);
                                    events.setPhase("pickUpItemScreen");
                                    // {console.log("Current event: " + G.currentEvent)}
                                } else {
                                    // moves.moveBackward(3);
                                    events.setPhase("wrongAnswerScreen");
                                }
                            }} className="answerButton">{option}</button>
                        ))}
                    </div>
                </div>
            )
            break;

        case "useItemScreen":
            eventScreenContents = (
                <div>
                    <span className="inGameText">This is the use item screen</span>
                    <div className="dropdown-container">
                        <Dropdown onSelect={(key) => setSelectedItem(G.players[ctx.currentPlayer].inventory[key])}>
                            <Dropdown.Toggle variant="success">
                                {selectedItem ? selectedItem.name : "Select Item"}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                {G.players[ctx.currentPlayer].inventory && G.players[ctx.currentPlayer].inventory.map((item, index) => (
                                    <Dropdown.Item key={index} eventKey={index}>
                                        {item.name}
                                    </Dropdown.Item>
                                ))}
                            </Dropdown.Menu>
                        </Dropdown>

                    </div>
                    <button
                        className="inGameButton" id="use-item-button-fromscreen"
                        onClick={() => {
                            if (selectedItem) {
                                moves.useItem(selectedItem.name);
                                console.log("Selected item: " + selectedItem.name)
                            }
                            events.setPhase("itemEffectResultScreen");
                        }}>Use Item
                    </button>

                    <button className="inGameButton" id="cancel-item-button"
                            onClick={() => events.setPhase("eventOrItemScreen")}>
                        Cancel
                    </button>
                </div>
            )
            break;

        case "itemEffectResultScreen":
            eventScreenContents = (
                <div>
                    <span className="inGameText">{selectedItem.onUse}</span>
                    <div className="event-button-container">
                        <button onClick={() => events.setPhase("eventScreen")} className="answerButton">Proceed</button>
                    </div>
                </div>
            );
            break;

        case "correctAnswerScreen":
            eventScreenContents = (
                <div>
                    <span className="inGameText">Correct Answer Screen{G.currentEvent.onCorrect}</span>
                    <div className="event-button-container">
                        <button onClick={() => events.setPhase("pickUpItemScreen")} className="answerButton">Pick Up Item</button>
                    </div>
                </div>
            )
            break;

        case "pickUpItemScreen":
            // console.log("Current event from pick up item screen: " + G.currentEvent.onCorrect);

            eventScreenContents = (
                <div>
                    <span className="inGameText">{G.currentEvent.eventReward.description}</span>
                    <div className="event-button-container">
                        <button onClick={() => { events.setPhase("endTurnScreen"); moves.pickUpItem(G.currentEvent.eventReward.name) }} className="answerButton">Proceed</button>
                    </div>
                </div>
            )
            inventoryScreenContents = (
                <div id="inventory-item-container" className="inventory-item-container">
                    <img className="InventoryImage" id="inventoryItem" src={G.currentEvent.eventReward.item.image}/>
                    {G.currentEvent.eventReward.image}
                </div>
            )
            break;

        case "wrongAnswerScreen":
            eventScreenContents = (
                <div>
                    <span className="inGameText">{G.currentEvent.onIncorrect}</span>
                    <div className="event-button-container">
                        <button onClick={() => events.setPhase("endTurnScreen")} className="answerButton">End Turn</button>
                    </div>
                </div>
            )
            break;

        case "winningGameScreen":
            eventScreenContents = (
                <div>
                    <span className="winningGameText">Player {ctx.currentPlayer} has won the game.</span>
                </div>
            )
            break;
        case "endTurnScreen":
            eventScreenContents = (
                <div>
                    <span className="inGameText">Your turn is over!</span>
                    <div className="event-button-container">
                        <button onClick={() => { events.endTurn(); events.setPhase("rollScreen"); }} className="answerButton">End Turn</button>

                    </div>

                </div>
            )
            break;
    }

    return(
        <div className="GamePage">
            <div className="Rectangle_42" id = "eventScreen">
                {eventScreenContents}
            </div>

            <div className="GameProgression" id = "progressionDiv">
                <rect id="GameProgressionMenu" rx="0" ry="0" x="0" y="0">
                </rect>
            </div>

            <img id="ProgresionImage" src="src/Templates/assets/StartFinishScale.png" srcSet="NoPath_-_Copy_6.png 1x, NoPath_-_Copy_6@2x.png 2x"/>


            {/*Player List*/}
            <svg className="GamePlayerBackground">
            </svg>
            <img id="NoPath_-_Copy_10" src="NoPath_-_Copy_10.png" srcSet="NoPath_-_Copy_10.png 1x, NoPath_-_Copy_10@2x.png 2x"/>

            <svg className="GamePlayer_1">
                <ellipse id="GamePlayer_1" rx="53" ry="53" cx="53" cy="53">
                </ellipse>
            </svg>
            <svg className="GamePlayer_2">
                <ellipse id="GamePlayer_2" rx="53" ry="53" cx="53" cy="53">
                </ellipse>
            </svg>
            <svg className="GamePlayer_3">
                <ellipse id="GamePlayer_3" rx="53" ry="53" cx="53" cy="53">
                </ellipse>
            </svg>
            <svg className="GamePlayer_4">
                <ellipse id="GamePlayer_4" rx="53" ry="53" cx="53" cy="53">
                </ellipse>
            </svg>
            <svg className="GamePlayer_5">
                <ellipse id="GamePlayer_5" rx="53" ry="53" cx="53" cy="53">
                </ellipse>
            </svg>
            <svg className="GamePlayer_6">
                <ellipse id="GamePlayer_6" rx="53" ry="53" cx="53" cy="53">
                </ellipse>
            </svg>
            {/*Player List*/}


            {/*Inventory List*/}
            <div className="Inventory">
                <rect id="Inventory" rx="0" ry="0" x="0" y="0">
                </rect>
                {inventoryScreenContents}
            </div>
            <svg className="InventoryLabel">
                <rect id="InventoryLabel" rx="0" ry="0" x="0" y="0">
                </rect>
            </svg>

            <div id="Inventory_Label_Word">
                Inventory
            </div>

            {/*Inventory List*/}


            {/*Chat List*/}
            <div className="ChatAndLogo">
                <rect id="ChatAndLogo" rx="0" ry="0" x="0" y="0"></rect>
                <div id="chatSection"></div>
            </div>
            <input className="chatBox" type="text" placeholder="Type here to chat" id="chatBox" rx="7" ry="7" x="0" y="0" />

            <div id="Type_here_to_chat">
                <span>Type here to chat...</span>
            </div>
            {/*Chat List*/}


            {/*Player Stat List*/}
            <svg className="PlayerStatsBackground">
                <rect id="PlayerStatsBackground" rx="0" ry="0" x="0" y="0">
                </rect>

            </svg>
            <div className="PlayerName" id="PlayerName">
                TempName
            </div>
            <div className="PlayerJobTitle" id="PlayerJobTitle">
                TempJobTitle
            </div>
            <img className="PlayerBuffsIcon" id="PlayerBuffsIcon" src="BuffIcon.png" srcSet="BuffIcon.png 1x, BuffIcon.png.png 2x"/>
            <img className="PlayerDebuffsIcon" id="PlayerDebuffsIcon" src="DebuffIcon.png" srcSet="DebuffIcon.png 1x, DebuffIcon.png.png 2x"/>
            <div className="PlayerCurrency" id="PlayerCurrency">
                $12345
            </div>
            <div className="PlayerIncome" id="PlayerIncome">
                +$2000 in 2 turns
            </div>
            {/*Player Stat List*/}
        </div>
    )
}