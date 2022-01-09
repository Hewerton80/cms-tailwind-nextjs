import { ReactNode } from 'react'
import { BreadcrumbsContextProvider } from './breadcrumbsContext'
import { ToogleSideBarContextProvider } from './toogleSideBarContext'

interface ProvidersProps {
  children: ReactNode
}

function Providers({ children }: ProvidersProps) {
  return (
    <BreadcrumbsContextProvider>
      <ToogleSideBarContextProvider>{children}</ToogleSideBarContextProvider>
    </BreadcrumbsContextProvider>
  )
}

export default Providers
