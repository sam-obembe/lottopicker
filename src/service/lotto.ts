
const POWERBALL = "powerball"
const ALLORNOTHING = "allornothing"

export const CONSTANTS = { POWERBALL, ALLORNOTHING }

export type GameOption = `powerball` | "allornothing" | string

type GameSetup = {
    maxChoices: number
    maxNumber: number
}

export type GameChoices = {
    choices: number[];
    maxNum: number
}


export const setupGame = (game: GameOption): GameSetup => {
    if (game == POWERBALL) {
        return { maxChoices: 5, maxNumber: 71 }
    }
    else if (game == ALLORNOTHING) {
        return { maxChoices: 12, maxNumber: 24 }
    }
    else {
        return { maxChoices: 0, maxNumber: 0 }
    }
}

export const generateChoices = (setup: GameSetup): GameChoices => {
    let max = Math.floor(Math.random() * (setup.maxNumber)) + 1
    let choices = []

    for (let i = 0; i < setup.maxChoices; i++) {
        choices.push(Math.floor(Math.random() * (setup.maxNumber)) + 1)
    }

    return { maxNum: max, choices }
}