import { memo } from "react";
import moment from "moment";
import { SchedulerDatePickerProps } from "./SchedulerTypes";
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';

/**
 * Props
 * @param selectedDate current selected date
 * @param handleDateChange function to handle date change
 * @param dateFormat format of date that is to be used
 * @param minDatePeriodFromNow back date limit for calendar
 * @param maxDatePeriodFromNow future date limit for calendar
 * @returns a date picker component
 */
const SchedulerDatePicker = (props: SchedulerDatePickerProps) => {

  const {
    selectedDate,
    handleDateChange,
    dateFormat = "MM/DD/YYYY",
    minDatePeriodFromNow,
    maxDatePeriodFromNow = 30,
  } = props;

  const handleChange = (date:any) => {
    handleDateChange(moment(date).format(dateFormat));
  };

  return (
   <div style={{ position: 'relative'}}>
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <StaticDatePicker
          componentsProps={{
            actionBar: {
              actions: []
            }
          }}
          disableOpenPicker
          label="Selected Date"
          inputFormat={dateFormat}
          value={selectedDate || moment(new Date()).format(dateFormat)}
          onChange={handleChange}
          minDate={typeof(minDatePeriodFromNow) === "number" ? new Date(new Date().setDate(new Date().getDate() - minDatePeriodFromNow)) : undefined}
          maxDate={typeof(maxDatePeriodFromNow) === "number" ? new Date(new Date().setDate(new Date().getDate() + maxDatePeriodFromNow)) : undefined}
          renderInput={() => <div />}
          />
      </LocalizationProvider>
   </div>
  )
}

const MemoizedSchedulerDatePicker = memo(SchedulerDatePicker);

export default MemoizedSchedulerDatePicker;