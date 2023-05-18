import React, { createContext, useState } from 'react';

// Crea el contexto
export const AppContext = createContext();

// Crea el proveedor del estado global
export const AppProvider = ({ children }) => {
  const [nombreC, setNombreC] = useState('');
  const [email, setEmail] = useState('');
  const [patente, setPatente] = useState('');

  // Define las funciones para actualizar el estado global
  const updateNombreC = (newNombreC) => {
    setNombreC(newNombreC);
  };

  const updateEmail = (newEmail) => {
    setEmail(newEmail);
  };

  const updatePatente = (newPatente) => {
    setPatente(newPatente);
  };

  // Define el valor del contexto
  const contextValue = {
    nombreC,
    email,
    patente,
    updateNombreC,
    updateEmail,
    updatePatente,
  };

  // Retorna el proveedor envolviendo los componentes hijos
  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};