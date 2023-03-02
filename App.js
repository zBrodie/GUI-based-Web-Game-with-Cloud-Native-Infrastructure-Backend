import { Client } from 'boardgame.io/react';
import { UpwardsMobility } from './upwardmobility/src/Game';



const App = Client({ game: UpwardsMobility });


export default App;
