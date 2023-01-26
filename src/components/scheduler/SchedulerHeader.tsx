import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid';
import { SchedulerHeaderProps } from './SchedulerTypes';

/**
 * Props
 * @param selectOptions options to show in select box
 * @param selectValue selected value for the select dropdown
 * @param selectLabel [optional] lable for the select box
 * @param onSelectValueChange function that gets called whenever the dropdown value changes
 * @returns A Scheduler Header component that renders a Scheduler header
 */
const SchedulerHeader = ({ selectOptions, selectValue, selectLabel, onSelectValueChange }: SchedulerHeaderProps) : JSX.Element => {

  const handleChange = (event: any) => {
    onSelectValueChange(event.target.value)
  };

  const label = selectLabel ? selectLabel: "Select"

  return (
    <Grid container spacing={2}>
      <Grid item xs={5} >
        <FormControl fullWidth>
        <InputLabel id="opt-select">{label}</InputLabel>
        <Select
          labelId="opt-select"
          id="opt-select"
          value={selectValue}
          label={label}
          onChange={handleChange}
        >
          {selectOptions.map(opt => (
            <MenuItem key={opt.value} value={opt.value}>{opt.label}</MenuItem>
          ))}
        </Select>
        </FormControl>
      </Grid>
    </Grid>
  )
}

export default SchedulerHeader;