import classNames from 'classnames'

export const statesValidations = {
  success: {
    input: '!border-success focus:!border-success focus:!ring-success/40',
    feedbackText: 'text-success',
  },
  warning: {
    input: '!border-warning focus:!border-warning focus:!ring-warning/40',
    feedbackText: 'text-warning',
  },
  danger: {
    input: '!border-danger focus:!border-danger focus:!ring-danger/40',
    feedbackText: 'text-danger',
  },
}

export interface IStateValidationsProps {
  state?: keyof typeof statesValidations
}

export const formTextElementStyle = classNames(
  'h-[46px] py-[14px] px-[22px]',
  'text-sm outline-none rounded-sm duration-300 w-full',
  'border bg-transparent',
  'text-input dark:text-light ease-out duration-300',
  'border-gray-border dark:border-white/10 focus:border-info ',
  'focus:ring-4 focus:ring-info/40'
)
