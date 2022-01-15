import { HTMLAttributes } from 'react'
import cn from 'classnames'
import { Callback } from '../../../../types/Global'
import styles from './styles.module.scss'
import { Card } from '../../layout/Card'

interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  show: boolean
  onClose?: Callback
  size?: 'sm' | 'md' | 'lg'
}

function Modal({ children, className, show, size = 'md', onClose, ...rest }: ModalProps) {
  if (!show) {
    return <></>
  }

  return (
    <div className={cn(styles.root)}>
      <div className={cn(styles['wrapper-modal'])} onClick={() => onClose?.()}></div>
      <Card className={cn(styles.modal, styles[size], className)}>{children}</Card>
    </div>
  )
}

export default Modal
