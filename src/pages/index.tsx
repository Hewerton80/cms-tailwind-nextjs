import type { NextPage } from 'next'
import { Card, CardBody, CardTitle } from '../components/ui/layout/Card'

const Home: NextPage = () => {
  return (
    <Card className="w-full">
      <CardTitle>Home</CardTitle>
      <CardBody>
        <h1>Home</h1>
      </CardBody>
    </Card>
  )
}

export default Home
