import type { NextPage } from 'next'
import { useContext, useEffect } from 'react'
import { Card, CardBody, CardHeader, CardTitle } from '../components/ui/layout/Card'
import { BreadcrumbsContext } from '../contexts/breadcrumbsContext'
import { RouteEnum } from '../utils/routes'

const Home: NextPage = () => {
  const { handleSetBreadcrumbs } = useContext(BreadcrumbsContext)

  useEffect(() => {
    handleSetBreadcrumbs([{ path: RouteEnum.Home, text: 'Home' }])
    return () => handleSetBreadcrumbs([])
  }, [handleSetBreadcrumbs])

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Home page</CardTitle>
      </CardHeader>
      <CardBody>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur odio nemo vitae
          dolores repellendus totam maxime et officiis iste quasi error officia, molestias
          tempore placeat, ratione provident veritatis atque? Vel.
        </p>
      </CardBody>
    </Card>
  )
}

export default Home
