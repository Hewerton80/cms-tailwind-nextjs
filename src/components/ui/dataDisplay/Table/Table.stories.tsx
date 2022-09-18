import React from 'react'
import { ComponentMeta } from '@storybook/react'

import { Table, Th, Thead, Tr, Tbody, Td } from '.'
import IconButton from '../../forms/IconButton'
import { FaPen, FaRegEye, FaTrash } from 'react-icons/fa'
import Badge from '../Badge'
import AvatarGroup from '../../media/AvatarGroup'
import avatarimage from '../../../../../public/images/face4.jpg'
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/dataDisplay/Table',
  component: Table,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {},
} as ComponentMeta<typeof Table>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />

// export const Overview = Template.bind({})

// Overview.args = {
//   children: 'Button',
// }

export const DefaultTables = () => {
  const lorem = `Lorem ipsum dolor sit amet consectetur adipisicing elit.
Exercitationem`

  return (
    <div className="p-8">
      <Table>
        <Thead>
          <Tr>
            <Th>Id</Th>
            <Th>Função</Th>
            <Th>Posts</Th>
            <Th>Situação</Th>
            <Th>Cadastrado em:</Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
            <Tr key={i}>
              <Td className="py-1">
                {/* <AvatarGroup
                  src="https://technext.github.io/polluxui-free-admin-template/images/faces/face2.jpg"
                  userName="Fulano"
                  userEmail="Fulano@email.com"
                /> */}
                {i + 1}
              </Td>
              <Td>Admin</Td>
              <Td>15</Td>

              <Td>
                <Badge variant="danger">Pending</Badge>
              </Td>
              <Td>12 May 2017</Td>
              <Td>
                <div className="flex items-center gap-2 justify-end">
                  <IconButton icon={<FaPen />} size="sm" />
                  <IconButton icon={<FaRegEye />} size="sm" />
                  <IconButton variantColor="danger" icon={<FaTrash />} size="sm" />
                </div>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </div>
  )
}
