import React, { createContext, useState } from 'react';

// Crea el contexto
export const AppContext = createContext();

// Crea el proveedor del estado global
export const AppProvider = ({ children }) => {
  const [dni, setDni] = useState('');
  const [email, setEmail] = useState('');
  const [patente, setPatente] = useState('');

  // Define las funciones para actualizar el estado global
  const updateDni = (newDni) => {
    setDni(newDni);
  };

  const updateEmail = (newEmail) => {
    setEmail(newEmail);
  };

  const updatePatente = (newPatente) => {
    setPatente(newPatente);
  };

  // Define el valor del contexto
  const contextValue = {
    dni,
    email,
    patente,
    updateDni,
    updateEmail,
    updatePatente,
  };

  // Retorna el proveedor envolviendo los componentes hijos
  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};