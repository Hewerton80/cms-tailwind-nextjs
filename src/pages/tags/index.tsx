import Table from '../../components/ui/dataDisplay/Table'
import {
  Card,
  CardActions,
  CardBody,
  CardHeader,
  CardTitle,
} from '../../components/ui/layout/Card'
import { getRandomIntInclusive } from '../../utils/getRamdomInt'
import { DateTime } from 'luxon'
import Link from 'next/link'
import Button from '../../components/ui/forms/Button'
import IconButton from '../../components/ui/forms/IconButton'
import { FaPen, FaRegEye } from 'react-icons/fa'
import { useContext, useEffect } from 'react'
import { BreadcrumbsContext } from '../../contexts/breadcrumbsContext'
import { RouteEnum } from '../../utils/routes'
import { getRange } from '../../utils/getRange'

function Tags() {
  const { handleSetBreadcrumbs } = useContext(BreadcrumbsContext)

  useEffect(() => {
    handleSetBreadcrumbs([{ path: RouteEnum.Tags, text: 'Tags' }])
    return () => handleSetBreadcrumbs([])
  }, [handleSetBreadcrumbs])

  const tags = ['html', 'javascript', 'css']
  return (
    <>
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Tags</CardTitle>
          <CardActions>
            <Button className="ml-auto" variant="primary">
              Criar tag
            </Button>
          </CardActions>
        </CardHeader>
        <CardBody>
          <div className="flex flex-col">
            <div className="flex"></div>
            <Table>
              <thead>
                <tr>
                  <th>id</th>
                  <th>Nome</th>
                  <th>Nº posts</th>
                  <th>Criado em:</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {getRange(20).map((i) => {
                  return (
                    <tr key={i}>
                      <td>
                        <Link href="#">
                          <a className="hover:underline">
                            #{getRandomIntInclusive(1, 1000)}
                          </a>
                        </Link>
                      </td>
                      <td>{tags[getRandomIntInclusive(0, tags.length - 1)]}</td>

                      <td>{String(getRandomIntInclusive(3, 150)).padStart(2, '0')}</td>
                      <td>
                        {DateTime.now()
                          .plus({ days: -1 * getRandomIntInclusive(0, 365) })
                          .toFormat('ff')}
                      </td>
                      <td>
                        <div className="flex items-center justify-end">
                          <IconButton icon={<FaPen />} />
                          <IconButton className="ml-2" icon={<FaRegEye />} />
                        </div>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </Table>
          </div>
        </CardBody>
      </Card>
    </>
  )
}

export default Tags
