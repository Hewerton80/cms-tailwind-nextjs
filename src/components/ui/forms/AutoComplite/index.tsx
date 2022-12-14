import classNames from 'classnames'
import ReactSelect, { PropsValue, SingleValue } from 'react-select'
import style from '../shared/react-select.module.css'
import { IStateValidationsProps } from '../shared/formShared'
import ValidationMessage from '../../feedback/ValidationMessage'
import Spinner from '../../feedback/Spinner'
import assets from '../../../../../assets.json'
export interface IAutoCompliteOption {
  value: string
  label: string
}
interface AutoCompliteProps extends GlobalProps, IStateValidationsProps {
  options: IAutoCompliteOption[]
  value?: PropsValue<IAutoCompliteOption>
  isDisabled?: boolean
  isLoading?: boolean
  inputValue?: string
  name?: string
  placeholder?: string
  feedbackText?: string
  onInputChange?: (newValue: string) => void
  onChange?: (newValue: SingleValue<IAutoCompliteOption>) => void
  autoFocus?: boolean
}

function AutoComplite({
  className,
  state = 'danger',
  feedbackText,
  ...rest
}: AutoCompliteProps) {
  return (
    <>
      <ReactSelect
        className={classNames(
          style.root,
          {
            [style.success]: feedbackText && state === 'success',
            [style.warning]: feedbackText && state === 'warning',
            [style.danger]: feedbackText && state === 'danger',
          },
          className
        )}
        classNamePrefix="auto-complite"
        isSearchable
        loadingMessage={() => (
          <div className="flex w-full justify-center">
            <Spinner color={assets.colors.info} />
          </div>
        )}
        {...rest}
      />
      {feedbackText && (
        <ValidationMessage state={state}>{feedbackText}</ValidationMessage>
      )}
    </>
  )
}
export default AutoComplite
