import Input from "@/components/Input"
import { useRef } from "react"

export default function HomePage() {
  const inputRef = useRef<HTMLInputElement>(null)
  return (
    <div
      style={{ margin: "auto", position: "absolute", top: "50%", left: "50%" }}
    >
      <div style={{ display: "flex", gap: "5px" }}></div>
      <Input placeholder="123" ref={inputRef} />
      <button onClick={() => inputRef.current?.focus()}>click me</button>
    </div>
  )
}
