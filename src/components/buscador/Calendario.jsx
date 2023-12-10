import '../../styles/Buscador.css'
import DatePicker from "react-datepicker"
import { addMonths } from 'date-fns';
import "react-datepicker/dist/react-datepicker.css";
import React from 'react';
import es from 'date-fns/locale/es';
import { useReservaContext } from '../../conexts/ReservaContext';

const Calendario = () => {
  const { startDate, endDate, updateDates } = useReservaContext();
  
  const onChange = (dates) => { 
    const [start, end] = dates;
    updateDates(start,end)
  };

  return (
    <DatePicker
      dateFormat="dd/MM/yyyy"
      selected={startDate}
      onChange={onChange}
      minDate={new Date()}
      maxDate={addMonths(new Date(), 6)}
      startDate={startDate}
      endDate={endDate}
      selectsRange
      locale={es}
      showDisabledMonthNavigation/>
  );
}

export default Calendario;