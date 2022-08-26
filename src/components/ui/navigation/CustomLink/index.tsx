import Link, { LinkProps } from 'next/link'
import { forwardRef } from 'react'

interface CustomLinkProps extends GlobalProps, LinkProps {}

function CustomLink(
  { children, className, onClick, ...rest }: CustomLinkProps,
  ref: any
) {
  return (
    <Link {...rest}>
      <a ref={ref} className={className} onClick={onClick}>
        {children}
      </a>
    </Link>
  )
}

export default forwardRef(CustomLink)
