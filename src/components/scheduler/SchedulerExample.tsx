import Scheulder from "./Scheduler"
import { DUMMY_SELECT_LABEL, DUMMY_SELECT_OPTIONS } from './SchedulerUtilts';

/**
 *
 * @returns A Scheduler Example Component
 */
const SchedulerExample = () : JSX.Element => {
  return (
    <div style={{ width: '100%', height: 800}}>
      <Scheulder
        selectOptions={DUMMY_SELECT_OPTIONS}
        selectLabel={DUMMY_SELECT_LABEL}
        maxDatePeriodFromNow={30}
        minDatePeriodFromNow={0}
        />
    </div>
  )
}

export default SchedulerExample;