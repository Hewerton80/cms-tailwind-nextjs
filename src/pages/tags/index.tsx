import Table from '../../components/ui/dataDisplay/Table'
import { Card, CardBody, CardTitle } from '../../components/ui/layout/Card'
import { getRandomIntInclusive } from '../../utils/getRamdomInt'
import { DateTime } from 'luxon'
import Link from 'next/link'
import { PostStatusEnum } from '../../types/Post'
import Button from '../../components/ui/forms/Button'
import IconButton from '../../components/ui/forms/IconButton'
import { FaPen, FaRegEye } from 'react-icons/fa'

function Tags() {
  const tags = ['html', 'javascript', 'css']
  return (
    <Card className="w-full">
      <CardTitle>Tags</CardTitle>
      <CardBody>
        <div className="flex flex-col">
          <div className="flex">
            <Button className="ml-auto" variant="info">
              Criar tag
            </Button>
          </div>
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
              {Array.from(Array(5).keys()).map((i) => {
                const status = Object.values(PostStatusEnum)[getRandomIntInclusive(0, 2)]

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
  )
}

export default Tags
