import classNames from 'classnames'
import ReactSelect, {
  PropsValue,
  SingleValue,
  StylesConfig,
  GroupBase,
} from 'react-select'
import style from '../shared/react-select.module.css'
import assets from '../../../../../assets.json'
import { IStateValidationsProps } from '../shared/formShared'
import ValidationMessage from '../../feedback/ValidationMessage'

export interface IAutoCompliteOption {
  value: string
  label: string
}
interface AutoCompliteProps extends GlobalProps, IStateValidationsProps {
  options: IAutoCompliteOption[]
  value?: PropsValue<IAutoCompliteOption>
  isDisabled?: boolean
  isLoading?: boolean
  defaultValue?: IAutoCompliteOption
  inputValue?: string
  name?: string
  placeholder?: string
  feedbackText?: string
  onInputChange?: (newValue: string) => void
  onChange?: (newValue: SingleValue<IAutoCompliteOption>) => void
  autoFocus?: boolean
}

function AutoComplite({
  options,
  className,
  state = 'danger',
  feedbackText,
  ...rest
}: AutoCompliteProps) {
  // const styles: StylesConfig<IAutoCompliteOption, false, GroupBase<IAutoCompliteOption>> =
  //   {
  //     control: (provide, state) => ({
  //       ...provide,
  //       border: `1px solid ${assets.colors['gray-border']}`,
  //     }),
  //   }
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
        // isClearable
        isSearchable
        menuShouldBlockScroll
        // menuIsOpen
        // styles={styles}
        {...rest}
      />
      {feedbackText && (
        <ValidationMessage state={state}>{feedbackText}</ValidationMessage>
      )}
    </>
  )
}
export default AutoComplite
