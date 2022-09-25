import { ChangeEvent, forwardRef, KeyboardEventHandler } from 'react'
import cn from 'classnames'
import ValidationMessage from '../../feedback/ValidationMessage'
import {
  statesValidations,
  formTextElementStyle,
  IStateValidationsProps,
} from '../shared/formShared'
import { Callback } from '../../../../types/Global'

interface InputTextProps extends GlobalProps, IStateValidationsProps {
  type?:
    | 'text'
    | 'email'
    | 'password'
    | 'url'
    | 'tel'
    | 'time'
    | 'datetime-local'
    | 'date'
  required?: boolean
  value?: string
  defaultValue?: string
  placeholder?: string
  autoFocus?: boolean
  disabled?: boolean
  readOnly?: boolean
  onFocus?: Callback
  onBlur?: Callback
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  onKeyUp?: KeyboardEventHandler<HTMLInputElement>
  maxLength?: number
  error?: string
  feedbackText?: string
}

// eslint-disable-next-line react/display-name
const InputText = forwardRef(
  (
    { className, type = 'text', state = 'danger', feedbackText, ...rest }: InputTextProps,
    ref: any
  ) => {
    return (
      <>
        <input
          ref={ref}
          className={cn(
            feedbackText && statesValidations[state].input,
            formTextElementStyle,
            className
          )}
          type={type}
          {...rest}
        />
        {feedbackText && (
          <ValidationMessage state={state}>{feedbackText}</ValidationMessage>
        )}
      </>
    )
  }
)

export default InputText
