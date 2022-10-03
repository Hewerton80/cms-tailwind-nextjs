import { useContext, useEffect } from 'react'
import {
  SimpleExample,
  WitchDefaultOptions,
  Async,
  // Validations,
} from '../../components/ui/forms/MultSelect/MultSelect.stories'
import { BreadcrumbsContext } from '../../contexts/breadcrumbsContext'
import { RouteEnum } from '../../utils/routes'

function MultSelect() {
  const { handleSetBreadcrumbs } = useContext(BreadcrumbsContext)

  useEffect(() => {
    handleSetBreadcrumbs([
      { path: '#', text: 'Form Elements' },
      { path: RouteEnum.MultSelect, text: 'MultSelect' },
    ])
    return () => handleSetBreadcrumbs([])
  }, [handleSetBreadcrumbs])

  return (
    <div className="flex flex-col gap-4">
      <SimpleExample />
      <WitchDefaultOptions />
      <Async />
    </div>
  )
}

export default MultSelect
