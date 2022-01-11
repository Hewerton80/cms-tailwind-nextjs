import { InputHTMLAttributes } from 'react'
import cn from 'classnames'
import styles from './styles.module.scss'

interface SwitchProps extends InputHTMLAttributes<HTMLInputElement> {
  text?: string
}

function Switch({ text, ...rest }: SwitchProps) {
  return (
    <div className="flex items-center">
      <span className={cn(styles.root)}>
        <input type="checkbox" {...rest} />
        <span />
      </span>
      {text && (
        <label htmlFor={rest?.id} className="text-sm text-dark ml-7">
          {text}
        </label>
      )}
    </div>
  )
}

export default Switch
