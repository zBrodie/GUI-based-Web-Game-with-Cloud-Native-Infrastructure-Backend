import { Client } from 'boardgame.io/client';
import { GameBase } from './Game';

class TicTacToeClient {
    constructor() {
        this.client = Client({ game: GameBase });
        this.client.start();
    }
}

const app = new TicTacToeClient();