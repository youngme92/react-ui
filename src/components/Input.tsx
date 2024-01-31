import React, { ForwardedRef, forwardRef } from "react"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export default forwardRef(function Input(
  { ...props }: InputProps,
  ref?: ForwardedRef<HTMLInputElement> | undefined
) {
  return <input type="text" ref={ref} {...props} />
})
