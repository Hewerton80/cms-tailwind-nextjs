import { createContext, ReactNode, useState, useCallback } from 'react'
import { Callback } from '../types/Global'

interface IToogleSideBarContext {
  showSideBar: boolean
  handleToogleSideBar: Callback
  handleCloseSideBar: Callback
}

export const ToogleSideBarContext = createContext({} as IToogleSideBarContext)

interface IToogleSideBarContextProps {
  children: ReactNode
}

export function ToogleSideBarContextProvider({ children }: IToogleSideBarContextProps) {
  const [showSideBar, setShowSideBar] = useState(false)

  const handleToogleSideBar = useCallback(() => {
    setShowSideBar((currentShowSideBar) => !currentShowSideBar)
  }, [])

  const handleCloseSideBar = useCallback(() => {
    setShowSideBar(false)
  }, [])

  return (
    <ToogleSideBarContext.Provider
      value={{
        showSideBar,
        handleToogleSideBar,
        handleCloseSideBar,
      }}
    >
      {children}
    </ToogleSideBarContext.Provider>
  )
}
