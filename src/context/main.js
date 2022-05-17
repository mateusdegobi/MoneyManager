import {createContext} from 'react';

const initialValue = {
  isAuth: false,
};

export const ContextStoreDefault = createContext(initialValue);
