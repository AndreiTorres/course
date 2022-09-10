export class BowlingGame {
    
    private frames: number[];

    constructor() {
        this.frames = [];
    }

    roll(pins: number): BowlingGame {
        this.frames.push(pins);
        return this;
    }

    private isStrike(index: number) {
        return this.frames[index] === 10;
    }

    private isSpare(index: number) {
        return this.frames[index] 
            + this.frames[index + 1] === 10;
    }

    private sumNextTwoRolls(index: number) {
        return 10 + this.frames[index + 1] + this.frames[index + 2];
    }

    private sumNextRoll(index: number) {
        return 10 + this.frames[index + 2];
    }

    score(): number {

        let score = 0;
        let firstInFrame = 0;

        for (let frame = 0; frame < 10; frame++) {
            
            if (this.isStrike(firstInFrame)) {
                score += this.sumNextTwoRolls(firstInFrame);
                firstInFrame++;
            }
            else if (this.isSpare(firstInFrame)) {
                score += this.sumNextRoll(firstInFrame);
                firstInFrame += 2;
            } else {
                score += this.frames[firstInFrame] + this.frames[firstInFrame + 1];
                firstInFrame += 2;
            }

        }

        return score;
    }
}