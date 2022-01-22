import { FormEvent, useCallback, useState } from 'react'
import Button from '../../components/ui/forms/Button'
import Form from '../../components/ui/forms/Form'
import FormGroup from '../../components/ui/forms/FormGroup'
import FormLabel from '../../components/ui/forms/FormLabel'
import InputText from '../../components/ui/forms/InputText'
import Select from '../../components/ui/forms/Select'
import TextArea from '../../components/ui/forms/TextArea'
import { Card, CardBody, CardHeader, CardTitle } from '../../components/ui/layout/Card'
import AlertModal from '../../components/ui/overlay/AlertModal'
import QuestionModal from '../../components/ui/overlay/QuestionModal'

interface UserFormProps {
  isEdit?: boolean
  user?: any
}

function UserForm({ isEdit }: UserFormProps) {
  const [showSuccessMemssage, setShowSuccessMenssage] = useState(false)
  const [showQuestionMemssage, setShowQuestionMenssage] = useState(false)

  const handleCreateUser = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setShowSuccessMenssage(true)
  }, [])

  return (
    <>
      <div className="grid grid-cols-12 gap-6">
        <Card className="col-span-12 md:col-span-8">
          <CardHeader>
            <CardTitle>{isEdit ? 'Editar' : 'Criar'} Usuário</CardTitle>
          </CardHeader>
          <CardBody>
            <Form onSubmit={handleCreateUser}>
              <div className="grid grid-cols-12 gap-6">
                <div className="col-span-12 md:col-span-6 lg:col-span-4">
                  <FormGroup>
                    <FormLabel required>Nome de usuário</FormLabel>
                    <InputText required placeholder="Nome de usuário" />
                  </FormGroup>
                </div>
                <div className="col-span-12 md:col-span-6 lg:col-span-4">
                  <FormGroup>
                    <FormLabel required>Primeiro nome</FormLabel>
                    <InputText required placeholder="Primeiro nome" />
                  </FormGroup>
                </div>
                <div className="col-span-12 md:col-span-6 lg:col-span-4">
                  <FormGroup>
                    <FormLabel required>Segundo nome</FormLabel>
                    <InputText required placeholder="Segundo nome" />
                  </FormGroup>
                </div>

                <div className="col-span-12 md:col-span-6 lg:col-span-4">
                  <FormGroup>
                    <FormLabel required>Email</FormLabel>
                    <InputText required placeholder="Email" type="email" />
                  </FormGroup>
                </div>
                <div className="col-span-12 md:col-span-6 lg:col-span-4">
                  <FormGroup>
                    <FormLabel required>Profissão</FormLabel>
                    <InputText required placeholder="Profissão" />
                  </FormGroup>
                </div>
                <div className="col-span-12 md:col-span-6 lg:col-span-4">
                  <FormGroup>
                    <FormLabel required>Perfil</FormLabel>
                    <Select required>
                      <option>Perfil</option>
                      <option>Super Admin</option>
                      <option>Blogger</option>
                    </Select>
                  </FormGroup>
                </div>

                <div className="col-span-12">
                  <div className="flex justify-end">
                    <Button
                      variant="light"
                      type="button"
                      onClick={() => setShowQuestionMenssage(true)}
                    >
                      Cancelar
                    </Button>
                    <Button className="ml-2" variant="primary" type="submit">
                      Criar
                    </Button>
                  </div>
                </div>
              </div>
            </Form>
          </CardBody>
        </Card>
        <Card className="col-span-12 md:col-span-4">
          <CardHeader>
            <CardTitle>Opcionais</CardTitle>
          </CardHeader>
          <CardBody>
            <Form onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col space-y-6">
                <FormGroup>
                  <FormLabel>Site</FormLabel>
                  <InputText
                    placeholder="https://www.linkedin.com/in/loren..."
                    type="url"
                  />
                </FormGroup>

                <FormGroup>
                  <FormLabel>Sobre</FormLabel>
                  <TextArea placeholder="Minha bio..." />
                </FormGroup>
              </div>
            </Form>
          </CardBody>
        </Card>
      </div>
      <AlertModal
        show={showSuccessMemssage}
        variant="success"
        onClose={() => setShowSuccessMenssage(false)}
        description="Usuário Criado com Sucesso!"
      />
      <QuestionModal
        show={showQuestionMemssage}
        onClose={() => setShowQuestionMenssage(false)}
        onConfirm={() => setShowQuestionMenssage(false)}
        description="Tem certeza que deseja sair do cadastro de usuários?"
      />
    </>
  )
}

export default UserForm
