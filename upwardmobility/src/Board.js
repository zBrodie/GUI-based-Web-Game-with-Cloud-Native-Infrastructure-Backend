import React, {Component, useEffect, useRef, useState} from 'react'
import { Dropdown } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Popup from 'reactjs-popup';

import dice from './GameDieBigpng.png'
import playerList from './PlayerListBackground.png'
import gamelogo from './Upward_Mobility_big.png'
import { moveDist } from "./Game";
import { eventsArray} from "./eventsfile";
import {itemsArray} from "./itemsFile";
import startFinish from "./StartFinishScale.png"

import icon1 from './imcute.png'
import icon2 from './improud.png'
import icon3 from './img1.png'
import icon4 from './impointing.png'
import icon5 from './imcool.png'
import icon6 from './imawesome.png'

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

    const [mouseOverBuffs, setMouseOverBuffs] = useState(false)
    const [loadPlayerBuffs, setPlayerBuffs] = useState("")

    const [mouseOverInventoryItem, setMouseOverInventoryItem] = useState(false)
    const [loadInventoryItems, setInventoryItems] = useState("")

    const [player1, setPlayer1] = useState(false)
    const [player2, setPlayer2] = useState(false)
    const [player3, setPlayer3] = useState(false)
    const [player4, setPlayer4] = useState(false)
    const [player5, setPlayer5] = useState(false)
    const [player6, setPlayer6] = useState(false)

    const [player1Token, setP1Token] = useState(false)
    const [player2Token, setP2Token] = useState(false)
    const [player3Token, setP3Token] = useState(false)
    const [player4Token, setP4Token] = useState(false)
    const [player5Token, setP5Token] = useState(false)
    const [player6Token, setP6Token] = useState(false)


    const[playerTokenGen, setGen] = useState(false)
    const genRef = useRef(playerTokenGen)

    function getRightState(num){
        if(num === 0){
            return player1Token
        }
        if(num === 1){
            return player2Token
        }
        if(num === 2){
            return player3Token
        }
        if(num === 3){
            return player4Token
        }
        if(num === 4){
            return player5Token
        }
        if(num === 5){
            return player6Token
        }
    }

    useEffect(() =>{
        if(G.players[0] !== undefined){
            setPlayer1(true)
        }
        if(G.players[1] !== undefined){
            setPlayer2(true)
        }
        if(G.players[2] !== undefined){
            setPlayer3(true)
        }
        if(G.players[3] !== undefined){
            setPlayer4(true)
        }
        if(G.players[4] !== undefined){
            setPlayer5(true)
        }
        if(G.players[5] !== undefined){
            setPlayer6(true)
        }
    })


    function handleMouseOver(){
        setMouseOverBuffs(true)
        loadBuffString()
    }

    function handleMouseOut(){
        setMouseOverBuffs(false)
    }
    function handleMouseOverInventory(pickedItem){
        setMouseOverInventoryItem(true)
        loadInventoryString()
    }
    function handleMouseOutInventory(){
        setMouseOverInventoryItem(false)
    }

    function loadBuffString(){
        let buffs = " "
        for(let i = 0; i < 2; i++){
            buffs += "Player " + (i + 1) + ": "
            for(let j = 0; j<G.players[i].buffs.length; j++){
                buffs += G.players[i].buffs[j].name
                if(j==G.players[i].buffs.length - 1){
                    buffs +=" "
                }
                else{
                    buffs +=", "
                }
            }
            buffs += "\n"
        }
        setPlayerBuffs(buffs)
        // console.log(buffs)
    }

    function loadInventoryString(){
        let items = " "
        for(let i = 0; i<G.players[ctx.currentPlayer].inventory.length; i++){
            items += G.players[ctx.currentPlayer].inventory[i].name + ": " + G.players[ctx.currentPlayer].inventory[i].description
        }
        setInventoryItems(items)
        // console.log(items)
    }

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    useEffect(() =>{
        setPlayerName("Player " + (parseInt(ctx.currentPlayer) + 1))
        setPlayerJob("Job: " + G.players[ctx.currentPlayer].jobTitle)
        setPlayerCur( G.players[ctx.currentPlayer].currency + " Credits")
    })

    useEffect(()=>{
      if(G.players[0] !== undefined){
          setPlay1Name("Player 1")
          setPlay1Job(G.players[0].jobTitle)
          setP1Token(true)
      }
      if(G.players[1] !== undefined){
          setPlay2Name("Player 2")
          setPlay2Job(G.players[1].jobTitle)
          setP2Token(true)
      }
      if(G.players[2] !== undefined){
          setPlay3Name("Player 3")
          setPlay3Job(G.players[2].jobTitle)
          setP3Token(true)
      }
        if(G.players[3] !== undefined){
            setPlay4Name("Player 4")
            setPlay4Job(G.players[3].jobTitle)
            setP4Token(true)
        }
        if(G.players[4] !== undefined){
            setPlay5Name("Player 5")
            setPlay5Job(G.players[4].jobTitle)
            setP5Token(true)
        }
        if(G.players[5] !== undefined){
            setPlay6Name("Player 6")
            setPlay6Job(G.players[5].jobTitle)
            setP6Token(true)
        }
    })


    let alreadyGen = false;

    useEffect(() => {
        // console.log("testing useEffect")
    }, );

    if (G.players[ctx.currentPlayer].position >= 50) {
        // events.setPhase("winningGameScreen");
        // console.log("if case for winningGameScreen")
        ctx.phase = "winningGameScreen"
    }

    function setRightState(num){
        if(num === 0){
            setP1Token(true)
            return player1Token
        }
        if(num === 1){
            setP2Token(true)
            return player2Token
        }
        if(num === 2){
            setP3Token(true)
            return player3Token
        }
        if(num === 3){
            setP4Token(true)
            return player4Token
        }
        if(num === 4){
            setP5Token(true)
            return player5Token
        }
        if(num === 5){
            setP6Token(true)
            return player6Token
        }

    }

    useEffect(() =>{
        if(player1Token == true){
            // console.log("HITS 1")
            let playerToken = document.createElement("div")
            playerToken.setAttribute("id", "playerToken" + 0);
            playerToken.setAttribute("class", "playerToken")
            playerToken.style.top = "93%"
            playerToken.style.backgroundColor = "rgba(234,0,217,1)"
            document.getElementById("progressionDiv").append(playerToken)
            setP1Token(true)
        }
        if(player2Token == true){
            // console.log("HITS 2")
            let playerToken = document.createElement("div")
            playerToken.setAttribute("id", "playerToken" + 1);
            playerToken.setAttribute("class", "playerToken")
            playerToken.style.top = "93%"
            playerToken.style.backgroundColor = "rgba(115,248,255,1)"
            document.getElementById("progressionDiv").append(playerToken)
            setP2Token(true)
        }
        if(player3Token == true){
            console.log("HITS 2")
            let playerToken = document.createElement("div")
            playerToken.setAttribute("id", "playerToken" + 2);
            playerToken.setAttribute("class", "playerToken")
            playerToken.style.top = "93%"
            playerToken.style.backgroundColor = "rgba(0,201,60,1)"
            document.getElementById("progressionDiv").append(playerToken)
            setP3Token(true)
        }
        if(player4Token == true){
            console.log("HITS 2")
            let playerToken = document.createElement("div")
            playerToken.setAttribute("id", "playerToken" + 3);
            playerToken.setAttribute("class", "playerToken")
            playerToken.style.top = "93%"
            playerToken.style.backgroundColor = "rgba(196,0,0,1)"
            document.getElementById("progressionDiv").append(playerToken)
            setP4Token(true)
        }
        if(player5Token == true){
            console.log("HITS 2")
            let playerToken = document.createElement("div")
            playerToken.setAttribute("id", "playerToken" + 4);
            playerToken.setAttribute("class", "playerToken")
            playerToken.style.top = "93%"
            playerToken.style.backgroundColor = "rgba(105,0,225,1)"
            document.getElementById("progressionDiv").append(playerToken)
            setP5Token(true)
        }
        if(player6Token == true){
            console.log("HITS 2")
            let playerToken = document.createElement("div")
            playerToken.setAttribute("id", "playerToken" + 5);
            playerToken.setAttribute("class", "playerToken")
            playerToken.style.top = "93%"
            playerToken.style.backgroundColor = "rgba(0,61,204,1)"
            document.getElementById("progressionDiv").append(playerToken)
            setP6Token(true)
        }

    }, [player1Token, player2Token, player3Token, player4Token, player5Token, player6Token])

