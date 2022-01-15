import { ChangeEvent, useCallback, useState } from 'react'
import Button from '../../components/ui/forms/Button'
import Form from '../../components/ui/forms/Form'
import FormGroup from '../../components/ui/forms/FormGroup'
import FormLabel from '../../components/ui/forms/FormLabel'
import InputRadio from '../../components/ui/forms/InputRadio'
import InputText from '../../components/ui/forms/InputText'
import MultSelectBox from '../../components/ui/forms/MultSelectBox'
import Select from '../../components/ui/forms/Select'
import SelectBox, { ISelectBoxOptions } from '../../components/ui/forms/SelectBox'
import Switch from '../../components/ui/forms/Switch'
import TextArea from '../../components/ui/forms/TextArea'
import { Card, CardBody, CardTitle } from '../../components/ui/layout/Card'

interface CategoryFormProps {
  isEdit?: boolean
  category?: any
}

function CategoryForm({ isEdit }: CategoryFormProps) {
  const [name, setName] = useState('')
  const [isSubCategory, setIsSubCategory] = useState(false)
  const [category, setCategory] = useState<ISelectBoxOptions>({ text: '', value: '' })
  const [subCategories, setSubCategories] = useState<ISelectBoxOptions[]>([])

  const categories = ['html', 'javascript', 'css']

  const handleChangeRadioSubcategory = useCallback((checked: boolean) => {
    setIsSubCategory(checked)
    if (checked) {
      setCategory({ text: '', value: '' })
    } else {
      setSubCategories([])
    }
  }, [])

  return (
    <div className="flex space-x-6">
      <Card className="flex-1">
        <CardBody>
          <Form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-12">
                <FormGroup>
                  <FormLabel required>Nome</FormLabel>
                  <InputText
                    id="name"
                    required
                    placeholder="Título"
                    value={name}
                    onChange={(e) => setName(e.target.validationMessage)}
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
              <div className="col-span-6">
                <FormGroup>
                  {isSubCategory ? (
                    <>
                      <FormLabel required>Subcategorias:</FormLabel>
                      <MultSelectBox
                        options={categories.map((opt) => ({ value: opt, text: opt }))}
                        placeholder="Subcategorias..."
                        selectedOptions={subCategories}
                        onChange={(values) => setSubCategories(values)}
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
                      />
                    </>
                  )}
                </FormGroup>
              </div>
            </div>
            <div className="flex justify-end">
              <Button type="submit" variant="primary">
                Criar
              </Button>
              <Button type="button" variant="light" className="ml-2">
                Cancelar
              </Button>
            </div>
          </Form>
        </CardBody>
      </Card>
      <Card className="max-w-[320px] w-full">
        <CardBody>
          <Form onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col">
              <div className="space-y-6">
                <FormGroup>
                  <FormLabel required>Status</FormLabel>
                  <Select id="status" required placeholder="Título">
                    <option>Status</option>
                    <option>Público</option>
                    <option>Privado</option>
                  </Select>
                </FormGroup>
                <FormGroup>
                  <Switch id="hightlight" text="Exibir no meu" />
                </FormGroup>
              </div>
            </div>
          </Form>
        </CardBody>
      </Card>
    </div>
  )
}

export default CategoryForm
