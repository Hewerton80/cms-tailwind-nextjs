import { types } from '@storybook/addons'
import { useRouter } from 'next/router'
import { FormEvent, useCallback, useMemo, useState } from 'react'
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
import { useUser } from '../../hooks/useUser'
import { IUser } from '../../types/User'
import { userRoleOptions } from '../../utils/userRoleOptions'

interface UserFormProps {
  isEdit?: boolean
  user?: any
}

function UserForm({ isEdit }: UserFormProps) {
  const { createUser, isSubmitingUsers, submitUserError } = useUser()

  const router = useRouter()

  const [showSuccessMemssage, setShowSuccessMenssage] = useState(false)
  const [showErrorMemssage, setShowErrorMenssage] = useState(false)
  const [showQuestionMemssage, setShowQuestionMenssage] = useState(false)

  const [newUser, setNewUser] = useState<IUser>({
    nickname: '',
    firstname: '',
    secondname: '',
    email: '',
    occupation: '',
    website: '',
    about: '',
    role: '',
  })

  const handleChangeUser = useCallback(
    ({ field, value }: { field: keyof typeof newUser; value: string }) => {
      setNewUser({
        ...newUser,
        [field]: value,
      })
    },
    [newUser]
  )

  const handleCreateUser = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      const callbackSucess = () => {
        setShowSuccessMenssage(true)
      }
      const callbackError = () => {
        setShowErrorMenssage(true)
      }
      createUser(newUser, callbackSucess, callbackError)
    },
    [newUser, createUser]
  )

  const actionsButtons = useMemo(() => {
    return (
      <div className="flex justify-end w-full">
        <Button
          variantColor="light"
          type="button"
          onClick={() => setShowQuestionMenssage(true)}
          disabled={isSubmitingUsers}
        >
          Cancelar
        </Button>
        <Button
          className="ml-2"
          variantColor="primary"
          isLoading={isSubmitingUsers}
          type="submit"
        >
          Criar
        </Button>
      </div>
    )
  }, [isSubmitingUsers])

  return (
    <>
      <div className="grid grid-cols-12 gap-6">
        <Card className="col-span-12 sm:col-span-12 lg:col-span-8">
          <CardHeader>
            <CardTitle>{isEdit ? 'Editar' : 'Criar'} Usuário</CardTitle>
          </CardHeader>
          <CardBody>
            <Form onSubmit={handleCreateUser}>
              <div className="grid grid-cols-12 gap-6">
                <div className="col-span-12 md:col-span-12 lg:col-span-4">
                  <FormGroup>
                    <FormLabel required>Nome de usuário</FormLabel>
                    <InputText
                      id="nickname"
                      value={newUser.nickname}
                      onChange={(e) => {
                        handleChangeUser({
                          field: 'nickname',
                          value: e.target.value,
                        })
                        console.log(e.target.id)
                      }}
                      required
                      placeholder="Nome de usuário"
                      error={submitUserError?.nickname}
                    />
                  </FormGroup>
                </div>
                <div className="col-span-12 md:col-span-12 lg:col-span-4">
                  <FormGroup>
                    <FormLabel required>Primeiro nome</FormLabel>
                    <InputText
                      id="firstname"
                      required
                      placeholder="Primeiro nome"
                      value={newUser.firstname}
                      onChange={(e) =>
                        handleChangeUser({
                          field: 'firstname',
                          value: e.target.value,
                        })
                      }
                      error={submitUserError?.firstname}
                    />
                  </FormGroup>
                </div>
                <div className="col-span-12 md:col-span-12 lg:col-span-4">
                  <FormGroup>
                    <FormLabel required>Segundo nome</FormLabel>
                    <InputText
                      id="secondname"
                      placeholder="Segundo nome"
                      value={newUser.secondname}
                      onChange={(e) =>
                        handleChangeUser({
                          field: 'secondname',
                          value: e.target.value,
                        })
                      }
                      error={submitUserError?.secondname}
                    />
                  </FormGroup>
                </div>

                <div className="col-span-12 md:col-span-12 lg:col-span-4">
                  <FormGroup>
                    <FormLabel required>Email</FormLabel>
                    <InputText
                      id="email"
                      value={newUser.email}
                      onChange={(e) =>
                        handleChangeUser({
                          field: 'email',
                          value: e.target.value,
                        })
                      }
                      error={submitUserError?.email}
                      placeholder="Email"
                      type="email"
                    />
                  </FormGroup>
                </div>
                <div className="col-span-12 md:col-span-12 lg:col-span-4">
                  <FormGroup>
                    <FormLabel required>Profissão</FormLabel>
                    <InputText
                      id="occupation"
                      value={newUser.occupation}
                      onChange={(e) =>
                        handleChangeUser({
                          field: 'occupation',
                          value: e.target.value,
                        })
                      }
                      error={submitUserError?.occupation}
                      required
                      placeholder="Profissão"
                    />
                  </FormGroup>
                </div>
                <div className="col-span-12 md:col-span-12 lg:col-span-4">
                  <FormGroup>
                    <FormLabel required>Perfil</FormLabel>
                    <Select
                      id="role"
                      required
                      value={newUser.role}
                      onChange={(e) =>
                        handleChangeUser({
                          field: 'role',
                          value: e.target.value,
                        })
                      }
                      error={submitUserError?.role}
                    >
                      <option value="">Perfil</option>
                      {userRoleOptions.map((userRoleOption) => (
                        <option key={userRoleOption.value} value={userRoleOption.value}>
                          {userRoleOption.text}
                        </option>
                      ))}
                    </Select>
                  </FormGroup>
                </div>

                <div className="hidden lg:flex col-span-12">{actionsButtons}</div>
              </div>
            </Form>
          </CardBody>
        </Card>
        <Card className="col-span-12 sm:col-span-12 lg:col-span-4">
          <CardHeader>
            <CardTitle>Opcionais</CardTitle>
          </CardHeader>
          <CardBody>
            <Form onSubmit={handleCreateUser}>
              <div className="grid grid-cols-12 gap-y-6">
                <div className="col-span-12">
                  <FormGroup>
                    <FormLabel>Site</FormLabel>
                    <InputText
                      id="website"
                      placeholder="https://www.linkedin.com/in/loren..."
                      type="url"
                      value={newUser.website}
                      onChange={(e) =>
                        handleChangeUser({
                          field: 'website',
                          value: e.target.value,
                        })
                      }
                      error={submitUserError?.website}
                      required
                    />
                  </FormGroup>
                </div>
                <div className="col-span-12">
                  <FormGroup>
                    <FormLabel>Sobre</FormLabel>
                    <TextArea
                      id="about"
                      value={newUser.about}
                      onChange={(e) =>
                        handleChangeUser({
                          field: 'about',
                          value: e.target.value,
                        })
                      }
                      error={submitUserError?.about}
                      placeholder="Minha bio..."
                    />
                  </FormGroup>
                </div>
                <div className="flex lg:hidden col-span-12">{actionsButtons}</div>
              </div>
            </Form>
          </CardBody>
        </Card>
      </div>
      <AlertModal
        show={showSuccessMemssage}
        variant="success"
        onClose={() => router.push('/users')}
        description="Usuário Criado com Sucesso!"
      />
      <AlertModal
        show={showErrorMemssage}
        variant="danger"
        onClose={() => setShowErrorMenssage(false)}
        description="Falha ao criar usuário, por favor tente novamente em instantes"
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
