export type BankId = string;

export interface Bank {
    id: BankId;
    name: string;
    logo: string;
    url?: string;
}

export interface Deposit {
    name?: string;
    term: number;
    rate: number;
    min: number;
    max: number;
    interest: "monthly" | "end";
    replenishment: number;
    new: boolean;
    finuslugi: boolean;
    retiree: boolean;
    withdrawal: boolean;
}

export interface UpdateEvent {
    date: Date,
    bankId: BankId;
    deposits: Deposit[];
}
