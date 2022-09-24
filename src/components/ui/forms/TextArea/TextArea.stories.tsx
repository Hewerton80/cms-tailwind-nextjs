import { useState } from 'react'
import { ComponentMeta } from '@storybook/react'

import TextArea from '.'
import FormGroup from '../FormGroup'
import FormLabel from '../FormLabel'
import { Card, CardBody, CardHeader, CardTitle } from '../../layout/Card'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/forms/TextArea',
  component: TextArea,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {},
} as ComponentMeta<typeof TextArea>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// const Template: ComponentStory<typeof TextArea> = (args) => <TextArea {...args} />

// export const Overview = Template.bind({})

export const ActiveAndDisabled = () => {
  const [description, setDescription] = useState('')
  const [bio, setBio] = useState('')
  return (
    <Card>
      <CardHeader>
        <CardTitle>Active And Disabled</CardTitle>
      </CardHeader>
      <CardBody>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FormGroup>
            <FormLabel required>Description:</FormLabel>
            <TextArea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="TextArea"
              required
            />
          </FormGroup>
          <FormGroup>
            <FormLabel required>Bio:</FormLabel>
            <TextArea
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              placeholder="TextArea (disabled)"
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
  const [description, setDescription] = useState('')
  const [bio, setBio] = useState('')
  const [About, setAbout] = useState('')
  return (
    <Card>
      <CardHeader>
        <CardTitle>Validations</CardTitle>
      </CardHeader>
      <CardBody>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FormGroup>
            <FormLabel required>Description:</FormLabel>
            <TextArea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Lorem Lorem"
              state="success"
              feedbackText="Looks good!"
              required
            />
          </FormGroup>
          <FormGroup>
            <FormLabel required>Bio:</FormLabel>
            <TextArea
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              placeholder="Lorem Lorem"
              state="warning"
              feedbackText="this is requied"
              required
            />
          </FormGroup>
          <FormGroup>
            <FormLabel required>About:</FormLabel>
            <TextArea
              value={About}
              onChange={(e) => setAbout(e.target.value)}
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
