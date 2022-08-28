import { TextareaHTMLAttributes } from 'react'
import cn from 'classnames'
import styles from './styles.module.css'
import ValidationError from '../../feedback/ValidationError'

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string
}

function TextArea({ className, error, ...rest }: TextAreaProps) {
  return (
    <>
      <textarea
        className={cn(
          styles.root,
          'dark:border-white/10 dark:text-light',
          error && styles.error,
          className
        )}
        {...rest}
      />
      {error && <ValidationError>{error}</ValidationError>}
    </>
  )
}

export default TextArea
