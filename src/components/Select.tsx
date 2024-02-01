import { createContext, useState } from "react"

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  children: React.ReactNode
}

interface OptionProps extends React.OptionHTMLAttributes<HTMLOptionElement> {
  children: React.ReactNode
}

// interface SelectType extends React.ForwardRefExoticComponent<SelectProps> {
//   Option?: React.ForwardRefExoticComponent<OptionProps>
// }

type SelectContext = {
  selectedValue: string
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

const SelectContext = createContext<SelectContext | null>(null)

export const Select = ({ children, ...props }: SelectProps) => {
  const [selectedValue, setSelectedValue] = useState("")
  const onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value)
  }
  return (
    <SelectContext.Provider value={{ selectedValue, onChange }}>
      <select {...props}>{children}</select>
    </SelectContext.Provider>
  )
}

function Option({ children, ...props }: OptionProps) {
  return <option {...props}>{children}</option>
}

Select.Option = Option

export default Select
