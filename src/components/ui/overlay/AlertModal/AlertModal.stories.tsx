import React, { useCallback, useState } from 'react'
import { ComponentMeta } from '@storybook/react'
import AlertModal from '.'
import { Button } from '../../forms/Button'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/overlay/AlertModal',
  component: AlertModal,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {},
} as ComponentMeta<typeof AlertModal>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// const Template: ComponentStory<typeof AlertModal> = (args) => <AlertModal {...args} />

const lorem = `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
Voluptates ullam quod, modi accusamus exercitationem molestiae voluptas 
quas tempore eum alias sapiente pariatur consequatur ratione, 
assumenda dolore maiores magnam? In, cupiditate!
`

export const SuccessModal = () => {
  const [showModal, setShowModal] = useState(false)

  const handleShowModal = useCallback(() => {
    setShowModal(true)
  }, [])

  const handleCloseModal = useCallback(() => {
    setShowModal(false)
  }, [])

  return (
    <div className="flex flex-wrap gap-2">
      <Button variantColor="success" onClick={handleShowModal}>
        Show Success Modal
      </Button>
      <AlertModal
        show={showModal}
        onClose={handleCloseModal}
        variant="success"
        description={lorem}
      />
    </div>
  )
}

export const InfoModal = () => {
  const [showModal, setShowModal] = useState(false)

  const handleShowModal = useCallback(() => {
    setShowModal(true)
  }, [])

  const handleCloseModal = useCallback(() => {
    setShowModal(false)
  }, [])

  return (
    <div className="flex flex-wrap gap-2">
      <Button variantColor="info" onClick={handleShowModal}>
        Show Info Modal
      </Button>
      <AlertModal
        show={showModal}
        onClose={handleCloseModal}
        variant="info"
        description={lorem}
      />
    </div>
  )
}

export const WarningModal = () => {
  const [showModal, setShowModal] = useState(false)

  const handleShowModal = useCallback(() => {
    setShowModal(true)
  }, [])

  const handleCloseModal = useCallback(() => {
    setShowModal(false)
  }, [])

  return (
    <div className="flex flex-wrap gap-2">
      <Button variantColor="warning" onClick={handleShowModal}>
        Show Warning Modal
      </Button>
      <AlertModal
        show={showModal}
        onClose={handleCloseModal}
        variant="warning"
        description={lorem}
      />
    </div>
  )
}

export const DangerModal = () => {
  const [showModal, setShowModal] = useState(false)

  const handleShowModal = useCallback(() => {
    setShowModal(true)
  }, [])

  const handleCloseModal = useCallback(() => {
    setShowModal(false)
  }, [])

  return (
    <div className="flex flex-wrap gap-2">
      <Button variantColor="danger" onClick={handleShowModal}>
        Show Danger Modal
      </Button>
      <AlertModal
        show={showModal}
        onClose={handleCloseModal}
        variant="danger"
        description={lorem}
      />
    </div>
  )
}
