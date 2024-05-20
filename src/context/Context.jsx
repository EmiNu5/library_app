import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

// Crea el contexto
export const Context = createContext();

// Crea el proveedor
export const Provider = ({ children }) => {
    const [count, setCount] = useState(0);

    const value = {
        count,
        increment: () => {
            setCount(count + 1);
        },
        decrement: () => {
            setCount(count - 1);
        },
    };

    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    );
};

Provider.propTypes = {
    children: PropTypes.node.isRequired,
};

// Exporta por defecto el proveedor para uso fácil
export default Provider;