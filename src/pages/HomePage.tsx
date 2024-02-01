import Select from "@/components/Select"

export default function HomePage() {
  // const inputRef = useRef<HTMLInputElement>(null)
  // const labelRef = useRef<HTMLLabelElement>(null)
  return (
    <div
      style={{ margin: "auto", position: "absolute", top: "50%", left: "50%" }}
    >
      <div style={{ display: "flex", gap: "5px" }}></div>
      <select name="" id="">
        <option value="react">{/* <p>123</p> */}</option>
        <option value="vue">Vue</option>
      </select>
      <Select>
        <Select.Option value="react">
          <p>test</p>
        </Select.Option>
        <Select.Option value="vue">Vue</Select.Option>
      </Select>
    </div>
  )
}
