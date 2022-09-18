import React from 'react'
import { ComponentMeta } from '@storybook/react'
import Breadcrumbs from '.'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/navigation/Breadcrumbs',
  component: Breadcrumbs,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {},
} as ComponentMeta<typeof Breadcrumbs>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// const Template: ComponentStory<typeof Breadcrumbs> = (args) => <Breadcrumbs {...args} />

export const DefaultBreadcrumbs = () => {
  return (
    <div className="flex flex-col gap-2">
      <Breadcrumbs links={[{ path: '#', text: 'Home' }]} />
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
      />
    </div>
  )
}
