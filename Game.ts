import {Frame} from './Frame';
    
let f1: Frame = new Frame(0,0,0,0);
let f2: Frame = new Frame(0,0,0,0);
let f3: Frame = new Frame(0,0,0,0);
let f4: Frame = new Frame(0,0,0,0);
let f5: Frame = new Frame(0,0,0,0);
let f6: Frame = new Frame(0,0,0,0);
let f7: Frame = new Frame(0,0,0,0);
let f8: Frame = new Frame(0,0,0,0);
let f9: Frame = new Frame(0,0,0,0);
let f10: Frame = new Frame(0,0,0,0);

let fArray:Frame[] = [f1, f2, f3, f4, f5, f6, f7, f8, f9, f10];
let fnum: number = 0;
let totalscore: number = 0; 
console.log("Bowling Game");

for(let f of fArray) { 
    fnum++;
    f.frame = fnum;
    let pinsLeft: number = 10;
    f.roll1 = getRandomInt(pinsLeft);
    if (f.roll1 != 10) {
    pinsLeft -= f.roll1;
    f.roll2 = getRandomInt(pinsLeft);
    }  
    pinsLeft -= f.roll1;
    f.roll2 = getRandomInt(pinsLeft);
    f.score = f.roll1 + f.roll2;
    totalscore += f.score; 
    console.log(f.about());
}

function getRandomInt (pinsLeft: number): number {
    return Math.floor(Math.random() *( pinsLeft + 1));
}

                      
    
