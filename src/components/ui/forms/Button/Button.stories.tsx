import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Button } from '.'
import { ButtonGroup } from '../../layout'
import {
  DropDown,
  DropDownItem,
  DropDownMenu,
  DropDownToogle,
} from '../../overlay/DropDown'
import { FiUpload } from 'react-icons/fi'
import { AiOutlineUserSwitch, AiTwotoneEdit } from 'react-icons/ai'
import IconButton from '../IconButton'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/forms/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {},
} as ComponentMeta<typeof Button>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Overview = Template.bind({})

Overview.args = {
  children: 'Button',
}

export const SingleColorButtons = () => {
  return (
    <div className="flex flex-wrap gap-2">
      <Button variantColor="primary">primary</Button>
      <Button variantColor="secondary">secondary</Button>
      <Button variantColor="success">success</Button>
      <Button variantColor="info">info</Button>
      <Button variantColor="dark">dark</Button>
      <Button variantColor="light">light</Button>
      <Button variantColor="danger">danger</Button>
      <Button variantColor="warning">warning</Button>
    </div>
  )
}

export const DisabledButtons = () => {
  return (
    <div className="flex flex-wrap gap-2">
      <Button disabled variantColor="primary">
        primary
      </Button>
      <Button disabled variantColor="secondary">
        secondary
      </Button>
      <Button disabled variantColor="success">
        success
      </Button>
      <Button disabled variantColor="info">
        info
      </Button>
      <Button disabled variantColor="dark">
        dark
      </Button>
      <Button disabled variantColor="light">
        light
      </Button>
      <Button disabled variantColor="danger">
        danger
      </Button>
      <Button disabled variantColor="warning">
        warning
      </Button>
    </div>
  )
}

export const RoundedButtons = () => {
  return (
    <div className="flex flex-wrap gap-2">
      <Button rounded variantColor="primary">
        primary
      </Button>
      <Button rounded variantColor="secondary">
        secondary
      </Button>
      <Button rounded variantColor="success">
        success
      </Button>
      <Button rounded variantColor="info">
        info
      </Button>
      <Button rounded variantColor="dark">
        dark
      </Button>
      <Button rounded variantColor="light">
        light
      </Button>
      <Button rounded variantColor="danger">
        danger
      </Button>
      <Button rounded variantColor="warning">
        warning
      </Button>
    </div>
  )
}

export const LoadButtons = () => {
  return (
    <div className="flex flex-wrap gap-2">
      <Button isLoading variantColor="primary">
        primary
      </Button>
      <Button isLoading variantColor="secondary">
        secondary
      </Button>
      <Button isLoading variantColor="success">
        success
      </Button>
      <Button isLoading variantColor="info">
        info
      </Button>
      <Button isLoading variantColor="dark">
        dark
      </Button>
      <Button isLoading variantColor="light">
        light
      </Button>
      <Button isLoading variantColor="danger">
        danger
      </Button>
      <Button isLoading variantColor="warning">
        warning
      </Button>
    </div>
  )
}

export const OutlinedButtons = () => {
  return (
    <div className="flex flex-wrap gap-2">
      <Button variantStyle="outlined" variantColor="primary">
        primary
      </Button>
      <Button variantStyle="outlined" variantColor="secondary">
        secondary
      </Button>
      <Button variantStyle="outlined" variantColor="success">
        success
      </Button>
      <Button variantStyle="outlined" variantColor="info">
        info
      </Button>
      <Button variantStyle="outlined" variantColor="dark">
        dark
      </Button>
      <Button variantStyle="outlined" variantColor="light">
        light
      </Button>
      <Button variantStyle="outlined" variantColor="danger">
        danger
      </Button>
      <Button variantStyle="outlined" variantColor="warning">
        warning
      </Button>
    </div>
  )
}

export const TextedButtons = () => {
  return (
    <div className="flex flex-wrap gap-2">
      <Button variantStyle="texted" variantColor="primary">
        primary
      </Button>
      <Button variantStyle="texted" variantColor="secondary">
        secondary
      </Button>
      <Button variantStyle="texted" variantColor="success">
        success
      </Button>
      <Button variantStyle="texted" variantColor="info">
        info
      </Button>
      <Button variantStyle="texted" variantColor="dark">
        dark
      </Button>
      <Button variantStyle="texted" variantColor="light">
        light
      </Button>
      <Button variantStyle="texted" variantColor="danger">
        danger
      </Button>
      <Button variantStyle="texted" variantColor="warning">
        warning
      </Button>
    </div>
  )
}

export const SizeButtons = () => {
  return (
    <div className="flex flex-col gap-2">
      <Button variantColor="danger" size="lg">
        size lg
      </Button>
      <Button variantColor="success" size="md">
        size md
      </Button>
      <Button variantColor="primary" size="sm">
        size sm
      </Button>
    </div>
  )
}

export const GroupButtons = () => {
  return (
    <div className="flex flex-wrap gap-2">
      <ButtonGroup vertical>
        <Button variantColor="primary" variantStyle="outlined">
          Top
        </Button>
        <Button variantColor="primary" variantStyle="outlined">
          Middle
        </Button>
        <Button variantColor="primary" variantStyle="outlined">
          Bottom
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variantColor="primary">Left</Button>
        <Button variantColor="primary">Middle</Button>
        <Button variantColor="primary">Right</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variantColor="primary" variantStyle="outlined">
          Left
        </Button>
        <Button variantColor="primary" variantStyle="outlined">
          Middle
        </Button>
        <Button variantColor="primary" variantStyle="outlined">
          Right
        </Button>
      </ButtonGroup>
    </div>
  )
}

export const DropdownButtons = () => {
  return (
    <div className="flex flex-wrap gap-2 mb-16">
      <DropDown>
        <DropDownToogle>DropDown</DropDownToogle>

        <DropDownMenu>
          <DropDownItem href="#">DropDown link</DropDownItem>
          <DropDownItem href="#" as="button">
            DropDown link
          </DropDownItem>
        </DropDownMenu>
      </DropDown>
    </div>
  )
}
export const BlockButtons = () => {
  return (
    <div className="flex flex-col gap-2">
      <Button variantColor="danger" full>
        Block Buttons
      </Button>
      <Button variantColor="success" full>
        Block Buttons
      </Button>
      <Button variantColor="primary" full>
        Block Buttons
      </Button>
    </div>
  )
}

export const ButtonWithTextAndIcon = () => {
  return (
    <div className="flex flex-wrap gap-2">
      <Button variantColor="danger" leftIcon={<FiUpload />}>
        Uploads
      </Button>
      <Button variantColor="success" rightIcon={<AiTwotoneEdit />}>
        Edit
      </Button>
    </div>
  )
}

export const IconButtons = () => {
  return (
    <div className="flex items-center flex-wrap gap-2">
      <IconButton variantColor="danger" icon={<AiOutlineUserSwitch />} size="sm" />
      <IconButton variantColor="success" icon={<AiTwotoneEdit />} size="md" />
      <IconButton variantColor="info" icon={<FiUpload />} size="lg" />
    </div>
  )
}
