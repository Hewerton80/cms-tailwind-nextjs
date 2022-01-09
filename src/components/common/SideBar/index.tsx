import cn from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { menu } from '../../../utils/routes'
import { Card, CardProps } from '../../ui/layout/Card'
import styles from './styles.module.scss'

interface SideBarProps extends CardProps {}

function SideBar({ className, ...rest }: SideBarProps) {
  const router = useRouter()

  return (
    <Card className={cn(styles.root, 'px-5', className)} {...rest}>
      <nav>
        <ul>
          {menu.map(({ title, url, icon }) => (
            <li key={url} className={cn(router.pathname === url && 'bg-gray-lighter')}>
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
