import React from 'react'
import { ComponentMeta } from '@storybook/react'

import Alert from '.'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/feedback/Alert',
  component: Alert,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {},
} as ComponentMeta<typeof Alert>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args} />

// export const Overview = Template.bind({})

// Overview.args = {
//   children: 'Button',
// }

export const DefaultAlerts = () => {
  const lorem = `Lorem ipsum dolor sit amet consectetur adipisicing elit.
Exercitationem`

  return (
    <div className="flex flex-col gap-2">
      <Alert variant="primary">
        Hi! <b>primary</b> {lorem}
      </Alert>
      <Alert variant="secondary">
        Hi! <b>secondary</b> {lorem}
      </Alert>
      <Alert variant="success">
        Hi! <b>success</b> {lorem}
      </Alert>
      <Alert variant="info">
        Hi! <b>info</b> {lorem}
      </Alert>
      <Alert variant="dark">
        Hi! <b>dark</b> {lorem}
      </Alert>
      <Alert variant="danger">
        Hi! <b>danger</b> {lorem}
      </Alert>
      <Alert variant="warning">
        Hi! <b>warning</b> {lorem}
      </Alert>
    </div>
  )
}
