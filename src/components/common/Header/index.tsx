import { HTMLAttributes, useContext, useEffect, useState } from 'react'
import Image from 'next/image'
import { FaBars, FaAngleDown, FaSignOutAlt } from 'react-icons/fa'
import Avatar from '../../ui/media/Avatar'
import { DropDown, DropDownItem, DropDownMenu } from '../../ui/overlay/DropDown'
import { ToogleSideBarContext } from '../../../contexts/toogleSideBarContext'
import { Menu } from '@headlessui/react'
import classNames from 'classnames'
import ThemeSwitch from '../../ui/forms/ThemeSwitch'

interface HeaderProps extends HTMLAttributes<HTMLElement> {}

function Header({ className, ...rest }: HeaderProps) {
  const { menuIsExpanded, handleToogleOnlyIcons } = useContext(ToogleSideBarContext)
  const [showDropDown, setShowDropDown] = useState(false)
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  const { handleToogleSideBar } = useContext(ToogleSideBarContext)

  useEffect(() => {
    if (localStorage.getItem('theme') === 'dark') {
      setTheme('dark')
    }
    localStorage.setItem('theme', 'dark')
  }, [])

  useEffect(() => {
    // const isDarkModeByOperatingSystemPreference = window.matchMedia(
    //   '(prefers-color-scheme: dark)'
    // ).matches
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [theme])

  return (
    <header
      className={classNames(
        'flex h-20 w-full px-7 bg-primary z-10',
        'dark:bg-dark-card dark:border-white/10',
        className
      )}
      {...rest}
    >
      <div className="flex items-center justify-between w-full h-full">
        <div
          className={classNames(
            'flex items-center h-full',
            menuIsExpanded ? 'w-auto md:w-60 px-0 md:px-5' : 'w-auto px-0'
          )}
        >
          <span className={classNames('hidden', menuIsExpanded && 'md:block')}>
            <Image src="/images/logo.svg" alt="logo" width={126} height={40} />
          </span>
          <span
            className="flex md:hidden ml-auto cursor-pointer w-5 h-7"
            role="button"
            onClick={handleToogleSideBar}
          >
            <FaBars className="m-auto text-white text-xl" />
          </span>
          <span
            className="hidden md:flex ml-auto cursor-pointer w-5 h-7"
            role="button"
            onClick={handleToogleOnlyIcons}
          >
            <FaBars className="m-auto text-white text-xl" />
          </span>
        </div>

        <div className="flex h-full items-center ml-auto space-x-2">
          <ThemeSwitch
            id="theme-ThemeSwitch"
            checked={theme === 'dark'}
            onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
          />
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
