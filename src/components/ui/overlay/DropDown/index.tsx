import styles from './styles.module.css'
import { Menu } from '@headlessui/react'
import { Fragment, ReactNode } from 'react'
import classNames from 'classnames'
import Link, { LinkProps } from 'next/link'
import CustomLink from '../../navigation/CustomLink'

interface DropDownProps extends GlobalProps {}
interface DropDownItemProps extends GlobalProps, LinkProps {
  as?: 'a' | 'button'
  // href?: string
  leftIcon?: ReactNode
}

export function DropDown({ children, className, ...rest }: DropDownProps) {
  return (
    <Menu as="div" className={classNames(styles.dropdown, className)} {...rest}>
      {children}
    </Menu>
  )
}
export function DropDownToogle({ children, ...rest }: DropDownProps) {
  return (
    <Menu.Button as="div" role="button" {...rest}>
      {children}
    </Menu.Button>
  )
}
export function DropDownMenu({ children, className, ...rest }: DropDownProps) {
  return (
    <Menu.Items
      as="ul"
      role="button"
      className={classNames(
        styles['dropdown-menu'],
        'dark:bg-dark-card dark:border-dark-card ',
        className
      )}
      {...rest}
    >
      {children}
    </Menu.Items>
  )
}
export function DropDownItem({
  children,
  className,
  href = '#',
  leftIcon,
  as = 'a',
  ...rest
}: DropDownItemProps) {
  const classesNamesResult = classNames(
    styles['dropdown-item'],
    'dark:text-secondary',
    'dark:hover:bg-dark-hover',
    className
  )
  const childrens = (
    <>
      {leftIcon && <span className="mr-2">{leftIcon}</span>}
      {children}
    </>
  )
  return (
    <Menu.Item as={Fragment}>
      {as === 'a' ? (
        <CustomLink href={href} className={classNames(classesNamesResult)} {...rest}>
          {childrens}
        </CustomLink>
      ) : (
        <button className={classNames(classesNamesResult)} {...rest}>
          {childrens}
        </button>
      )}
    </Menu.Item>
  )
}
