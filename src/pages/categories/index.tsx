import Table from '../../components/ui/dataDisplay/Table'
import { Card, CardBody, CardTitle } from '../../components/ui/layout/Card'
import { getRandomIntInclusive } from '../../utils/getRamdomInt'
import Link from 'next/link'
import { Fragment, useContext, useEffect } from 'react'
import IconButton from '../../components/ui/forms/IconButton'
import { FaCheck, FaEye, FaEyeSlash, FaPen, FaRegEye, FaTimes } from 'react-icons/fa'
import { BreadcrumbsContext } from '../../contexts/breadcrumbsContext'
import { RouteEnum } from '../../utils/routes'
import { getRange } from '../../utils/getRange'
import CategoryForm from './CategoryForm'
import cn from 'classnames'

function Categories() {
  const { handleSetBreadcrumbs } = useContext(BreadcrumbsContext)

  useEffect(() => {
    handleSetBreadcrumbs([{ path: RouteEnum.Categories, text: 'Categorias' }])
    return () => handleSetBreadcrumbs([])
  }, [handleSetBreadcrumbs])

  const categories = ['html', 'javascript', 'css', 'liguagens de programação']
  const categorySlugs = categories.map((category) => category.split(' ').join('-'))
  return (
    <div
      className={cn(
        'flex flex-col 2xl:flex-row',
        'mb-6',
        'space-x-0 2xl:space-x-6 space-y-6 2xl:space-y-0'
      )}
    >
      <Card className="flex-1">
        <CardTitle>Categorias</CardTitle>
        <CardBody>
          <Table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Slug</th>
                <th>Posts</th>
                <th>Exibir no menu</th>
                <th>status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {getRange(5).map((i) => {
                const categoryIndex = getRandomIntInclusive(0, categories.length - 1)
                return (
                  <tr key={i}>
                    <td>{categories[categoryIndex]}</td>
                    <td>{categorySlugs[categoryIndex]}</td>
                    <td>{getRandomIntInclusive(0, 20)}</td>
                    <td>
                      <span className="text-lg">
                        {getRandomIntInclusive(0, 1) ? (
                          <FaCheck className="text-info" />
                        ) : (
                          <FaTimes className="text-secondary" />
                        )}
                      </span>
                    </td>
                    <td>
                      <span className="text-lg">
                        {getRandomIntInclusive(0, 1) ? (
                          <FaEye className="text-info" />
                        ) : (
                          <FaEyeSlash className="text-secondary" />
                        )}
                      </span>
                    </td>
                    <td>
                      <div className="flex items-center justify-end">
                        <Link href="#">
                          <a>
                            <IconButton icon={<FaPen />} />
                          </a>
                        </Link>
                        <Link href="#">
                          <a>
                            <IconButton className="ml-2" icon={<FaRegEye />} />
                          </a>
                        </Link>
                      </div>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </Table>
        </CardBody>
      </Card>
      <div className="flex min-w-[300px]">
        <CategoryForm />
      </div>
    </div>
  )
}

export default Categories
