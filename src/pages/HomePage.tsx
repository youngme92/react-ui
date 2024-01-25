import Checkbox from "@/components/Checkbox"
import Label from "@/components/Label"

export default function HomePage() {
  return (
    <div
      style={{ margin: "auto", position: "absolute", top: "50%", left: "50%" }}
    >
      <div style={{ display: "flex", gap: "5px" }}>
        <Checkbox id="testId" />
        <Label htmlFor="testId">test</Label>
      </div>
    </div>
  )
}
