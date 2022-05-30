class Game {
    end_game() {
        throw new Error("Method not implemented.");
    }
    start_game() {
        throw new Error("Method not implemented.");
    }
    private title: string;
    private playerOne: string;
    private playerTwo: string;
    private winScore: number;
    private fieldsizeX: number;
    private fieldsizeY: number;
    private win: boolean;
    public getUser(): number {
        return null;
    }
}
class Field {
    private posX: number;
    private posY: number;
    private occupiedX: boolean;
    private occupiedY: boolean;
}
class Statistics {
    private gameAmount: number;
    public showStatistics(): string {
        return null;
    };
}
class RegisteredUser {
    private password: string;
    public useStatistics(): string {
        return null;
    };
}
class User extends RegisteredUser {
    private username: string;
    public startGame(): void { };
    public createGame(): void { };
}
///////++++++++++++++++++++++++++++++++++++++++++++++++
///////++++++++++++++++++++++++++++++++++++++++++++++++
///////++++++++++++++++++++++++++++++++++++++++++++++++
// Design-Pattern Kommando
abstract class Kommando {
    startgame(): void { };
}

class Aufrufer {
    private statistic = [];

    erstellenUndstarten(cmd: Kommando): void {
        this.statistic.push(cmd); // optional
        cmd.startgame();
    }
}

// Empfänger
class StartGame {
    constructor() { }
    start_game(): void {
        write_line('Game is starting.');
    }
    end_game(): void {
        write_line('Game is finished.');
    }
}

// konkretes Kommando #1: Game starten
class Game_start extends Kommando {
    private game: Game;
    constructor(game: Game) {
        super();
        this.game = <Game>game;
    }
    startgame(): void {
        this.game.start_game();
    }
}

// konkretes Kommando #2: Game beenden
class Game_end extends Kommando {
    private game: Game;
    constructor(licht: Game) {
        super();
        this.game = <Game>licht;
    }
    startgame(): void {
        this.game.end_game();
    }
}

// Der Klient = User
function Test(kommando_string: string | number): void {
    const game: Game = new Game();
    const gm_start: Kommando = new Game_start(game);
    const gm_end: Kommando = new Game_end(game);

    const aufrufer: Aufrufer = new Aufrufer();

    switch (kommando_string) {
        case 1:
        case 'Start':
            aufrufer.erstellenUndstarten(gm_start);
            break;
        case 0:
        case 'END':
            aufrufer.erstellenUndstarten(gm_end);
            break;
        default:
            write_line('Nur die Argumente "Start" oder "End" sind erlaubt.');
    }
}

function write_line(text: string) {
    console.log(text);
}

///////++++++++++++++++++++++++++++++++++++++++++++++++
///////++++++++++++++++++++++++++++++++++++++++++++++++
///////++++++++++++++++++++++++++++++++++++++++++++++++
// Design-Pattern Memento


public class GameStatus {

function callStatus(status_string: boolean): void {

    const status: Status = new Status();

    status.set("Status1");
    status.set("Status2");
      Memento memento1 = status.saveToMemento();
    status.set("Status3");
      // We can request multiple mementos, and choose which one to roll back to.
      Memento memento2 = status.saveToMemento();
    status.set("Status4");

    status.restoreFromMemento(memento2);
}
}

public class Overview {
    /** State of the memento */
    private final String state;

    public Overview(final String stateToSave) {
        state = stateToSave;
    }

    public String getSavedState() {
        return state;
    }
}

public class Status {

    /** Current state */
    private String : status;

    // The class could also contain additional data that is not part of the
    // state saved in the memento.

    public void set(String status) {
        System.out.println("Originator: Setting state to " + state);
        this.state = state;
    }

    public Overview saveToOverview() {
        System.out.println("Originator: Saving to Overview.");
        return new Overview(state);
    }

    public void restoreFromOverview(Overview memento) {
        state = memento.getSavedState();
        System.out.println("Originator: State after restoring from Overview: " + state);
    }

}