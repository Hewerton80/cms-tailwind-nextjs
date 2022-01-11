import { useContext, useEffect } from 'react'
import { BreadcrumbsContext } from '../../../contexts/breadcrumbsContext'
import { RouteEnum } from '../../../utils/routes'
import CategoryForm from '../CategoryForm'

function CreateCategories() {
  const { handleSetBreadcrumbs } = useContext(BreadcrumbsContext)

  useEffect(() => {
    handleSetBreadcrumbs([
      { path: RouteEnum.Categories, text: 'Categorias' },
      { path: RouteEnum.CreateCategories, text: 'criar' },
    ])
    return () => handleSetBreadcrumbs([])
  }, [handleSetBreadcrumbs])

  return <CategoryForm />
}

export default CreateCategories
