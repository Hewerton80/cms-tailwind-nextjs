import cn from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { VscOrganization, VscPerson, VscBook } from 'react-icons/vsc'
import { Card, CardProps } from '../../ui/layout/Card'
import styles from './styles.module.scss'
enum RouteEnum {
  Adms = '/',
  Customers = '/customers',
  Posts = '/posts',
}
interface IMenu {
  title: string
  url: string
  icon: JSX.Element
  isActive: boolean
}

interface SideBarProps extends CardProps {}

function SideBar({ className, ...rest }: SideBarProps) {
  const router = useRouter()

  const menu: IMenu[] = [
    {
      title: 'Administratores',
      url: RouteEnum.Adms,
      icon: <VscOrganization className="text-xl" />,
      isActive: router.pathname === RouteEnum.Adms,
    },
    {
      title: 'Leitores',
      url: RouteEnum.Customers,
      icon: <VscPerson className="text-xl" />,
      isActive: router.pathname === RouteEnum.Customers,
    },
    {
      title: 'Posts',
      url: RouteEnum.Posts,
      icon: <VscBook className="text-xl" />,
      isActive: router.pathname === RouteEnum.Posts,
    },
  ]

  return (
    <Card className={cn(styles.root, 'px-5', className)} {...rest}>
      <nav>
        <ul>
          {menu.map(({ title, url, icon, isActive }) => (
            <li key={url} className={cn(isActive && 'bg-gray-lighter')}>
              <Link href={url}>
                <a>
                  {' '}
                  <span>{icon}</span> <p>{title}</p>{' '}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </Card>
  )
}

export default SideBar
