import mock from '../../mockAdapter';

interface NotesType {
    id?: number | any;
    color?: string;
    title?: string;
    datef?: string | Date;
}

const NotesData: NotesType[] = [
    {
        id: 1,
        color: 'primary',
        title: 'Ver al abogado',
        datef: '2023-06-03T23:28:56.782Z'
    },
    {
        id: 2,
        color: 'error',
        title: 'Asistir al juzgado',
        datef: '2023-06-02T23:28:56.782Z'
    },
    {
        id: 3,
        color: 'warning',
        title: 'Junta con la contra parte',
        datef: '2023-06-01T23:28:56.782Z'
    },
    {
        id: 4,
        color: 'success',
        title: 'Reunion con el encargado del caso',
        datef: '2023-06-03T23:28:56.782Z'
    }
];

interface colorVariationType {
    id?: number;
    color?: string;
}

export const colorVariation: colorVariationType[] = [
    {
        id: 1,
        color: 'warning'
    },
    {
        id: 2,
        color: 'secondary'
    },
    {
        id: 3,
        color: 'error'
    },
    {
        id: 4,
        color: 'success'
    },
    {
        id: 5,
        color: 'primary'
    }
];

mock.onGet('/api/data/notes/NotesData').reply(() => {
    return [200, NotesData];
});
export default NotesData;
