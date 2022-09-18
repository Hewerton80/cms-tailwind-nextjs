import { Card, CardBody, CardHeader, CardTitle } from '../../components/ui/layout/Card'

import {
  ButtonWithTextAndIcon,
  DisabledButtons,
  DropdownButtons,
  GroupButtons,
  IconButtons,
  LoadButtons,
  OutlinedButtons,
  RoundedButtons,
  SingleColorButtons,
  SizeButtons,
  TextedButtons,
} from '../../components/ui/forms/Button/Button.stories'
import { RouteEnum } from '../../utils/routes'
import { useContext, useEffect } from 'react'
import { BreadcrumbsContext } from '../../contexts/breadcrumbsContext'

function ButtonsPage() {
  const { handleSetBreadcrumbs } = useContext(BreadcrumbsContext)

  useEffect(() => {
    handleSetBreadcrumbs([
      { path: '#', text: 'UI Elements' },
      { path: RouteEnum.Buttons, text: 'Buttons' },
    ])
    return () => handleSetBreadcrumbs([])
  }, [handleSetBreadcrumbs])

  const cardButtonsPage = [
    { cardTitle: 'Single Color Buttons', storybookComponent: <SingleColorButtons /> },
    { cardTitle: 'Outlined Buttons', storybookComponent: <OutlinedButtons /> },
    { cardTitle: 'Texted Buttons', storybookComponent: <TextedButtons /> },
    { cardTitle: 'Disabled Buttons', storybookComponent: <DisabledButtons /> },
    { cardTitle: 'Rounded Buttons', storybookComponent: <RoundedButtons /> },
    { cardTitle: 'Load Buttons', storybookComponent: <LoadButtons /> },
    { cardTitle: 'Size Buttons', storybookComponent: <SizeButtons /> },
    { cardTitle: 'Button Group', storybookComponent: <GroupButtons /> },
    { cardTitle: 'Dropdown Buttons', storybookComponent: <DropdownButtons /> },
    {
      cardTitle: 'Button With Text And Icon',
      storybookComponent: <ButtonWithTextAndIcon />,
    },
    {
      cardTitle: 'Icon Buttons',
      storybookComponent: <IconButtons />,
    },
  ]
  return (
    <div className="grid grid-cols-12 gap-4 pb-8">
      {cardButtonsPage.map((cardButtonPage) => (
        <Card
          className="col-span-12 !h-full md:col-span-12"
          key={cardButtonPage.cardTitle}
        >
          <CardHeader>
            <CardTitle>{cardButtonPage.cardTitle}</CardTitle>
          </CardHeader>
          <CardBody>{cardButtonPage.storybookComponent}</CardBody>
        </Card>
      ))}
    </div>
  )
}

export default ButtonsPage
