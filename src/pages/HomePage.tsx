import Badge from "@/components/Badge"

export default function HomePage() {
  return (
    <div
      style={{ margin: "auto", position: "absolute", top: "50%", left: "50%" }}
    >
      <Badge varient="destructive">destructive</Badge>
      <Badge varient="default">default</Badge>
      <Badge varient="secondary">secondary</Badge>
      <Badge varient="outline">outline</Badge>
    </div>
  )
}
