import { Modal, ModalContent, ModalProps } from '../Modal'
import styles from './styles.module.scss'
import cn from 'classnames'
import {
  IoAlertCircleOutline,
  IoCheckmarkCircleOutline,
  IoCloseCircleOutline,
} from 'react-icons/io5'
import Button from '../../forms/Button'

interface AlertModalProps extends ModalProps {
  variant: 'success' | 'info' | 'danger'
  description?: string | JSX.Element
  textButton?: string
}

function AlertModal({
  variant,
  description,
  textButton,
  onClose,
  ...rest
}: AlertModalProps) {
  const variants = {
    success: {
      text: 'Parabéns!',
      icon: <IoCheckmarkCircleOutline className="text-success" />,
    },
    info: {
      text: 'Info!',
      icon: <IoAlertCircleOutline className="text-info" />,
    },
    danger: {
      text: 'Erro!',
      icon: <IoCloseCircleOutline className="text-danger" />,
    },
  }

  return (
    <Modal onClose={onClose} size="md" {...rest}>
      <ModalContent>
        <div className={cn(styles.root, styles[variant])}>
          {variants[variant].icon}
          <h4>{variants[variant].text}</h4>
          <p>{description}</p>
          <Button variant={variant} type="button" onClick={() => onClose?.()}>
            {textButton || 'Continue'}
          </Button>
        </div>
      </ModalContent>
    </Modal>
  )
}

export default AlertModal
