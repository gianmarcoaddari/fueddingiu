/* eslint-disable no-useless-escape */
import randomItem from 'random-item';

export const winMessage = (n: number) => {
    switch(n) {
        case 1:
            return randomItem(['Piticu su paneri!', 'Giai ndi scis de rebus', 'Pani e casu e binu a rasu']);

        case 2:
            return randomItem(['Ses bravu sceti!', 'Ita ses, Mandrake?']);

        case 3:
            return randomItem(['Su numuru perfetu', 'Bravixeddu']);

        case 4:
            return randomItem(["E giai dd'as fata bella", 'Bandat beni!']);

        case 5:
            return randomItem(['Spaciau su giogu!', 'Chini andat a bellu, arribat sanu', 'Tronus meda, acua pagu']);

        default:
            return randomItem(['Po caridadi', 'Giai ses a frori', 'Pilu pilu', "Ses peus de sa fabrica de Sant'Anna", 'A corpu a corpu si ndi segat sa mata']);
    }
}

export const failMessage = () => {
    const messages = [
        'Andas a mari e no agatas mancu àcua!',
        'Spaciau boboi',
        'Fai comenti faint in Bosa, candu proit lassant a proi',
        'Scedau'
    ];

    return randomItem(messages);
}
