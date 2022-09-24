import { TextareaHTMLAttributes } from 'react'
import cn from 'classnames'
import styles from './styles.module.css'
import ValidationMessage from '../../feedback/ValidationMessage'
import {
  formTextElementStyle,
  IStateValidationsProps,
  statesValidations,
} from '../formShared'

interface TextAreaProps extends FormTextElement, IStateValidationsProps {}

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
      {/* <textarea name="" id="" cols="30" rows="10"></textarea> */}
    </>
  )
}

export default TextArea
