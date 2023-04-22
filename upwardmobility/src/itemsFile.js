import montyPythonImage from "./monypython.png";
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
import usbDrive from "./usbdriveonroad.png"
import moneyStaff from "./moneystaff.jpg"
import sodaCan from "./sodaCan.png"
import assortedPaycards from "./assortedPaycards.png"
import rat from "./cyberRat.png"
import cyberHand from "./cyberHand.png"
import bagLobster from "./lobsterBag.png"
import vitamins from "./vitamins.png"
import goggles from "./goggles.png"
import cyberLeg from "./cyberLeg.png"
import dataBlade from "./DataBlade X1.png"
import hacker from "./hacker.png"

export const itemsArray = [
    {
        itemID: 1, cost: 3, item:
            {
                name: "Slurp Energy",
                image: sodaCan,
                description: "This item gives you +1 social tier",
                onUse: "You gain +1 social tier"
            }
    },
    {
        itemID: 2, cost: 4, item:
            {
                name: "Rat",
                image: rat,
                description: "You eat the rat and gain +100 social tier",
                onUse: "You really thought eating a rat was a good idea, -5 social tier"
            }
    },
    {
        itemID: 3, cost: 5, item:
            {
                name: "Assorted Paycards",
                image: assortedPaycards,
                description: "A handful of assorted paycards, can give you some change.",
                onUse: "You randomly generate between 0 and 10 credits"
            }
    },
    {
        itemID: 4, cost: 10, item:
            {
                name: "Cyber Hand",
                image: cyberHand,
                description: "A cyber hand to install, gives you +5 social tier",
                onUse: "Maybe you should have gotten someone who knows what they're doing to install it. It malfunctions and you go -1 social tier."
            }
    },
    {
        itemID: 5, cost: 8, item:
            {
                name: "Cyber Leg",
                image: cyberLeg,
                description: "A cyber leg, gives you a +2 social tier buff.",
                onUse: "You install the cyber leg you obtained, or at least you think you did. +2 social tier."
            }
    },
    {
        itemID: 6, cost: 15, item:
            {
                name: "Goggles",
                image: goggles,
                description: "Enhanced goggles let you see ahead, +3 social tier",
                onUse: "You put on the enhancement goggles and notice a shortcut ahead that give you +3 social tier."
            }
    },
    {
        itemID: 7, cost: 50, item:
            {
                name: "Bagged Lobster",
                image: bagLobster,
                description: "You can throw the lobster at someone and make them lose -3 social tier.",
                onUse: "You aim the bag at your target and throw, it instantly falls to the ground. But hey, at least you don't lose anything!"
            }
    },
    {
        itemID: 8, cost: 12, item:
            {
                name: "Brain Drain",
                image: vitamins,
                description: "The supplements give you a rush, gain +3 social tier",
                onUse: "You take the Brain Drain supplements and gain a rush. You start moving at incredible speeds and gain +3 social tier."
            }
    },
    {
        itemID: 9, cost: 9, item:
            {
                name: "DataBlade X1",
                image: dataBlade,
                description: "Use this device to gain credits",
                onUse: "This device holds a wide spectrum of information. This information helps you get an edge against your opponents and you gain 25 credits"
            }
    },
    {
        itemID: 1, cost: 4, item:
            {
                name: "Keygen Staff",
                image: hacker,
                description: "This staff can hack any ATM to obtain credits",
                onUse: "You randomly generate between 0 and 10 credits"
            }
    },
    {
        itemID: 2, cost: 4, item:
            {
                name: "Cathy's Gun",
                image: cathysGun,
                description: "A gun you bought from a shady looking person... What are you planning to do with this?",
                onUse: "Gain 10 social tier."
            }
    },
    {
        itemID: 3, cost: 5, item:
            {
                name: "Exotic Poison",
                image: poisonVial,
                description: "item 1 description",
                onUse: "You randomly gain between 0 and 10 social tier."
            }
    },
    {
        itemID: 4, cost: 5, item:
            {
                name: "USB Drive",
                image: usbDrive,
                description: "item 1 description",
                onUse: "You randomly generate between 0 and 10 coins"
            }
    },
];

