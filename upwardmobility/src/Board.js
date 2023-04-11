import React, {Component, useEffect, useState} from 'react'
import { Dropdown } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Popup from 'reactjs-popup';

import dice from './GameDieBigpng.png'
import playerList from './PlayerListBackground.png'
import gamelogo from './Upward_Mobility_big.png'
import { moveDist } from "./Game";
import { eventsArray} from "./eventsfile";

// console.log("Events array: " + eventsArray)

export function UpwardMobilityBoard ({ctx, G, moves, events, eventsArray}){

    const [disPlayerName, setPlayerName] = useState("")
    const [disPlayerJob, setPlayerJob] = useState("")
    const [disPlayerCur, setPlayerCur] = useState("")

    const [disPlay1Name, setPlay1Name] = useState("")
    const [disPlay2Name, setPlay2Name] = useState("")
    const [disPlay3Name, setPlay3Name] = useState("")
    const [disPlay4Name, setPlay4Name] = useState("")
    const [disPlay5Name, setPlay5Name] = useState("")
    const [disPlay6Name, setPlay6Name] = useState("")

    const [disPlay1Job, setPlay1Job] = useState("")
    const [disPlay2Job, setPlay2Job] = useState("")
    const [disPlay3Job, setPlay3Job] = useState("")
    const [disPlay4Job, setPlay4Job] = useState("")
    const [disPlay5Job, setPlay5Job] = useState("")
    const [disPlay6Job, setPlay6Job] = useState("")

    useEffect(() =>{
        setPlayerName("Player 1")
        setPlayerJob("Job: " + G.players[0].jobTitle)
        setPlayerCur("$" + G.players[0].currency)
    })

    useEffect(()=>{
      if(G.players[0] !== undefined){
          setPlay1Name("Player 1")
          setPlay1Job(G.players[0].jobTitle)
      }
      if(G.players[1] !== undefined){
          setPlay2Name("Player 2")
          setPlay2Job(G.players[1].jobTitle)
      }
      if(G.players[2] !== undefined){
          setPlay3Name("Player 3")
          setPlay3Job(G.players[2].jobTitle)
      }
        if(G.players[3] !== undefined){
            setPlay4Name("Player 4")
            setPlay4Job(G.players[3].jobTitle)
        }
        if(G.players[4] !== undefined){
            setPlay5Name("Player 5")
            setPlay5Job(G.players[4].jobTitle)
        }
        if(G.players[5] !== undefined){
            setPlay6Name("Player 6")
            setPlay6Job(G.players[5].jobTitle)
        }
    })


    let alreadyGen = false;

    useEffect(() => {
        // console.log("testing useEffect")
    }, );

    if (G.players[ctx.currentPlayer].position >= 50) {
        // events.setPhase("winningGameScreen");
        console.log("if case for winningGameScreen")
        ctx.phase = "winningGameScreen"
    }

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

    const handleAnswerSelect = (answerIndex) => {
        moves.selectAnswer(answerIndex);
    };

    const { moveDist } = G;

    const [selectedItem, setSelectedItem] = useState(null);

    let eventScreenContents = "";

    let inventoryScreenContents = (
        <div>
            <div className="inventory-item-container">
                {G.players[ctx.currentPlayer].inventory && G.players[ctx.currentPlayer].inventory.map((item, index) => (
                    <img key={index} className="InventoryImage" id={`inventoryItem-${index}`} src={item.image}/>
                ))}
            </div>
        </div>
    )

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
            // if (G.players[ctx.currentPlayer].position === 25) {
            //     events.setPhase("winningGameScreen");
            //     G.winningPlayer = ctx.currentPlayer;
            // }
            break;
        case "eventOrItemScreen":
            eventScreenContents = (
                <div>
                    <span id="rollVal" className="inGameText"> Player {ctx.currentPlayer + 1} with job title: {G.players[ctx.currentPlayer].jobTitle} rolls a {moveDist} landing on cell {G.players[ctx.currentPlayer].position}</span>
                    <button onClick={() => events.setPhase("eventScreen")} className="inGameButton" id="showEventButton">Show Event</button>
                    <button onClick={() => events.setPhase("useItemScreen")} className="inGameButton" id="use-item-button">Use Item</button>
                </div>
            )
            break;
        case "eventScreen":
            eventScreenContents = (
                <div>
                    <div>
                        <span className="inGameText">{G.currentEvent.description}</span>
                        <img className="EventImage" id="EventImage" src={G.currentEvent.image} />
                    </div>
                    <div className="event-button-container">
                        {G.currentEvent.options && G.currentEvent.options.map((option, index) => (
                            <button key={index} onClick={() => {
                                moves.selectAnswer(index);
                                console.log("This is index: ", index)
                                console.log("This is event response: ", G.currentEvent.results[index].effect)
                                moves.eventResponse(G.currentEvent.results[index].effect);
                                moves.pickUpItem(G.currentEvent.results[index].item);
                                events.setPhase("eventResponseScreen");

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

        // case "correctAnswerScreen":
        //     eventScreenContents = (
        //         <div>
        //             <span className="inGameText">Correct Answer Screen{G.currentEvent.onCorrect}</span>
        //             <div className="event-button-container">
        //                 <button onClick={() => events.setPhase("pickUpItemScreen")} className="answerButton">Pick Up Item</button>
        //             </div>
        //         </div>
        //     )
        //     break;

        // case "pickUpItemScreen":
        //     console.log("Current event from pick up item screen: " + G.currentEvent.eventReward)
        //
        //     eventScreenContents = (
        //         <div>
        //             <span className="inGameText">{G.currentEvent.eventReward.description}</span>
        //             <div className="event-button-container">
        //                 <button onClick={() => { events.setPhase("endTurnScreen"); moves.pickUpItem(G.currentEvent.eventReward) }} className="answerButton">Proceed</button>
        //             </div>
        //         </div>
        //     )
        //     break;

        // case "wrongAnswerScreen":
        //     const incorrectIndex = G.players[ctx.currentPlayer].selectedOption;
        //     console.log("This is index of users incorrect answer: "+ incorrectIndex)
        //     const resultAnswer = G.currentEvent.results[incorrectIndex];
        //     eventScreenContents = (
        //         <div>
        //             <span className="inGameText">{resultAnswer}</span>
        //             <div className="event-button-container">
        //                 <button onClick={() => events.setPhase("endTurnScreen")} className="answerButton">End Turn</button>
        //             </div>
        //         </div>
        //     )
        //     break;


            // event response screen

        case "eventResponseScreen":
            const answerIndex = G.players[ctx.currentPlayer].selectedOption;
            const getEventResult = G.currentEvent.results[answerIndex].effect;
            // console.log("This is index of users answer: "+ answerIndex)
            // console.log("Event effect : " + getEventResult)
            eventScreenContents = (
                <div>
                    <span className="inGameText">Event Result Screen {G.currentEvent.results[answerIndex].description}</span>
                    <div className="event-button-container">
                        <button onClick={() => events.setPhase("endTurnScreen")} className="answerButton">Proceed</button>
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

            <div className="GamePlayer_1" >
                <span class = "playerNameDis">{disPlay1Name}</span>
                <ellipse id="GamePlayer_1" ></ellipse>
                <span className="playerJobTitleDis">{disPlay1Job}</span>
            </div>
            <div className="GamePlayer_2">
                <span className="playerNameDis">{disPlay2Name}</span>
                <ellipse id="GamePlayer_2" rx="53" ry="53" cx="53" cy="53"></ellipse>
                <span className="playerJobTitleDis">{disPlay2Job}</span>
            </div>
            <div className="GamePlayer_3">
                <span className="playerNameDis">{disPlay3Name}</span>
                <ellipse id="GamePlayer_3" rx="53" ry="53" cx="53" cy="53"></ellipse>
                <span className="playerJobTitleDis">{disPlay3Job}</span>
            </div>
            <div className="GamePlayer_4">
                <span className="playerNameDis">{disPlay4Name}</span>
                <ellipse id="GamePlayer_4" rx="53" ry="53" cx="53" cy="53"></ellipse>
                <span className="playerJobTitleDis">{disPlay4Job}</span>
            </div>
            <div className="GamePlayer_5">
                <span className="playerNameDis">{disPlay5Name}</span>
                <ellipse id="GamePlayer_5" rx="53" ry="53" cx="53" cy="53"></ellipse>
                <span className="playerJobTitleDis">{disPlay5Job}</span>
            </div>
            <div className="GamePlayer_6">
                <span className="playerNameDis">{disPlay6Name}</span>
                <ellipse id="GamePlayer_6" rx="53" ry="53" cx="53" cy="53"></ellipse>
                <span className="playerJobTitleDis">{disPlay6Job}</span>
            </div>
            {/*Player List*/}


            {/*Inventory List*/}
            <div className="Inventory">
                <rect id="Inventory" rx="0" ry="0" x="0" y="0">
                    {inventoryScreenContents}
                </rect>
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
                {disPlayerName}
            </div>
            <div className="PlayerJobTitle" id="PlayerJobTitle">
                {disPlayerJob}
            </div>
            <img className="PlayerBuffsIcon" id="PlayerBuffsIcon" src="BuffIcon.png" srcSet="BuffIcon.png 1x, BuffIcon.png.png 2x"/>
            <img className="PlayerDebuffsIcon" id="PlayerDebuffsIcon" src="DebuffIcon.png" srcSet="DebuffIcon.png 1x, DebuffIcon.png.png 2x"/>
            <div className="PlayerCurrency" id="PlayerCurrency">
                {disPlayerCur}
            </div>
            <div className="PlayerIncome" id="PlayerIncome">

            </div>
            {/*Player Stat List*/}
        </div>
    )
}