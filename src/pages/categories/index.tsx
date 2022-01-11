import Table from '../../components/ui/dataDisplay/Table'
import { Card, CardBody, CardTitle } from '../../components/ui/layout/Card'
import { getRandomIntInclusive } from '../../utils/getRamdomInt'
import { DateTime } from 'luxon'
import Link from 'next/link'
import Badge from '../../components/ui/dataDisplay/Badge'
import { Fragment, useContext, useEffect } from 'react'
import Button from '../../components/ui/forms/Button'
import IconButton from '../../components/ui/forms/IconButton'
import { FaPen, FaRegEye } from 'react-icons/fa'
import { BreadcrumbsContext } from '../../contexts/breadcrumbsContext'
import { RouteEnum } from '../../utils/routes'
import { getRange } from '../../utils/getRange'

function Categories() {
  const { handleSetBreadcrumbs } = useContext(BreadcrumbsContext)

  useEffect(() => {
    handleSetBreadcrumbs([{ path: RouteEnum.Categories, text: 'Categorias' }])
    return () => handleSetBreadcrumbs([])
  }, [handleSetBreadcrumbs])

  const categories = ['html', 'javascript', 'css']
  return (
    <Card className="w-full">
      <CardTitle>Categorias</CardTitle>
      <CardBody>
        <div className="flex flex-col">
          <div className="flex">
            <Link href={RouteEnum.CreateCategories}>
              <a className="ml-auto">
                <Button variant="primary">Criar Categoria</Button>
              </a>
            </Link>
          </div>
          <Table>
            <thead>
              <tr>
                <th>id</th>
                <th>Nome</th>
                <th>Subcategoria(s)</th>
                <th>Exibir no menu</th>
                <th>Criado em:</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {getRange(5).map((i) => {
                return (
                  <tr key={i}>
                    <td>
                      <Link href="#">
                        <a className="hover:underline">
                          #{getRandomIntInclusive(1, 1000)}
                        </a>
                      </Link>
                    </td>
                    <td>{categories[getRandomIntInclusive(0, categories.length - 1)]}</td>
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
                      {getRandomIntInclusive(0, 1) ? (
                        <Badge variant="info">Sim</Badge>
                      ) : (
                        <Badge variant="secondary">Não</Badge>
                      )}
                    </td>
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

export default Categories
