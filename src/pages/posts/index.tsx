import Table from '../../components/ui/dataDisplay/Table'
import { Card, CardBody, CardTitle } from '../../components/ui/layout/Card'
import { getRandomIntInclusive } from '../../utils/getRamdomInt'
import { DateTime } from 'luxon'
import Link from 'next/link'
import {
  PostStatusEnum,
  PostStatusPtBrEnum,
  PostStatusVariantEnum,
} from '../../types/Post'
import Badge from '../../components/ui/dataDisplay/Badge'
import { Fragment } from 'react'

const categories = ['html', 'javascript', 'css']

function Posts() {
  return (
    <Card className="w-full">
      <CardTitle>Posts</CardTitle>
      <CardBody>
        <Table>
          <thead>
            <tr>
              <th>id</th>
              <th>Título</th>
              <th>Categoria(s)</th>
              <th>Autor</th>
              <th>N° Vizualizações (Públicas / Anônimas)</th>
              <th>Situação</th>
              <th>Publicado em:</th>
            </tr>
          </thead>
          <tbody>
            {Array.from(Array(5).keys()).map((i) => {
              const variant = Object.values(PostStatusEnum)[getRandomIntInclusive(0, 2)]

              return (
                <tr key={i}>
                  <td>
                    <Link href="#">
                      <a className="hover:underline">#{getRandomIntInclusive(1, 1000)}</a>
                    </Link>
                  </td>
                  <td>
                    <Link href="#">
                      <a className="hover:underline">
                        Como centralizar um elemento com html e css
                      </a>
                    </Link>
                  </td>
                  <td>
                    {categories
                      .map((cat, i) => (
                        <Fragment key={'cat' + i}>
                          <Link href="#">
                            <a className="hover:underline cursor-pointer">{cat}</a>
                          </Link>
                          {i >= 0 && i < categories.length - 1 ? ', ' : ''}
                        </Fragment>
                      ))
                      .filter(() => getRandomIntInclusive(0, 3))}
                  </td>

                  <td>
                    <Link href="#">
                      <a className="hover:underline">Fulano</a>
                    </Link>
                  </td>
                  <td>
                    {getRandomIntInclusive(3, 20)}
                    {' / '}
                    <Link href="#">
                      <a className="hover:underline">{getRandomIntInclusive(3, 20)}</a>
                    </Link>
                  </td>
                  <td>
                    <Badge variant={PostStatusVariantEnum[variant]}>
                      {PostStatusPtBrEnum[variant]}
                    </Badge>
                  </td>
                  <td>
                    {DateTime.now()
                      .plus({ days: -1 * getRandomIntInclusive(0, 365) })
                      .toFormat('ff')}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </Table>
      </CardBody>
    </Card>
  )
}

export default Posts
