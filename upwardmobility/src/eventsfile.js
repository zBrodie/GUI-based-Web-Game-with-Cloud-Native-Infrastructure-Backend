import { UpwardsMobility } from "./Game";
import montyPythonImage from "./monypython.png";
import pixelCat from "./pixelcat.png";
import usbDrive from "./usbdriveonroad.png";
import windowsError from "./windowserror.jpg";
import alleyMan from "./alleyman.jpg";
import buriedTreasure from "./buriedtreasure.avif";
import momoney from "./moneystaff.jpg"
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
            { description: "this is what happens on the first answer", effect: "effectResponse1", cost: 10,
                resultReward: {
                    type: "buff",
                    description: "Description for index 0 inside of resultReward",
                    buff: { name: "Buff of Mo Money", image: buriedTreasure, description: "Description of buff", duration: 5 }
                },
                resultInsufficientFunds: {
                    description: "you dont have enough money to do this index 0",
                },
            },
            { description: "header Response description for index 1", effect: "effectResponse1", image: windowsError, cost: 20,
                resultReward: {
                    type: "item",
                    description: "Description for index 1 inside of resultReward",
                    item: { name: "ITEM ", image: usbDrive, description: "DESCRIPTION OF ITEM", onUse: "onUse"}
                },
                resultInsufficientFunds: {
                    description: "you dont have enough money to do this index 1",
                },
            },
            { description: "header Response description for index 2", effect: "effectResponse1", image : usbDrive, cost: 30,
                resultReward: {
                    type: "item",
                    description: "Description for index 2 inside of resultReward",
                    item: { name: "ITEM THING", image: windowsError, description: "DESCRIPTION OF ITEM", onUse: "onUse"}
                },
                resultInsufficientFunds: {
                    description: "you dont have enough money to do this index 2",
                },
            },
        ],
        // image: montyPythonImage,
    },
    // {
    //     id: 1,
    //     description: "test event",
    //     options: [
    //         "What do you mean? African or European swallow?",
    //         "I don't know that!",
    //         "What is an unladen swallow?"
    //     ],
    //     results: [
    //         { description: "this is what happens on the first answer", effect: "effectResponse1",
    //             resultReward: {
    //                 type: "nothing",
    //                 description: "nothing happens",
    //             },
    //         },
    //         { description: "header Response description for index 1", effect: "effectResponse1", image: windowsError,
    //             resultReward: {
    //                 type: "nothing",
    //                 description: "nothing happens",
    //             },
    //         },
    //         { description: "header Response description for index 2", effect: "effectResponse1", image : usbDrive,
    //             resultReward: {
    //                 type: "nothing",
    //                 description: "nothing happens",
    //             },
    //         },
    //     ],
    //     image: montyPythonImage,
    // },

];
