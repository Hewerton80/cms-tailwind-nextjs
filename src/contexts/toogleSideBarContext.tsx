import { createContext, ReactNode, useState, useCallback, useEffect } from 'react'
import { Callback } from '../types/Global'
import { getBodyElement } from '../utils/getBodyElement'
import { isMobile } from '../utils/isMobile'

interface IToogleSideBarContext {
  showSideBar: boolean
  handleToogleSideBar: Callback
}

export const ToogleSideBarContext = createContext({} as IToogleSideBarContext)

interface IToogleSideBarContextProps {
  children: ReactNode
}

export function ToogleSideBarContextProvider({ children }: IToogleSideBarContextProps) {
  const [showSideBar, setShowSideBar] = useState(true)

  useEffect(() => {
    if (isMobile()) {
      setShowSideBar(false)
    }
  }, [])

  useEffect(() => {
    if (isMobile()) {
      const bodyElement = getBodyElement()
      if (showSideBar) {
        bodyElement?.classList?.add('hidden_scroll')
      } else {
        bodyElement?.classList?.remove('hidden_scroll')
      }
    }
  }, [showSideBar])

  const handleToogleSideBar = useCallback(() => {
    setShowSideBar((currentShowSideBar) => !currentShowSideBar)
  }, [])

  return (
    <ToogleSideBarContext.Provider
      value={{
        showSideBar,
        handleToogleSideBar,
      }}
    >
      {children}
    </ToogleSideBarContext.Provider>
  )
}
