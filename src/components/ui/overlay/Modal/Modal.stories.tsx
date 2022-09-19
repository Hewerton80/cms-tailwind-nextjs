import React, { useCallback, useState } from 'react'
import { ComponentMeta } from '@storybook/react'
import { Modal, ModalBody, ModalFooter, ModalTitle } from '.'
import { Button } from '../../forms/Button'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/overlay/Modal',
  component: Modal,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {},
} as ComponentMeta<typeof Modal>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />

const lorem = `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
Voluptates ullam quod, modi accusamus exercitationem molestiae voluptas 
quas tempore eum alias sapiente pariatur consequatur ratione, 
assumenda dolore maiores magnam? In, cupiditate!
`

export const SmallModal = () => {
  const [showModal, setShowModal] = useState(false)

  const handleShowModal = useCallback(() => {
    setShowModal(true)
  }, [])

  const handleCloseModal = useCallback(() => {
    setShowModal(false)
  }, [])

  return (
    <>
      <Button onClick={handleShowModal}>Show Small Modal</Button>
      <Modal show={showModal} onClose={handleCloseModal} size="sm">
        <ModalTitle>Modal Title</ModalTitle>
        <ModalBody>
          <p>{lorem}</p>
        </ModalBody>
        <ModalFooter>
          <Button variantColor="light" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variantColor="primary" onClick={handleCloseModal}>
            Save Changes
          </Button>
        </ModalFooter>
      </Modal>
    </>
  )
}

export const MediumModal = () => {
  const [showModal, setShowModal] = useState(false)

  const handleShowModal = useCallback(() => {
    setShowModal(true)
  }, [])

  const handleCloseModal = useCallback(() => {
    setShowModal(false)
  }, [])

  return (
    <>
      <Button onClick={handleShowModal}>Show Medium Modal</Button>
      <Modal show={showModal} onClose={handleCloseModal} size="md">
        <ModalTitle>Modal Title</ModalTitle>
        <ModalBody>
          <p>{lorem}</p>
        </ModalBody>
        <ModalFooter>
          <Button variantColor="light" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variantColor="primary" onClick={handleCloseModal}>
            Save Changes
          </Button>
        </ModalFooter>
      </Modal>
    </>
  )
}

export const LargeModal = () => {
  const [showModal, setShowModal] = useState(false)

  const handleShowModal = useCallback(() => {
    setShowModal(true)
  }, [])

  const handleCloseModal = useCallback(() => {
    setShowModal(false)
  }, [])

  return (
    <>
      <Button onClick={handleShowModal}>Show Large Modal</Button>
      <Modal show={showModal} onClose={handleCloseModal} size="lg">
        <ModalTitle>Modal Title</ModalTitle>
        <ModalBody>
          <p>{lorem}</p>
        </ModalBody>
        <ModalFooter>
          <Button variantColor="light" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variantColor="primary" onClick={handleCloseModal}>
            Save Changes
          </Button>
        </ModalFooter>
      </Modal>
    </>
  )
}
