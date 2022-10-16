import { ReactNode, useState } from 'react'
import { Popover } from '@headlessui/react'
import classNames from 'classnames'
import Badge, { badgesVariants } from '../../dataDisplay/Badge'

const tooltipOrientation = {
  top: '-top-1.5 left-1/2 -translate-x-1/2 -translate-y-full',
  'top-start': '-top-1.5 left-0 -translate-y-full',
  'top-end': '-top-1.5 right-0 -translate-y-full',
  'left-start': 'top-0 -left-1.5 -translate-x-full',
  'right-start': 'top-0 -right-1.5 translate-x-full',
  left: 'top-1/2 -left-1.5 -translate-x-full -translate-y-1/2',
  right: 'top-1/2 -right-1.5 translate-x-full -translate-y-1/2',
  'left-end': 'bottom-0 -left-1.5 -translate-x-full',
  'right-end': 'bottom-0 -right-1.5 translate-x-full',
  'bottom-start': '-bottom-1.5 left-0 translate-y-full',
  bottom: '-bottom-1.5 left-1/2 -translate-x-1/2 translate-y-full',
  'bottom-end': '-bottom-1.5 right-0 translate-y-full',
}

const tooltipSize = {
  auto: '',
  md: 'max-w-xs',
  lg: 'max-w-lg',
}

interface TooltipProps {
  children: ReactNode
  content?: string
  orientation?: keyof typeof tooltipOrientation
  variant?: keyof typeof badgesVariants
  size?: keyof typeof tooltipSize
}

export function Tooltip({
  children,
  content,
  variant = 'dark',
  orientation = 'top',
  size = 'auto',
}: TooltipProps) {
  const [isHoveringTootip, setIsHoveringTootip] = useState(false)
  return (
    <Popover
      className="relative w-inherit"
      onMouseOver={() => setIsHoveringTootip(true)}
      onMouseLeave={() => setIsHoveringTootip(false)}
    >
      {children}
      <Popover.Panel
        static
        className={classNames(
          'absolute z-10 ease-out duration-300 w-max',
          isHoveringTootip
            ? 'opacity-100 pointer-events-auto scale-100'
            : 'opacity-0 pointer-events-none scale-75',
          tooltipOrientation[orientation]
        )}
      >
        <Badge variant={variant} className={classNames(tooltipSize[size])}>
          {content}
        </Badge>
      </Popover.Panel>
    </Popover>
  )
}
