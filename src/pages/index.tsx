import type { NextPage } from 'next'
import { useContext, useEffect } from 'react'
import { Card, CardBody, CardTitle } from '../components/ui/layout/Card'
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
      <CardTitle>Home</CardTitle>
      <CardBody>
        <h1 className="first-letter:text-9xl">Home</h1>
      </CardBody>
    </Card>
  )
}

export default Home
