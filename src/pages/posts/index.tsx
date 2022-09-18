import Table, { Tbody, Td, Th, Thead, Tr } from '../../components/ui/dataDisplay/Table'
import {
  Card,
  CardActions,
  CardBody,
  CardFooter,
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
import { Button } from '../../components/ui/forms/Button'
import IconButton from '../../components/ui/forms/IconButton'
import { FaPen, FaRegEye, FaTrash } from 'react-icons/fa'
import { BreadcrumbsContext } from '../../contexts/breadcrumbsContext'
import { RouteEnum } from '../../utils/routes'
import PaginationBar from '../../components/ui/navigation/PaginationBar'

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
          <Link href="/posts/create">
            <a>
              <Button className="ml-auto" variantColor="primary">
                Criar post
              </Button>
            </a>
          </Link>
        </CardActions>
      </CardHeader>
      <CardBody>
        <Table>
          <Thead>
            <Tr>
              <Th>Título</Th>
              <Th>Categoria(s)</Th>
              <Th>Autor</Th>
              <Th>(Vizualizações / Likes / Favoritos)</Th>
              <Th>Data</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            {Array.from(Array(5).keys()).map((i) => {
              const status = Object.values(PostStatusEnum)[getRandomIntInclusive(0, 2)]

              return (
                <Tr key={i}>
                  <Td>
                    <Link href="#">
                      <a className="hover:underline">
                        Como centralizar um elemento com html e css
                      </a>
                    </Link>
                  </Td>
                  <Td>
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
                  </Td>

                  <Td>
                    <Link href="#">
                      <a className="hover:underline">Fulano@email.com.br</a>
                    </Link>
                  </Td>
                  <Td>
                    {String(getRandomIntInclusive(3, 150)).padStart(2, '0')}
                    {' / '}
                    {String(getRandomIntInclusive(3, 20)).padStart(2, '0')}
                    {' / '}
                    {String(getRandomIntInclusive(3, 20)).padStart(2, '0')}
                  </Td>
                  {/* <Td>
                      
                    </Td> */}
                  <Td>
                    <span className="flex flex-col ">
                      <Badge className="mb-1" variant={PostStatusVariantEnum[status]}>
                        {PostStatusPtBrEnum[status]}
                      </Badge>
                      {DateTime.now()
                        .plus({ days: -1 * getRandomIntInclusive(0, 365) })
                        .toFormat('ff')}
                    </span>
                  </Td>
                  <Td>
                    <div className="flex items-center justify-end">
                      <IconButton icon={<FaPen />} />
                      <IconButton className="ml-2" icon={<FaRegEye />} />
                      <IconButton
                        variantColor="danger"
                        className="ml-2"
                        icon={<FaTrash />}
                      />
                    </div>
                  </Td>
                </Tr>
              )
            })}
          </Tbody>
        </Table>
      </CardBody>
      <CardFooter>
        <PaginationBar
          currentPage={1}
          totalPages={10}
          perPage={25}
          totalRecords={1}
          onChangePage={(toPage) => {}}
        />
      </CardFooter>
    </Card>
  )
}

export default Posts
