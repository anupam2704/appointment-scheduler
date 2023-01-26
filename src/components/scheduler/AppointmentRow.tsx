import Grid from '@mui/material/Grid';
import { AppointmentRowProps } from "./SchedulerTypes";

/**
 * Props
 * @param apppointmentData data for apponitment
 * @returns A Scheduler Appointment Row Component
 */

const AppointmentRowLabel = ({ label } : { label: string }) => {
  return (
    <p style={{margin: 0, padding:0, color: '#979797', fontSize: 12}}>{label}</p>
  )
}

const AppointmentRowValue = ({ value } : { value: any }) : JSX.Element => {
  return (
    <p style={{margin: 0, padding:0, fontSize: 14}}>{value}</p>
  )
}

const AppointmentRow = (props: AppointmentRowProps) : JSX.Element => {
  const {
    apppointmentData
  } = props;

  return (
    <div style={{ border: '1px solid #CCCCCC', borderRadius: 4, padding: 15}}>
      <Grid container spacing={2} style={{ marginBottom: 10}}>
        <Grid item xs={12} md={3} spacing={2}>
          <div>
            <AppointmentRowLabel label='Appointment Time' />
          </div>
          <div>
            <AppointmentRowValue value={apppointmentData.appointmentTime} />
          </div>
        </Grid>
        <Grid item xs={12} md={3} spacing={2}>
          <div>
            <AppointmentRowLabel label='Appointment Duration' />
          </div>
          <div>
            <AppointmentRowValue value={apppointmentData.appointmentDuration + " " + "Min"} />
          </div>
        </Grid>
        <Grid item xs={12} md={3} spacing={2}>
          <div>
            <AppointmentRowLabel label='Appointment Type' />
          </div>
          <div>
            <AppointmentRowValue value={apppointmentData.appointmentTime} />
          </div>
        </Grid>
        <Grid item xs={12} md={3} spacing={2}>
          <div>
            <AppointmentRowLabel label='Provider Name' />
          </div>
          <div>
            <AppointmentRowValue value={apppointmentData.providerName} />
          </div>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          <div>
            <AppointmentRowLabel label='Patient Name' />
          </div>
          <div>
            <AppointmentRowValue value={apppointmentData.patientName} />
          </div>
        </Grid>
        <Grid item xs={12} md={3}>
          <div>
            <AppointmentRowLabel label='Appointmnet Status' />
          </div>
          <div>
            <AppointmentRowValue value={apppointmentData.appointmentStatus} />
          </div>
        </Grid>
        <Grid item xs={12} md={3}>
          <div>
            <AppointmentRowLabel label='Eligibility' />
          </div>
          <div>
            <AppointmentRowValue value={apppointmentData.eligibility} />
          </div>
        </Grid>
        <Grid item xs={12} md={3}>
          <div>
            <AppointmentRowLabel label='Balance' />
          </div>
          <div>
            <AppointmentRowValue value={apppointmentData.balance || "-"} />
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default AppointmentRow;