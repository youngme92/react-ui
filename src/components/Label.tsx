import React, { LabelHTMLAttributes, ForwardedRef, forwardRef } from "react"

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode
}

export default forwardRef(function Label(
  { children, ...props }: LabelProps,
  ref: ForwardedRef<HTMLLabelElement> | undefined
) {
  return (
    <label className="label" {...props} ref={ref}>
      {children}
    </label>
  )
})
