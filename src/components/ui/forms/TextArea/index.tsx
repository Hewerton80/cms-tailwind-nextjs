import { ChangeEvent, KeyboardEventHandler, TextareaHTMLAttributes } from 'react'
import cn from 'classnames'
import ValidationMessage from '../../feedback/ValidationMessage'
import {
  formTextElementStyle,
  IStateValidationsProps,
  statesValidations,
} from '../shared/formShared'
import { Callback } from '../../../../types/Global'

interface TextAreaProps extends GlobalProps, IStateValidationsProps {
  required?: boolean
  value?: string
  defaultValue?: string
  placeholder?: string
  autoFocus?: boolean
  disabled?: boolean
  readOnly?: boolean
  onFocus?: Callback
  onBlur?: Callback
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void
  maxLength?: number
  error?: string
  feedbackText?: string
}

function TextArea({ className, feedbackText, state = 'danger', ...rest }: TextAreaProps) {
  return (
    <>
      <textarea
        className={cn(
          formTextElementStyle,
          'h-auto',
          feedbackText && statesValidations[state].input,
          className
        )}
        {...rest}
      />
      {feedbackText && (
        <ValidationMessage state={state}>{feedbackText}</ValidationMessage>
      )}
    </>
  )
}

export default TextArea
