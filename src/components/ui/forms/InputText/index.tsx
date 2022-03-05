import { forwardRef, InputHTMLAttributes } from 'react'
import cn from 'classnames'
import styles from './styles.module.css'
import ValidationError from '../../feedback/ValidationError'

interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {
  type?: 'text' | 'email' | 'password' | 'url' | 'tel' | 'time' | 'datetime-local'
  error?: string
}

function InputText(
  { className, type = 'text', error, ...rest }: InputTextProps,
  ref: any
) {
  return (
    <>
      <input
        ref={ref}
        className={cn(styles.root, error && styles.error, className)}
        type={type}
        {...rest}
      />
      {error && <ValidationError>{error}</ValidationError>}
    </>
  )
}

export default forwardRef(InputText)
