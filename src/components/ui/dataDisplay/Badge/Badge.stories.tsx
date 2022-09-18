import React from 'react'
import { ComponentMeta } from '@storybook/react'
import Badge from '.'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/dataDisplay/Badge',
  component: Badge,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {},
} as ComponentMeta<typeof Badge>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />

export const DefaultBadges = () => {
  return (
    <div className="flex flex-wrap gap-2">
      <Badge variant="info">Info</Badge>
      <Badge variant="primary">primary</Badge>
      <Badge variant="danger">danger</Badge>
      <Badge variant="success">success</Badge>
      <Badge variant="warning">warning</Badge>
      <Badge variant="dark">dark</Badge>
    </div>
  )
}
