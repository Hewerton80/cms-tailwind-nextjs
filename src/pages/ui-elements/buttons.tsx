import Button, {
  buttonVariants,
  variantColorType,
} from '../../components/ui/forms/Button'
import { Card, CardBody, CardHeader, CardTitle } from '../../components/ui/layout/Card'
import { FiUpload } from 'react-icons/fi'
import { AiTwotoneEdit, AiOutlineUserSwitch } from 'react-icons/ai'
import { ButtonGroup } from '../../components/ui/layout'
import {
  DropDown,
  DropDownItem,
  DropDownMenu,
  DropDownToogle,
} from '../../components/ui/overlay/DropDown'
import IconButton from '../../components/ui/forms/IconButton'

const classNameCard = 'col-span-12 h-full md:col-span-6'
function ButtonsPage() {
  return (
    <div className="grid grid-cols-12 gap-4 pb-8">
      <Card className={classNameCard}>
        <CardHeader>
          <CardTitle>Single Color Buttons</CardTitle>
        </CardHeader>
        <CardBody>
          <div className="flex flex-wrap -ml-2 -mt-2">
            {Object.keys(buttonVariants).map((variantColor) => (
              <Button
                key={variantColor + 'simple'}
                variantColor={variantColor as variantColorType}
                className="ml-2 mt-2"
              >
                {variantColor}
              </Button>
            ))}
          </div>
        </CardBody>
      </Card>
      <Card className={classNameCard}>
        <CardHeader>
          <CardTitle>Disabled Buttons</CardTitle>
        </CardHeader>
        <CardBody>
          <div className="flex flex-wrap -ml-2 -mt-2">
            {Object.keys(buttonVariants).map((variantColor) => (
              <Button
                key={variantColor + 'disbled'}
                variantColor={variantColor as variantColorType}
                className="ml-2 mt-2"
                disabled
              >
                {variantColor}
              </Button>
            ))}
          </div>
        </CardBody>
      </Card>
      <Card className={classNameCard}>
        <CardHeader>
          <CardTitle>Rounded Buttons</CardTitle>
        </CardHeader>
        <CardBody>
          <div className="flex flex-wrap -ml-2 -mt-2">
            {Object.keys(buttonVariants).map((variantColor) => (
              <Button
                key={variantColor + 'rounded'}
                variantColor={variantColor as variantColorType}
                className="ml-2 mt-2"
                rounded
              >
                {variantColor}
              </Button>
            ))}
          </div>
        </CardBody>
      </Card>
      <Card className={classNameCard}>
        <CardHeader>
          <CardTitle>Load Buttons</CardTitle>
        </CardHeader>
        <CardBody>
          <div className="flex flex-wrap -ml-2 -mt-2">
            {Object.keys(buttonVariants).map((variantColor) => (
              <Button
                key={variantColor + 'load'}
                variantColor={variantColor as variantColorType}
                className="ml-2 mt-2"
                isLoading
              >
                {variantColor}
              </Button>
            ))}
          </div>
        </CardBody>
      </Card>
      <Card className={classNameCard}>
        <CardHeader>
          <CardTitle>Outlined Buttons</CardTitle>
        </CardHeader>
        <CardBody>
          <div className="flex flex-wrap -ml-2 -mt-2">
            {Object.keys(buttonVariants).map((variantColor) => (
              <Button
                key={variantColor + 'outlined'}
                variantColor={variantColor as variantColorType}
                className="ml-2 mt-2"
                variantStyle="outlined"
              >
                {variantColor}
              </Button>
            ))}
          </div>
        </CardBody>
      </Card>
      <Card className={classNameCard}>
        <CardHeader>
          <CardTitle>Texted Buttons</CardTitle>
        </CardHeader>
        <CardBody>
          <div className="flex flex-wrap -ml-2 -mt-2">
            {Object.keys(buttonVariants).map((variantColor) => (
              <Button
                key={variantColor + 'texted'}
                variantColor={variantColor as variantColorType}
                className="ml-2 mt-2"
                variantStyle="texted"
              >
                {variantColor}
              </Button>
            ))}
          </div>
        </CardBody>
      </Card>
      <Card className={classNameCard}>
        <CardHeader>
          <CardTitle>Button Size</CardTitle>
        </CardHeader>
        <CardBody>
          <div className="flex flex-col space-y-2">
            <Button variantColor="danger" size="lg">
              size lg
            </Button>
            <Button variantColor="success" size="md">
              size md
            </Button>
            <Button variantColor="primary" size="sm">
              size sm
            </Button>
          </div>
        </CardBody>
      </Card>
      <Card className={classNameCard}>
        <CardHeader>
          <CardTitle>Button Group</CardTitle>
        </CardHeader>
        <CardBody>
          <div className="flex flex-wrap gap-2">
            <ButtonGroup vertical>
              <Button variantColor="primary" variantStyle="outlined">
                Top
              </Button>
              <Button variantColor="primary" variantStyle="outlined">
                Middle
              </Button>
              <Button variantColor="primary" variantStyle="outlined">
                Bottom
              </Button>
            </ButtonGroup>
            <ButtonGroup>
              <Button variantColor="primary">Left</Button>
              <Button variantColor="primary">Middle</Button>
              <Button variantColor="primary">Right</Button>
            </ButtonGroup>
            <ButtonGroup>
              <Button variantColor="primary" variantStyle="outlined">
                Left
              </Button>
              <Button variantColor="primary" variantStyle="outlined">
                Middle
              </Button>
              <Button variantColor="primary" variantStyle="outlined">
                Right
              </Button>
            </ButtonGroup>
          </div>
        </CardBody>
      </Card>
      <Card className={classNameCard}>
        <CardHeader>
          <CardTitle>Dropdown buttons</CardTitle>
        </CardHeader>
        <CardBody>
          <div className="flex flex-wrap gap-2">
            <DropDown>
              <DropDownToogle>DropDown</DropDownToogle>

              <DropDownMenu>
                <DropDownItem href="#">DropDown link</DropDownItem>
                <DropDownItem href="#" as="button">
                  DropDown link
                </DropDownItem>
              </DropDownMenu>
            </DropDown>
          </div>
        </CardBody>
      </Card>
      <Card className={classNameCard}>
        <CardHeader>
          <CardTitle>Block Buttons</CardTitle>
        </CardHeader>
        <CardBody>
          <div className="flex flex-col space-y-2">
            <Button variantColor="danger" full>
              Block Buttons
            </Button>
            <Button variantColor="success" full>
              Block Buttons
            </Button>
            <Button variantColor="primary" full>
              Block Buttons
            </Button>
          </div>
        </CardBody>
      </Card>
      <Card className={classNameCard}>
        <CardHeader>
          <CardTitle>Button With Text And Icon</CardTitle>
        </CardHeader>
        <CardBody>
          <div className="flex flex-wrap gap-2">
            <Button variantColor="danger" leftIcon={<FiUpload />}>
              Uploads
            </Button>
            <Button variantColor="success" rightIcon={<AiTwotoneEdit />}>
              Edit
            </Button>
          </div>
        </CardBody>
      </Card>
      <Card className={classNameCard}>
        <CardHeader>
          <CardTitle>Icon Buttons</CardTitle>
        </CardHeader>
        <CardBody>
          <div className="flex flex-wrap gap-2">
            <IconButton variantColor="danger" icon={<AiOutlineUserSwitch />} size="sm" />
            <IconButton variantColor="success" icon={<AiTwotoneEdit />} size="md" />
            <IconButton variantColor="info" icon={<FiUpload />} size="lg" />
          </div>
        </CardBody>
      </Card>
    </div>
  )
}

export default ButtonsPage
