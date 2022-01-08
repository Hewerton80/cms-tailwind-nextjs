import { HTMLAttributes } from 'react'
import cn from 'classnames'
import Header from '../../common/Header'
import SideBar from '../../common/SideBar'
import { Settings } from 'luxon'
Settings.defaultLocale = 'pt-br'

interface MainTemplateProps extends HTMLAttributes<HTMLDivElement> {}

function MainTemplate({ children, ...rest }: MainTemplateProps) {
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
      <div
        className={cn('flex', 'min-h-screen w-full', 'overflow-x-hidden')}
        style={{ paddingTop: 106 }}
      >
        <SideBar />
        <div className="flex flex-1 px-7">{children}</div>
      </div>
    </div>
  )
}

export default MainTemplate
