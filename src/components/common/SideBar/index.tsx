import cn from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { MouseEvent, useCallback, useContext, useMemo, useState } from 'react'
import { ToogleSideBarContext } from '../../../contexts/toogleSideBarContext'
import { isMobile } from '../../../utils/isMobile'
import { IMenu, menu } from '../../../utils/routes'
import { Card, CardProps } from '../../ui/layout/Card'
import { FaMinus, FaPlus } from 'react-icons/fa'
interface SideBarProps extends CardProps {}
interface NavItemProps {
  navItem: IMenu
}

function NavItem({ navItem: { title, url, icon, submenu } }: NavItemProps) {
  const router = useRouter()

  const { showSideBar, handleToogleSideBar } = useContext(ToogleSideBarContext)

  const hasSubmenu = useMemo(
    () => Array.isArray(submenu) && submenu.length > 0,
    [submenu]
  )

  const [showSubmenu, setShowSubmenu] = useState(false)

  const handleClickInNavItem = useCallback(
    (e: MouseEvent) => {
      if (hasSubmenu) {
        setShowSubmenu((currentShowSubmenu) => !currentShowSubmenu)
        e.preventDefault()
        return
      }
      if (isMobile() && showSideBar) {
        handleToogleSideBar()
      }
    },
    [hasSubmenu, showSideBar, handleToogleSideBar]
  )

  return (
    <li
      key={url}
      className={cn(
        'flex flex-col w-full '
        // router.pathname === url && 'bg-gray-lighter dark:bg-dark-hover'
      )}
    >
      <Link href={url}>
        <a
          className={cn(
            'relative flex items-center w-full h-full justify-start',
            'hover:bg-gray-lighter dark:hover:bg-dark-hover',
            router.pathname === url && 'bg-gray-lighter dark:bg-dark-hover',
            showSideBar ? 'md:justify-start' : 'md:justify-center',
            'py-3.5 pr-3.5 pl-[9.6px]',
            'text-secondary dark:text-light text-sm'
          )}
          onClick={handleClickInNavItem}
        >
          <span>{icon}</span>
          <p className={cn('ml-3 line-clamp-1', !showSideBar && 'md:hidden')}>{title}</p>
          {hasSubmenu && (
            <span className="absolute right-3.5">
              {showSubmenu ? <FaMinus /> : <FaPlus />}{' '}
            </span>
          )}
        </a>
      </Link>
      {hasSubmenu && (
        <div
          className={cn('flex flex-col w-full ')}
          // style={{ height: showSubmenu ? Number(submenu?.length) * 48 : 0 }}
        >
          <ul
            className={cn(
              'flex flex-col w-full',
              'ease-out duration-200 overflow-hidden'
            )}
            style={{ height: showSubmenu ? Number(submenu?.length) * 48 : 0 }}
          >
            {submenu?.map((subNavItem, i) => (
              <NavItem navItem={subNavItem} key={subNavItem?.title + i} />
            ))}
          </ul>
        </div>
      )}
    </li>
  )
}

function SideBar({ className, ...rest }: SideBarProps) {
  const { showSideBar, handleToogleSideBar } = useContext(ToogleSideBarContext)

  return (
    <>
      <Card
        className={cn(
          'flex items-start md:items-center overflow-hidden',
          'fixed md:static z-20',
          '-translate-x-60 translate-y-[-35px] md:translate-x-0 md:translate-y-0',
          'pt-8 pb-14 w-60 h-max-[100vh] md:ml-2 md:h-auto',
          'ease-linear duration-300',
          // styles.root,
          showSideBar ? 'translate-x-0 md:w-60 md:px-5' : 'md:w-[68px]',
          className
        )}
        style={{ height: 'calc(100vh - 80px)' }}
        {...rest}
      >
        <nav className="flex flex-col w-full">
          <ul className="flex flex-col w-full">
            {menu.map((navItem, i) => (
              <NavItem key={navItem.title + i} navItem={navItem} />
            ))}
          </ul>
        </nav>
      </Card>
      <div
        onClick={handleToogleSideBar}
        className={cn(
          'md:hidden fixed left-0 top-0 w-screen min-h-screen z-10',
          'bg-dark-screen',
          showSideBar ? 'flex' : 'hidden'
        )}
      />
    </>
  )
}

export default SideBar
