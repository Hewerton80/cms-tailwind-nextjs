import { useContext, useEffect } from 'react'
import { Card, CardBody, CardHeader, CardTitle } from '../../components/ui/layout/Card'
import {
  DangerModal,
  InfoModal,
  SuccessModal,
  WarningModal,
} from '../../components/ui/overlay/AlertModal/AlertModal.stories'
import {
  LargeModal,
  MediumModal,
  SmallModal,
} from '../../components/ui/overlay/Modal/Modal.stories'
import { BreadcrumbsContext } from '../../contexts/breadcrumbsContext'
import { RouteEnum } from '../../utils/routes'

function ModalsPage() {
  const { handleSetBreadcrumbs } = useContext(BreadcrumbsContext)

  useEffect(() => {
    handleSetBreadcrumbs([
      { path: '#', text: 'UI Elements' },
      { path: RouteEnum.Modals, text: 'Modals' },
    ])
    return () => handleSetBreadcrumbs([])
  }, [handleSetBreadcrumbs])

  return (
    <div className="flex flex-col gap-4">
      <Card>
        <CardHeader>
          <CardTitle>Modals</CardTitle>
        </CardHeader>
        <CardBody>
          <div className="flex flex-wrap justify-center gap-2">
            <SmallModal />
            <MediumModal />
            <LargeModal />
          </div>
        </CardBody>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Alert Modals</CardTitle>
        </CardHeader>
        <CardBody>
          <div className="flex flex-wrap justify-center gap-2">
            <SuccessModal />
            <InfoModal />
            <WarningModal />
            <DangerModal />
          </div>
        </CardBody>
      </Card>
    </div>
  )
}

export default ModalsPage
