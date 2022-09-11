import Alert, { alertVariants } from '../../components/ui/feedback/Alert'
import { Card, CardBody, CardHeader, CardTitle } from '../../components/ui/layout/Card'

const classNameCard = 'col-span-12 h-full md:col-span-12'

const lorem = `Lorem ipsum dolor sit amet consectetur adipisicing elit.
Exercitationem`

function AlertsPage() {
  return (
    <div className="flex">
      <Card>
        <CardHeader>
          <CardTitle>Default Alerts</CardTitle>
        </CardHeader>
        <CardBody>
          <div className="flex flex-col space-y-4">
            {Object.keys(alertVariants).map((variant) => (
              <Alert variant={variant as alertVariants} key={variant + 'example'}>
                <b>Hi! {variant}</b> - {lorem}
              </Alert>
            ))}
          </div>
        </CardBody>
      </Card>
    </div>
  )
}

export default AlertsPage
