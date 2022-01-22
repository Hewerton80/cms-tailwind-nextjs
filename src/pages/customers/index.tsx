import Table from '../../components/ui/dataDisplay/Table'
import {
  Card,
  CardActions,
  CardBody,
  CardHeader,
  CardTitle,
} from '../../components/ui/layout/Card'
import { getRandomIntInclusive } from '../../utils/getRamdomInt'
import { DateTime } from 'luxon'
import IconButton from '../../components/ui/forms/IconButton'
import { FaPen, FaRegEye, FaTrash } from 'react-icons/fa'
import { useCallback, useContext, useEffect, useState } from 'react'
import { RouteEnum } from '../../utils/routes'
import { BreadcrumbsContext } from '../../contexts/breadcrumbsContext'
import AvatarGroup from '../../components/ui/media/AvatarGroup'
import Button from '../../components/ui/forms/Button'
import { Modal, ModalContent, ModalTitle } from '../../components/ui/overlay/Modal'
import Form from '../../components/ui/forms/Form'
import FormGroup from '../../components/ui/forms/FormGroup'
import FormLabel from '../../components/ui/forms/FormLabel'
import InputText from '../../components/ui/forms/InputText'

function Customers() {
  const { handleSetBreadcrumbs } = useContext(BreadcrumbsContext)

  const [showModalCustomerForm, setShowModalCustomerForm] = useState(false)

  useEffect(() => {
    handleSetBreadcrumbs([{ path: RouteEnum.Customers, text: 'Assinantes' }])
    return () => handleSetBreadcrumbs([])
  }, [handleSetBreadcrumbs])

  const handleShowModal = useCallback(() => {
    setShowModalCustomerForm(true)
  }, [])

  const handleCloseModal = useCallback(() => {
    setShowModalCustomerForm(false)
  }, [])

  return (
    <>
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Assinantes</CardTitle>
          <CardActions>
            <Button variant="primary" onClick={handleShowModal}>
              Adicionar assinante
            </Button>
          </CardActions>
        </CardHeader>
        <CardBody>
          <Table>
            <thead>
              <tr>
                <th></th>
                <th>(Vizualizações / Likes / Favoritos)</th>
                <th>Cadastro em</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {Array.from(Array(5).keys()).map((i) => (
                <tr key={i}>
                  <td className="py-1">
                    <AvatarGroup
                      src={`/images/face${getRandomIntInclusive(4, 7)}.jpg`}
                      userName="Fulano da Silva "
                      userEmail="Fulano@email.com.br"
                    />
                  </td>

                  <td>
                    {String(getRandomIntInclusive(3, 150)).padStart(2, '0')}
                    {' / '}
                    {String(getRandomIntInclusive(3, 20)).padStart(2, '0')}
                    {' / '}
                    {String(getRandomIntInclusive(3, 20)).padStart(2, '0')}
                  </td>
                  <td>
                    {DateTime.now()
                      .plus({ days: -1 * getRandomIntInclusive(0, 365) })
                      .toFormat('ff')}
                  </td>
                  <td>
                    <div className="flex items-center justify-end">
                      <IconButton icon={<FaPen />} />
                      <IconButton className="ml-2" icon={<FaRegEye />} />
                      <IconButton variant="danger" className="ml-2" icon={<FaTrash />} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </CardBody>
      </Card>
      <Modal show={showModalCustomerForm} onClose={handleCloseModal} size="lg">
        <ModalTitle>Adicionar assinante </ModalTitle>
        <ModalContent>
          <Form className="flex flex-col space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-12 md:col-span-6">
                <FormGroup>
                  <FormLabel required>Nome de usuário</FormLabel>
                  <InputText required placeholder="Nome de usuário" />
                </FormGroup>
              </div>
              <div className="col-span-12 md:col-span-6">
                <FormGroup>
                  <FormLabel required>Primeiro nome</FormLabel>
                  <InputText required placeholder="Primeiro nome" />
                </FormGroup>
              </div>
              <div className="col-span-12 md:col-span-6">
                <FormGroup>
                  <FormLabel required>Segundo nome</FormLabel>
                  <InputText required placeholder="Segundo nome" />
                </FormGroup>
              </div>

              <div className="col-span-12 md:col-span-6">
                <FormGroup>
                  <FormLabel required>Email</FormLabel>
                  <InputText required placeholder="Email" type="email" />
                </FormGroup>
              </div>
            </div>
            <div className="flex justify-end">
              <Button type="button" variant="light" onClick={handleCloseModal}>
                Cancelar
              </Button>
              <Button type="submit" variant="primary" className="ml-2">
                Criar
              </Button>
            </div>
          </Form>
        </ModalContent>
      </Modal>
    </>
  )
}

export default Customers
