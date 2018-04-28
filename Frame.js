"use strict";
exports.__esModule = true;
var Frame = /** @class */ (function () {
    function Frame(inFrame, inRoll1, inRoll2, inScore) {
        this.frame = inFrame;
        this.roll1 = inRoll1;
        this.roll2 = inRoll2;
        this.score = inScore;
    }
    Frame.prototype.about = function () {
        return "Bowling:  frame=" + this.frame + ",\n                          roll1=" + this.roll1 + ",\n                          roll2=" + this.roll2 + ",\n                          score=" + this.score;
    };
    return Frame;
}());
exports.Frame = Frame;
