import classNames from 'classnames'
import { ChangeEvent, useCallback, useMemo, useState } from 'react'
import Button from '../../components/ui/forms/Button'
import CustomSunEditor from '../../components/ui/forms/CustomSunEditor'
import Form from '../../components/ui/forms/Form'
import FormGroup from '../../components/ui/forms/FormGroup'
import FormLabel from '../../components/ui/forms/FormLabel'
import InputText from '../../components/ui/forms/InputText'
import MultSelectBox from '../../components/ui/forms/MultSelectBox'
import Select from '../../components/ui/forms/Select'
import SelectBox, { ISelectBoxOptions } from '../../components/ui/forms/SelectBox'
import Switch from '../../components/ui/forms/Switch'
import Accordion from '../../components/ui/layout/Accordion'
import { Card, CardBody, CardHeader, CardTitle } from '../../components/ui/layout/Card'
import { IPost, PostStatusEnum } from '../../types/Post'
import { getSlugText } from '../../utils/getSlugText'
import { postStatusOptions } from '../../utils/postStatusOptions'

const categories = ['html', 'javascript', 'css']
interface PostFormProps {
  isEdit?: boolean
  category?: any
}

function PostForm({ isEdit }: PostFormProps) {
  const [newPost, setNewPost] = useState<IPost>({
    title: '',
    slug: '',
  })
  const [hasChangedSlug, setHasChangedSlug] = useState(false)
  const [isUncategorized, setIsUncategorized] = useState(true)
  const [isSchedulePublication, setIsSchedulePublication] = useState(false)
  const [selectCategories, setSelectedCategories] = useState<ISelectBoxOptions[]>([])

  const handleChangeUser = useCallback(
    ({ field, value }: { field: keyof typeof newPost; value: string }) => {
      setNewPost((currentNewPost) => ({
        ...currentNewPost,
        [field]: value,
      }))
    },
    []
  )

  const handleChangeTitle = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      handleChangeUser({ field: 'title', value: e.target.value })
      if (!hasChangedSlug) {
        handleChangeUser({ field: 'slug', value: getSlugText(e.target.value) })
      }
    },
    [hasChangedSlug, handleChangeUser]
  )

  const handleChangeSlug = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      handleChangeUser({ field: 'slug', value: e.target.value })
      // setSlug(e.target.value)
      setHasChangedSlug(true)
    },
    [handleChangeUser]
  )

  const actionsButtons = useMemo(() => {
    return (
      <div className="flex justify-end w-full">
        <Button
          variant="light"
          type="button"
          // onClick={() => setShowQuestionMenssage(true)}
          // disabled={isSubmitingUsers}
        >
          Cancelar
        </Button>
        <Button
          className="ml-2"
          variant="primary"
          // isLoading={isSubmitingUsers}
          type="submit"
        >
          Criar
        </Button>
      </div>
    )
  }, [])

  return (
    <div className="grid grid-cols-12 gap-6">
      <Card className="col-span-12 sm:col-span-12 lg:col-span-8">
        <CardHeader>
          <CardTitle>{isEdit ? 'Editar' : 'Criar'} Post</CardTitle>
        </CardHeader>
        <CardBody>
          <Form onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-12">
                <FormGroup>
                  <FormLabel required>Título</FormLabel>
                  <InputText
                    id="title"
                    value={newPost.title}
                    onChange={handleChangeTitle}
                  />
                </FormGroup>
              </div>
              <div className="col-span-12">
                <FormGroup>
                  <FormLabel required>Slug</FormLabel>
                  <InputText id="slug" value={newPost.slug} onChange={handleChangeSlug} />
                </FormGroup>
              </div>
              <div className="col-span-12">
                <FormGroup>
                  <FormLabel required>Conteúdo</FormLabel>
                  <CustomSunEditor onChange={(content) => console.log(content)} />
                </FormGroup>
              </div>
              <div className="hidden lg:flex col-span-12">{actionsButtons}</div>
            </div>
          </Form>
        </CardBody>
      </Card>
      <div className={classNames('col-span-12 lg:col-span-4')}>
        <div className="grid grid-cols-12 gap-y-6">
          <Card className="col-span-12">
            <CardHeader>
              <CardTitle>Status de visibilidade</CardTitle>
            </CardHeader>
            <CardBody>
              <div className="flex flex-col space-y-6">
                <FormGroup>
                  <FormLabel required>Visibilidade</FormLabel>
                  <Select id="status" defaultValue={PostStatusEnum.Published}>
                    {postStatusOptions.map((postStatus) => (
                      <option key={postStatus.value} value={postStatus.value}>
                        {postStatus.text}
                      </option>
                    ))}
                  </Select>
                </FormGroup>
                <FormGroup>
                  <Switch
                    checked={isSchedulePublication}
                    onChange={(e) => setIsSchedulePublication(e.target.checked)}
                    text="Agendar publicação"
                  />
                </FormGroup>
                {isSchedulePublication && (
                  <FormGroup>
                    <InputText id="publishad_at" type="datetime-local" />
                  </FormGroup>
                )}
              </div>
            </CardBody>
          </Card>
          <Card className="col-span-12">
            <CardHeader>
              <CardTitle>Categorias</CardTitle>
            </CardHeader>
            <CardBody>
              <div className="flex flex-col space-y-6">
                <FormGroup>
                  <Switch
                    checked={isUncategorized}
                    onChange={(e) => setIsUncategorized(e.target.checked)}
                    text="Sem categoria"
                  />
                </FormGroup>
                {!isUncategorized && (
                  <FormGroup>
                    <FormLabel>Adicionar novas Categorias:</FormLabel>
                    <MultSelectBox
                      options={categories.map((opt) => ({ value: opt, text: opt }))}
                      placeholder="Categorias..."
                      selectedOptions={selectCategories}
                      onChange={(value) => setSelectedCategories(value)}
                    />
                  </FormGroup>
                )}
              </div>
            </CardBody>
          </Card>
          <div className="flex lg:hidden col-span-12">{actionsButtons}</div>
        </div>
      </div>
    </div>
  )
}

export default PostForm
