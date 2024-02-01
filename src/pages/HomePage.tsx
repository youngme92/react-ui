import Input from "@/components/Input"
import Label from "@/components/Label"
import { useRef } from "react"

export default function HomePage() {
  const inputRef = useRef<HTMLInputElement>(null)
  const labelRef = useRef<HTMLLabelElement>(null)
  return (
    <div
      style={{ margin: "auto", position: "absolute", top: "50%", left: "50%" }}
    >
      <div style={{ display: "flex", gap: "5px" }}></div>
      <Label htmlFor="input" ref={labelRef}>
        label
      </Label>
      <Input id="input" placeholder="123" ref={inputRef} />
      <button onClick={() => labelRef.current?.focus()}>click me</button>
    </div>
  )
}
