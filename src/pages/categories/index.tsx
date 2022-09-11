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
import Link from 'next/link'
import { ChangeEvent, useCallback, useContext, useEffect, useState } from 'react'
import IconButton from '../../components/ui/forms/IconButton'
import { FaCheck, FaEye, FaEyeSlash, FaPen, FaRegEye, FaTimes } from 'react-icons/fa'
import { BreadcrumbsContext } from '../../contexts/breadcrumbsContext'
import { RouteEnum } from '../../utils/routes'
import { getRange } from '../../utils/getRange'
import { Modal, ModalContent, ModalTitle } from '../../components/ui/overlay/Modal'
import SelectBox, { ISelectBoxOptions } from '../../components/ui/forms/SelectBox'
import FormGroup from '../../components/ui/forms/FormGroup'
import Switch from '../../components/ui/forms/Switch'
import Button from '../../components/ui/forms/Button'
import FormLabel from '../../components/ui/forms/FormLabel'
import MultSelectBox from '../../components/ui/forms/MultSelectBox'
import InputRadio from '../../components/ui/forms/InputRadio'
import TextArea from '../../components/ui/forms/TextArea'
import InputText from '../../components/ui/forms/InputText'
import Form from '../../components/ui/forms/Form'
import Select from '../../components/ui/forms/Select'
import PaginationBar from '../../components/ui/navigation/PaginationBar'
import { getSlugText } from '../../utils/getSlugText'

