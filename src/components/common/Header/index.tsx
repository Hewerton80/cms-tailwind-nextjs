import { HTMLAttributes, useState } from 'react'
import cn from 'classnames'
import Image from 'next/image'
import { FaBars, FaAngleDown, FaSignOutAlt } from 'react-icons/fa'
import Avatar from '../../ui/media/Avatar'
import DropDown from '../../ui/overlay/DropDown'

interface HeaderProps extends HTMLAttributes<HTMLElement> {}

function Header({ className, ...rest }: HeaderProps) {
  const [showDropDown, setShowDropDown] = useState(false)

  return (
    <header
      className={cn('flex', 'h-20 w-full', 'px-7', 'bg-primary', className)}
      {...rest}
    >
      <div className="flex items-center justify-between w-full h-full">
        <div className="flex h-full items-center w-60 px-5">
          <Image src="/images/logo.svg" alt="logo" width={126} height={40} />
          <span className="flex ml-auto cursor-pointer w-5 h-7" role="button">
            <FaBars className="m-auto text-white text-xl" />
          </span>
        </div>

        <div className="flex h-full items-center ml-auto">
          <div
            className="flex items-center cursor-pointer relative"
            role="button"
            onClick={() => !showDropDown && setShowDropDown(true)}
          >
            <Avatar src="/images/face5.jpg" />
            <p className="ml-4 text-sm font-bold text-white">Fulano de tal</p>
            <FaAngleDown className="text-white ml-1" />
            {showDropDown && (
              <DropDown
                onClickOutside={() => setShowDropDown(false)}
                onClickOption={() => console.log('logout')}
                dropDownItens={[
                  <span key="logout" className="flex items-center">
                    <FaSignOutAlt className="text-black mr-2" /> Log out
                  </span>,
                ]}
              />
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
