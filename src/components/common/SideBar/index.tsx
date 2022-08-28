import cn from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useCallback, useContext } from 'react'
import { ToogleSideBarContext } from '../../../contexts/toogleSideBarContext'
import { isMobile } from '../../../utils/isMobile'
import { menu } from '../../../utils/routes'
import { Card, CardProps } from '../../ui/layout/Card'

interface SideBarProps extends CardProps {}

function SideBar({ className, ...rest }: SideBarProps) {
  const router = useRouter()

  const { showSideBar, handleToogleSideBar } = useContext(ToogleSideBarContext)

  const handleToogleSidebar = useCallback(() => {
    if (isMobile() && showSideBar) {
      handleToogleSideBar()
    }
  }, [showSideBar, handleToogleSideBar])

  return (
    <>
      <Card
        className={cn(
          'flex items-start md:items-center overflow-hidden',
          'fixed md:static z-20',
          '-translate-x-60 translate-y-[-35px] md:translate-x-0 md:translate-y-0',
          'pt-8 pb-14 w-60 md:ml-2  md:h-auto',
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
            {menu.map(({ title, url, icon }) => (
              <li
                key={url}
                className={cn(
                  'flex w-full hover:bg-gray-lighter dark:hover:bg-dark-hover',
                  router.pathname === url && 'bg-gray-lighter dark:bg-dark-hover'
                )}
              >
                <Link href={url}>
                  <a
                    className={cn(
                      'flex items-center w-full h-full justify-start',
                      showSideBar ? 'md:justify-start' : 'md:justify-center',
                      'py-3.5 pr-3.5 pl-[9.6px]',
                      'text-secondary dark:text-light text-sm'
                      // showSideBar && styles.expanded
                    )}
                    onClick={handleToogleSidebar}
                  >
                    <span>{icon}</span>
                    <p className={cn('ml-3', showSideBar ? 'md:block' : 'md:hidden')}>
                      {title}
                    </p>
                  </a>
                </Link>
              </li>
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
