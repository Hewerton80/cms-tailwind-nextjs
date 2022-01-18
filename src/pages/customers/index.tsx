import Table from '../../components/ui/dataDisplay/Table'
import { Card, CardBody, CardHeader, CardTitle } from '../../components/ui/layout/Card'
import Avatar from '../../components/ui/media/Avatar'
import { getRandomIntInclusive } from '../../utils/getRamdomInt'
import { DateTime } from 'luxon'
import Link from 'next/link'
import IconButton from '../../components/ui/forms/IconButton'
import { FaPen, FaRegEye, FaTrash } from 'react-icons/fa'
import { useContext, useEffect } from 'react'
import { RouteEnum } from '../../utils/routes'
import { BreadcrumbsContext } from '../../contexts/breadcrumbsContext'
import AvatarGroup from '../../components/ui/media/AvatarGroup'

function Customers() {
  const { handleSetBreadcrumbs } = useContext(BreadcrumbsContext)

  useEffect(() => {
    handleSetBreadcrumbs([{ path: RouteEnum.Customers, text: 'Assinantes' }])
    return () => handleSetBreadcrumbs([])
  }, [handleSetBreadcrumbs])

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Assinantes</CardTitle>
      </CardHeader>
      <CardBody>
        <Table>
          <thead>
            <tr>
              <th></th>
              <th>(Vizualizações / Likes / Favoritos)</th>
              <th>Cadastro em</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {Array.from(Array(5).keys()).map((i) => (
              <tr key={i}>
                <td className="py-1">
                  <AvatarGroup
                    src={`/images/face${getRandomIntInclusive(4, 7)}.jpg`}
                    userName="Fulano da Silva "
                    userEmail="Fulano@email.com.br"
                  />
                </td>

                <td>
                  {String(getRandomIntInclusive(3, 150)).padStart(2, '0')}
                  {' / '}
                  {String(getRandomIntInclusive(3, 20)).padStart(2, '0')}
                  {' / '}
                  {String(getRandomIntInclusive(3, 20)).padStart(2, '0')}
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
      </CardBody>
    </Card>
  )
}

export default Customers
