import { LabelHTMLAttributes } from "react"

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode
}

export default function Label({ children, ...props }: LabelProps) {
  return (
    <label className="label" {...props}>
      {children}
    </label>
  )
}