function Categories() {
  const { handleSetBreadcrumbs } = useContext(BreadcrumbsContext)

  const [name, setName] = useState('')
  const [isSubCategory, setIsSubCategory] = useState(false)
  const [category, setCategory] = useState<ISelectBoxOptions>({ text: '', value: '' })
  const [subCategories, setSubCategories] = useState<ISelectBoxOptions[]>([])
  const [slug, setSlug] = useState('')
  const [hasChangedSlug, setHasChangedSlug] = useState(false)

  const [showModalCategoryForm, setShowModalCategoryForm] = useState(false)

  const handleChangeName = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setName(e.target.value)
      if (!hasChangedSlug) {
        setSlug(getSlugText(e.target.value))
      }
    },
    [hasChangedSlug]
  )

  const handleChangeSlug = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setSlug(e.target.value)
    setHasChangedSlug(true)
  }, [])

  const handleChangeRadioSubcategory = useCallback((checked: boolean) => {
    setIsSubCategory(checked)
    if (checked) {
      setCategory({ text: '', value: '' })
    } else {
      setSubCategories([])
    }
  }, [])

  useEffect(() => {
    handleSetBreadcrumbs([{ path: RouteEnum.Categories, text: 'Categorias' }])
    return () => handleSetBreadcrumbs([])
  }, [handleSetBreadcrumbs])

  const handleShowModal = useCallback(() => {
    setShowModalCategoryForm(true)
  }, [])

  const handleCloseModal = useCallback(() => {
    setShowModalCategoryForm(false)
  }, [])

  const categories = ['html', 'javascript', 'css', 'liguagens de programação']
  const categorySlugs = categories.map((category) => category.split(' ').join('-'))
  return (
    <>
      <Card className="flex flex-col">
        <CardHeader>
          <CardTitle>Categorias</CardTitle>
          <CardActions>
            <Button variantColor="primary" onClick={handleShowModal}>
              Adicionar categoria
            </Button>
          </CardActions>
        </CardHeader>
        <CardBody>
          <div className="flex flex-col">
            <div className="flex justify-end"></div>
            <Table>
              <Thead>
                <Tr>
                  <Th>Nome</Th>
                  <Th>Slug</Th>
                  <Th>Posts</Th>
                  <Th>Exibir no menu</Th>
                  <Th>status</Th>
                  <Th></Th>
                </Tr>
              </Thead>
              <Tbody>
                {getRange(25).map((i) => {
                  const categoryIndex = getRandomIntInclusive(0, categories.length - 1)
                  return (
                    <Tr key={i}>
                      <Td>{categories[categoryIndex]}</Td>
                      <Td>{categorySlugs[categoryIndex]}</Td>
                      <Td>{getRandomIntInclusive(0, 20)}</Td>
                      <Td>
                        <span className="text-lg">
                          {getRandomIntInclusive(0, 1) ? (
                            <FaCheck className="text-info" />
                          ) : (
                            <FaTimes className="text-secondary" />
                          )}
                        </span>
                      </Td>
                      <Td>
                        <span className="text-lg">
                          {getRandomIntInclusive(0, 1) ? (
                            <FaEye className="text-info" />
                          ) : (
                            <FaEyeSlash className="text-secondary" />
                          )}
                        </span>
                      </Td>
                      <Td>
                        <div className="flex items-center justify-end">
                          <Link href="#">
                            <a>
                              <IconButton icon={<FaPen />} />
                            </a>
                          </Link>
                          <Link href="#">
                            <a>
                              <IconButton className="ml-2" icon={<FaRegEye />} />
                            </a>
                          </Link>
                        </div>
                      </Td>
                    </Tr>
                  )
                })}
              </Tbody>
            </Table>
          </div>
        </CardBody>
        <CardFooter>
          <PaginationBar
            currentPage={1}
            totalPages={10}
            onChangePage={() => {}}
            totalRecords={1}
            perPage={25}
          />
        </CardFooter>
      </Card>

      <Modal show={showModalCategoryForm} onClose={handleCloseModal} size="lg">
        <ModalTitle>Adicionar categoria </ModalTitle>
        <ModalContent>
          <Form className="flex flex-col space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-12 sm:col-span-6">
                <FormGroup>
                  <FormLabel required>Nome</FormLabel>
                  <InputText
                    id="name"
                    required
                    placeholder="Título"
                    value={name}
                    onChange={handleChangeName}
                  />
                </FormGroup>
              </div>
              <div className="col-span-12 sm:col-span-6">
                <FormGroup>
                  <FormLabel required>Slug</FormLabel>
                  <InputText
                    id="slug"
                    required
                    placeholder="Título"
                    value={slug}
                    onChange={handleChangeSlug}
                  />
                </FormGroup>
              </div>
              <div className="col-span-12">
                <FormGroup>
                  <FormLabel>Descrição</FormLabel>
                  <TextArea
                    id="description"
                    placeholder="Descrição..."
                    error="Descrição inválida"
                  />
                </FormGroup>
              </div>
              <div className="col-span-12">
                <FormGroup className="space-y-2">
                  <InputRadio
                    id="has-subcategories"
                    checked={isSubCategory}
                    onChange={(e) => handleChangeRadioSubcategory(e.target.checked)}
                    text="Ter subcategorias"
                  />
                  <InputRadio
                    id="is-subcategories"
                    checked={!isSubCategory}
                    onChange={(e) => handleChangeRadioSubcategory(!e.target.checked)}
                    text="Ser subcategoria"
                  />
                </FormGroup>
              </div>
              <div className="col-span-12 sm:col-span-6">
                <FormGroup>
                  {isSubCategory ? (
                    <>
                      <FormLabel required>Subcategorias:</FormLabel>
                      <MultSelectBox
                        options={categories.map((opt) => ({ value: opt, text: opt }))}
                        placeholder="Subcategorias..."
                        selectedOptions={subCategories}
                        onChange={(values) => setSubCategories(values)}
                        // error="Subcategorias é obrigatório"
                      />
                    </>
                  ) : (
                    <>
                      <FormLabel required>Subcategoria de:</FormLabel>
                      <SelectBox
                        options={categories.map((opt) => ({ value: opt, text: opt }))}
                        placeholder="Categoria..."
                        selectedOption={category}
                        onChange={(value) => setCategory(value)}
                        error="Subcategoria é obrigatório"
                      />
                    </>
                  )}
                </FormGroup>
              </div>
              <div className="col-span-12 sm:col-span-6">
                <FormGroup>
                  <FormLabel required>Status</FormLabel>
                  <Select
                    id="status"
                    required
                    placeholder="Título"
                    error="Status é obrigatório"
                  >
                    <option>Status</option>
                    <option>Público</option>
                    <option>Privado</option>
                  </Select>
                </FormGroup>
              </div>
              <div className="col-span-12 sm:col-span-6">
                <FormGroup>
                  <Switch id="hightlight" text="Exibir no meu" />
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

export default Categories
