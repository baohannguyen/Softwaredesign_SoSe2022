class MultipleChoice {
    private answer: string[];
    constructor() { }
    public getAnswer(): string[] {
        return null;
    }
}


class QuestionNumber {
    private answer: number;
    constructor() { }
    public getAnswer(): number {
        return null;
    }
}


class QuestionText {
    public answer: string;
    constructor() { }
    public getAnswer(): string {
        return null;
    }
}



//class Question extends MultipleChoice, QuestionNumber {
class Question {
    private question: string;
    constructor() { }
    public getMultiple_Choice(): MultipleChoice {
        return null;
    }
    public getQuestion_Number(): QuestionNumber {
        return null;
    }
    public getQuestion_Text(): QuestionText {
        return null;
    }
}


class Quiz {
    private questions: Question[];
    private questionCount: number;
    private title: string;
    constructor() { }
    public getQuestions(): object {
        return null;
    }
    public createQuestion(): void { }
}


class RegisteredUser {
    private username: string;
    private password: string;
    constructor() { }
    public createQuiz(): void { }
}


class User extends RegisteredUser{
//   constructor() {
//        super();
//   }
    public getQuiz(): object {
        return null;
    }
    public playQuiz(_object: object): void { }
}