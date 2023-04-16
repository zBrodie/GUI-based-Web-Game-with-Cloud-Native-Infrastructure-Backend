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
        // image: montyPythonImage,
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
            },
            { description: descriptionsArray[Math.floor(Math.random() * descriptionsArray.length)], effect: "effectResponse1", cost: -9999, image: windowsError,
                resultReward: {
                    type: "nothing",
                    description: "nothing happens",
                },
            },
            { description: descriptionsArray[Math.floor(Math.random() * descriptionsArray.length)], effect: "effectResponse1", cost: -9999, image : usbDrive,
                resultReward: {
                    type: "nothing",
                    description: "nothing happens",
                },
            },
        ],
        image: montyPythonImage,
    },

];

