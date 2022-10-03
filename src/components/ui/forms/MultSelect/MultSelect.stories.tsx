/* eslint-disable @next/next/no-img-element */
import { useCallback, useState, useMemo, useEffect } from 'react'
import { ComponentMeta } from '@storybook/react'

import MultSelect, { IMultSelectOption } from '.'
import FormGroup from '../FormGroup'
import FormLabel from '../FormLabel'
import { Card, CardBody, CardHeader, CardTitle } from '../../layout/Card'
import { useDebouncedCallback } from 'use-debounce'
import axios from 'axios'
import { ActionMeta, MultiValue } from 'react-select'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/forms/MultSelect',
  component: MultSelect,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {},
} as ComponentMeta<typeof MultSelect>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />

// export const Overview = Template.bind({})

export const SimpleExample = () => {
  const [profiles, setProfiles] = useState<MultiValue<IMultSelectOption>>([])

  const profilesOptions = [
    { value: 'admin', label: 'Admin' },
    { value: 'blogger', label: 'Blogger' },
    { value: 'customer', label: 'Customer' },
  ]
  return (
    <Card>
      <CardHeader>
        <CardTitle>Simple Example</CardTitle>
      </CardHeader>
      <CardBody>
        <div className="grid grid-cols-1 gap-6 pb-28">
          <FormGroup>
            <FormLabel required>Profiles:</FormLabel>
            <MultSelect
              value={profiles}
              options={profilesOptions}
              onChange={(newValue) => setProfiles(newValue)}
              placeholder="Select profiles..."
            />
          </FormGroup>
        </div>
      </CardBody>
    </Card>
  )
}

export const WitchDefaultOptions = () => {
  const [profiles, setProfiles] = useState<MultiValue<IMultSelectOption>>([])

  const profilesOptions = [
    { value: 'admin', label: 'Admin' },
    { value: 'blogger', label: 'Blogger' },
    { value: 'customer', label: 'Customer' },
  ]

  useEffect(() => {
    setProfiles([profilesOptions[1], profilesOptions[2]])
  }, [])

  return (
    <Card>
      <CardHeader>
        <CardTitle>Witch Default Options</CardTitle>
      </CardHeader>
      <CardBody>
        <div className="grid grid-cols-1 gap-6 pb-28">
          <FormGroup>
            <FormLabel required>Profiles:</FormLabel>
            <MultSelect
              value={profiles}
              options={profilesOptions}
              onChange={(newValue) => setProfiles(newValue)}
              placeholder="Select profiles..."
            />
          </FormGroup>
        </div>
      </CardBody>
    </Card>
  )
}

// export const Validations = () => {
//   const [profile, s] = useState<IMultSelectOption | null>(null)
//   const [gender, setGender] = useState<IMultSelectOption | null>(null)
//   const [tech, setTech] = useState<IMultSelectOption | null>(null)

//   const profileOptions = [
//     { value: 'admin', label: 'Admin' },
//     { value: 'blogger', label: 'Blogger' },
//     { value: 'customer', label: 'Customer' },
//   ]
//   const genderOptions = [
//     { value: 'M', label: 'Masculine' },
//     { value: 'F', label: 'Feminine' },
//     { value: 'O', label: 'Other' },
//   ]
//   const techOptions = [
//     { value: 'html', label: 'HTML' },
//     { value: 'css', label: 'CSS' },
//     { value: 'JS', label: 'JAVASCRIPT' },
//   ]

//   return (
//     <Card>
//       <CardHeader>
//         <CardTitle>Active And Disabled</CardTitle>
//       </CardHeader>
//       <CardBody>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-28">
//           <FormGroup>
//             <FormLabel required>Profile:</FormLabel>
//             <MultSelect
//               value={profile}
//               options={profileOptions}
//               onChange={setProfile}
//               placeholder="Select profile..."
//               state="success"
//               feedbackText="Looks good!"
//             />
//           </FormGroup>
//           <FormGroup>
//             <FormLabel required>Gender:</FormLabel>
//             <MultSelect
//               value={gender}
//               options={genderOptions}
//               onChange={setGender}
//               placeholder="Select gender..."
//               state="warning"
//               feedbackText="this is requied"
//             />
//           </FormGroup>
//           <FormGroup>
//             <FormLabel required>Tech:</FormLabel>
//             <MultSelect
//               value={tech}
//               options={techOptions}
//               onChange={setTech}
//               placeholder="Select tech..."
//               state="danger"
//               feedbackText="this is requied"
//             />
//           </FormGroup>
//         </div>
//       </CardBody>
//     </Card>
//   )
// }

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
  const [cardValue, setCardValue] = useState<MultiValue<IMultSelectOption>>([])
  const [cards, setCards] = useState<ICard[]>([])
  const [cardInfo, setInfo] = useState<ICard[]>([])
  // const [cardOptions, setCardOptions] = useState<IMultSelectOption[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const cardOptions = useMemo<IMultSelectOption[]>(() => {
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

  const handleChangeOptions = useCallback(
    (
      newOptions: MultiValue<IMultSelectOption>,
      actionMeta: ActionMeta<IMultSelectOption>
    ) => {
      if (!newOptions) return
      setCardValue(newOptions)
      if (actionMeta.action === 'select-option') {
        const indexCard = cards.findIndex(
          (card) => String(card?.id) === actionMeta?.option?.value
        )
        if (indexCard >= 0) {
          setInfo((currentInfo) => [...currentInfo, cards[indexCard]])
        }
      }
      if (actionMeta.action === 'remove-value') {
        setInfo(([...currentInfo]) => {
          const indexCard = currentInfo.findIndex(
            (currentInfo) => String(currentInfo?.id) === actionMeta?.removedValue?.value
          )
          currentInfo.splice(indexCard, 1)
          return currentInfo
        })
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
            <MultSelect
              value={cardValue}
              inputValue={inputText}
              options={cardOptions}
              onChange={handleChangeOptions}
              onInputChange={handleChangeInputText}
              placeholder="Search for a yuguioh card..."
              isLoading={isLoading}
            />
          </FormGroup>
          <div className="flex flex-wrap gap-6">
            {cardInfo?.map((cardI) => (
              <img
                className="w-44"
                key={cardI?.card_images?.[0]?.id}
                src={cardI?.card_images?.[0]?.image_url}
                alt={cardI?.card_images?.[0]?.image_url}
              />
            ))}
          </div>
        </div>
      </CardBody>
    </Card>
  )
}
