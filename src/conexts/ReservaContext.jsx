import { createContext, useContext, useState } from 'react'

const ReservaContext = createContext()

export const ReservaContextProvider = ({ children }) => {
  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)

  const updateDates = async (start, end) => {
    setStartDate(start)
    setEndDate(end)
  }

  return (
    <ReservaContext.Provider value={{ startDate, endDate, updateDates }}>
      {children}
    </ReservaContext.Provider>
  )
}

export const useReservaContext = () => {
  return useContext(ReservaContext)
}
