import React, { useState } from 'react'
import { ComponentMeta } from '@storybook/react'
import { Card, CardBody, CardFooter, CardHeader, CardImg, CardTitle } from '.'
import { Button } from '../../forms/Button'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/layout/Card',
  component: Card,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {},
} as ComponentMeta<typeof Card>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />
const lorem = `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
Voluptates ullam quod, modi accusamus exercitationem molestiae voluptas 
quas tempore eum alias sapiente pariatur consequatur ratione, 
assumenda dolore maiores magnam? In, cupiditate!
`

export const ImageCard = () => {
  const imgs = [
    'https://static.escolakids.uol.com.br/2019/07/paisagem-natural.jpg',
    'https://images.ecycle.com.br/wp-content/uploads/2021/05/20195924/o-que-e-paisagem.jpg',
  ]
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {imgs.map((img, i) => (
        <Card key={img}>
          <CardImg src={img} alt={String(i)} />
          <CardBody>
            <p>{lorem}</p>
          </CardBody>
          <CardFooter>
            <a href="#" onClick={(e) => e.preventDefault()}>
              <Button variantStyle="texted">Read More</Button>
            </a>
          </CardFooter>
        </Card>
      ))}
      {imgs.map((img, i) => (
        <Card key={img}>
          <CardBody>
            <p>{lorem}</p>
          </CardBody>
          <CardFooter variant="center">
            <a href="#" onClick={(e) => e.preventDefault()}>
              <Button variantStyle="texted">Read More</Button>
            </a>
          </CardFooter>
          <CardImg variant="bottom" src={img} alt={String(i)} />
        </Card>
      ))}
      {imgs.map((img, i) => (
        <Card key={img}>
          <CardImg src={img} alt={String(i)} />
          <CardBody>
            <p>{lorem}</p>
          </CardBody>
          <CardFooter variant="right">
            <a href="#" onClick={(e) => e.preventDefault()}>
              <Button variantStyle="texted">Read More</Button>
            </a>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

export const ColorsCard = () => {
  const variantColorCard = [
    'Default',
    'Primary',
    'Success',
    'Secondary',
    'Info',
    'Danger',
    'Dark',
    'Warning',
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {variantColorCard.map((variant) => (
        <Card key={variant} variant={variant.toLowerCase() as any}>
          <CardHeader>
            <CardTitle>{variant}</CardTitle>
          </CardHeader>
          <CardBody>
            <p>{lorem}</p>
          </CardBody>
        </Card>
      ))}
    </div>
  )
}
