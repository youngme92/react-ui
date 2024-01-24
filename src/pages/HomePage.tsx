import { useState } from "react"
import Checkbox from "@/components/Checkbox"

export default function HomePage() {
  const [checked, setChecked] = useState(true)

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked)
  }
  return (
    <div
      style={{ margin: "auto", position: "absolute", top: "50%", left: "50%" }}
    >
      <div style={{ display: "flex" }}>
        <Checkbox id="test" />
        <label htmlFor="test">test</label>
      </div>
      <Checkbox checked={checked} onChange={handleCheckboxChange} />
      <Checkbox />
      <Checkbox />
    </div>
  )
}
