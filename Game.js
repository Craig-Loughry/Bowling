"use strict";
exports.__esModule = true;
var Frame_1 = require("./Frame");
var f1 = new Frame_1.Frame(0, 0, 0, 0);
var f2 = new Frame_1.Frame(0, 0, 0, 0);
var f3 = new Frame_1.Frame(0, 0, 0, 0);
var f4 = new Frame_1.Frame(0, 0, 0, 0);
var f5 = new Frame_1.Frame(0, 0, 0, 0);
var f6 = new Frame_1.Frame(0, 0, 0, 0);
var f7 = new Frame_1.Frame(0, 0, 0, 0);
var f8 = new Frame_1.Frame(0, 0, 0, 0);
var f9 = new Frame_1.Frame(0, 0, 0, 0);
var f10 = new Frame_1.Frame(0, 0, 0, 0);
var fArray = [f1, f2, f3, f4, f5, f6, f7, f8, f9, f10];
var fnum = 0;
var totalscore = 0;
console.log("Bowling Game");
for (var _i = 0, fArray_1 = fArray; _i < fArray_1.length; _i++) {
    var f = fArray_1[_i];
    fnum++;
    f.frame = fnum;
    var pinsLeft = 10;
    f.roll1 = getRandomInt(pinsLeft);
    if (f.roll1 != 10) {
        pinsLeft -= f.roll1;
        f.roll2 = getRandomInt(pinsLeft());
    }
    pinsLeft -= f.roll1;
    f.roll2 = getRandomInt(pinsLeft);
    f.score = f.roll1 + f.roll2;
    totalscore += f.score;
    console.log(f.about());
}
function getRandomInt(pinsLeft) {
    return Math.floor(Math.random() * pinsLeft);
}
