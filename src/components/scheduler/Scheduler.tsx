// import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { useState } from 'react';
import ScheulderAppointment from './SchedulerAppointment';
import SchedulerDatePicker from './SchedulerDatePicker';
import ScheulderHeader from './SchedulerHeader';
import { SchedulerProps } from './SchedulerTypes';

interface SchedulerState {
  selectedOffice: string;
  selectedDate: string;
}

/**
 * Main Scheduler Component
 * Props -
 * @param selectOptions options to show in select box
 * @param selectLabel [optional] lable for the select box
 * @param dateFormat [optional] format of date that is to be used
 * @param minDatePeriodFromNow [optional] back date limit for calendar
 * @param maxDatePeriodFromNow [optional] future date limit for calendar
 * @returns Scheudler componet that has an office selector, date picker and appointment view
 */

const Scheulder = (props: SchedulerProps) : JSX.Element => {
  const {
    selectOptions,
    selectLabel,
    minDatePeriodFromNow,
    maxDatePeriodFromNow,
    dateFormat
  } = props;

  const [state, setState] = useState<SchedulerState>({
    selectedOffice: "",
    selectedDate: ""
  })

  const {selectedDate, selectedOffice} = state;

  const handleSelectValChange = (value: string) => {
    setState(prevState => ({...prevState, selectedOffice: value }))
  }

  const handleDateChange = (value: string) => {
    setState(prevState => ({...prevState, selectedDate: value }))
  }

  return (
    <div style={{ height: '100%', width: '100%', background: 'wheatsmoke', display: 'flex', flexDirection: 'column', overflow: 'hidden'}}>
      <div>
        <Grid item xs={12} style={{ borderBottom: '1px solid #CCCCCC'}}>
          <div style={{ padding: 20}}>
            <ScheulderHeader
              selectValue={selectedOffice}
              selectOptions={selectOptions}
              selectLabel={selectLabel}
              onSelectValueChange={handleSelectValChange}
              />
          </div>
        </Grid>
      </div>
      <div style={{ flex: 1, height: 'inherit', overflow: 'hidden'}}>
        <Grid container style={{height: 'inherit'}}>
          <Grid item xs={12} sm={12} md={3} style={{ borderRight: '1px solid #CCCCCC', height: 'inherit'}}>
            <div style={{ padding: 20, height: 'inherit'}}>
              <SchedulerDatePicker
                selectedDate={selectedDate}
                handleDateChange={handleDateChange}
                minDatePeriodFromNow={minDatePeriodFromNow}
                maxDatePeriodFromNow={maxDatePeriodFromNow}
                dateFormat={dateFormat}
                />
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={9} style={{ height: 'inherit' }}>
            <div style={{ padding: 20, height: 'inherit'}}>
              <ScheulderAppointment selectedDate={selectedDate} selectedOffice={selectedOffice} />
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default Scheulder;