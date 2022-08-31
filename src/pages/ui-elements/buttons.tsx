import Button, { buttonVariants, variantType } from '../../components/ui/forms/Button'
import { Card, CardBody, CardHeader, CardTitle } from '../../components/ui/layout/Card'

function ButtonsPage() {
  return (
    <div className="grid grid-cols-12 gap-4">
      <Card className="col-span-12 md:col-span-6">
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
      <Card className="col-span-12 md:col-span-6">
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
      <Card className="col-span-12 md:col-span-6">
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
      <Card className="col-span-12 md:col-span-6">
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
      <Card className="col-span-12 md:col-span-6">
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
    </div>
  )
}

export default ButtonsPage
