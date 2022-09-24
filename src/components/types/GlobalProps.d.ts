import { ReactNode, CSSProperties } from 'react'

declare global {
  interface GlobalProps {
    id?: string
    className?: string
    children?: ReactNode
    style?: CSSProperties
  }
  interface FormElementProps extends GlobalProps {
    required?: boolean
    value?: string
    defaultValue?: string
    placeholder?: string
    autoFocus?: boolean
    disabled?: boolean
    readOnly?: boolean
    onKeyUp?: KeyboardEventHandler<HTMLInputElement>
    onFocus?: Callback
    onBlur?: Callback
    error?: string
    feedbackText?: string
  }
  interface FormTextElement extends FormElementProps {
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
    maxLength?: number
  }
}
