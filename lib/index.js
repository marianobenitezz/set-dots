"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setDots = void 0;
function setDots(number) {
    let dotsSetted = number.toString();
    if (dotsSetted.length > 3) {
        dotsSetted = dotsSetted.substring(0, dotsSetted.length - 3) + '.' + dotsSetted.substring(dotsSetted.length, dotsSetted.length - 3);
    }
    if (dotsSetted.length > 6) {
        dotsSetted = dotsSetted.substring(0, dotsSetted.length - 7) + '.' + dotsSetted.substring(dotsSetted.length, dotsSetted.length - 7);
    }
    if (dotsSetted.length > 9) {
        dotsSetted = dotsSetted.substring(0, dotsSetted.length - 11) + '.' + dotsSetted.substring(dotsSetted.length, dotsSetted.length - 11);
    }
    return dotsSetted;
}
exports.setDots = setDots;
//# sourceMappingURL=index.js.map