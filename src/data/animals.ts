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