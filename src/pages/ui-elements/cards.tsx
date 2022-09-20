import { useContext, useEffect } from 'react'
import { DefaultAlerts } from '../../components/ui/feedback/Alert/Alert.stories'
import { Card, CardBody, CardHeader, CardTitle } from '../../components/ui/layout/Card'
import { ColorsCard, ImageCard } from '../../components/ui/layout/Card/Card.stories'
import { BreadcrumbsContext } from '../../contexts/breadcrumbsContext'
import { RouteEnum } from '../../utils/routes'

const lorem = `Lorem ipsum dolor sit amet consectetur adipisicing elit.
Exercitationem`

function CardsPage() {
  const { handleSetBreadcrumbs } = useContext(BreadcrumbsContext)

  useEffect(() => {
    handleSetBreadcrumbs([
      { path: '#', text: 'UI Elements' },
      { path: RouteEnum.Cards, text: 'Cards' },
    ])
    return () => handleSetBreadcrumbs([])
  }, [handleSetBreadcrumbs])
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col">
        <h2 className="text-xl">Image Cards</h2> {<ImageCard />}
      </div>
      <div>
        <h2 className="text-xl">Colors Cards</h2>
        {<ColorsCard />}
      </div>
    </div>
  )
}

export default CardsPage
