import { UpwardsMobility } from "./Game";
import montyPythonImage from "./monypython.png";
import pixelCat from "./pixelcat.png";
import usbDrive from "./usbdriveonroad.png";
import windowsError from "./windowserror.jpg";
import alleyMan from "./alleyman.jpg";
import buriedTreasure from "./buriedtreasure.avif";
import momoney from "./moneystaff.jpg"
import mindControlIcon from "./mindControl.png"
import buzzedOnSludge from "./buzzedOnSludge.png"
import nightMarket from "./nightMarket.png"
import strangeCybernetic from "./strangeCybernetic.png"
import gunSeller from "./gunSeller.png"
import weirdPuddle from "./weirdPuddle.png"
import cathysGun from "./cathysGun.png"
import gun from "./gun.png"
import mushroomBurger from "./mushroomBurger.png"
import cyberneticEnhancer from "./cyberneticEnhancer.png"
import mushroomBlessing from "./mushroomBlessing.png"
import poisonSeller from "./poisonSeller.png"
import carnivalGame from "./carnivalGame.png"
import poisonVial from "./poisonVial.png"

const descriptionsArray = ["random description 1", "random description 2", "random description 3", "random description 3"];

const randomResponseArray = [
    {
        description: "random description 1", effect: "randomEffect1"
    },
    {
        description: "random description 2", effect: "randomEffect2"
    },
    {
        description: "random description 3", effect: "randomEffect3"
    }
]
function getRandomResponse(array) {
    return array[Math.floor(Math.random() * array.length)];
}
export const eventsArray = [
    {
        id: 2,
        description:"Upon going into work, HR demands you report to the company surgeon for a compulsory cybernetic brain implant. You head down to the basement where the doctor has set up the operating room. A line of your colleagues line up to enter, an air of tension permeating from them. Rumors circle, and it seems as though this implant will allow the company to access your memories, and even possibly influence your decision making.",
        options: [
            "Comply with the surgery",
            "Refuse the implant",
            "Bribe the surgeon (200 credits)"
        ],
        results: [
            { description: "Loyal as ever to your corporate overlords, you wait patiently in line until it is your turn. After about 5 minutes, you step into the operating room. A bored, uninterested surgeon sits next to an operating table, surgery bots buzzing around as the table is prepped for you. You lay down on the table, and very quickly fall unconscious as the anesthetics are beamed into your head. You wake up a bit later, feeling no different than before, aside from a strange desire to be loyal to the company you work for.", cost: -99999,
                resultReward: {
                    type: "buff",
                    description: "You aren't sure why you were even nervous about getting the implant. You love the company. You would do anything for the company. You would even die for the company.",
                    buff: { name: "Corporate Drone", image: mindControlIcon, description: "Sometimes your thoughts are not your own.", duration: -1 }  //maybe have some kind of "Mind control" type image
                },
                resultInsufficientFunds: {
                    description: "If you are seeing this screen, an error has occurred. Please contact the developers with information regarding how you got here.",
                },
            },
            { description: "No way. No corporation is getting direct access to your brain. You turn around to leave, only to see a large man in a security guard uniform blocking the exit. \"Going somewhere?\" he asks. \"I'm not letting them install anything in my brain\" you reply, nervously. The man gives you an ominous smile, and says \"HR will be hearing about this.\" It takes just two hours before you're notified via email that you've been laid off. (-10 Social Tier)", effect: "G.players[ctx.currentPlayer].position-= 10", cost: -99999,
                resultReward: {
                    type: "nothing",
                    description: "You're out of a job, but at least you aren't a corporate zombie. ",
                },
                resultInsufficientFunds: {
                    description: "If you are seeing this screen, an error has occurred. Please contact the developers with information regarding how you got here.",
                },
            },
            { description: "After waiting in line for a little while, you enter the operating room. The surgeon looks as apathetic as ever, clearly only here to collect a paycheck. You slip her a paycard for 200 credits, and shne looks you up and down. She looks away, scratches the back of her head, and says \"Welp, looks like another successful operation to me! You're good to go.\"", effect: "G.players[ctx.currentPlayer].currency -=  200", cost: 200,
                resultReward: {
                    type: "nothing",
                    description: "You leave the operating room, free of any brain implants, but also free of your well earned money.",
                },
                resultInsufficientFunds: {
                    description: "After waiting in line for a little while, you enter the operating room. The surgeon looks as apathetic as ever, clearly only here to collect a paycheck. \"Perhaps we could come to an agreement, doc\" you say, pulling a paycard out of your pocket. She looks you up and down, noticing the lack of funds in your account. \"Nice try, but I don't think you can afford me\" she says somewhat sadistically. She installs the device and sends you on your way. For some reason, you leave the operating room with a terrible sense of guilt towards the company for trying to circumvent the treatment. You report to HR and tell them of your attempted crime, and they dock your pay as punishment.", effect: "G.players[ctx.currentPlayer].position -= 5",
                },
            },
        ],

    },
    {
        id: 3,
        description:"Upon going into work, HR demands you report to the company surgeon for a compulsory cybernetic brain implant. You head down to the basement where the doctor has set up the operating room. A line of your colleagues line up to enter, an air of tension permeating from them. Rumors circle, and it seems as though this implant will allow the company to access your memories, and even possibly influence your decision making.",
        options: [
            "Comply with the surgery",
            "Refuse the implant",
            "Bribe the surgeon (200 credits)"
        ],
        results: [
            { description: "Loyal as ever to your corporate overlords, you wait patiently in line until it is your turn. After about 5 minutes, you step into the operating room. A bored, uninterested surgeon sits next to an operating table, surgery bots buzzing around as the table is prepped for you. You lay down on the table, and very quickly fall unconscious as the anesthetics are beamed into your head. You wake up a bit later, feeling no different than before, aside from a strange desire to be loyal to the company you work for.", cost: -100000,
                resultReward: {
                    type: "buff",
                    description: "You aren't sure why you were even nervous about getting the implant. You love the company. You would do anything for the company. You would even die for the company.",
                    buff: { name: "Corporate Drone", image: mindControlIcon, description: "Sometimes your thoughts are not your own.", duration: -1 }
                },
                resultInsufficientFunds: {
                    description: "If you are seeing this screen, an error has occurred. Please contact the developers with information regarding how you got here.",
                },
            },
            { description: "No way. No corporation is getting direct access to your brain. You turn around to leave, only to see a large man in a security guard uniform blocking the exit. \"Going somewhere?\" he asks. \"I'm not letting them install anything in my brain\" you reply, nervously. The man gives you an ominous smile, and says \"HR will be hearing about this.\" It takes just two hours before you're notified via email that you've been laid off. (-10 Social Tier)", effect: "G.players[ctx.currentPlayer].position-= 10", cost: -100000,
                resultReward: {
                    type: "nothing",
                    description: "You're out of a job, but at least you aren't a corporate zombie. ",
                },
                resultInsufficientFunds: {
                    description: "If you are seeing this screen, an error has occurred. Please contact the developers with information regarding how you got here.",
                },
            },
            { description: "After waiting in line for a little while, you enter the operating room. The surgeon looks as apathetic as ever, clearly only here to collect a paycheck. You slip her a paycard for 200 credits, and she looks you up and down. She looks away, scratches the back of her head, and says \"Welp, looks like another successful operation to me! You're good to go.\"", effect: "G.players[ctx.currentPlayer].currency -=  200", cost: 200,
                resultReward: {
                    type: "nothing",
                    description: "You leave the operating room, free of any brain implants, but also free of your well earned money.",
                },
                resultInsufficientFunds: {
                    description: "After waiting in line for a little while, you enter the operating room. The surgeon looks as apathetic as ever, clearly only here to collect a paycheck. \"Perhaps we could come to an agreement, doc\" you say, pulling a paycard out of your pocket. She looks you up and down, noticing the lack of funds in your account. \"Nice try, but I don't think you can afford me\" she says somewhat sadistically. She installs the device and sends you on your way. For some reason, you leave the operating room with a terrible sense of guilt towards the company for trying to circumvent the treatment. You report to HR and tell them of your attempted crime, and they dock your pay as punishment.", effect: "G.players[ctx.currentPlayer].position -= 5",
                },
            },
        ],
    },

    {
        id: 4,
        description:"After a particularly nasty night in the red light district, you return home, exhausted. Sprawling out on the bed in exhaustion, your vision starts to glitch out. The HUD elements usually on display start showing random values, and files are being randomly transferred from your brain to strange IP addresses. It seems like you've contracted an STD -- a Silicon Transmission Disfunction, also known as a computer virus. How do you want to handle this?",
        options: [
            "Ignore it",
            "Take some random medicine",
            "Go to a hospital"
        ],
        results: [
            { description: "You decide to ignore it and go to bed. After all, what's the worst that could happen if an unknown entity had full access to your memories? You wake up the next day, feeling terrible. Your vision has only gotten worse, and notifications fill your vision display, alerting you of fraud happening in your bank account. You stop at the store on the way to work to buy some medicine, clearing up the STD but doing nothing to recover the funds you lost in the hack. -300 credits.", effect: "G.players[ctx.currentPlayer].currency -= 300",cost: -100000,
                resultReward: {
                    type: "nothing",
                    description: "You actually only lost 250 credits from the hack. The bank decided to charge you an extra 50 credits for making use of their fraud alert system.",
                },
                resultInsufficientFunds: {
                    description: "If you are seeing this screen, an error has occurred. Please contact the developers with information regarding how you got here.",
                },
            },
            { description: "to do", effect: "to do", cost: -100000,
                resultReward: {
                    type: "nothing",
                    description: "Maybe you should think twice about taking random drugs next time, or not.",
                },
                resultInsufficientFunds: {
                    description: "If you are seeing this screen, an error has occurred. Please contact the developers with information regarding how you got here.",
                },
            },
            { description: "You make your way out of your comfy bed and walk to the closest medical clinic. The doctor gives you some medicine, warning you of unintended side effects. You head home and take the meds before heading to bed.", effect: "G.players[ctx.currentPlayer].position -=  4", cost: 200,
                resultReward: {
                    type: "nothing",
                    description: "You wake up, only to realize you slept through the entire work day. You check your HUD to see a notification from your boss. You've lost 4 social tier.",
                },
                resultInsufficientFunds: {
                    description: "If you are seeing this screen, an error has occurred. Please contact the developers with information regarding how you got here.",
                },
            },
        ],
    },

    {
        id: 5,
        description:"As you walk down the street, you see a group of 3 men licking a strange shimmering puddle in turns, before slumping over in the street.", image: weirdPuddle,
        options: [
            "Join them",
            "Keep walking",
            "Call the police"
        ],
        results: [
            { description: "You get down on all fours and begin licking the puddle. Your vision pulses, and magical effects begin happening in your peripherals. Swirling patterns, kaleidoscope effects and all.",cost: -100000,
                resultReward: {
                    type: "buff",
                    description: "Your worries melt away as you slump over in the street. All is now purple.",
                    buff: { name: "Buzzed on Sludge", image: buzzedOnSludge, description: "Street sludge is always a fun time", duration: 3 }
                },
                resultInsufficientFunds: {
                    description: "If you are seeing this screen, an error has occurred. Please contact the developers with information regarding how you got here.",
                },
            },
            { description: "You pass by the men, minding your own business.", cost: -100000,
                resultReward: {
                    type: "nothing",
                    description: "As appealing as street sludge may be, you've got work to do.",
                },
                resultInsufficientFunds: {
                    description: "If you are seeing this screen, an error has occurred. Please contact the developers with information regarding how you got here.",
                },
            },
            { description: "You call the police on the three men and within seconds security bots start buzzing overhead, sirens blaring. The men are blasted with tasers, rendering them quickly unconscious. Surely this was the most ethical choice to make!", cost: -100000,
                resultReward: {
                    type: "buff",
                    description: "You continue off to work, knowing well that these men will either rot in jail for the rest of their lives or get off scott free, depending on how much money they happen to have. Thank you for performing your civic duty, civilian!",
                    buff: { name: "Pride and Accomplishment", image: windowsError /*windowsError is a placeholder, get image for and change back to "prideAndAccomplishment*/, description: "Does nothing, but man does it feel good to snitch.", duration: 1 }
                },
                resultInsufficientFunds: {
                    description: "If you are seeing this screen, an error has occurred. Please contact the developers with information regarding how you got here.",
                },
            },
        ],
    },



    {
        id: 6,
        description:"You decide to take a different way home from work today, taking a route that brings you straight through the local night market. Vendors of all kinds line the streets, each peddling their wares. A couple merchants catch your eye.", image: nightMarket,
        options: [
            "A lone woman trying to sell a gun (500 credits)",
            "A large man with a large inventory of cybernetic enhancements (250 credits)",
            "Leave the night market"
        ],
        results: [
            { description: "The woman introduces herself as Cathy, and says she needs credits to pay her rent tonight. As such, she's decided to sell off her pride and joy, her gun.", image: gunSeller, cost: 500,
                resultReward: {
                    type: "item",
                    description: "You fork over the 500 credits she's asking for and she hands it over.",
                    item: { name: "Cathy's Gun", image: cathysGun, description: "Choose a player. They lose 10 Social Tier.", onUse: "Choose a player. They lose 10 Social Tier."}
                },
                resultInsufficientFunds: {
                    description: "The woman introduces herself as Cathy, and says she needs credits to pay her rent tonight. As such, she's decided to sell off her pride and joy, her gun. You make an offer, and she laughs at you. \"You obviously can't afford this. Go away.\"",
                },
            },
            { description: "You approach the vendor, taking stock of his various cybernetics. One catches your eye, and you make an offer of 250 credits. He accepts, and offers to install it right then and there.", cost: 250,
                resultReward: {
                    type: "buff",
                    description: "The implant seems to improve your work efficiency, making you a more desirable employee.",
                    buff: { name: "Cybernetic Enhancer", image: cyberneticEnhancer, description: "At the start of each round, gain +2 Social Tier.", duration: -1 }
                },
                resultInsufficientFunds: {
                    description: "You approach the vendor, taking stock of his various cybernetics. Not having much cash on hand, you make a lowball offer on one of his wares. He gives you an offended look, and tells you to take your broke self elsewhere.",
                },
            },
            { description: "You leave the night market empty handed, heading straight home.", cost: -100000,
                resultReward: {
                    type: "nothing",
                    description: "Maybe you'll buy something next time.",
                },
                resultInsufficientFunds: {
                    description: "If you are seeing this screen, an error has occurred. Please contact the developers with information regarding how you got here.",
                },
            },
        ],
    },

    {
        id: 7,
        description:"You decide to take a different way home from work today, taking a route that brings you straight through the local night market. Vendors of all kinds line the streets, each peddling their wares. A couple merchants catch your eye.", image: nightMarket,
        options: [
            "A dark-skinned woman selling poisons (200 credits)",
            "A carnival-type game that offers monetary prizes (50 credits)",
            "Leave the night market"
        ],
        results: [
            { description: "Looking to get an edge on those dastardly coworkers of yours? Try poisoning them! It's only illegal if you get caught, after all.", image: poisonSeller, cost: 200,
                resultReward: {
                    type: "item",
                    description: "The woman flashes you a smile and packs an exotic-looking poison into a paper bag for you. You hand her a paycard for 200 credits and head on home with your newly acquired dose of poison.",
                    item: { name: "Exotic Poison", image: poisonVial, description: "Choose a player. They lose 4 Social Tier.", onUse: "Choose a player. They lose 4 Social Tier." }
                },
                resultInsufficientFunds: {
                    description: "You look around for a bit, but you can't afford any of her wares.",
                },
            },
            { description: "A large flashing machine advertises the chance to win big monetary prizes. Who doesn't love gambling?", cost: 50,
                resultReward: {
                    type: "nothing",
                    description: "to do",
                },
                resultInsufficientFunds: {
                    description: "You don't have enough money to play.",
                },
            },
            { description: "You leave the night market empty handed, heading straight home.", cost: -100000,
                resultReward: {
                    type: "nothing",
                    description: "Maybe you'll buy something next time.",
                },
                resultInsufficientFunds: {
                    description: "If you are seeing this screen, an error has occurred. Please contact the developers with information regarding how you got here.",
                },
            },
        ],
    },

    {
        id: 8,
        description:"Ever eager to gain an edge on your coworkers, you order a new cybernetic implant off of a sketchy online vendor. The implant arrives and seems... slightly strange. The instructions say that you can either fully integrate it with your body, or temporarily attach it externally.", image: strangeCybernetic,
        options: [
            "Fully integrate the implant",
            "Bring it to work and only attach it when you need it",
            "Throw it out, no need to take any risks"
        ],
        results: [
            { description: "You follow the instructions and the implant is quickly integrated into your system. ", cost: -100000,
                resultReward: {
                    type: "buff",
                    description: "Hopefully this strange cybernetic is safe.",
                    buff: { name: "Strange Cybernetic", image:strangeCybernetic , description: "Gain or lose 3 Social Tier at the start of each of your turns.", duration: -1 }
                },
                resultInsufficientFunds: {
                    description: "If you are seeing this screen, an error has occurred. Please contact the developers with information regarding how you got here.",
                },
            },
            { description: "You bring the implant to work and keep it on your desk, occasionally plugging it in to help speed up your work. A coworker walks by and notices it, slightly glaring at you. 5 minutes later, you recieve a notification with a formal warning from HR about the abuse of illegal cybernetics. (-2 Social Tier)", effect: "G.players[ctx.currentPlayer].position -=  2", cost: -100000,
                resultReward: {
                    type: "nothing",
                    description: "Gotta love bureaucracy",
                },
                resultInsufficientFunds: {
                    description: "If you are seeing this screen, an error has occurred. Please contact the developers with information regarding how you got here.",
                },
            },
            { description: "You toss out the strange cybernetic, thinking twice about turning to illegal means of enhancement", cost: -100000,
                resultReward: {
                    type: "nothing",
                    description: "Maybe this was for the best.",
                },
                resultInsufficientFunds: {
                    description: "If you are seeing this screen, an error has occurred. Please contact the developers with information regarding how you got here.",
                },
            },
        ],
    },

    {
        id: 9,
        description: "You sit down in the employee cafeteria, ready to eat your lunch. You unpack the meal you prepared, only to realize that somehow it's been replaced with a mushroom burger pulsating with energy.", image: mushroomBurger,
        options: [
            "Eat the mushroom burger",
            "Worship the mushroom burger",
            "Throw it away"
        ],
        results: [
            { description: "You eat the mushroom burger, savoring every bite. Surprisingly, it tastes heavenly, unlike any food you've had before it. You feel satisfied.", effect: "G.players[ctx.currentPlayer].position +=  3",cost: -100000,
                resultReward: {
                    type: "nothing",
                    description: "Mushroom burger (+3 Social Tier)",
                },
                resultInsufficientFunds: {
                    description: "If you are seeing this screen, an error has occurred. Please contact the developers with information regarding how you got here.",
                },
            },
            { description: "You drop to your knees and begin praying to the mushroom burger. Something about it radiates holy energy and charisma and you can't help yourself but to worship it.",image: mushroomBlessing, cost: -100000,
                resultReward: {
                    type: "buff",
                    description: "The Holy Mushroom Burger's voice echoes in your head. \"Well done my child, you have honored me greatly. For this, I shall bless you.\"",
                    buff: { name: "Blessing of the Burger", image:mushroomBlessing , description: "All other players lose 1 Social Tier at the start of your turns.", duration: 4 }
                },
                resultInsufficientFunds: {
                    description: "If you are seeing this screen, an error has occurred. Please contact the developers with information regarding how you got here.",
                },
            },
            { description: "You throw away the mushroom burger.", cost: -100000,
                resultReward: {
                    type: "nothing",
                    description: "It was probably unsafe to eat anyway... probably.",
                },
                resultInsufficientFunds: {
                    description: "If you are seeing this screen, an error has occurred. Please contact the developers with information regarding how you got here.",
                },
            },
        ],
    },

];


