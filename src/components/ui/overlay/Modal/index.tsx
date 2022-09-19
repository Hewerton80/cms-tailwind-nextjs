import { useEffect } from 'react'
import cn from 'classnames'
import { Callback } from '../../../../types/Global'
import styles from './styles.module.css'
import { Card } from '../../layout/Card'
import { FaTimes } from 'react-icons/fa'
import { getBodyElement } from '../../../../utils/getBodyElement'

const sizeModal = {
  sm: 'max-w-[300px]',
  md: 'max-w-[500px]',
  lg: 'max-w-[768px]',
}

export interface ModalProps extends GlobalProps {
  show: boolean
  onClose?: Callback
  size?: keyof typeof sizeModal
}

export function Modal({
  children,
  className,
  show,
  size = 'md',
  onClose,
  ...rest
}: ModalProps) {
  useEffect(() => {
    const bodyElement = getBodyElement()
    if (show) {
      bodyElement?.classList?.add('hidden_scroll')
    } else {
      bodyElement?.classList?.remove('hidden_scroll')
    }
  }, [show])

  if (!show) {
    return <></>
  }

  return (
    <div
      className={cn(
        'fixed left-0 top-0 flex p-4 z-[999] w-screen min-h-screen',
        'overflow-x-hidden overflow-y-auto'
      )}
    >
      <div
        className={cn('fixed left-0 top-0 w-screen min-h-screen z-[1000] bg-dark-screen')}
        onClick={() => onClose?.()}
      />
      <Card
        className={cn(
          styles.animation,
          sizeModal[size],
          'relative z-[1001] w-full m-auto max-h-screen',
          className
        )}
        {...rest}
      >
        {children}
        <span
          className={cn(
            'text-dark dark:text-light absolute top-5 right-6 cursor-pointer p-1'
          )}
          onClick={() => onClose?.()}
          role="button"
        >
          <FaTimes />
        </span>
      </Card>
    </div>
  )
}

export function ModalTitle({ children, className, ...rest }: GlobalProps) {
  return (
    <div className={cn('flex px-7 pt-6', className)} {...rest}>
      <h5 className="text-xl text-black dark:text-light">{children}</h5>
    </div>
  )
}

export function ModalBody({ children, className, ...rest }: GlobalProps) {
  return (
    <div className={cn('flex flex-col px-7 py-6', className)} {...rest}>
      {children}
    </div>
  )
}

export function ModalFooter({ children, className, ...rest }: GlobalProps) {
  return (
    <div
      className={cn('flex items-center justify-end', 'w-full px-6 pb-6 gap-2', className)}
      {...rest}
    >
      {children}
    </div>
  )
}
