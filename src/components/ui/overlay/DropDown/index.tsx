import { Fragment, ReactNode } from 'react'
import { Menu } from '@headlessui/react'
import classNames from 'classnames'
import { LinkProps } from 'next/link'
import CustomLink from '../../navigation/CustomLink'
import { Button, ButtonProps } from '../../forms/Button'
import { IoMdArrowDropdown } from 'react-icons/io'

interface DropDownProps extends GlobalProps {}

interface DropDownToogleProps extends GlobalProps, ButtonProps {}
interface DropDownItemProps extends GlobalProps, LinkProps {
  as?: 'a' | 'button'
  // href?: string
  leftIcon?: ReactNode
}

export function DropDown({ children, className, ...rest }: DropDownProps) {
  return (
    <Menu as="div" className={classNames('relative z-10', className)} {...rest}>
      {children}
    </Menu>
  )
}
// eslint-disable-next-line react/display-name
export function DropDownToogle({ children, ...rest }: DropDownToogleProps) {
  return (
    <Menu.Button as={Button} type="button" rightIcon={<IoMdArrowDropdown />} {...rest}>
      {children}
    </Menu.Button>
  )
}
export function DropDownMenu({ children, className, ...rest }: DropDownProps) {
  // const ulRef = useRef<HTMLUListElement>(null)
  // useEffect(() => {
  //   const handleScroll = (e: Event) => {
  //     console.log(ulRef.current?.getBoundingClientRect())
  //   }
  //   document.addEventListener('scroll', handleScroll)
  //   return () => {
  //     document.removeEventListener('scroll', handleScroll)
  //   }
  // }, [])

  return (
    <Menu.Items
      // ref={ulRef}
      as="ul"
      className={classNames(
        'absolute min-w-[160px] bg-white shadow-md border top-[calc(100%+4px)]',
        'border-gray-border flex flex-col py-2 outline-none text-dark',
        'dark:bg-dark-card dark:border-dark-card ',
        className
      )}
      // style={{ top: 'calc(100% + 4px)' }}
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
    'flex w-full items-center py-1 px-6 hover:bg-gray-light duration-300',
    'h-full text-black text-sm whitespace-nowrap',
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
