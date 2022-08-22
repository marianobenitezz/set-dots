export function setDots (number: string | number): string {

    let dotsSetted = number.toString()

    if (dotsSetted.length > 3) {
        dotsSetted = dotsSetted.substring(0, dotsSetted.length - 3) + '.' + dotsSetted.substring(dotsSetted.length, dotsSetted.length - 3)
    }

    if (dotsSetted.length > 6) {
        dotsSetted = dotsSetted.substring(0, dotsSetted.length - 7) + '.' + dotsSetted.substring(dotsSetted.length, dotsSetted.length - 7)
    }

    if (dotsSetted.length > 9) {
        dotsSetted = dotsSetted.substring(0, dotsSetted.length - 11) + '.' + dotsSetted.substring(dotsSetted.length, dotsSetted.length - 11)
    }

    return dotsSetted
}