import { createContext } from 'react';
import { IData } from './interfaces';

export const Context = createContext <IData | null> ( null );
