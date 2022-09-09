import Button, { buttonVariants, variantType } from '../../components/ui/forms/Button'
import { Card, CardBody, CardHeader, CardTitle } from '../../components/ui/layout/Card'
import { FiUpload } from 'react-icons/fi'
import { AiTwotoneEdit } from 'react-icons/ai'
import { ButtonGroup } from '../../components/ui/layout'

function ButtonsPage() {
  return (
    <div className="grid grid-cols-12 gap-4 pb-8">
      <Card className="col-span-12 h-fullrow-auto md:col-span-6">
        <CardHeader>
          <CardTitle>Single Color Buttons</CardTitle>
        </CardHeader>
        <CardBody>
          <div className="flex flex-wrap -ml-2 -mt-2">
            {Object.keys(buttonVariants).map((variant) => (
              <Button
                key={variant + 'simple'}
                variant={variant as variantType}
                className="ml-2 mt-2"
              >
                {variant}
              </Button>
            ))}
          </div>
        </CardBody>
      </Card>
      <Card className="col-span-12 h-full md:col-span-6">
        <CardHeader>
          <CardTitle>Disabled Buttons</CardTitle>
        </CardHeader>
        <CardBody>
          <div className="flex flex-wrap -ml-2 -mt-2">
            {Object.keys(buttonVariants).map((variant) => (
              <Button
                key={variant + 'disbled'}
                variant={variant as variantType}
                className="ml-2 mt-2"
                disabled
              >
                {variant}
              </Button>
            ))}
          </div>
        </CardBody>
      </Card>
      <Card className="col-span-12 h-full md:col-span-6">
        <CardHeader>
          <CardTitle>Rounded Buttons</CardTitle>
        </CardHeader>
        <CardBody>
          <div className="flex flex-wrap -ml-2 -mt-2">
            {Object.keys(buttonVariants).map((variant) => (
              <Button
                key={variant + 'rounded'}
                variant={variant as variantType}
                className="ml-2 mt-2"
                rounded
              >
                {variant}
              </Button>
            ))}
          </div>
        </CardBody>
      </Card>
      <Card className="col-span-12 h-full md:col-span-6">
        <CardHeader>
          <CardTitle>Load Buttons</CardTitle>
        </CardHeader>
        <CardBody>
          <div className="flex flex-wrap -ml-2 -mt-2">
            {Object.keys(buttonVariants).map((variant) => (
              <Button
                key={variant + 'load'}
                variant={variant as variantType}
                className="ml-2 mt-2"
                isLoading
              >
                {variant}
              </Button>
            ))}
          </div>
        </CardBody>
      </Card>
      <Card className="col-span-12 h-full md:col-span-6">
        <CardHeader>
          <CardTitle>Outlined Buttons</CardTitle>
        </CardHeader>
        <CardBody>
          <div className="flex flex-wrap -ml-2 -mt-2">
            {Object.keys(buttonVariants).map((variant) => (
              <Button
                key={variant + 'outlined'}
                variant={variant as variantType}
                className="ml-2 mt-2"
                outlined
              >
                {variant}
              </Button>
            ))}
          </div>
        </CardBody>
      </Card>
      <Card className="col-span-12 h-full md:col-span-6">
        <CardHeader>
          <CardTitle>Button Size</CardTitle>
        </CardHeader>
        <CardBody>
          <div className="flex flex-col space-y-2">
            <Button variant="danger" size="lg">
              size lg
            </Button>
            <Button variant="success" size="md">
              size md
            </Button>
            <Button variant="primary" size="sm">
              size sm
            </Button>
          </div>
        </CardBody>
      </Card>
      <Card className="col-span-12 h-full md:col-span-6">
        <CardHeader>
          <CardTitle>Button Group</CardTitle>
        </CardHeader>
        <CardBody>
          <div className="flex flex-wrap gap-2">
            <ButtonGroup>
              <Button variant="primary">Left</Button>
              <Button variant="primary">Middle</Button>
              <Button variant="primary">Right</Button>
            </ButtonGroup>
            <ButtonGroup>
              <Button variant="primary" outlined>
                Left
              </Button>
              <Button variant="primary" outlined>
                Middle
              </Button>
              <Button variant="primary" outlined>
                Right
              </Button>
            </ButtonGroup>
            <ButtonGroup vertical>
              <Button variant="primary" outlined>
                Left
              </Button>
              <Button variant="primary" outlined>
                Middle
              </Button>
              <Button variant="primary" outlined>
                Right
              </Button>
            </ButtonGroup>
          </div>
        </CardBody>
      </Card>
      <Card className="col-span-12 h-full md:col-span-6">
        <CardHeader>
          <CardTitle>Block Buttons</CardTitle>
        </CardHeader>
        <CardBody>
          <div className="flex flex-col space-y-2">
            <Button variant="danger" full>
              Block Buttons
            </Button>
            <Button variant="success" full>
              Block Buttons
            </Button>
            <Button variant="primary" full>
              Block Buttons
            </Button>
          </div>
        </CardBody>
      </Card>
      <Card className="col-span-12 h-full md:col-span-6">
        <CardHeader>
          <CardTitle>Button With Text And Icon</CardTitle>
        </CardHeader>
        <CardBody>
          <div className="flex flex-wrap gap-2">
            <Button variant="danger" leftIcon={<FiUpload />}>
              Uploads
            </Button>
            <Button variant="success" rightIcon={<AiTwotoneEdit />}>
              Edit
            </Button>
          </div>
        </CardBody>
      </Card>
    </div>
  )
}

export default ButtonsPage
