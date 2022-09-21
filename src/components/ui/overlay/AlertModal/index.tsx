import { Modal, ModalBody, ModalProps } from '../Modal'
import cn from 'classnames'
import {
  IoAlertCircleOutline,
  IoCheckmarkCircleOutline,
  IoCloseCircleOutline,
  IoWarningOutline,
} from 'react-icons/io5'
import { Button } from '../../forms/Button'

const svgStyle = 'text-7xl'
const variants = {
  success: {
    text: 'Sucesso!',
    icon: <IoCheckmarkCircleOutline className={cn('text-success', svgStyle)} />,
    style: 'text-success',
  },
  info: {
    text: 'Info!',
    icon: <IoAlertCircleOutline className={cn('text-info', svgStyle)} />,
    style: 'text-info',
  },
  warning: {
    text: 'Warning!',
    icon: <IoWarningOutline className={cn('text-warning', svgStyle)} />,
    style: 'text-warning',
  },
  danger: {
    text: 'Erro!',
    icon: <IoCloseCircleOutline className={cn('text-danger', svgStyle)} />,
    style: 'text-danger',
  },
}

// .root {
//   @apply flex flex-col items-center space-y-3;
// }
// .root svg {
//   @apply text-7xl;
// }
// .root h4 {
//   @apply text-lg text-center;
// }
// .root p {
//   @apply text-sm text-center;
// }

// .root.success h4 {
//   @apply text-success;
// }
// .root.info h4 {
//   @apply text-info;
// }
// .root.danger h4 {
//   @apply text-danger;
// }

interface AlertModalProps extends ModalProps {
  variant: keyof typeof variants
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
  return (
    <Modal onClose={onClose} size="md" {...rest}>
      <ModalBody>
        <div className={cn('flex flex-col items-center space-y-3')}>
          {variants[variant].icon}
          <h4 className={cn('text-lg text-center', variants[variant].style)}>
            {variants[variant].text}
          </h4>
          <p>{description}</p>
          <Button variantColor={variant} type="button" onClick={() => onClose?.()}>
            {textButton || 'Ok'}
          </Button>
        </div>
      </ModalBody>
    </Modal>
  )
}

export default AlertModal
