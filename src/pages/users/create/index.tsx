import { useContext, useEffect } from 'react'
import { BreadcrumbsContext } from '../../../contexts/breadcrumbsContext'
import { RouteEnum } from '../../../utils/routes'
import UserForm from '../UserForm'

function CreateUser() {
  const { handleSetBreadcrumbs } = useContext(BreadcrumbsContext)

  useEffect(() => {
    handleSetBreadcrumbs([
      { path: RouteEnum.Home, text: 'Administradores' },
      { path: RouteEnum.CreateUser, text: 'criar' },
    ])
    return () => handleSetBreadcrumbs([])
  }, [handleSetBreadcrumbs])

  return <UserForm />
}

export default CreateUser
