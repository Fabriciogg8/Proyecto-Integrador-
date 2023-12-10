import '../../styles/Buscador.css'
import DatePicker from "react-datepicker"
import { addMonths } from 'date-fns';
import "react-datepicker/dist/react-datepicker.css";
import React, { useState } from 'react';
import es from 'date-fns/locale/es';

const Calendario = ({startDate, endDate, setStartDate, setEndDate}) => {

  const [start, end] = [startDate, endDate];
  const onChange = (dates) => {
    setStartDate(dates[0]);
    setEndDate(dates[1]);
  };
  return (
    <DatePicker
      dateFormat="dd/MM/yyyy"
      selected={start}
      onChange={onChange}
      minDate={new Date()}
      maxDate={addMonths(new Date(), 6)}
      startDate={start}
      endDate={end}
      selectsRange
      locale={es}

      showDisabledMonthNavigation
    />
  );
}

export default Calendario;