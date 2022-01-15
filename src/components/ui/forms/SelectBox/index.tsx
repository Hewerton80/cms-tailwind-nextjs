import { useCallback, useEffect, useMemo, useState } from 'react'
import cn from 'classnames'
import styles from './styles.module.scss'
import DivWitchClickOutsideEvent from '../../overlay/DivWitchClickOutsideEvent'
import InputText from '../InputText'
import { FaCaretDown } from 'react-icons/fa'
import { List, ListItem } from '../../dataDisplay/List'

export interface ISelectBoxOptions {
  value: string
  text: string
}

interface SelectBoxProps {
  id?: string
  className?: string
  options: ISelectBoxOptions[]
  selectedOption?: ISelectBoxOptions
  placeholder?: string
  onChange?: (value: ISelectBoxOptions) => void
}

function SelectBox({
  className,
  options,
  id,
  selectedOption = { value: '', text: '' },
  placeholder = '',
  onChange,
}: SelectBoxProps) {
  const [isFocused, setIsFocused] = useState(false)
  const [search, setSearch] = useState('')

  const [filteredOptions, setFilteredOptions] = useState<ISelectBoxOptions[]>(options)
  const totalOptios = useMemo(() => {
    let totalOptiosTmp = [...options]

    if (selectedOption.value && selectedOption.text) {
      totalOptiosTmp = totalOptiosTmp.filter((opt) => opt.value !== selectedOption.value)
      totalOptiosTmp = [selectedOption, ...totalOptiosTmp]
    }

    totalOptiosTmp = totalOptiosTmp.sort((a, b) => (a.text >= b.text ? 1 : -1))
    return totalOptiosTmp
  }, [options, selectedOption])

  useEffect(() => {
    const searchTrimmed = search.trim()
    if (searchTrimmed) {
      setFilteredOptions(() =>
        totalOptios.filter(({ text }) =>
          text.trim().toLowerCase().includes(searchTrimmed.toLowerCase())
        )
      )
    } else {
      setFilteredOptions(totalOptios)
    }
  }, [search, totalOptios])

  const selectedValueText = useMemo(() => {
    const indexValueText = totalOptios.findIndex(
      (opt) => opt.value === selectedOption.value
    )
    if (indexValueText >= 0) {
      return totalOptios[indexValueText].text
    }
    return selectedOption.text
  }, [selectedOption, totalOptios])

  const handleChangeOptions = useCallback(
    (valueDate: ISelectBoxOptions) => {
      onChange?.(valueDate)
      setIsFocused(false)
    },
    [onChange]
  )

  return (
    <div
      id={id}
      className={cn(styles.root, className)}
      role="searchbox"
      onClick={() => !isFocused && setIsFocused(true)}
    >
      <span>
        <p>
          {selectedValueText || <span className="text-secondary">{placeholder}</span>}
        </p>
      </span>
      {isFocused && (
        <DivWitchClickOutsideEvent onClickOutside={() => setIsFocused(false)}>
          <span>
            <InputText value={search} onChange={(e) => setSearch(e.target.value)} />
          </span>
          <List>
            {filteredOptions.map((opt, i) => (
              <ListItem
                key={opt.value + i}
                role="button"
                onClick={() => handleChangeOptions({ value: opt.value, text: opt.text })}
                isActive={selectedOption.value === opt.value}
              >
                {opt.text}
              </ListItem>
            ))}
          </List>
        </DivWitchClickOutsideEvent>
      )}
      <FaCaretDown className={cn(isFocused && 'rotate-180')} />
    </div>
  )
}

export default SelectBox
