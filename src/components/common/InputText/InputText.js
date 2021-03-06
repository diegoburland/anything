import React from 'react'
import classnames from 'classnames'

const InputSizeVariant = {
  Regular: 'regular',
  Big: 'big'
}

const InputSizeClasses = {
  [InputSizeVariant.Regular]: '',
  [InputSizeVariant.Big]: 'cs-input--big'
}

const Input = ({ className, size = InputSizeVariant.Regular, ...rest }) => {
  const classes = classnames('cs-input', InputSizeClasses[InputSizeVariant], className)

  return <input className={classes} {...rest} />
}

export default Input
