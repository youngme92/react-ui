import DropdownMenu from "@/components/DropdownMenu"

export default function HomePage() {
  return (
    <div
      style={{ margin: "auto", position: "absolute", top: "50%", left: "50%" }}
    >
      <div style={{ display: "flex" }}>
        <DropdownMenu>
          <DropdownMenu.Trigger>DropdownMenu</DropdownMenu.Trigger>
          <DropdownMenu.Content>
            <DropdownMenu.Label>DropdownMenu Label</DropdownMenu.Label>
            <DropdownMenu.Separator />
            <DropdownMenu.Item>DropdownMenu Item</DropdownMenu.Item>
            <DropdownMenu.Item>DropdownMenu Item</DropdownMenu.Item>
            <DropdownMenu.Item>DropdownMenu Item</DropdownMenu.Item>
            <DropdownMenu.Item>DropdownMenu Item</DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenu.Trigger>DropdownMenu</DropdownMenu.Trigger>
          <DropdownMenu.Content>
            <DropdownMenu.Label>DropdownMenu Label</DropdownMenu.Label>
            <DropdownMenu.Separator />
            <DropdownMenu.Item>DropdownMenu Item</DropdownMenu.Item>
            <DropdownMenu.Item>DropdownMenu Item</DropdownMenu.Item>
            <DropdownMenu.Item>DropdownMenu Item</DropdownMenu.Item>
            <DropdownMenu.Item>DropdownMenu Item</DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu>
      </div>
    </div>
  )
}
