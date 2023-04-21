import { UpwardsMobility } from "./Game";
import montyPythonImage from "./monypython.png";
import pixelCat from "./pixelcat.png";
import usbDrive from "./usbdriveonroad.png";
import windowsError from "./windowserror.jpg";
import alleyMan from "./alleyman.jpg";
import buriedTreasure from "./buriedtreasure.avif";
import momoney from "./moneystaff.jpg"

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

];

