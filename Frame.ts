export class Frame{

frame: number; 
roll1: number;
roll2: number;
score: number;

constructor(inFrame: number, inRoll1: number, inRoll2: number, inScore: number) {
    this.frame = inFrame;
    this.roll1 = inRoll1;
    this.roll2 = inRoll2;
    this.score = inScore; 
}
    about(): string {
        return `Bowling:  frame=${this.frame},
                          roll1=${this.roll1},
                          roll2=${this.roll2},
                          score=${this.score}`; 
    }
}