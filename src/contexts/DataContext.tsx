import { createContext } from 'react';

export interface DataContextState {
  data: JSON | null;
  setData: (data: JSON) => void;
  isLoading: boolean;
  error: Error | null;
}

const DataContext = createContext <DataContextState |undefined> (undefined) ;

export default DataContext;