import '../../styles/Buscador.css'
import DatePicker from "react-datepicker"
import { addMonths } from 'date-fns';
import "react-datepicker/dist/react-datepicker.css";
import React, { useState } from 'react';
import es from 'date-fns/locale/es';

const Calendario = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const onChange = (dates) => { 
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };
  console.log('start',startDate);
  console.log('end',endDate);
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

      showDisabledMonthNavigation
      
    />
    
  );

}

export default Calendario;