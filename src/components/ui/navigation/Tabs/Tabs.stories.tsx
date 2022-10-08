import React, { useState } from 'react'
import { ComponentMeta } from '@storybook/react'
import { Tabs, Tab, TabPanel } from '.'
import { Card, CardBody, CardHeader, CardTitle } from '../../layout/Card'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/navigation/Tabs',
  component: Tabs,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {},
  subcomponents: { Tab, TabPanel },
} as ComponentMeta<typeof Tabs>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />

export const DefaultTabs = () => {
  const [tabIndex, setTabIndex] = useState(1)
  return (
    <Card>
      <CardHeader>
        <CardTitle>Default Tabs</CardTitle>
      </CardHeader>
      <CardBody>
        <Tabs value={tabIndex} onChange={setTabIndex}>
          <Tab value={1}>Tab 1</Tab>
          <Tab value={2}>Tab 2</Tab>
          <Tab value={3}>Tab 3</Tab>
          <Tab value={4}>Tab 4</Tab>
        </Tabs>
        <TabPanel value={tabIndex} index={1}>
          <p>TabPanel 1</p>
        </TabPanel>
        <TabPanel value={tabIndex} index={2}>
          <p>TabPanel 2</p>
        </TabPanel>
        <TabPanel value={tabIndex} index={3}>
          <p>TabPanel 3</p>
        </TabPanel>
        <TabPanel value={tabIndex} index={4}>
          <p>TabPanel 4</p>
        </TabPanel>
      </CardBody>
    </Card>
  )
}
