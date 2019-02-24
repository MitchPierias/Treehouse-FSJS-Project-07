import React from 'react';
// Create Context
const ConfigContext = React.createContext();
// Create and export consumer and provider
export const Provider = ConfigContext.Provider;
export const Consumer = ConfigContext.Consumer;