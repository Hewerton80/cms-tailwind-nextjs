import { InputHTMLAttributes } from 'react'
import cn from 'classnames'
import styles from './styles.module.scss'

interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {
  type?: 'text' | 'email' | 'password'
}

function InputText({ className, type = 'text', ...rest }: InputTextProps) {
  return <input className={cn(styles.root, className)} type={type} {...rest} />
}

export default InputText
