import type { NextPage } from 'next'
import Table from '../../components/ui/dataDisplay/Table'
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
import IconButton from '../../components/ui/forms/IconButton'
import { FaPen, FaRegEye, FaTrash } from 'react-icons/fa'
import { Button } from '../../components/ui/forms/Button'
import Badge from '../../components/ui/dataDisplay/Badge'
import { RouteEnum } from '../../utils/routes'
import { useCallback, useContext, useEffect, useState } from 'react'
import { BreadcrumbsContext } from '../../contexts/breadcrumbsContext'
import AvatarGroup from '../../components/ui/media/AvatarGroup'
import PaginationBar from '../../components/ui/navigation/PaginationBar'
import { useUser } from '../../hooks/useUser'
import {
  UserRoleEnum,
  UserRolePtBrEnum,
  UserStatusEnum,
  UserStatusPtBrEnum,
  UserStatusVariantEnum,
} from '../../types/User'
import Alert from '../../components/ui/feedback/Alert'
import ShimmerTableCells from '../../components/ui/feedback/ShimmerTableCells'

const Users: NextPage = () => {
  const { handleSetBreadcrumbs } = useContext(BreadcrumbsContext)
  const { usersRecords, usersMenssageError, isLoagingUsers, getUsers } = useUser()

  const [currentPage, setCurrentPage] = useState(0)
  const [totalPages, setTotalPages] = useState(0)
  const [totalRecords, setTotalRecords] = useState(0)
  const [perPage, setPerPage] = useState(25)

  useEffect(() => {
    handleSetBreadcrumbs([{ path: RouteEnum.Home, text: 'Administradores' }])
    return () => handleSetBreadcrumbs([])
  }, [handleSetBreadcrumbs])

  useEffect(() => {
    getUsers({ page: 1 })
  }, [getUsers])

  useEffect(() => {
    if (usersRecords) {
      setCurrentPage(usersRecords?.currentPage)
      setTotalPages(usersRecords?.totalPages)
      setTotalRecords(usersRecords?.total)
      setPerPage(usersRecords?.perPage)
    }
  }, [usersRecords])

  const handleChangePage = useCallback(
    (page: number) => {
      setCurrentPage(page)
      getUsers({ page })
    },
    [getUsers]
  )

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Administradores</CardTitle>
        <CardActions>
          <Link href={RouteEnum.CreateUser}>
            <a className="ml-auto">
              <Button variantColor="primary">Adicionar usu??rio</Button>
            </a>
          </Link>
        </CardActions>
      </CardHeader>
      <CardBody>
        {usersMenssageError ? (
          <Alert variant="danger">{usersMenssageError}</Alert>
        ) : (
          <Table>
            <thead>
              <tr>
                <th></th>
                <th>Fun????o</th>
                <th>Posts</th>
                <th>Situa????o</th>
                <th>Cadastrado em:</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {isLoagingUsers ? (
                <ShimmerTableCells numberOfColumns={6} numberOfRows={perPage} />
              ) : (
                usersRecords?.docs?.map((user) => (
                  <tr key={user?.id}>
                    <td className="py-1">
                      <AvatarGroup
                        src={String(user?.avatar_url)}
                        userName={String(user?.nickname)}
                        userEmail={String(user?.email)}
                      />
                    </td>
                    <td>{UserRolePtBrEnum[user?.role as UserRoleEnum]}</td>
                    <td>{getRandomIntInclusive(3, 20)}</td>

                    <td>
                      <Badge
                        variant={UserStatusVariantEnum[user?.status as UserStatusEnum]}
                      >
                        {UserStatusPtBrEnum[user?.status as UserStatusEnum]}
                      </Badge>
                    </td>
                    <td>
                      {DateTime.fromISO(String(user?.created_at))
                        .plus({ days: -1 * getRandomIntInclusive(0, 365) })
                        .toFormat('ff')}
                    </td>
                    <td>
                      <div className="flex items-center justify-end">
                        <IconButton icon={<FaPen />} />
                        <IconButton className="ml-2" icon={<FaRegEye />} />
                        <IconButton
                          variantColor="danger"
                          className="ml-2"
                          icon={<FaTrash />}
                        />
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </Table>
        )}
      </CardBody>
      <CardFooter>
        <PaginationBar
          currentPage={currentPage}
          totalPages={totalPages}
          totalRecords={totalRecords}
          perPage={perPage}
          onChangePage={handleChangePage}
          hidden={Boolean(usersMenssageError)}
        />
      </CardFooter>
    </Card>
  )
}

export default Users
