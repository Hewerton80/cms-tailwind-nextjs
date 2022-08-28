import cn from 'classnames'
import Avatar, { AvatarProps } from '../Avatar'

interface AvatarGroupProps extends AvatarProps {
  userName?: string
  userEmail?: string
}

function AvatarGroup({ userName, userEmail, className, ...rest }: AvatarGroupProps) {
  return (
    <div className={cn('flex items-center', className)}>
      <Avatar {...rest} />
      <span className="flex flex-col ml-3 text-sm ">
        <span className="text-black dark:text-white">{userName}</span>
        <span className="text-dark dark:text-light text-xs">{userEmail}</span>
      </span>
    </div>
  )
}

export default AvatarGroup
