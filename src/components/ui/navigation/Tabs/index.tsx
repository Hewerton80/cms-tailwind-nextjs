import classNames from 'classnames'
import { createContext, useCallback, useContext, useState } from 'react'

interface ITabContextProps extends GlobalProps {
  value: number
  onChange: (tabIndex: number) => void
}
interface ITabProps extends GlobalProps {
  value: number
}
interface ITabPanelProps extends ITabProps {
  index: number
}

interface ITabContext {
  activeTabIndex: number
  handleChangeTabIndex: (tabIndex: number) => void
}
export const TabsContext = createContext({} as ITabContext)

export function Tabs({
  children,
  className,
  value,
  onChange,
  ...restProps
}: ITabContextProps) {
  const [activeTabIndex, setActiveTabIndex] = useState(value)

  const handleChangeTabIndex = useCallback(
    (tabIndex: number) => {
      setActiveTabIndex(tabIndex)
      onChange(tabIndex)
    },
    [onChange]
  )

  return (
    <TabsContext.Provider value={{ activeTabIndex, handleChangeTabIndex }}>
      <ul
        className={classNames('flex mb-4', 'border-b-1 border-light', className)}
        role="tablist"
        {...restProps}
      >
        {children}
      </ul>
    </TabsContext.Provider>
  )
}

export function Tab({ children, className, value, ...restProps }: ITabProps) {
  const { activeTabIndex, handleChangeTabIndex } = useContext(TabsContext)
  const isActive = activeTabIndex === value
  return (
    <li
      className={classNames('flex basis-0 grow', 'cursor-pointer')}
      role="tab"
      onClick={() => {
        handleChangeTabIndex(value)
      }}
      {...restProps}
    >
      <a
        onClick={(e) => e.preventDefault()}
        className={classNames(
          'flex justify-center items-center relative',
          'py-2 px-4 text-sm ease-out duration-75',
          'text-center w-full h-full',
          'after:content-[""] after:absolute after:bottom-[-1px]',
          'after:h-[1px] after:bg-primary after:ease-out after:duration-75',
          isActive ? 'text-primary after:w-full' : 'text-dark dark:text-light after:w-0',
          className
        )}
      >
        {children}
      </a>
    </li>
  )
}

export function TabPanel({
  children,
  className,
  value,
  index,
  ...restProps
}: ITabPanelProps) {
  if (index !== value) return <></>

  return (
    <div className={className} role="tabpanel" {...restProps}>
      {children}
    </div>
  )
}
