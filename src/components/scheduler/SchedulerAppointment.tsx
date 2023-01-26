import { memo, ReactNode, useEffect, useState } from "react";
import { AppointmentDataArray, SchedulerAppointmentProps } from "./SchedulerTypes";
import CircularProgress from '@mui/material/CircularProgress';
import { getAppointmentData } from "./SchedulerUtilts";
import AppointmentRow from "./AppointmentRow";

interface ScheulderAppointmentState {
  loading: boolean;
  error: boolean;
  list: AppointmentDataArray;
}

const AppointmentLoader = (): JSX.Element => {
  return (
    <div style={{ marginTop: 20, textAlign: 'center' }}>
      <CircularProgress />
    </div>
  )
}

const AppointmentError = (): JSX.Element => {
  return (
    <div style={{ padding: 30, fontSize: 14, color: 'red', textAlign: 'center' }}>
      Failed to load appointments
    </div>
  )
}

const NoAppointmentView = (): JSX.Element => {
  return (
    <div style={{ padding: 30, fontSize: 14, color: '#666666', textAlign: 'center' }}>
      No Appointments Scheduled
    </div>
  )
}

const NoSelectionView = (): JSX.Element => {
  return (
    <div style={{ padding: 30, fontSize: 14, color: '#666666', textAlign: 'center' }}>
      Please select office and date to view appointments
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

  const { loading, error, list } = state;

  const fetchAppointment = async (): Promise<void> => {
    setState(prevState => ({ ...prevState, loading: true, error: false }))
    try {
      const res = await getAppointmentData()
      setState(prevState => ({ ...prevState, loading: false, list: res }))
    } catch (e) {
      setState(prevState => ({ ...prevState, error: true }))
    }
  }

  // Whenever date or selected option changes, make an api call
  useEffect(() => {
    if (selectedDate && selectedOffice) {
      fetchAppointment()
    }
  }, [selectedDate, selectedOffice])

  const renderContent = (): ReactNode => {
    if (!list.length) {
      return (
        <NoAppointmentView />
      )
    } else {
      return (
        <div style={{ height: 'inherit', overflowY: 'auto'}}>
          {list.map(item => (
            <div key={item.id} style={{ marginBottom: 15 }}>
              <AppointmentRow apppointmentData={item} />
            </div>
          ))}
        </div>
      )

    }

  }

  const renderDifferentStates = (): ReactNode => {
    if (!selectedDate || !selectedOffice) {
      return (
        <NoSelectionView />
      )
    }
    if (loading) {
      return (
        <AppointmentLoader />
      )
    } else if (error) {
      return (
        <AppointmentError />
      )
    } else {
      return renderContent()
    }
  }

  return (
    <div style={{ width: '100%', height: 'inherit' }}>
      {renderDifferentStates()}
    </div>
  )
}

const MemoizedScheduler = memo(ScheulderAppointment)

export default MemoizedScheduler;