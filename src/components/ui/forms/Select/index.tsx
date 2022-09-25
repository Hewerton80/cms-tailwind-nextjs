import { ChangeEvent, useRef } from 'react'
import cn from 'classnames'
import ValidationMessage from '../../feedback/ValidationMessage'
import {
  formTextElementStyle,
  IStateValidationsProps,
  statesValidations,
} from '../shared/formShared'
import { Callback } from '../../../../types/Global'

interface ISelectOrpion {
  value: string
  text: string
  selected?: boolean
}
interface SelectProps extends GlobalProps, IStateValidationsProps {
  options?: ISelectOrpion[]
  required?: boolean
  defaultValue?: string
  placeholder?: string
  autoFocus?: boolean
  disabled?: boolean
  readOnly?: boolean
  onFocus?: Callback
  onBlur?: Callback
  error?: string
  feedbackText?: string
  value?: string | ReadonlyArray<string> | number | undefined
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void
}

function Select({
  className,
  state = 'danger',
  feedbackText,
  options,
  ...rest
}: SelectProps) {
  const selectRef = useRef<HTMLSelectElement>(null)

  return (
    <>
      <select
        className={cn(
          formTextElementStyle,
          '!py-0',
          feedbackText && statesValidations[state].input,
          // 'dark:border-white/10 dark:text-light',
          className
        )}
        ref={selectRef}
        {...rest}
      >
        {options?.map((option) => (
          <option
            className="dark:text-light dark:bg-dark-card"
            key={option.value}
            value={option.value}
            selected={option?.selected}
          >
            {option.text}
          </option>
        ))}
      </select>
      {feedbackText && (
        <ValidationMessage state={state}>{feedbackText}</ValidationMessage>
      )}
    </>
  )
}

export default Select
