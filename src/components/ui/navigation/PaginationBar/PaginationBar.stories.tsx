import React, { useState } from 'react'
import { ComponentMeta } from '@storybook/react'
import PaginationBar from '.'
import { Card, CardBody, CardHeader, CardTitle } from '../../layout/Card'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/navigation/PaginationBar',
  component: PaginationBar,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {},
} as ComponentMeta<typeof PaginationBar>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// const Template: ComponentStory<typeof PaginationBar> = (args) => <PaginationBar {...args} />

export const DefaultPaginationBar = () => {
  const [currentPage, setCurrentPage] = useState(1)
  return (
    <Card>
      <CardHeader>
        <CardTitle>Pagintaion</CardTitle>
      </CardHeader>
      <CardBody>
        <div className="flex max-w-3xl w-full">
          <PaginationBar
            currentPage={currentPage}
            totalPages={10}
            onChangePage={(page) => setCurrentPage(page)}
            totalRecords={256}
            perPage={25}
          />
          {/* <Breadcrumbs links={[{ path: '#', text: 'Home' }]} />
      <Breadcrumbs
        links={[
          { path: '#', text: 'Home' },
          { path: '#', text: 'Library' },
        ]}
      />
      <Breadcrumbs
        links={[
          { path: '#', text: 'Home' },
          { path: '#', text: 'Library' },
          { path: '#', text: 'Data' },
        ]}
      /> */}
        </div>
      </CardBody>
    </Card>
  )
}
