import Table from '../../components/ui/dataDisplay/Table'
import { Card, CardBody, CardTitle } from '../../components/ui/layout/Card'
import Avatar from '../../components/ui/media/Avatar'
import { getRandomIntInclusive } from '../../utils/getRamdomInt'
import { DateTime } from 'luxon'
import Link from 'next/link'

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
              <th>N° de Posts lidos</th>
              <th>Cadastrado em:</th>
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
              </tr>
            ))}
          </tbody>
        </Table>
      </CardBody>
    </Card>
  )
}

export default Customers
