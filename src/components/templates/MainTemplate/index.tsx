import { HTMLAttributes, useContext } from 'react'
import cn from 'classnames'
import Header from '../../common/Header'
import SideBar from '../../common/SideBar'
import { Settings } from 'luxon'
import { BreadcrumbsContext } from '../../../contexts/breadcrumbsContext'
import Breadcrumbs from '../../ui/navigation/Breadcrumbs'
Settings.defaultLocale = 'pt-br'

interface MainTemplateProps extends HTMLAttributes<HTMLDivElement> {}

function MainTemplate({ children, ...rest }: MainTemplateProps) {
  const { breadcrumbs } = useContext(BreadcrumbsContext)
  return (
    <div
      className={cn(
        'relative',
        'flex flex-col',
        'min-h-screen max-w-screen',
        'overflow-x-hidden'
      )}
      {...rest}
    >
      <Header />
      <div className={cn('flex', 'w-full pt-[35px]', 'overflow-x-hidden relative')}>
        <SideBar />
        <Breadcrumbs
          className="absolute top-[32px] right-7 -translate-y-full"
          links={breadcrumbs}
        />
        <div className="flex flex-col flex-1 px-7 overflow-auto ">{children}</div>
      </div>
    </div>
  )
}

export default MainTemplate
