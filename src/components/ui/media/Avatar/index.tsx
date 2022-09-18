import Image, { StaticImageData } from 'next/image'
import cn from 'classnames'
export interface AvatarProps {
  size?: number
  src?: string | StaticImageData
  className?: string
}

function Avatar({ size = 35, src, className }: AvatarProps) {
  return (
    <span
      className={cn('flex items-center justify-center', 'overflow-hidden', className)}
      style={{ width: size, height: size, borderRadius: '50%' }}
    >
      <Image
        src={String(src)}
        alt={typeof src === 'string' ? src : ''}
        width={size}
        height={size}
      />
    </span>
  )
}

export default Avatar
