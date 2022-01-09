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
import Button from '../../components/ui/forms/Button'
import IconButton from '../../components/ui/forms/IconButton'
import { FaPen, FaRegEye } from 'react-icons/fa'

function Categories() {
  const categories = ['html', 'javascript', 'css']
  return (
    <Card className="w-full">
      <CardTitle>Categorias</CardTitle>
      <CardBody>
        <div className="flex flex-col">
          <div className="flex">
            <Button className="ml-auto" variant="info">
              Criar categoria
            </Button>
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
