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
      <Header className="z-20" />
      <div
        className={cn(
          'flex',
          'min-h-screen w-full pt-[115px]',
          'overflow-x-hidden relative',
          'z-10'
        )}
      >
        <SideBar />
        <Breadcrumbs
          className="absolute top-[113px] right-7 -translate-y-full"
          links={breadcrumbs}
        />
        <div className="flex flex-col flex-1 px-7 overflow-auto ">{children}</div>
      </div>
    </div>
  )
}

export default MainTemplate
