class Game {
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
    
class User extends RegisteredUser {
    private username: string;
    public startGame(): void { };
    public createGame(): void { };
}
}