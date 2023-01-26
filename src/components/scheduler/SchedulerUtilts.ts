import {AppointmentDataArray, SchedulerSelectOptions} from './SchedulerTypes';

export const DUMMY_APPOINTMENT_DATA : AppointmentDataArray = [
  {
    id: "1",
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
    id: "2",
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
    id: "3",
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
    id: "4",
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
    id: "5",
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
  },
  {
    id: "6",
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
    id: "7",
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
    id: "8",
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
    id: "9",
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
    id: "10",
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