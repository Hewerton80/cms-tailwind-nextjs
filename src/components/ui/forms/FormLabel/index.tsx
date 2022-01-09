import cn from 'classnames'
import { LabelHTMLAttributes } from 'react'

interface FormLabelProps extends LabelHTMLAttributes<HTMLLabelElement> {}

function FormLabel({ children, className, ...rest }: FormLabelProps) {
  return (
    <label className={cn('text-sm text-black mb-2', className)} {...rest}>
      {children}
    </label>
  )
}

export default FormLabel
