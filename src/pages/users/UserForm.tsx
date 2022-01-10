import Button from '../../components/ui/forms/Button'
import Form from '../../components/ui/forms/Form'
import FormGroup from '../../components/ui/forms/FormGroup'
import FormLabel from '../../components/ui/forms/FormLabel'
import InputText from '../../components/ui/forms/InputText'
import Select from '../../components/ui/forms/Select'
import TextArea from '../../components/ui/forms/TextArea'
import { Card, CardBody, CardTitle } from '../../components/ui/layout/Card'

interface UserFormProps {
  isEdit?: boolean
  user?: any
}

function UserForm({ isEdit }: UserFormProps) {
  return (
    <Card>
      <CardTitle>{isEdit ? 'Editar' : 'Criar'} Usuário</CardTitle>
      <CardBody>
        <Form onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-12 gap-6">
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
                <FormLabel required>Dia de nascimento</FormLabel>
                <Select required>
                  <option>Dia</option>
                </Select>
              </FormGroup>
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-4">
              <FormGroup>
                <FormLabel required>Mês de nascimento</FormLabel>
                <Select required>
                  <option>Mês</option>
                </Select>
              </FormGroup>
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-4">
              <FormGroup>
                <FormLabel required>Ano de nascimento</FormLabel>
                <Select required>
                  <option>Ano</option>
                </Select>
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
            <div className="col-span-12 md:col-span-6 lg:col-span-4">
              <FormGroup>
                <FormLabel>Linkedin</FormLabel>
                <InputText
                  placeholder="https://www.linkedin.com/in/loren..."
                  type="url"
                />
              </FormGroup>
            </div>

            <div className="col-span-12">
              <FormGroup>
                <FormLabel>Sobre</FormLabel>
                <TextArea placeholder="Minha bio..." />
              </FormGroup>
            </div>
            <div className="col-span-12">
              <Button className="ml-auto" variant="primary" type="submit">
                Criar
              </Button>
            </div>
          </div>
        </Form>
      </CardBody>
    </Card>
  )
}

export default UserForm
