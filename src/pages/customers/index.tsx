import Table, { Tbody, Td, Th, Thead, Tr } from '../../components/ui/dataDisplay/Table'
import {
  Card,
  CardActions,
  CardBody,
  CardFooter,
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
import PaginationBar from '../../components/ui/navigation/PaginationBar'

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
            <Button variantColor="primary" onClick={handleShowModal}>
              Adicionar assinante
            </Button>
          </CardActions>
        </CardHeader>
        <CardBody>
          <Table>
            <Thead>
              <Tr>
                <Th></Th>
                <Th>(Vizualizações / Likes / Favoritos)</Th>
                <Th>Cadastro em</Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
              {Array.from(Array(5).keys()).map((i) => (
                <Tr key={i}>
                  <Td className="py-1">
                    <AvatarGroup
                      src={`/images/face${getRandomIntInclusive(4, 7)}.jpg`}
                      userName="Fulano da Silva "
                      userEmail="Fulano@email.com.br"
                    />
                  </Td>

                  <Td>
                    {String(getRandomIntInclusive(3, 150)).padStart(2, '0')}
                    {' / '}
                    {String(getRandomIntInclusive(3, 20)).padStart(2, '0')}
                    {' / '}
                    {String(getRandomIntInclusive(3, 20)).padStart(2, '0')}
                  </Td>
                  <Td>
                    {DateTime.now()
                      .plus({ days: -1 * getRandomIntInclusive(0, 365) })
                      .toFormat('ff')}
                  </Td>
                  <Td>
                    <div className="flex items-center justify-end">
                      <IconButton icon={<FaPen />} />
                      <IconButton className="ml-2" icon={<FaRegEye />} />
                      <IconButton
                        variantColor="danger"
                        className="ml-2"
                        icon={<FaTrash />}
                      />
                    </div>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </CardBody>
        <CardFooter>
          <PaginationBar
            currentPage={1}
            totalPages={10}
            perPage={25}
            totalRecords={1}
            onChangePage={(toPage) => {}}
          />
        </CardFooter>
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
              <Button type="button" variantColor="light" onClick={handleCloseModal}>
                Cancelar
              </Button>
              <Button type="submit" variantColor="primary" className="ml-2">
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
