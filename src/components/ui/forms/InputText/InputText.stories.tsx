import { useState } from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import InputText from '.'
import FormGroup from '../FormGroup'
import FormLabel from '../FormLabel'
import { Card, CardBody, CardHeader, CardTitle } from '../../layout/Card'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/forms/InputText',
  component: InputText,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {},
} as ComponentMeta<typeof InputText>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// const Template: ComponentStory<typeof InputText> = (args) => <InputText {...args} />

// export const Overview = Template.bind({})

export const ActiveAndDisabled = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  return (
    <Card>
      <CardHeader>
        <CardTitle>Active And Disabled</CardTitle>
      </CardHeader>
      <CardBody>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FormGroup>
            <FormLabel required>Name:</FormLabel>
            <InputText
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="InputText"
              required
            />
          </FormGroup>
          <FormGroup>
            <FormLabel required>Email:</FormLabel>
            <InputText
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="InputText (disabled)"
              required
              disabled
            />
          </FormGroup>
        </div>
      </CardBody>
    </Card>
  )
}
export const Validations = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [city, setCity] = useState('')
  return (
    <Card>
      <CardHeader>
        <CardTitle>Validations</CardTitle>
      </CardHeader>
      <CardBody>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FormGroup>
            <FormLabel required>Name:</FormLabel>
            <InputText
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Lorem Lorem"
              state="success"
              feedbackText="Looks good!"
              required
            />
          </FormGroup>
          <FormGroup>
            <FormLabel required>Email:</FormLabel>
            <InputText
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Lorem Lorem"
              state="warning"
              feedbackText="this is requied"
              required
            />
          </FormGroup>
          <FormGroup>
            <FormLabel required>City:</FormLabel>
            <InputText
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Lorem Lorem"
              state="danger"
              feedbackText="this is requied"
              required
            />
          </FormGroup>
        </div>
      </CardBody>
    </Card>
  )
}
