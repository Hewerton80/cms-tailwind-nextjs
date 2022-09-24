import {
  forwardRef,
  CSSProperties,
  ChangeEventHandler,
  KeyboardEventHandler,
} from 'react'
import cn from 'classnames'
import ValidationMessage from '../../feedback/ValidationMessage'
import { Callback } from '../../../../types/Global'
import {
  IStateValidationsProps,
  statesValidations,
  formTextElementStyle,
} from '../formShared'

interface InputTextProps extends FormTextElement, IStateValidationsProps {
  type?:
    | 'text'
    | 'email'
    | 'password'
    | 'url'
    | 'tel'
    | 'time'
    | 'datetime-local'
    | 'date'
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
