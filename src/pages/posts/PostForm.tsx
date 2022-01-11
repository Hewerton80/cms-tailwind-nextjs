import { ChangeEvent, useCallback, useState } from 'react'
import Button from '../../components/ui/forms/Button'
import Form from '../../components/ui/forms/Form'
import FormGroup from '../../components/ui/forms/FormGroup'
import FormLabel from '../../components/ui/forms/FormLabel'
import InputText from '../../components/ui/forms/InputText'
import Select from '../../components/ui/forms/Select'
import TextArea from '../../components/ui/forms/TextArea'
import { Card, CardBody, CardTitle } from '../../components/ui/layout/Card'

interface PostFormProps {
  isEdit?: boolean
  category?: any
}

function PostForm({ isEdit }: PostFormProps) {
  const [title, setTitle] = useState('')
  const [slug, setSlug] = useState('')
  const [hasChangedSlug, setHasChangedSlug] = useState(false)

  const handleChangeTitle = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setTitle(e.target.value)
      if (!hasChangedSlug) {
        setSlug(
          e.target.value
            .trim()
            .toLowerCase()
            .split(' ')
            .filter((word) => word)
            .join('-')
        )
      }
    },
    [hasChangedSlug]
  )

  const handleChangeSlug = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setSlug(e.target.value)
    setHasChangedSlug(true)
  }, [])

  return (
    <Card>
      <CardTitle>{isEdit ? 'Editar' : 'Criar'} Categoria</CardTitle>
      <CardBody>
        <Form onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-6 lg:col-span-4">
              <FormGroup>
                <FormLabel required>Título</FormLabel>
                <InputText
                  id="title"
                  required
                  placeholder="Título"
                  value={title}
                  onChange={handleChangeTitle}
                />
              </FormGroup>
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-4">
              <FormGroup>
                <FormLabel required>Slug</FormLabel>
                <InputText
                  id="slug"
                  required
                  placeholder="Slug"
                  value={slug}
                  onChange={handleChangeSlug}
                />
              </FormGroup>
            </div>
          </div>
        </Form>
      </CardBody>
    </Card>
  )
}

export default PostForm
