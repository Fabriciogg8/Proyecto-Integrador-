import DatePicker from 'react-datepicker'
import { addMonths } from 'date-fns'
import 'react-datepicker/dist/react-datepicker.css'
import es from 'date-fns/locale/es'
import { useReservaContext } from '../../conexts/ReservaContext'

const Calendario = () => {
  const { startDate, endDate, updateDates } = useReservaContext()

  const onChange = dates => {
    if (Array.isArray(dates) && dates.length === 2) {
      const [start, end] = dates
      updateDates(start || null, end || null)
    }
  }

  return (
    <DatePicker
      dateFormat='dd/MM/yyyy'
      selected={startDate}
      onChange={onChange}
      startDate={startDate}
      endDate={endDate}
      minDate={new Date()}
      maxDate={addMonths(new Date(), 6)}
      selectsRange
      locale={es}
      showDisabledMonthNavigation
    />
  )
}

export default Calendario
