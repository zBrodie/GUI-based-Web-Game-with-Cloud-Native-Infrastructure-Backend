import { UpwardsMobility } from "./Game";
import montyPythonImage from "./monypython.png";
import pixelCat from "./pixelcat.png";
import usbDrive from "./usbdriveonroad.png";
import windowsError from "./windowserror.jpg";
import alleyMan from "./alleyman.jpg";
import buriedTreasure from "./buriedtreasure.avif";
import momoney from "./moneystaff.jpg"

const descriptionsArray = ["random description 1", "random description 2", "random description 3", "random description 3"];

export const eventsArray = [
    {
        id: 1,
        description: "A mysterious raggedy wizard appears before you and asks the question... 'What is the airspeed velocity of an unladen swallow?'",
        options: [
            "What do you mean? African or European swallow?",
            "I don't know that!",
            "What is an unladen swallow?"
        ],
        results: [
            { description: "this is what happens on the first answer", effect: "effectResponse1", cost: 100,
                resultReward: {
                    type: "buff",
                    description: "Description for index 0 inside of resultReward",
                    buff: { name: "Buff of Mo Money", image: buriedTreasure, description: "Description of buff", duration: 500 }
                },
                resultInsufficientFunds: {
                    description: "result insufficient funds description for index 0", effect: "insufficientFundsEffect"
                },
            },
            { description: "header Response description for index 1", effect: "effectResponse1", image: windowsError, cost: 1000,
                resultReward: {
                    type: "item",
                    description: "Description for index 1 inside of resultReward",
                    item: { name: "ITEM ", image: usbDrive, description: "DESCRIPTION OF ITEM", onUse: "onUse"}
                },
                resultInsufficientFunds: {
                    description: "result insufficient funds description for index 1", effect: "insufficientFundsEffect"
                },
            },
            { description: "header Response description for index 2", effect: "effectResponse1", image : usbDrive, cost: 1000,
                resultReward: {
                    type: "item",
                    description: "Description for index 2 inside of resultReward",
                    item: { name: "ITEM THING", image: windowsError, description: "DESCRIPTION OF ITEM", onUse: "onUse"}
                },
                resultInsufficientFunds: {
                    description: "result insufficient funds description for index 2", effect: "insufficientFundsEffect"
                },
            },
        ],
    },
    {
        id: 1,
        description: "test event",
        options: [
            "What do you mean? African or European swallow?",
            "I don't know that!",
            "What is an unladen swallow?"
        ],
        results: [
            { description: descriptionsArray[Math.floor(Math.random() * descriptionsArray.length)], effect: "effectResponse1", cost: -9999,
                resultReward: {
                    type: "nothing",
                    description: "nothing happens",
                },
                resultInsufficientFunds: {
                    description: "you die", effect: "insufficientFundsEffect"
                },
            },
            { description: descriptionsArray[Math.floor(Math.random() * descriptionsArray.length)], effect: "effectResponse1", cost: -9999, image: windowsError,
                resultReward: {
                    type: "nothing",
                    description: "you die",
                },
            },
            { description: descriptionsArray[Math.floor(Math.random() * descriptionsArray.length)], effect: "effectResponse1", cost: -9999, image : usbDrive,
                resultReward: {
                    type: "nothing",
                    description: "you die",
                },
            },
        ],
        image: montyPythonImage,
    },
    {
        id: 2,
        description: "This will the the market event prompting the user about three different stores to visit",
        options: [
            "Go to nightmarket",
            "Go to nightmarket",
            "Go to nightmarket"
        ],
        results: [
            { description: "Proceed to the night market", effect: "nightMarketStore", cost: -9999,
                resultReward: {
                    type: "nothing",
                    description: "nothing happens",
                },
            },
            { description: "Proceed to the day market", effect: "nightMarketStore", cost: -9999,
                resultReward: {
                    type: "nothing",
                    description: "nothing happens",
                },
            },
            { description: "Proceed to sheets", effect: "nightMarketStore", cost: -9999,
                resultReward: {
                    type: "nothing",
                    description: "nothing happens",
                },
            },
        ],
    },
    {
        id: 3,
        description: "A rogue hacker approaches you, offering to sell you an exclusive piece of cyberware. 'This will give you the edge you need,' they say.",
        options: [
            "Purchase the cyberware.",
            "Refuse the offer.",
            "Try to steal the cyberware."
        ],
        results: [
            {
                description: "You purchase the cyberware and successfully install it.",
                effect: "effectResponse1",
                cost: 100,
                resultReward: {
                    type: "buff",
                    description: "Your new cyberware enhances your abilities.",
                    buff: {
                        name: "Cyber-Edge",
                        description: "Boosts your speed and reflexes.",
                        duration: 3
                    }
                },
                resultInsufficientFunds: {
                    description: "You don't have enough funds to purchase the cyberware.",
                    effect: "insufficientFundsEffect"
                }
            },
            {
                description: "You refuse the hacker's offer and walk away.",
                effect: "effectResponse2",
                cost: 0,
                resultReward: {
                    type: "none",
                    description: "You decided not to take any risks and refused the offer."
                }
            },
            {
                description: "You try to steal the cyberware, but the hacker catches you.",
                effect: "effectResponse3",
                cost: 200,
                resultReward: {
                    type: "debuff",
                    description: "The hacker retaliates, damaging your existing cyberware.",
                    debuff: {
                        name: "Damaged Cyberware",
                        image: "damaged_cyberware.png",
                        description: "Your cyberware malfunctions, causing you to lose some of your abilities.",
                        duration: 3
                    }
                },
                resultInsufficientFunds: {
                    description: "The hacker shows you mercy and lets you go, but not without a warning.",
                    effect: "insufficientFundsEffect"
                }
            }
        ]
    },
    {
        id: 3,
        description: "A mysterious message pops up on your communicator. It's an invitation to a secret underground cyber-battle tournament. Do you participate?",
        options: [
            "Accept the invitation and participate.",
            "Decline the invitation and ignore the message.",
            "Report the invitation to the authorities."
        ],
        results: [
            {
                description: "You accept the invitation and end up winning the tournament!",
                effect: "effectResponse1",
                cost: 100,
                resultReward: {
                    type: "buff",
                    description: "Your victory in the tournament boosts your reputation.",
                    buff: {
                        name: "Champion of the Cyber-Battle",
                        description: "Increases your influence and respect among fellow hackers.",
                        duration: 3
                    }
                },
                resultInsufficientFunds: {
                    description: "You don't have enough funds to cover the tournament's entry fee.",
                    effect: "insufficientFundsEffect"
                }
            },
            {
                description: "You decline the invitation and continue your journey.",
                effect: "effectResponse2",
                cost: 0,
                resultReward: {
                    type: "none",
                    description: "You decided to play it safe and avoid the underground tournament."
                }
            },
            {
                description: "You report the invitation to the authorities, and they reward you for the information.",
                effect: "effectResponse3",
                cost: 0,
                resultReward: {
                    type: "currency",
                    description: "The authorities are grateful for your help.",
                    reward: {
                        amount: 300,
                        description: "You receive a monetary reward for your assistance."
                    }
                }
            }
        ]
    }



];

