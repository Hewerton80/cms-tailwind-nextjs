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
import {
  PostStatusEnum,
  PostStatusPtBrEnum,
  PostStatusVariantEnum,
} from '../../types/Post'
import Badge from '../../components/ui/dataDisplay/Badge'
import { Fragment, useContext, useEffect } from 'react'
import Button from '../../components/ui/forms/Button'
import IconButton from '../../components/ui/forms/IconButton'
import { FaPen, FaRegEye, FaTrash } from 'react-icons/fa'
import { BreadcrumbsContext } from '../../contexts/breadcrumbsContext'
import { RouteEnum } from '../../utils/routes'

function Posts() {
  const { handleSetBreadcrumbs } = useContext(BreadcrumbsContext)

  useEffect(() => {
    handleSetBreadcrumbs([{ path: RouteEnum.Posts, text: 'Posts' }])
    return () => handleSetBreadcrumbs([])
  }, [handleSetBreadcrumbs])

  const categories = ['html', 'javascript', 'css']
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Posts</CardTitle>
        <CardActions>
          <Button className="ml-auto" variant="primary">
            Criar post
          </Button>
        </CardActions>
      </CardHeader>
      <CardBody>
        <Table>
          <thead>
            <tr>
              <th>Título</th>
              <th>Categoria(s)</th>
              <th>Autor</th>
              <th>(Vizualizações / Likes / Favoritos)</th>
              <th>Data</th>
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
                          {categories.length > 0 && i >= 0 && i < categories.length - 1
                            ? ', '
                            : ''}
                        </Fragment>
                      ))
                      .filter(() => getRandomIntInclusive(0, 3))}
                  </td>

                  <td>
                    <Link href="#">
                      <a className="hover:underline">Fulano@email.com.br</a>
                    </Link>
                  </td>
                  <td>
                    {String(getRandomIntInclusive(3, 150)).padStart(2, '0')}
                    {' / '}
                    {String(getRandomIntInclusive(3, 20)).padStart(2, '0')}
                    {' / '}
                    {String(getRandomIntInclusive(3, 20)).padStart(2, '0')}
                  </td>
                  {/* <td>
                      
                    </td> */}
                  <td>
                    <span className="flex flex-col ">
                      <Badge className="mb-1" variant={PostStatusVariantEnum[status]}>
                        {PostStatusPtBrEnum[status]}
                      </Badge>
                      {DateTime.now()
                        .plus({ days: -1 * getRandomIntInclusive(0, 365) })
                        .toFormat('ff')}
                    </span>
                  </td>
                  <td>
                    <div className="flex items-center justify-end">
                      <IconButton icon={<FaPen />} />
                      <IconButton className="ml-2" icon={<FaRegEye />} />
                      <IconButton variant="danger" className="ml-2" icon={<FaTrash />} />
                    </div>
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
