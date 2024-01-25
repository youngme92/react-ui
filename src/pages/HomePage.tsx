import DropdownMenu from "@/components/DropdownMenu"

export default function HomePage() {
  return (
    <div
      style={{ margin: "auto", position: "absolute", top: "50%", left: "50%" }}
    >
      <div style={{ display: "flex", gap: "5px" }}>
        <DropdownMenu>
          <DropdownMenu.Trigger>trigger</DropdownMenu.Trigger>
          <DropdownMenu.Content>
            <DropdownMenu.Label>label</DropdownMenu.Label>
            <DropdownMenu.Item>item</DropdownMenu.Item>
            <DropdownMenu.Item>item</DropdownMenu.Item>
            <DropdownMenu.Item>item</DropdownMenu.Item>
            <DropdownMenu.Separator />
            <DropdownMenu.Item>item</DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenu.Trigger>trigger</DropdownMenu.Trigger>
          <DropdownMenu.Content>
            <DropdownMenu.Label>label</DropdownMenu.Label>
            <DropdownMenu.Item>item</DropdownMenu.Item>
            <DropdownMenu.Item>item</DropdownMenu.Item>
            <DropdownMenu.Item>item</DropdownMenu.Item>
            <DropdownMenu.Separator />
            <DropdownMenu.Item>item</DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenu.Trigger>trigger</DropdownMenu.Trigger>
          <DropdownMenu.Content>
            <DropdownMenu.Label>label</DropdownMenu.Label>
            <DropdownMenu.Item>item</DropdownMenu.Item>
            <DropdownMenu.Item>item</DropdownMenu.Item>
            <DropdownMenu.Item>item</DropdownMenu.Item>
            <DropdownMenu.Separator />
            <DropdownMenu.Item>item</DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenu.Trigger>trigger</DropdownMenu.Trigger>
          <DropdownMenu.Content>
            <DropdownMenu.Label>label</DropdownMenu.Label>
            <DropdownMenu.Item>item</DropdownMenu.Item>
            <DropdownMenu.Item>item</DropdownMenu.Item>
            <DropdownMenu.Item>item</DropdownMenu.Item>
            <DropdownMenu.Separator />
            <DropdownMenu.Item>item</DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu>
      </div>
    </div>
  )
}
