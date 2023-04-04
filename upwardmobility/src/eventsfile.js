import { UpwardsMobility } from "./Game";
import montyPythonImage from "./monypython.png";
import pixelCat from "./pixelcat.png";
import usbDrive from "./usbdriveonroad.png";
import windowsError from "./windowserror.jpg";
import alleyMan from "./alleyman.jpg";
import buriedTreasure from "./buriedtreasure.avif";
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
            "The wizard has dropped his staff of Mo Money which you pick up and is added to your inventory.",
            "incorrect answer for option 2",
            "incorrect answer for opetion 3",
            ],
        correctAnswer: 0,
        image: montyPythonImage,
        // item: { name: "Staff of MoMoney", description: "staff of mo money description" }
        eventReward: {
            type: "item",
            description: "The wizard has dropped his staff of Mo Money which you pick up and is added to your inventory.",
            item: { name: "Staff of MoMoney", image: "", description: "staff of mo money description", onUse: "You use the staff of Mo Money and randomly generate between 0 and 10 currency"}
        }
    },
    {
        id: 2,
        description: "You stumble upon a treasure chest buried in the ground.",
        options: [
            "Open the chest",
            "Leave the chest alone",
            "Kick the chest"
        ],
        image: buriedTreasure,
        // onCorrect: "You find a 20 currency and add it to your wallet!",
        results: [
            "You have opened the chest and find some money",
            "You have left the chest alone. Bad idea. You die.  ",
            "You break your foot. You skip your next 3 turns. ",
            ],
        correctAnswer: 0,
        eventReward: {
            type: "buff",
            description: "You gain the buff of mo money where you gain 2 currency for your next 3 rolls.",
            buff: { name: "Buff of Mo Money", image: "", description: "buff of mo money description", duration: 3 }
        }
    },
    // {
    //     id: 3,
    //     description: "Event 3",
    //     options: [
    //         "Not answer",
    //         "Answer",
    //         "Not Answer"
    //     ],
    //     image: "",
    //     onCorrect: "Good thing happens",
    //     onIncorrect: "Bad thing happens",
    //     correctAnswer: 1,
    //     eventReward: {
    //         type: "buff",
    //         description: "You gain the buff or good things happening where good things happen for your next 5 rolls.",
    //         buff: { name: "Buff of Mo Money", description: "buff of mo money description", duration: 5 }
    //     }
    // },
    // {
    //     id: 4,
    //     description: "You find a cat.",
    //     options: [
    //         "Pet the cat",
    //         "you do something",
    //         "you do something else"
    //     ],
    //     image: pixelCat,
    //     onCorrect: "The cat is happy and gives you 2 coins",
    //     onIncorrect: "The cat becomes violently angry and attacks you, stealing 3 coins",
    //     correctAnswer: 0,
    //     eventReward: {
    //         type: "The cat also gives you something cool",
    //         description: "The cat also gives you something cool and you add it to your inventory.",
    //         item: { name: "Cat item", description: "description for cat item" }
    //     }
    // },
    // {
    //     id: 5,
    //     description: "You come across a shady looking man in a dark alley... \n \"You look like someone with a good eye, stranger. You lookin' to buy?\" ",
    //     options: [
    //         "Buy item 1 ($x)",
    //         "Buy item 2 ($y)",
    //         "Buy item 3 ($z)"
    //     ],
    //     image: alleyMan,
    //     onCorrect: "The cat is happy and gives you 2 coins",
    //     onIncorrect: "The cat becomes violently angry and attacks you, stealing 3 coins",
    //     correctAnswer: 0,
    //     eventReward: {
    //         type: "The cat also gives you something cool",
    //         description: "The cat also gives you something cool and you add it to your inventory.",
    //         item: { name: "Cat item", description: "description for cat item" }
    //     }
    // },
    // {
    //     id: 6,
    //     description: "Your free trial of \"LifeOS\" has ended.",
    //     options: [
    //         "Buy License",
    //         "Cancel"
    //     ],
    //     image: windowsError,
    //     onCorrect: "I'm sure it'll be fine",
    //     onIncorrect: "You payed $x for a license, hopefully that's the end of it", //subract $x
    //     correctAnswer: 0,
    //     eventReward: {
    //
    //     }
    // },
    // {
    //     id: 7,
    //     description: "You find an abandoned USB drive on the side of the road.",
    //     options: [
    //         "Leave it",
    //         "Let's see what's inside"
    //     ],
    //     image: usbDrive,
    //     onCorrect: "Good idea, that's really unsafe",
    //     onIncorrect: "What did you think was going to happen?", //Idk man, just really fuck their shit up
    //     correctAnswer: 0,
    //     eventReward: {
    //
    //     }
    // },
    // {
    //     id: 8,
    //     description: "You find an abandoned USB drive on the side of the road.",
    //     options: [
    //         "Leave it",
    //         "Let's see what's inside"
    //     ],
    //     image: usbDrive,
    //     onCorrect: "Good idea, that's really unsafe",
    //     onIncorrect: "What did you think was going to happen?",
    //     correctAnswer: 0,
    //     eventReward: {
    //
    //     }
    // },

];
