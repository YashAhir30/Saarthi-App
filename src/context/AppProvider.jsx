import React, { createContext, useState } from 'react';
import { doctors as doctorsData } from './AppContext';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [doctors, setDoctors] = useState(doctorsData);

    return (
        <AppContext.Provider value={{ doctors }}>
            {children}
        </AppContext.Provider>
    );
};
