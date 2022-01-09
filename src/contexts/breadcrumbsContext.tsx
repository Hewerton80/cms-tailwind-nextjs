import { createContext, ReactNode, useState, useCallback } from 'react'

export interface IBreadcrumbsLink {
  path: string
  text?: string
}

interface IBreadcrumbsContext {
  breadcrumbs: IBreadcrumbsLink[]
  handleSetBreadcrumbs: (breadcrumbsValue: IBreadcrumbsLink[]) => void
}

export const BreadcrumbsContext = createContext({} as IBreadcrumbsContext)

interface IBreadcrumbsContextProps {
  children: ReactNode
}

export function BreadcrumbsContextProvider({ children }: IBreadcrumbsContextProps) {
  const [breadcrumbs, setBreadcrumbs] = useState<IBreadcrumbsLink[]>([])

  const handleSetBreadcrumbs = useCallback((breadcrumbsValue: IBreadcrumbsLink[]) => {
    setBreadcrumbs(breadcrumbsValue)
  }, [])

  return (
    <BreadcrumbsContext.Provider
      value={{
        breadcrumbs,
        handleSetBreadcrumbs,
      }}
    >
      {children}
    </BreadcrumbsContext.Provider>
  )
}
