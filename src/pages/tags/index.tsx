import Table from '../../components/ui/dataDisplay/Table'
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
import Link from 'next/link'
import Button from '../../components/ui/forms/Button'
import IconButton from '../../components/ui/forms/IconButton'
import { FaPen, FaRegEye } from 'react-icons/fa'
import { useCallback, useContext, useEffect, useState } from 'react'
import { BreadcrumbsContext } from '../../contexts/breadcrumbsContext'
import { RouteEnum } from '../../utils/routes'
import { getRange } from '../../utils/getRange'
import { Modal, ModalContent, ModalTitle } from '../../components/ui/overlay/Modal'
import Form from '../../components/ui/forms/Form'
import FormGroup from '../../components/ui/forms/FormGroup'
import InputText from '../../components/ui/forms/InputText'
import FormLabel from '../../components/ui/forms/FormLabel'
import PaginationBar from '../../components/ui/navigation/PaginationBar'

function Tags() {
  const { handleSetBreadcrumbs } = useContext(BreadcrumbsContext)

  const [showModalTagForm, setShowModalTagForm] = useState(false)

  useEffect(() => {
    handleSetBreadcrumbs([{ path: RouteEnum.Tags, text: 'Tags' }])
    return () => handleSetBreadcrumbs([])
  }, [handleSetBreadcrumbs])

  const handleShowModal = useCallback(() => {
    setShowModalTagForm(true)
  }, [])

  const handleCloseModal = useCallback(() => {
    setShowModalTagForm(false)
  }, [])

  const tags = ['html', 'javascript', 'css']
  return (
    <>
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Tags</CardTitle>
          <CardActions>
            <Button className="ml-auto" variantColor="primary" onClick={handleShowModal}>
              Criar tag
            </Button>
          </CardActions>
        </CardHeader>
        <CardBody>
          <div className="flex flex-col">
            <div className="flex"></div>
            <Table>
              <thead>
                <tr>
                  <th>id</th>
                  <th>Nome</th>
                  <th>Nº posts</th>
                  <th>Criado em:</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {getRange(20).map((i) => {
                  return (
                    <tr key={i}>
                      <td>
                        <Link href="#">
                          <a className="hover:underline">
                            #{getRandomIntInclusive(1, 1000)}
                          </a>
                        </Link>
                      </td>
                      <td>{tags[getRandomIntInclusive(0, tags.length - 1)]}</td>

                      <td>{String(getRandomIntInclusive(3, 150)).padStart(2, '0')}</td>
                      <td>
                        {DateTime.now()
                          .plus({ days: -1 * getRandomIntInclusive(0, 365) })
                          .toFormat('ff')}
                      </td>
                      <td>
                        <div className="flex items-center justify-end">
                          <IconButton icon={<FaPen />} />
                          <IconButton className="ml-2" icon={<FaRegEye />} />
                        </div>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </Table>
          </div>
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

      <Modal show={showModalTagForm} onClose={handleCloseModal} size="md">
        <ModalTitle>Adicionar tag </ModalTitle>
        <ModalContent>
          <Form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col space-y-6">
              <div className="flex w-full">
                <FormGroup>
                  <FormLabel required>Nome</FormLabel>
                  <InputText id="name" required placeholder="Nome" />
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

export default Tags
