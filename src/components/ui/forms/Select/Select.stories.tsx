import { useState } from 'react'
import { ComponentMeta } from '@storybook/react'

import Select from '.'
import FormGroup from '../FormGroup'
import FormLabel from '../FormLabel'
import { Card, CardBody, CardHeader, CardTitle } from '../../layout/Card'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/forms/Select',
  component: Select,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {},
} as ComponentMeta<typeof Select>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />

// export const Overview = Template.bind({})

export const ActiveAndDisabled = () => {
  const [profile, setProfile] = useState('')
  const [gender, setGender] = useState('')

  const profileOptions = [
    { value: 'admin', text: 'Admin' },
    { value: 'blogger', text: 'Blogger' },
    { value: 'customer', text: 'Customer' },
  ]
  const genderOptions = [
    { value: 'M', text: 'Masculine' },
    { value: 'F', text: 'Feminine' },
    { value: 'O', text: 'Other' },
  ]

  return (
    <Card className="pb-28">
      <CardHeader>
        <CardTitle>Active And Disabled</CardTitle>
      </CardHeader>
      <CardBody>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FormGroup>
            <FormLabel required>Profile:</FormLabel>
            <Select
              value={profile}
              onChange={(e) => setProfile(e.target.value)}
              options={[{ value: '', text: '-' }, ...profileOptions]}
              required
            />
          </FormGroup>
          <FormGroup>
            <FormLabel required>Gender:</FormLabel>
            <Select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              options={[{ value: '', text: '-' }, ...genderOptions]}
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
  const [profile, setProfile] = useState('')
  const [gender, setGender] = useState('')
  const [tech, setTech] = useState('')

  const profileOptions = [
    { value: 'admin', text: 'Admin' },
    { value: 'blogger', text: 'Blogger' },
    { value: 'customer', text: 'Customer' },
  ]
  const genderOptions = [
    { value: 'M', text: 'Masculine' },
    { value: 'F', text: 'Feminine' },
    { value: 'O', text: 'Other' },
  ]
  const techOptions = [
    { value: 'html', text: 'HTML' },
    { value: 'css', text: 'CSS' },
    { value: 'JS', text: 'JAVASCRIPT' },
  ]
  return (
    <Card className="pb-28">
      <CardHeader>
        <CardTitle>Active And Disabled</CardTitle>
      </CardHeader>
      <CardBody>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FormGroup>
            <FormLabel required>Profile:</FormLabel>
            <Select
              value={profile}
              onChange={(e) => setProfile(e.target.value)}
              options={[{ value: '', text: '-' }, ...profileOptions]}
              required
              state="success"
              feedbackText="Looks good!"
            />
          </FormGroup>
          <FormGroup>
            <FormLabel required>Gender:</FormLabel>
            <Select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              options={[{ value: '', text: '-' }, ...genderOptions]}
              required
              state="warning"
              feedbackText="this is requied"
            />
          </FormGroup>
          <FormGroup>
            <FormLabel required>Gender:</FormLabel>
            <Select
              value={tech}
              onChange={(e) => setTech(e.target.value)}
              options={[{ value: '', text: '-' }, ...techOptions]}
              required
              state="danger"
              feedbackText="this is requied"
            />
          </FormGroup>
        </div>
      </CardBody>
    </Card>
  )
}
