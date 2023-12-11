import React, { createContext, useContext, useState } from 'react';

const ReservaContext = createContext();

export const ReservaContextProvider = ({ children }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);

  const updateDates = (start, end) => {
    setStartDate(start);
    setEndDate(end);
  };

  return (
    <ReservaContext.Provider value={{ startDate, endDate, updateDates }}>
      {children}
    </ReservaContext.Provider>
  );
};

export const useReservaContext = () => {
  return useContext(ReservaContext);
};