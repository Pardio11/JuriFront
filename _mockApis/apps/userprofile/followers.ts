// project imports
import mock from '../../mockAdapter';
import user1 from '/images/profile/c1.jpg';
import user8 from '/images/profile/c2.jpg';
import user3 from '/images/profile/c3.jpg';
import user4 from '/images/profile/c4.jpg';
import user5 from '/images/profile/c5.jpg';


// types
export type KeyedObject = {
    [key: string]: string | number | KeyedObject | any;
};

// followers list

const followers: KeyedObject[] = [
    {
        id: '#1Followers_Barney',
        avatar: user1,
        name: 'Jesus Vazquez',
        location: 'Dubai',
        follow: 1
    },
    {
        id: '#2Followers_Thea',
        avatar: user8,
        name: 'Alberto Pardio',
        location: 'Yucatan',
        follow: 1
    },
    {
        id: '#3Followers_Guiseppe',
        avatar: user3,
        name: 'Javier Tadeo',
        location: 'Papua Nuevaguinea',
        follow: 1
    },
    {
        id: '#4Followers_Henderson',
        avatar: user4,
        name: 'Carlos Salas',
        location: 'Apple City',
        follow: 1
    },
    {
        id: '#5Followers_Maddison',
        avatar: user5,
        name: 'Mauricio Lara',
        location: 'Veracruz',
        follow: 1
    },
    
];

// ==============================|| MOCK SERVICES ||============================== //

mock.onGet('/api/followers/list').reply(200, { followers });

// mock.onGet('/api/followers/list').reply(() => {
//     return [200, followers];
// });
