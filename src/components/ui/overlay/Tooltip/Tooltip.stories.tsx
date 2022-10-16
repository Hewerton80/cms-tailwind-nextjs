import React, { useState } from 'react'
import { ComponentMeta } from '@storybook/react'
import { Tooltip } from '.'
import { Card, CardBody, CardHeader, CardTitle } from '../../layout/Card'
import { Button } from '../../forms/Button'
import classNames from 'classnames'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/overlay/Tooltip',
  component: Tooltip,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {},
} as ComponentMeta<typeof Tooltip>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// const Template: ComponentStory<typeof Tooltip> = (args) => <Tooltip {...args} />

export const DefaultTooltips = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Default Tooltips</CardTitle>
      </CardHeader>
      <CardBody>
        <div
          className={classNames(
            'grid grid-cols-1 sm:grid-cols-5 gap-x-2 gap-y-3.5',
            'pb-8 w-fit mx-auto'
          )}
        >
          <div />
          <div className="w-full">
            <Tooltip content="Top-start" orientation="top-start">
              <Button full>Top-start</Button>
            </Tooltip>
          </div>
          <div className="w-full">
            <Tooltip content="Top" orientation="top">
              <Button full>Top</Button>
            </Tooltip>
          </div>
          <div className="w-full">
            <Tooltip content="Top-End" orientation="top-end">
              <Button full>Top-end</Button>
            </Tooltip>
          </div>
          <div />
          <div className="w-full">
            <Tooltip content="Left-start" orientation="left-start">
              <Button full>Left-start</Button>
            </Tooltip>
          </div>
          <div />
          <div />
          <div />
          <div className="w-full">
            <Tooltip content="Right-start" orientation="right-start">
              <Button full>Right-start</Button>
            </Tooltip>
          </div>
          <div className="w-full">
            <Tooltip content="Left" orientation="left">
              <Button full>Left</Button>
            </Tooltip>
          </div>
          <div />
          <div />
          <div />
          <div className="w-full">
            <Tooltip content="Right" orientation="right">
              <Button full>Right</Button>
            </Tooltip>
          </div>
          <div className="w-full">
            <Tooltip content="Left-end" orientation="left-end">
              <Button full>Left-end</Button>
            </Tooltip>
          </div>
          <div />
          <div />
          <div />
          <div className="w-full">
            <Tooltip content="Right-end" orientation="right-end">
              <Button full>Right-end</Button>
            </Tooltip>
          </div>
          <div />
          <div className="w-full">
            <Tooltip content="Bottom-start" orientation="bottom-start">
              <Button full>Bottom-start</Button>
            </Tooltip>
          </div>
          <div className="w-full">
            <Tooltip content="Bottom" orientation="bottom">
              <Button full>Bottom</Button>
            </Tooltip>
          </div>
          <div className="w-full">
            <Tooltip content="Bottom-end" orientation="bottom-end">
              <Button full>Bottom-end</Button>
            </Tooltip>
          </div>
          <div />
        </div>
      </CardBody>
    </Card>
  )
}

export const MoreExemplos = () => {
  const lorem =
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid suscipit eligendi ipsum numquam, rerum doloremque fugiat tempora dicta libero, asperiores quasi autem, delectus aperiam sequi explicabo doloribus expedita cupiditate veritatis.'
  return (
    <div className="flex flex-col gap-4">
      <Card>
        <CardHeader>
          <CardTitle>Variant colors Tooltips</CardTitle>
        </CardHeader>
        <CardBody>
          <div className="flex flex-wrap mx-auto gap-6 py-6">
            <Tooltip content="primary" variant="primary">
              <Button variantStyle="texted">primary</Button>
            </Tooltip>
            <Tooltip content="success" variant="success">
              <Button variantStyle="texted">success</Button>
            </Tooltip>
            <Tooltip content="secondary" variant="secondary">
              <Button variantStyle="texted">secondary</Button>
            </Tooltip>
            <Tooltip content="danger" variant="danger">
              <Button variantStyle="texted">danger</Button>
            </Tooltip>
            <Tooltip content="warning" variant="warning">
              <Button variantStyle="texted">warning</Button>
            </Tooltip>
            <Tooltip content="info" variant="info">
              <Button variantStyle="texted">info</Button>
            </Tooltip>
            <Tooltip content="dark" variant="dark">
              <Button variantStyle="texted">dark</Button>
            </Tooltip>
          </div>
        </CardBody>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Sizes Tooltips</CardTitle>
        </CardHeader>
        <CardBody>
          <div className="flex flex-wrap mx-auto gap-6 py-14">
            <Tooltip size="md" content={lorem}>
              <Button variantStyle="texted">md width</Button>
            </Tooltip>
            <Tooltip size="lg" content={lorem}>
              <Button variantStyle="texted">lg width</Button>
            </Tooltip>
            <Tooltip size="auto" content={lorem}>
              <Button variantStyle="texted">auto width</Button>
            </Tooltip>
          </div>
        </CardBody>
      </Card>
    </div>
  )
}
