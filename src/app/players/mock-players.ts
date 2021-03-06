import { Player } from './player';

export const PLAYERS: Player[] = [
    {
        id: 1,
        lastName: 'James',
        firstName: 'Lebron',
        active: 'actif',
        team: 'Los Angeles Lakers',
        country: 'USA',
        dateOfBirth: '30/12/1984',
        placeOfBirth: 'Akron',
        height: 203,
        weight: 113,
        position: ['Ailier', 'Meneur'],
        number: 23,
        draft: '1er Cleveland Cavaliers 2003',
        picture: 'assets/img/lebron_james.png',
        wall: 'assets/img/lebron_james_wall.jpg',
        created: new Date()
    },
    {
        id: 2,
        lastName: 'Durant',
        firstName: 'Kevin',
        active: 'actif',
        team: 'Golden State Warriors',
        country: 'USA',
        dateOfBirth: '29/09/1988',
        placeOfBirth: 'Washington D.C.',
        height: 206,
        weight: 109,
        position: ['Ailier'],
        number: 35,
        draft: '2ème Seattle Supersonics 2007',
        picture: 'assets/img/kevin_durant.png',
        wall: 'assets/img/kevin_durant_wall.jpg',
        created: new Date()
    },
    {
        id: 3,
        lastName: 'Harden',
        firstName: 'James',
        active: 'actif',
        team: 'Houston Rockets',
        country: 'USA',
        dateOfBirth: '26/08/1989',
        placeOfBirth: 'Los Angeles (CA)',
        height: 196,
        weight: 99,
        position: ['Arrière'],
        number: 13,
        draft: '3ème Oklahoma City Thunder 2009',
        picture: 'assets/img/james_harden.png',
        wall: 'assets/img/james_harden_wall.jpg',
        created: new Date()
    },
    {
        id: 4,
        lastName: 'Curry',
        firstName: 'Stephen',
        active: 'actif',
        team: 'Golden State Warriors',
        country: 'USA',
        dateOfBirth: '14/03/1988',
        placeOfBirth: 'Akron',
        height: 191,
        weight: 84,
        position: ['Meneur'],
        number: 30,
        draft: '7ème Golden State Warriors 2009',
        picture: 'assets/img/stephen_curry.png',
        wall: 'assets/img/stephen_curry_wall.jpg',
        created: new Date()
    },
    {
        id: 5,
        lastName: 'Thompson',
        firstName: 'Klay',
        active: 'actif',
        team: 'Golden State Warriors',
        country: 'USA',
        dateOfBirth: '8/02/1990',
        placeOfBirth: 'Los Angeles (CA)',
        height: 201,
        weight: 93,
        position: ['Arrière'],
        number: 11,
        draft: '11ème Golden State Warriors 2011',
        picture: 'assets/img/klay_thompson.png',
        wall: 'assets/img/klay_thompson_wall.jpg',
        created: new Date()
    },
    {
        id: 6,
        lastName: 'Antetokounmpo',
        firstName: 'Giannis',
        active: 'actif',
        team: 'Milwaukee Bucks',
        country: 'Grèce',
        dateOfBirth: '6/12/1994',
        placeOfBirth: 'Athènes',
        height: 205,
        weight: 93,
        position: ['Arrière'],
        number: 34,
        draft: '15ème Milwaukee Bucks 2013',
        picture: 'assets/img/giannis_antetokounmpo.png',
        wall: 'assets/img/giannis_antetokounmpo_wall.jpg',
        created: new Date()
    },
    {
        id: 7,
        lastName: 'Leonard',
        firstName: 'Kawhi',
        active: 'actif',
        team: 'San Antonio Spurs',
        country: 'USA',
        dateOfBirth: '29/06/1991',
        placeOfBirth: 'Riverside',
        height: 201,
        weight: 102,
        position: ['Ailier'],
        number: 34,
        draft: '15ème Indiana Pacers 2011',
        picture: 'assets/img/kawhi_leonard.png',
        wall: 'assets/img/kawhi_leonard_wall.jpg',
        created: new Date()
    },
    {
        id: 8,
        lastName: 'George',
        firstName: 'Paul',
        active: 'actif',
        team: 'Indiana Pacers',
        country: 'USA',
        dateOfBirth: '2/05/1990',
        placeOfBirth: 'Palmdale, Californie',
        height: 203,
        weight: 100,
        position: ['Ailier'],
        number: 13,
        draft: '10ème Indiana Pacers 2010',
        picture: 'assets/img/paul_george.png',
        wall: 'assets/img/paul_george_wall.jpg',
        created: new Date()
    },
    {
        id: 9,
        lastName: 'Irving',
        firstName: 'Kyrie',
        active: 'actif',
        team: 'Boston Celtics',
        country: 'USA',
        dateOfBirth: '23/03/1992',
        placeOfBirth: 'Melbourne',
        height: 191,
        weight: 88,
        position: ['Meneur'],
        number: 2,
        draft: '1er Cleveland Cavaliers 2011',
        picture: 'assets/img/kyrie_irving.png',
        wall: 'assets/img/kyrie_irving_wall.jpg',
        created: new Date()
    }
];
