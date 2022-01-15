import { forwardRef, InputHTMLAttributes } from 'react'
import cn from 'classnames'
import styles from './styles.module.scss'

interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {
  type?: 'text' | 'email' | 'password' | 'url' | 'tel'
}

function InputText({ className, type = 'text', ...rest }: InputTextProps, ref: any) {
  return <input ref={ref} className={cn(styles.root, className)} type={type} {...rest} />
}

export default forwardRef(InputText)
