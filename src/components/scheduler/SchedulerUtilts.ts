import {AppointmentDataArray, SchedulerSelectOptions} from './SchedulerTypes';

export const DUMMY_APPOINTMENT_DATA : AppointmentDataArray = [
  {
    appointmentTime: "01/29/2023",
    appointmentDuration: 30,
    appointmentType: "Routine",
    providerName: "Max Smith",
    patientName: "Cavin Mardo",
    gurantorName: "Mark Woh",
    appointmentStatus: "Check Out",
    balance: null,
    comments: "",
    eligibility: "Eligible"
  },
  {
    appointmentTime: "01/28/2023",
    appointmentDuration: 50,
    appointmentType: "Routine",
    providerName: "Max Smith",
    patientName: "Cavin Mardo",
    gurantorName: "Mark Woh",
    appointmentStatus: "Check Out",
    balance: 20,
    comments: "",
    eligibility: "Not Eligible"
  },
  {
    appointmentTime: "02/01/2023",
    appointmentDuration: 30,
    appointmentType: "Routine",
    providerName: "Max Smith",
    patientName: "Cavin Mardo",
    gurantorName: "Mark Woh",
    appointmentStatus: "Pending",
    balance: null,
    comments: "",
    eligibility: "Not Eligible"
  },
  {
    appointmentTime: "02/02/2023",
    appointmentDuration: 50,
    appointmentType: "Routine",
    providerName: "Max Smith",
    patientName: "Cavin Mardo",
    gurantorName: "Mark Woh",
    appointmentStatus: "Check Out",
    balance: 50,
    comments: "",
    eligibility: "Eligible"
  },
  {
    appointmentTime: "02/03/2023",
    appointmentDuration: 30,
    appointmentType: "Routine",
    providerName: "Max Smith",
    patientName: "Cavin Mardo",
    gurantorName: "Mark Woh",
    appointmentStatus: "Check Out",
    balance: null,
    comments: "",
    eligibility: "Eligible"
  }
]

export const DUMMY_SELECT_OPTIONS : SchedulerSelectOptions = [
  {
    label: 'Office 1',
    value: 'off1'
  },
  {
    label: 'Office 2',
    value: 'off2'
  },
  {
    label: 'Office 3',
    value: 'off3'
  },
  {
    label: 'Office 4',
    value: 'off4'
  },
  {
    label: 'Office 5',
    value: 'off5'
  },
]

export const getAppointmentData = () : Promise<AppointmentDataArray> => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(Object.values(DUMMY_APPOINTMENT_DATA));
  }, 1000)
});

export const DUMMY_SELECT_LABEL = "Select Office"