import { useCallback, useState } from 'react'
import { ComponentMeta } from '@storybook/react'

import AutoComplite, { IAutoCompliteOption } from '.'
import FormGroup from '../FormGroup'
import FormLabel from '../FormLabel'
import { Card, CardBody, CardHeader, CardTitle } from '../../layout/Card'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/forms/AutoComplite',
  component: AutoComplite,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {},
} as ComponentMeta<typeof AutoComplite>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />

// export const Overview = Template.bind({})

export const ActiveAndDisabled = () => {
  const [profile, setProfile] = useState<IAutoCompliteOption | null>(null)
  const [gender, setGender] = useState<IAutoCompliteOption | null>(null)

  const profileOptions = [
    { value: 'admin', label: 'Admin' },
    { value: 'blogger', label: 'Blogger' },
    { value: 'customer', label: 'Customer' },
  ]
  const genderOptions = [
    { value: 'M', label: 'Masculine' },
    { value: 'F', label: 'Feminine' },
    { value: 'O', label: 'Other' },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Active And Disabled</CardTitle>
      </CardHeader>
      <CardBody>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-28">
          <FormGroup>
            <FormLabel required>Profile:</FormLabel>
            <AutoComplite
              value={profile}
              options={profileOptions}
              onChange={setProfile}
              placeholder="Select profile..."
            />
          </FormGroup>
          <FormGroup>
            <FormLabel required>Gender:</FormLabel>
            <AutoComplite
              value={gender}
              options={genderOptions}
              onChange={setGender}
              placeholder="Select gender..."
              isDisabled
            />
          </FormGroup>
        </div>
      </CardBody>
    </Card>
  )
}
export const Validations = () => {
  const [profile, setProfile] = useState<IAutoCompliteOption | null>(null)
  const [gender, setGender] = useState<IAutoCompliteOption | null>(null)
  const [tech, setTech] = useState<IAutoCompliteOption | null>(null)

  const profileOptions = [
    { value: 'admin', label: 'Admin' },
    { value: 'blogger', label: 'Blogger' },
    { value: 'customer', label: 'Customer' },
  ]
  const genderOptions = [
    { value: 'M', label: 'Masculine' },
    { value: 'F', label: 'Feminine' },
    { value: 'O', label: 'Other' },
  ]
  const techOptions = [
    { value: 'html', label: 'HTML' },
    { value: 'css', label: 'CSS' },
    { value: 'JS', label: 'JAVASCRIPT' },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Active And Disabled</CardTitle>
      </CardHeader>
      <CardBody>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-28">
          <FormGroup>
            <FormLabel required>Profile:</FormLabel>
            <AutoComplite
              value={profile}
              options={profileOptions}
              onChange={setProfile}
              placeholder="Select profile..."
              state="success"
              feedbackText="Looks good!"
            />
          </FormGroup>
          <FormGroup>
            <FormLabel required>Gender:</FormLabel>
            <AutoComplite
              value={gender}
              options={genderOptions}
              onChange={setGender}
              placeholder="Select gender..."
              state="warning"
              feedbackText="this is requied"
            />
          </FormGroup>
          <FormGroup>
            <FormLabel required>Gender:</FormLabel>
            <AutoComplite
              value={tech}
              options={techOptions}
              onChange={setGender}
              placeholder="Select tech..."
              state="danger"
              feedbackText="this is requied"
            />
          </FormGroup>
        </div>
      </CardBody>
    </Card>
  )
}
