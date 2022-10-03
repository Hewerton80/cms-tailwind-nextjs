import classNames from 'classnames'
import ReactSelect, { PropsValue, MultiValue, ActionMeta } from 'react-select'
import style from '../shared/react-select.module.css'
import { IStateValidationsProps } from '../shared/formShared'
import ValidationMessage from '../../feedback/ValidationMessage'
import Spinner from '../../feedback/Spinner'
import assets from '../../../../../assets.json'
export interface IMultSelectOption {
  value: string
  label: string
}
interface MultSelectProps extends GlobalProps, IStateValidationsProps {
  options: IMultSelectOption[]
  value?: PropsValue<IMultSelectOption>
  isDisabled?: boolean
  isLoading?: boolean
  inputValue?: string
  name?: string
  placeholder?: string
  feedbackText?: string
  onInputChange?: (newValue: string) => void
  onChange?: (
    newValue: MultiValue<IMultSelectOption>,
    actionMeta: ActionMeta<IMultSelectOption>
  ) => void
  autoFocus?: boolean
}

function MultSelect({
  options,
  className,
  state = 'danger',
  feedbackText,
  ...rest
}: MultSelectProps) {
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
        options={options}
        isMulti
        isSearchable
        isClearable={false}
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
export default MultSelect
