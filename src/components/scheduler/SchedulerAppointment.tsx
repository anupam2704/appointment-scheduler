import { memo, ReactNode, useEffect, useState } from "react";
import { SchedulerAppointmentProps } from "./SchedulerTypes";
import CircularProgress from '@mui/material/CircularProgress';

interface ScheulderAppointmentState {
  loading: boolean;
  error: boolean;
  list: Array<any>;
}

const AppointmentLoader = () : JSX.Element => {
  return (
    <div style={{ marginTop: 20, textAlign: 'center'}}>
      <CircularProgress />
    </div>
  )
}

const AppointmentError = () : JSX.Element => {
  return (
    <div style={{ padding: 30, fontSize: 14, color: 'red', textAlign: 'center'}}>
      Failed to load appointments
    </div>
  )
}

const NoAppointmentView = () : JSX.Element => {
  return (
    <div style={{ padding: 30, fontSize: 14, color: '#666666', textAlign: 'center'}}>
      No Appointments Scheduled
    </div>
  )
}

/**
 * Props
 * @param selectedDate the date for which the appointments are to be shown
 * @param selectedDate the office for which the appointments are to be shown
 * @returns A Scheduler Appointment Component that shows a list of appointements. It has loading, error, data and no-data states.
 */

const ScheulderAppointment = ({ selectedDate, selectedOffice }: SchedulerAppointmentProps) => {

  const [state, setState] = useState<ScheulderAppointmentState>({
    loading: false,
    error: false,
    list: []
  })

  const {loading, error, list} = state;

  // Whenever date or selected option changes, make an api call
  useEffect(() => {
    setState(prevState => ({...prevState}))
  }, [selectedDate, selectedOffice])

  const renderContent = () : ReactNode => {
    if(!list.length) {
      return (
        <NoAppointmentView />
      )
    } else {
      return (
        <div>Some Appointments</div>
      )
    }

  }

  const renderDifferentStates = () : ReactNode => {
    if(loading) {
      return (
        <AppointmentLoader />
      )
    } else if(error) {
      return (
        <AppointmentError />
      )
    } else {
      return renderContent()
    }
  }

  return (
    <div style={{ width: '100%', height: 800}}>
      {renderDifferentStates()}
    </div>
  )
}

const MemoizedScheduler = memo(ScheulderAppointment)

export default MemoizedScheduler;