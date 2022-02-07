import { TextareaHTMLAttributes } from 'react'
import cn from 'classnames'
import styles from './styles.module.css'

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

function TextArea({ className, ...rest }: TextAreaProps) {
  return <textarea className={cn(styles.root, className)} {...rest} />
}

export default TextArea
