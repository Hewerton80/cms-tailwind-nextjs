import { ChangeEvent, useCallback, useState } from 'react'
import Button from '../../components/ui/forms/Button'
import Form from '../../components/ui/forms/Form'
import FormGroup from '../../components/ui/forms/FormGroup'
import FormLabel from '../../components/ui/forms/FormLabel'
import InputText from '../../components/ui/forms/InputText'
import Select from '../../components/ui/forms/Select'
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
  const [hasChangedSlug, setHasChangedSlug] = useState(false)

  const categories = ['html', 'javascript', 'css']

  return (
    <div className="flex space-x-6">
      <Card className="flex-1">
        <CardBody>
          <Form onSubmit={(e) => e.preventDefault()}>
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
                <FormGroup>
                  <Switch
                    id="is-sub"
                    checked={isSubCategory}
                    onChange={(e) => setIsSubCategory(e.target.checked)}
                    text="Ser subcategoria"
                  />
                </FormGroup>
              </div>
              {isSubCategory && (
                <div className="col-span-12">
                  <FormGroup>
                    <FormLabel required>Sub Categoria de:</FormLabel>
                    <InputText
                      id="sub-category"
                      required
                      placeholder="Sub-categoria..."
                      list="categories"
                    />
                    <datalist id="categories">
                      {categories.map((category) => (
                        <option key={category} value={category}>
                          {category}
                        </option>
                      ))}
                    </datalist>
                  </FormGroup>
                </div>
              )}
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
