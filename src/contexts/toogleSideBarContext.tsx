import {
  createContext,
  ReactNode,
  useState,
  useCallback,
  useEffect,
  useMemo,
} from 'react'
import { Callback } from '../types/Global'
import { getBodyElement } from '../utils/getBodyElement'
import { isMobile } from '../utils/isMobile'

interface IToogleSideBarContext {
  showSideBar: boolean
  showIconWitchText: boolean
  showPrevIconWitchTextOnMouseLeave: boolean
  menuIsExpanded: boolean
  handleToogleSideBar: Callback
  handleShowOnlyIcons: Callback
  handleShowIconsWitchText: Callback
  handleToogleOnlyIcons: Callback
  handleShowPrevIconWitchTextOnMouseLeave: Callback
  handleClosePrevIconWitchTextOnMouseLeave: Callback
}

export const ToogleSideBarContext = createContext({} as IToogleSideBarContext)

interface IToogleSideBarContextProps {
  children: ReactNode
}

export function ToogleSideBarContextProvider({ children }: IToogleSideBarContextProps) {
  const [showSideBar, setShowSideBar] = useState(false)
  const [showIconWitchText, setShowIconWitchText] = useState(true)
  const [showPrevIconWitchTextOnMouseLeave, setShowPrevIconWitchTextOnMouseLeave] =
    useState(false)

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

  const menuIsExpanded = useMemo(
    () => showIconWitchText || showPrevIconWitchTextOnMouseLeave,
    [showIconWitchText, showPrevIconWitchTextOnMouseLeave]
  )

  const handleShowPrevIconWitchTextOnMouseLeave = useCallback(() => {
    if (showIconWitchText) {
      setShowPrevIconWitchTextOnMouseLeave(true)
    }
  }, [showIconWitchText])

  const handleClosePrevIconWitchTextOnMouseLeave = useCallback(() => {
    if (showIconWitchText) {
      setShowPrevIconWitchTextOnMouseLeave(false)
    }
  }, [showIconWitchText])

  const handleToogleSideBar = useCallback(() => {
    setShowSideBar((currentShowSideBar) => !currentShowSideBar)
  }, [])

  const handleShowOnlyIcons = useCallback(() => {
    setShowIconWitchText(true)
    // localStorage.setItem('showIconWitchText', 'true')
  }, [])

  const handleShowIconsWitchText = useCallback(() => {
    setShowIconWitchText(false)
    // localStorage.setItem('showIconWitchText', 'false')
  }, [])

  const handleToogleOnlyIcons = useCallback(() => {
    if (showIconWitchText) {
      handleShowIconsWitchText()
      return
    }
    handleShowOnlyIcons()
  }, [showIconWitchText, handleShowOnlyIcons, handleShowIconsWitchText])

  return (
    <ToogleSideBarContext.Provider
      value={{
        showSideBar,
        showIconWitchText,
        showPrevIconWitchTextOnMouseLeave,
        menuIsExpanded,
        handleToogleSideBar,
        handleShowOnlyIcons,
        handleShowIconsWitchText,
        handleToogleOnlyIcons,
        handleShowPrevIconWitchTextOnMouseLeave,
        handleClosePrevIconWitchTextOnMouseLeave,
      }}
    >
      {children}
    </ToogleSideBarContext.Provider>
  )
}
