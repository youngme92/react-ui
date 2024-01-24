import Collapsible from "@/components/Collapsible"

export default function HomePage() {
  return (
    <div
      style={{ margin: "auto", position: "absolute", top: "50%", left: "50%" }}
    >
      <Collapsible>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          title
          <Collapsible.Trigger>Click button</Collapsible.Trigger>
        </div>
        <Collapsible.Content>Content1</Collapsible.Content>
        <Collapsible.Content>Content2</Collapsible.Content>
        <Collapsible.Content>Content3</Collapsible.Content>
        <Collapsible.Content>Content4</Collapsible.Content>
      </Collapsible>
    </div>
  )
}
