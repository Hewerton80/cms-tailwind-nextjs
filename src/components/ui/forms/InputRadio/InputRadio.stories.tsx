import { useState } from 'react'
import { ComponentMeta } from '@storybook/react'

import InputRadio from '.'
import FormGroup from '../FormGroup'
import FormLabel from '../FormLabel'
import { Card, CardBody, CardHeader, CardTitle } from '../../layout/Card'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/forms/InputRadio',
  component: InputRadio,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {},
} as ComponentMeta<typeof InputRadio>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// const Template: ComponentStory<typeof InputRadio> = (args) => <InputRadio {...args} />

// export const Overview = Template.bind({})

export const Examples = () => {
  const [option, setOption] = useState('')
  return (
    <div className="flex">
      <FormGroup>
        <FormLabel>options</FormLabel>
        <div className="flex flex-col gap-2">
          <InputRadio
            value="option-1"
            checked={option === 'option-1'}
            onChange={(e) => setOption(e.target.value)}
            text="option-1"
          />
          <InputRadio
            value="option-2"
            checked={option === 'option-2'}
            onChange={(e) => setOption(e.target.value)}
            text="option-2"
          />
          <InputRadio
            value="option-3"
            checked={option === 'option-3'}
            onChange={(e) => setOption(e.target.value)}
            text="option-3"
          />
        </div>
      </FormGroup>
    </div>
  )
}
