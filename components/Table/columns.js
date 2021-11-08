// import { image } from '../../public/images/bosses.png';
export const COLUMNS = (filter1, filter2) => {
  return [
    {
      Header: 'Item',
      accessor: 'item',
      Filter: '',
    },
    { Header: 'Type', accessor: 'type', Filter: '' },
    {
      Header: 'Status',
      accessor: 'status',
      Filter: filter1,
      filter: 'includes',
    },
    {
      Header: ' ',
      accessor: 'id',
      Filter: '',
    },
  ];
};

export const mock_data = [
  {
    image: '',
    item: `LOREM IPSUM`,
    type: 'AE IPSUM',
    status: 'ACTIVE',
    id: 1,
  },
  {
    item: 'LOREM IPSUM',
    type: 'LOREM IPSUM',
    status: 'DEACTIVATED',
    id: 2,
  },
];
