/* eslint-disable @next/next/no-img-element */
import { useCallback, useState, useMemo } from 'react'
import { ComponentMeta } from '@storybook/react'

import AutoComplite, { IAutoCompliteOption } from '.'
import FormGroup from '../FormGroup'
import FormLabel from '../FormLabel'
import { Card, CardBody, CardHeader, CardTitle } from '../../layout/Card'
import { useDebouncedCallback } from 'use-debounce'
import axios from 'axios'

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
            <FormLabel required>Tech:</FormLabel>
            <AutoComplite
              value={tech}
              options={techOptions}
              onChange={setTech}
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

export interface cardImage {
  id: number
  image_url: string
  image_url_small: string
}
interface ICard {
  id?: number | string
  name?: string
  fname?: string // queryparan
  has_effect?: boolean // queryparan
  type?: string
  desc?: string
  atk?: number | string
  def?: number | string
  level?: number | string
  scale?: string
  race?: string
  attribute?: string
  card_images?: cardImage[]
}

export const Async = () => {
  const [inputText, setInputText] = useState('')
  const [cardValue, setCardValue] = useState<IAutoCompliteOption | null>(null)
  const [cards, setCards] = useState<ICard[]>([])
  const [cardInfo, setInfo] = useState<ICard | undefined>(undefined)
  // const [cardOptions, setCardOptions] = useState<IAutoCompliteOption[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const cardOptions = useMemo<IAutoCompliteOption[]>(() => {
    return cards.map((card) => ({ value: String(card?.id), label: String(card?.name) }))
  }, [cards])

  const handleFetechData = useDebouncedCallback(
    useCallback(async (newValue: string) => {
      console.log('newValue', newValue)
      try {
        const { data: dataCards } = await axios.get(
          'https://db.ygoprodeck.com/api/v7/cardinfo.php',
          {
            params: { fname: newValue, num: 5, page: 1, offset: 0 },
          }
        )
        setCards(dataCards.data)
      } catch (error) {}
      setIsLoading(false)
    }, []),
    1000
  )

  const handleChangeInputText = useCallback(
    (newValue: string) => {
      setInputText(newValue)
      if (!newValue.trim()) return
      setIsLoading(true)
      handleFetechData(newValue)
    },
    [handleFetechData]
  )

  const handleSelectOptions = useCallback(
    (option: IAutoCompliteOption | null) => {
      if (!option) return
      setCardValue(option)
      const indexCard = cards.findIndex((card) => String(card?.id) === option.value)
      if (indexCard >= 0) {
        setInfo(cards[indexCard])
      }
    },
    [cards]
  )

  return (
    <Card>
      <CardHeader>
        <CardTitle>Async</CardTitle>
      </CardHeader>
      <CardBody>
        <div className="flex flex-col pb-64 gap-8">
          <FormGroup>
            <FormLabel required>YU-GI-OH CARD:</FormLabel>
            <AutoComplite
              // value={card}
              inputValue={inputText}
              options={cardOptions}
              onChange={handleSelectOptions}
              onInputChange={handleChangeInputText}
              placeholder="Search for a yuguioh card..."
              isLoading={isLoading}
            />
          </FormGroup>
          <div className="flex flex-wrap gap-6">
            {cardInfo &&
              cardInfo?.card_images?.map((img) => (
                <img
                  className="w-44"
                  key={img?.id}
                  src={img?.image_url}
                  alt={img?.image_url}
                />
              ))}
          </div>
        </div>
      </CardBody>
    </Card>
  )
}
