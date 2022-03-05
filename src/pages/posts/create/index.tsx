import { useContext, useEffect } from 'react'
import { BreadcrumbsContext } from '../../../contexts/breadcrumbsContext'
import { RouteEnum } from '../../../utils/routes'
import PostForm from '../PostForm'

function CreatePost() {
  const { handleSetBreadcrumbs } = useContext(BreadcrumbsContext)

  useEffect(() => {
    handleSetBreadcrumbs([
      { path: RouteEnum.Home, text: 'Posts' },
      { path: RouteEnum.CreatPosts, text: 'Criar' },
    ])
    return () => handleSetBreadcrumbs([])
  }, [handleSetBreadcrumbs])
  return <PostForm />
}

export default CreatePost
