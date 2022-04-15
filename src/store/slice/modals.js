import { createSlice } from '@reduxjs/toolkit';

const currentTechInfo = {
  name: 'IMG_4985.HEIC',
  size: '3.9 MB',
  source:
    'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',

  sharedWith: [
    {
      id: 1,
      name: 'Aimee Douglas',
      imageUrl:
        'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=1024&h=1024&q=80',
    },
    {
      id: 2,
      name: 'Andrea McMillan',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixqx=oilqXxSqey&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  ],
};

const modalsSlice = createSlice({
  name: 'modals',
  initialState: {
    techSideOver: false,
    techSideOverData: currentTechInfo,
    // anotherModal: true,
    // anotherModalData: {},
  },
  reducers: {
    techSideOver: (store, { payload }) => {
      return (store = { ...store, techSideOver: payload });
    },
    setTechSideOver: (store, { payload }) => {
      return (store = { ...store, techSideOverData: payload });
    },
  },
});

export default modalsSlice;
