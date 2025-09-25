
export type Animal = {
    slug: string;
    name: string;
    short: string;
    care: string;
    food: string;
    housing: string;
    // valgfrit: billede pr. dyr
    image?: string;
};


export const animals: Animal[] = [
    {
        slug: "hamster",
        name: "Hamster",
        short: "Lille natteravn – kræver roligt miljø og aktivitet.",
        care: "Dagligt tjek, hjul/aktiviteter, sandbad, skjulesteder.",
        food: "Balanceret foder + lidt grønt, frisk vand.",
        housing: "Min. 100×50 cm bundareal, dybt strøelse til at grave."
    },
    {
        slug: "marsvin",
        name: "Marsvin",
        short: "Sociale – trives bedst i par.",
        care: "Kontakt dagligt, klip klør, hø af god kvalitet.",
        food: "Hø ad libitum, pellets, C-vitamin, grønt.",
        housing: "Stor løbegård/bur; mange skjulesteder."
    },
];


/* 
export type Animal = {
    slug: string;
    name: string;
    short: string;
    care: string; // Pleje
    food: string; // Foder
    housing: string; // Bur/størrelse/indretning
};


export const animals: Animal[] = [
    {
        slug: 'hamster',
        name: 'Hamster',
        short: 'Lille, natteravn – kræver roligt miljø og aktivitetsmuligheder.',
        care: 'Daglig tjek, hjul/aktiviteter, skjulesteder, sandbad.',
        food: 'Balanceret hamsterfoder, friske grøntsager i små mængder, rent vand.',
        housing: 'Stort bur/minimum 100x50 cm bundareal, dybt strøelse til at grave.'
    },
    {
        slug: 'marsvin',
        name: 'Marsvin',
        short: 'Sociale – trives bedst i par eller gruppe.',
        care: 'Daglig kontakt, klipning af klør, høkvalitet hø ad libitum.',
        food: 'Hø ad libitum, pellets, C‑vitamin, friske grøntsager.',
        housing: 'Stor løbegård eller bur – jo større jo bedre, mange skjulesteder.'
    }
];
*/