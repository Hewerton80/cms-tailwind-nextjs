import { HTMLAttributes, useContext, useState } from 'react'
import Image from 'next/image'
import { FaBars, FaAngleDown, FaSignOutAlt } from 'react-icons/fa'
import Avatar from '../../ui/media/Avatar'
import { DropDown, DropDownItem, DropDownMenu } from '../../ui/overlay/DropDown'
import { ToogleSideBarContext } from '../../../contexts/toogleSideBarContext'
import { Menu } from '@headlessui/react'
import classNames from 'classnames'

interface HeaderProps extends HTMLAttributes<HTMLElement> {}

function Header({ className, ...rest }: HeaderProps) {
  const { showSideBar } = useContext(ToogleSideBarContext)
  const [showDropDown, setShowDropDown] = useState(false)

  const { handleToogleSideBar } = useContext(ToogleSideBarContext)

  return (
    <header
      className={classNames('flex h-20 w-full px-7 bg-primary z-10', className)}
      {...rest}
    >
      <div className="flex items-center justify-between w-full h-full">
        <div
          className={classNames(
            'flex items-center h-full',
            showSideBar ? 'w-auto md:w-60 px-0 md:px-5' : 'w-auto px-0'
          )}
        >
          <span className={classNames('hidden', showSideBar && 'md:block')}>
            <Image src="/images/logo.svg" alt="logo" width={126} height={40} />
          </span>
          <span
            className="flex ml-auto cursor-pointer w-5 h-7"
            role="button"
            onClick={handleToogleSideBar}
          >
            <FaBars className="m-auto text-white text-xl" />
          </span>
        </div>

        <div className="flex h-full items-center ml-auto">
          <DropDown>
            <Menu.Button as="div" role="button">
              <div
                className={classNames('flex items-center', 'cursor-pointer')}
                role="button"
                onClick={() => !showDropDown && setShowDropDown(true)}
              >
                <Avatar src="/images/face5.jpg" />
                <p className="ml-4 text-sm font-bold text-white">Fulano de tal</p>
                <FaAngleDown className="text-white ml-1" />
              </div>
            </Menu.Button>
            <DropDownMenu>
              <DropDownItem href="#" as="button" leftIcon={<FaSignOutAlt />}>
                Log out
              </DropDownItem>
              <DropDownItem href="#" leftIcon={<FaSignOutAlt />}>
                Log out
              </DropDownItem>
            </DropDownMenu>
          </DropDown>
        </div>
      </div>
    </header>
  )
}

export default Header
