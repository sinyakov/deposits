import {UpdateEvent} from "./types";


const mkbEvent: UpdateEvent = {
    bankId: "mkb",
    date: new Date(),
    deposits: [
        {
            rate: 14,
            term: 95,
            min: 10_000,
            max: 1_000_000,
            interest: "end",
            replenishment: 0,
            withdrawal: false,
            new: true,
            finuslugi: true,
            retiree: false,
        },
        {
            rate: 14,
            term: 185,
            min: 10_000,
            max: 1_000_000,
            interest: "end",
            replenishment: 0,
            withdrawal: false,
            new: true,
            finuslugi: true,
            retiree: false,
        },
    ],
}

const bgfEvent: UpdateEvent = {
    bankId: "bgfbank",
    date: new Date(),
    deposits: [
        {
            name: "Классический весна",
            rate: 11.5,
            term: 190,
            min: 30_000,
            max: 100_000_000,
            interest: "monthly",
            replenishment: 0,
            withdrawal: false,
            new: false,
            finuslugi: false,
            retiree: false,
        },
        {
            name: "Доходный",
            rate: 11.3,
            term: 95,
            min: 30_000,
            max: 100_000_000,
            interest: "monthly",
            replenishment: 0,
            withdrawal: false,
            new: false,
            finuslugi: false,
            retiree: false,
        },
        {
            name: "Доходный с пролонгацией»",
            rate: 11.2,
            term: 130,
            min: 30_000,
            max: 100_000_000,
            interest: "monthly",
            replenishment: 0,
            withdrawal: false,
            new: false,
            finuslugi: false,
            retiree: false,
        },

    ],
}

const giEvent: UpdateEvent = {
    bankId: "garant-invest",
    date: new Date(),
    deposits: [
        {
            name: "Летний",
            rate: 12,
            term: 91,
            min: 1_000_000,
            max: 100_000_000,
            interest: "monthly",
            replenishment: 0,
            withdrawal: false,
            new: false,
            finuslugi: false,
            retiree: false,
        },
        {
            name: "Летний",
            rate: 13,
            term: 181,
            min: 1_000_000,
            max: 100_000_000,
            interest: "monthly",
            replenishment: 0,
            withdrawal: false,
            new: false,
            finuslugi: false,
            retiree: false,
        },
        {
            name: "Специальный",
            rate: 12.5,
            term: 271,
            min: 1_000_000,
            max: 100_000_000,
            interest: "monthly",
            replenishment: 0,
            withdrawal: false,
            new: false,
            finuslugi: false,
            retiree: false,
        },
        {
            name: "Специальный",
            rate: 12,
            term: 370,
            min: 1_000_000,
            max: 100_000_000,
            interest: "monthly",
            replenishment: 0,
            withdrawal: false,
            new: false,
            finuslugi: false,
            retiree: false,
        },
    ],
}


const itbEvent: UpdateEvent = {
    bankId: "investtorgbank",
    date: new Date(),
    deposits: [
        {
            rate: 11.3,
            term: 100,
            min: 50_000,
            max: 100_000_000,
            interest: "end",
            replenishment: 0,
            withdrawal: false,
            new: false,
            finuslugi: false,
            retiree: false,
        },
        {
            rate: 12,
            term: 155,
            min: 50_000,
            max: 100_000_000,
            interest: "end",
            replenishment: 0,
            withdrawal: false,
            new: false,
            finuslugi: false,
            retiree: false,
        },
        {
            rate: 11,
            term: 370,
            min: 50_000,
            max: 100_000_000,
            interest: "end",
            replenishment: 0,
            withdrawal: false,
            new: false,
            finuslugi: false,
            retiree: false,
        },
        {
            rate: 9,
            term: 1110,
            min: 50_000,
            max: 100_000_000,
            interest: "end",
            replenishment: 0,
            withdrawal: false,
            new: false,
            finuslugi: false,
            retiree: false,
        },
        {
            rate: 12.5,
            term: 155,
            min: 50_000,
            max: 100_000_000,
            interest: "end",
            replenishment: 0,
            withdrawal: false,
            new: true,
            finuslugi: false,
            retiree: false,
        },
        {
            rate: 11.45,
            term: 370,
            min: 50_000,
            max: 100_000_000,
            interest: "end",
            replenishment: 0,
            withdrawal: false,
            new: true,
            finuslugi: false,
            retiree: false,
        },
        {
            rate: 10.5,
            term: 1110,
            min: 50_000,
            max: 100_000_000,
            interest: "end",
            replenishment: 0,
            withdrawal: false,
            new: true,
            finuslugi: false,
            retiree: false,
        },
        {
            rate: 9.5,
            term: 91,
            min: 50_000,
            max: 100_000_000,
            interest: "monthly",
            replenishment: 30,
            withdrawal: false,
            new: false,
            finuslugi: false,
            retiree: false,
        },
        {
            rate: 11.5,
            term: 181,
            min: 50_000,
            max: 100_000_000,
            interest: "monthly",
            replenishment: 30,
            withdrawal: false,
            new: false,
            finuslugi: false,
            retiree: false,
        },
        {
            rate: 10.5,
            term: 370,
            min: 50_000,
            max: 100_000_000,
            interest: "monthly",
            replenishment: 30,
            withdrawal: false,
            new: false,
            finuslugi: false,
            retiree: false,
        },
    ],
}

export const events = [mkbEvent, giEvent, itbEvent, bgfEvent];