/*
    useEffect(() => {
        if(playerTokenGen == false){
            for(let i = 0; i< 6; i++){
                if(getRightState(i) == true){

                }
                else if(G.players[i] !== undefined){
                    setRightState(i)
                    console.log(setRightState(i))
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

 */

    const handleAnswerSelect = (answerIndex) => {
        moves.selectAnswer(answerIndex);
    };

    const { moveDist } = G;

    const [selectedItem, setSelectedItem] = useState(null);

    // let eventScreenContents = "";

    let inventoryScreenContents = (
        <div>
            <div className="inventory-item-container">
                {G.players[ctx.currentPlayer].inventory && G.players[ctx.currentPlayer].inventory.map((item, index) => (
                    <img onClick={handleMouseOverInventory} key={index} className="InventoryImage" id={`inventoryItem-${index}`} src={item.image}/>
                ))}
            </div>
        </div>
    )

    // biginning of switch case
    const [eventScreenContents, setEventScreenContents] = useState(null);

    useEffect(() => {
        const updateEventScreenContents = () => {
            let newContent = null;
            switch (ctx.phase) {
                case "rollScreen":
                    console.log("roll screen")
                    newContent = (
                        <div>
                            <button onClick = {() => moves.rollDice()}  className="DiceButton" id="DiceButton"></button>
                            <img  onClick = {() => moves.rollDice()} className="DiceImage" id="NoPath_-_Copy_8" src="NoPath_-_Copy_8.png" srcSet="NoPath_-_Copy_8.png 1x, NoPath_-_Copy_8@2x.png 2x"/>
                            <div id="A_pair_of_strange_dice_lay_bef">
                                Roll the Dice of Destiny
                            </div>
                        </div>
                    )
                    // if (G.players[ctx.currentPlayer].position === 25) {
                    //     events.setPhase("winningGameScreen");
                    //     G.winningPlayer = ctx.currentPlayer;
                    // }
                    break;
                case "eventOrItemScreen":
                    console.log("eventOrItemScreen")
                    newContent = (
                        <div>
                            <span id="rollVal" className="inGameText">{G.players[ctx.currentPlayer].jobTitle} Player {parseInt((ctx.currentPlayer)) + 1} rolls a {moveDist}. They now have a social tier of {G.players[ctx.currentPlayer].position}</span>
                            <div className="event-button-container">
                                <button onClick={() => events.setPhase("eventScreen")} className="answerButton">Show Event</button>
                                <button onClick={() => events.setPhase("visitShopScreen")} className="answerButton">Visit Shop</button>
                                <button onClick={() => events.setPhase("useItemScreen")} className="answerButton">Use Item</button>
                            </div>
                        </div>
                    )
                    break;
                case "eventScreen":
                    console.log("eventScreen")
                    const handleOptionClick = (index) => {
                        const selectedOption = G.currentEvent.results[index];
                        if (G.players[ctx.currentPlayer].currency >= selectedOption.cost) {
                            moves.selectAnswer(index);
                            moves.eventResponse(selectedOption.effect);
                            moves.subtractCurrency(selectedOption.cost);
                            events.setPhase("eventResponseScreen");
                        } else {
                            moves.selectAnswer(index);
                            events.setPhase("insufficientFundsScreen");
                        }
                    };
                    newContent = (
                        <div>
                            <div>
                                <span className="inGameText">{G.currentEvent.description}</span>
                                {G.currentEvent.image && <img className="EventImage" id="EventImage" src={G.currentEvent.image} />}
                            </div>
                            <div className="event-button-container">
                                {G.currentEvent.options && G.currentEvent.options.map((option, index) => (
                                    <button key={index} onClick={() => handleOptionClick(index)} className="answerButton">{option}</button>
                                ))}
                            </div>
                        </div>
                    );
                    break;

                case "visitShopScreen":
                    console.log("visitShopScreen");

                    const shuffledItemsArray = shuffleArray([...itemsArray]);

                    newContent = (
                        <div>
                            <div id="eventScreen">
                                <span className="inGameText">Welcome to the Shop</span>
                                <div className="shop-container">
                                    {shuffledItemsArray.slice(0, 6).map((item) => (
                                        <div
                                            key={item.itemID}
                                            onClick={() => {
                                                if (G.players[ctx.currentPlayer].currency >= item.cost) {
                                                    moves.subtractCurrency(item.cost);
                                                    moves.pickUpItemFromStore(item.item);
                                                    events.setPhase("successfulPurchaseScreen");
                                                } else {
                                                    events.setPhase("unsuccessfulPurchaseScreen");
                                                }
                                            }}
                                            className="shop-item"
                                        >
                                            <img src={item.item.image} alt={item.item.name} className="item-image" />
                                            <div className="item-name">{item.item.name}</div>
                                            <div className="item-cost">{item.cost} Credits</div>
                                        </div>
                                    ))}
                                </div>
                                <div className="event-button-container" style={{top: "80%"}}>
                                    <button onClick={() => events.setPhase("eventScreen")} className="leaveShopButton">Leave the Shop</button>
                                </div>
                            </div>
                        </div>
                    );
                    break;

                case "successfulPurchaseScreen":
                    console.log("successfulPurchaseScreen")
                    newContent = (
                        <div>
                            <span className="inGameText">Successful purchase</span>
                            <div className="event-button-container">
                                <button onClick={() => events.setPhase("proceedToEventScreen")} className="answerButton">Proceed</button>
                            </div>
                        </div>
                    );
                    break;

                case "unsuccessfulPurchaseScreen":
                    console.log("unsuccessfulPurchaseScreen")
                    newContent = (
                        <div>
                            <span className="inGameText">Insufficient funds for this item</span>
                            <div className="event-button-container">
                                <button onClick={() => events.setPhase("proceedToEventScreen")} className="answerButton">Proceed</button>
                            </div>
                        </div>
                    );
                    break;

                case "proceedToEventScreen":
                    console.log("proceedToEventScreen")
                    newContent = (
                        <div>
                            <span className="inGameText">Proceed to Event</span>
                            <div className="event-button-container">
                                <button onClick={() => events.setPhase("eventScreen")} className="answerButton">Proceed</button>
                            </div>
                        </div>
                    );
                    break;

                case "insufficientFundsScreen":
                    console.log("insufficientFundsScreen")
                    let answerIndex = G.players[ctx.currentPlayer].selectedOption;
                    let getEventResult = G.currentEvent.results[answerIndex].effect;
                    newContent = (
                        <div>
                            <span className="inGameText">{G.currentEvent.results[answerIndex].resultInsufficientFunds.description}</span>
                            <div className="event-button-container">
                                <button onClick={() =>  {events.setPhase("endTurnScreen"); moves.eventResponse(G.currentEvent.results[answerIndex].resultInsufficientFunds.effect)}} className="answerButton">Proceed</button>
                            </div>
                        </div>
                    );
                    break;

                case "useItemScreen":
                    console.log("useItemScreen")
                    newContent = (
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
                                    if (selectedItem && G.players[ctx.currentPlayer].inventory.length > 0) {
                                        moves.useItem(selectedItem.name);
                                        // console.log("Selected item: " + selectedItem.name)
                                        events.setPhase("itemEffectResultScreen");
                                    }
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
                    console.log("itemEffectResultScreen")
                    newContent = (
                        <div>
                            <span className="inGameText">{selectedItem.onUse}</span>
                            <div className="event-button-container">
                                <button onClick={() => events.setPhase("eventScreen")} className="answerButton">Proceed</button>
                            </div>
                        </div>
                    );
                    break;
                case "eventResponseScreen":
                    console.log("eventResponseScreen")
                    let answerIndex2 = G.players[ctx.currentPlayer].selectedOption;
                    newContent = (
                        <div>
                            <span className="inGameText">{G.currentEvent.results[answerIndex2].description}</span>
                            <div className="event-button-container">
                                <button onClick={() => events.setPhase("eventResponseScreen2")} className="answerButton">Proceed</button>
                            </div>
                        </div>
                    )
                    break;

                case "eventResponseScreen2":
                    console.log("eventResponseScreen2")
                    const answerInd = G.players[ctx.currentPlayer].selectedOption;
                    newContent = (
                        <div>
                            <span className="inGameText">{G.currentEvent.results[answerInd].resultReward.description}</span>
                            <div className="event-button-container">
                                <button onClick={() => {
                                    events.setPhase("endTurnScreen");
                                    console.log("Event response screen 2: result reward" + G.currentEvent.results[answerInd].resultReward)
                                    moves.pickUpItem(G.currentEvent.results[answerInd].resultReward);
                                }} className="answerButton">Proceed</button>
                            </div>
                        </div>
                    )
                    break;


                case "winningGameScreen":
                    console.log("winningGameScreen")
                    newContent = (
                        <div>
                            <span className="winningGameText">Player {ctx.currentPlayer} has won the game.</span>
                        </div>
                    )
                    break;
                case "endTurnScreen":
                    console.log("endTurnScreen")
                    newContent = (
                        <div>
                            <span className="inGameText">Your turn is over!</span>
                            <div className="event-button-container">
                                <button onClick={() => { events.endTurn(); events.setPhase("rollScreen"); setMouseOverBuffs(false); setMouseOverInventoryItem(false) }} className="answerButton">End Turn</button>

                            </div>

                        </div>
                    )
                    break;
            }


            setEventScreenContents(newContent);
        };

        updateEventScreenContents();
    }, [ctx.phase]);



    // end of switch case

    return(
        <div className="GamePage">
            <div className="Rectangle_42" id = "eventScreen">
                {eventScreenContents}
            </div>

            <div className="GameProgression" id = "progressionDiv">
                <img id="ProgresionImage" src={startFinish} srcSet="NoPath_-_Copy_6.png 1x, NoPath_-_Copy_6@2x.png 2x"/>

            </div>




            {/*Player List*/}
            <svg className="GamePlayerBackground">
            </svg>
            <img id="NoPath_-_Copy_10" src="NoPath_-_Copy_10.png" srcSet="NoPath_-_Copy_10.png 1x, NoPath_-_Copy_10@2x.png 2x"/>

            {player1 &&
                <div className="GamePlayer_1" >
                    <span className = "playerNameDis">{disPlay1Name}</span>
                    <ellipse id="GamePlayer_1" >
                        <img className="playerImg1" src = {icon1}/>
                    </ellipse>
                    <span className="playerJobTitleDis">{disPlay1Job}</span>
                </div>
            }
            {player2 &&
                <div className="GamePlayer_2">
                    <span className="playerNameDis">{disPlay2Name}</span>
                    <ellipse id="GamePlayer_2" rx="53" ry="53" cx="53" cy="53">
                        <img className="playerImg2" src = {icon2}/>
                    </ellipse>
                    <span className="playerJobTitleDis">{disPlay2Job}</span>
                </div>
            }

            {player3 &&
                <div className="GamePlayer_3">
                    <span className="playerNameDis">{disPlay3Name}</span>
                    <ellipse id="GamePlayer_3" rx="53" ry="53" cx="53" cy="53">
                        <img className="playerImg1" src = {icon3}/>
                    </ellipse>
                    <span className="playerJobTitleDis">{disPlay3Job}</span>
                </div>
            }

            {player4 &&
                <div className="GamePlayer_4">
                    <span className="playerNameDis">{disPlay4Name}</span>
                    <ellipse id="GamePlayer_4" rx="53" ry="53" cx="53" cy="53">
                        <img className="playerImg1" src = {icon4}/>
                    </ellipse>
                    <span className="playerJobTitleDis">{disPlay4Job}</span>
                </div>
            }

            {player5 &&
                <div className="GamePlayer_5">
                    <span className="playerNameDis">{disPlay5Name}</span>
                    <ellipse id="GamePlayer_5" rx="53" ry="53" cx="53" cy="53">
                        <img className="playerImg1" src = {icon5}/>
                    </ellipse>
                    <span className="playerJobTitleDis">{disPlay5Job}</span>
                </div>
            }

            {player6 &&
                <div className="GamePlayer_6">
                    <span className="playerNameDis">{disPlay6Name}</span>
                    <ellipse id="GamePlayer_6" rx="53" ry="53" cx="53" cy="53">
                        <img className="playerImg1" src = {icon6}/>
                    </ellipse>
                    <span className="playerJobTitleDis">{disPlay6Job}</span>
                </div>
            }
            {/*Player List*/}


            {/*Inventory List*/}
            <div className="Inventory">
                {mouseOverInventoryItem ? (
                    <div className="showItemDescription">
                        <p className="inventoryItemDescriptionText">
                            {loadInventoryItems.split("\n").map((line, index) => (
                                <React.Fragment key={index}>
                                    {line}
                                    {index !== loadInventoryItems.split("\n").length -1 && <br/>}
                                </React.Fragment>
                            ))}
                        </p>
                        <button className="inventoryBackButton" onClick={handleMouseOutInventory} >
                            Back
                        </button>
                    </div>
                ) : (
                    <div>
                        <rect id="Inventory" rx="0" ry="0" x="0" y="0">
                            {inventoryScreenContents}
                        </rect>
                    </div>
                )}
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
            <div className="PlayerStatsBackground">
                {mouseOverBuffs ? (
                    <div className="showPlayerBuffs">
                        <p className ="playerBuffText">
                            {loadPlayerBuffs.split("\n").map((line, index) => (
                                <React.Fragment key={index}>
                                    {line}
                                    {index !== loadPlayerBuffs.split("\n").length - 1 && <br />}
                                </React.Fragment>
                            ))}
                        </p>
                        <p className="playerBuffText" onClick={handleMouseOut}>Click this to go back</p>
                    </div>
                ) : (
                    <div>
                        <rect id="PlayerStatsBackground" rx="0" ry="0" x="0" y="0"> </rect>
                        <div className="PlayerName" id="PlayerName">
                            {disPlayerName}
                        </div>
                        <div className="PlayerJobTitle" id="PlayerJobTitle">
                            {disPlayerJob}
                        </div>
                        <img onClick={handleMouseOver} className="PlayerBuffsIcon" id="PlayerBuffsIcon" src="BuffIcon.png" srcSet="BuffIcon.png 1x, BuffIcon.png.png 2x"/>
                        <img className="PlayerDebuffsIcon" id="PlayerDebuffsIcon" src="DebuffIcon.png" srcSet="DebuffIcon.png 1x, DebuffIcon.png.png 2x"/>
                        <div className="PlayerCurrency" id="PlayerCurrency">
                            {disPlayerCur}
                        </div>
                        <div className="PlayerIncome" id="PlayerIncome">

                        </div>
                    </div>
                )}

            </div>

            {/*Player Stat List*/}
        </div>
    )
}