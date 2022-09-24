import { SelectHTMLAttributes, useEffect, useRef } from 'react'
import cn from 'classnames'
import styles from './styles.module.css'
import ValidationMessage from '../../feedback/ValidationMessage'

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  error?: string
}

function Select({ className, error, ...rest }: SelectProps) {
  const selectRef = useRef<HTMLSelectElement>(null)

  useEffect(() => {
    if (selectRef?.current) {
      const options = selectRef.current.querySelectorAll('option')
      options.forEach((option) => {
        option?.classList?.add('dark:bg-dark-card', 'dark:text-light')
      })
    }
  }, [])

  return (
    <>
      <select
        className={cn(
          styles.root,
          error && styles.error,
          'dark:border-white/10 dark:text-light',
          className
        )}
        ref={selectRef}
        {...rest}
      />
      {error && <ValidationMessage>{error}</ValidationMessage>}
    </>
  )
}

export default Select
