import { v4 as uuidv4 } from "uuid"

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {}
export default function Checkbox({ id, ...props }: CheckboxProps) {
  const uuid = uuidv4()
  return (
    <div style={{ display: "inline" }}>
      <input
        type="checkbox"
        id={id || uuid}
        className="input-checkbox"
        {...props}
      />
      <label htmlFor={id || uuid}></label>
    </div>
  )
}
