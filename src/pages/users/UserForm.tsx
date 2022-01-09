import FormGroup from '../../components/ui/forms/FormGroup'
import FormLabel from '../../components/ui/forms/FormLabel'
import InputText from '../../components/ui/forms/InputText'
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
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-6">
            <FormGroup>
              <FormLabel>Primeiro nome</FormLabel>
              <InputText placeholder="Primeiro nome" />
            </FormGroup>
          </div>
          <div className="col-span-12 md:col-span-6">
            <FormGroup>
              <FormLabel>Segundo nome</FormLabel>
              <InputText placeholder="Segundo nome" />
            </FormGroup>
          </div>
        </div>
      </CardBody>
    </Card>
  )
}

export default UserForm
