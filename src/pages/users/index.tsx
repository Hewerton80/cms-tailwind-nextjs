import type { NextPage } from 'next'
import Table from '../../components/ui/dataDisplay/Table'
import { Card, CardBody, CardTitle } from '../../components/ui/layout/Card'
import Avatar from '../../components/ui/media/Avatar'
import { getRandomIntInclusive } from '../../utils/getRamdomInt'
import { DateTime } from 'luxon'
import Link from 'next/link'
import IconButton from '../../components/ui/forms/IconButton'
import { FaPen, FaRegEye, FaTrash } from 'react-icons/fa'
import Button from '../../components/ui/forms/Button'
import Badge from '../../components/ui/dataDisplay/Badge'
import { RouteEnum } from '../../utils/routes'
import { useContext, useEffect } from 'react'
import { BreadcrumbsContext } from '../../contexts/breadcrumbsContext'

const Users: NextPage = () => {
  const { handleSetBreadcrumbs } = useContext(BreadcrumbsContext)

  useEffect(() => {
    handleSetBreadcrumbs([{ path: RouteEnum.Home, text: 'Administradores' }])
    return () => handleSetBreadcrumbs([])
  }, [handleSetBreadcrumbs])

  return (
    <Card className="w-full">
      <CardTitle>Administradores</CardTitle>
      <CardBody>
        <div className="flex flex-col">
          <div className="flex">
            <Link href={RouteEnum.CreateUser}>
              <a className="ml-auto">
                <Button variant="primary">Adicionar usuário</Button>
              </a>
            </Link>
          </div>
          <Table>
            <thead>
              <tr>
                <th>User</th>
                <th>id</th>
                <th>Nome</th>
                <th>Email</th>
                <th>Perfil</th>
                <th>Posts</th>
                <th>Situação</th>
                <th>Cadastrado em:</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {Array.from(Array(5).keys()).map((i) => (
                <tr key={i}>
                  <td className="py-1">
                    <Avatar src={`/images/face${getRandomIntInclusive(4, 7)}.jpg`} />
                  </td>
                  <td>
                    <Link href="#">
                      <a className="hover:underline">#{getRandomIntInclusive(1, 1000)}</a>
                    </Link>
                  </td>
                  <td>Fulano</td>
                  <td>Fulano@email.com.br</td>
                  <td>{!getRandomIntInclusive(0, 1) ? 'Blogger' : 'Super Admin'}</td>
                  <td>{getRandomIntInclusive(3, 20)}</td>

                  <td>
                    {!getRandomIntInclusive(0, 2) ? (
                      <Badge variant="success">Ativo</Badge>
                    ) : getRandomIntInclusive(0, 1) ? (
                      <Badge variant="danger">Inativo</Badge>
                    ) : (
                      <Badge variant="warning">Pendente</Badge>
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
                      <IconButton variant="danger" className="ml-2" icon={<FaTrash />} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </CardBody>
    </Card>
  )
}

export default Users
