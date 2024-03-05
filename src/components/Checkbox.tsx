import { useId } from "react"

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {}
export default function Checkbox({ id, ...props }: CheckboxProps) {
  const reactId = useId()
  return (
    <div style={{ display: "inline" }}>
      <input
        type="checkbox"
        id={id || reactId}
        className="input-checkbox"
        {...props}
      />
      <label htmlFor={id || reactId}></label>
    </div>
  )
}
