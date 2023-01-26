export interface SchedulerSelectOption {
  label: string;
  value: string;
}

export type SchedulerSelectOptions = Array<SchedulerSelectOption>

export interface AppointmentData {
  appointmentTime: string
  appointmentDuration: number
  appointmentType: string
  providerName: string;
  patientName: string;
  gurantorName: string;
  appointmentStatus: "Check Out" | "Pending";
  balance: number | null;
  comments: string;
  eligibility: "Eligible" | "Not Eligible"
}

export type AppointmentDataArray = Array<AppointmentData>;

export interface SchedulerHeaderProps {
  selectValue: string;
  selectOptions: SchedulerSelectOptions;
  selectLabel?: string;
  onSelectValueChange: (value: string) => void
}

export interface SchedulerDatePickerProps {
  selectedDate: string;
  handleDateChange: (date:string) => void
  dateFormat?: string;
  minDatePeriodFromNow?: number;
  maxDatePeriodFromNow?: number;
}

export interface SchedulerAppointmentProps {
  selectedDate: string;
  selectedOffice: string;
}

export interface SchedulerProps {
  selectOptions: SchedulerSelectOptions
  selectLabel?: string;
  minDatePeriodFromNow?: number;
  maxDatePeriodFromNow?: number;
  dateFormat?: string;
}
