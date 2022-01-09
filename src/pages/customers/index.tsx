import Table from '../../components/ui/dataDisplay/Table'
import { Card, CardBody, CardTitle } from '../../components/ui/layout/Card'
import Avatar from '../../components/ui/media/Avatar'
import { getRandomIntInclusive } from '../../utils/getRamdomInt'
import { DateTime } from 'luxon'
import Link from 'next/link'
import IconButton from '../../components/ui/forms/IconButton'
import { FaPen, FaRegEye, FaTrash } from 'react-icons/fa'
import Button from '../../components/ui/forms/Button'

function Customers() {
  return (
    <Card className="w-full">
      <CardTitle>Leitores</CardTitle>
      <CardBody>
        <Table>
          <thead>
            <tr>
              <th>User</th>
              <th>id</th>
              <th>Nome</th>
              <th>Email</th>
              <th>N° de Posts lidos</th>
              <th>Cadastrado em:</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {Array.from(Array(5).keys()).map((i) => (
              <tr key={i}>
                <td className="py-1">
                  <Link href="#">
                    <a className="hover:underline">
                      <Avatar src={`/images/face${getRandomIntInclusive(4, 7)}.jpg`} />
                    </a>
                  </Link>
                </td>
                <td>
                  <Link href="#">
                    <a className="hover:underline">#{getRandomIntInclusive(1, 1000)}</a>
                  </Link>
                </td>
                <td>Fulano</td>
                <td>Fulano@email.com.br</td>
                <td>
                  <Link href="#">
                    <a className="hover:underline">{getRandomIntInclusive(3, 20)}</a>
                  </Link>
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
