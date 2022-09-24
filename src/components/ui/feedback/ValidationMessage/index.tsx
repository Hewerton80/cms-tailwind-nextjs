import cn from 'classnames'
import { IStateValidationsProps, statesValidations } from '../../forms/formShared'

interface ValidationMessageProps extends GlobalProps, IStateValidationsProps {}

function ValidationMessage({
  children,
  state = 'danger',
  className,
  ...rest
}: ValidationMessageProps) {
  return (
    <p
      className={cn('text-xs mt-1', statesValidations[state].feedbackText, className)}
      {...rest}
    >
      {children}
    </p>
  )
}

export default ValidationMessage
