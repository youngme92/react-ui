import Menubar from "@/components/Menubar"

export default function HomePage() {
  return (
    <div
      style={{ margin: "auto", position: "absolute", top: "50%", left: "50%" }}
    >
      <div style={{ display: "flex", gap: "5px" }}></div>
      <Menubar>
        <Menubar.Menu menuKey="menu1">
          <Menubar.Trigger>메뉴</Menubar.Trigger>
          <Menubar.Content>
            <Menubar.Item>아이템1</Menubar.Item>
            <Menubar.Item>아이템2</Menubar.Item>
            <Menubar.Seperator />
            <Menubar.Item>아이템3</Menubar.Item>
          </Menubar.Content>
        </Menubar.Menu>
        <Menubar.Menu menuKey="menu2">
          <Menubar.Trigger>메뉴2</Menubar.Trigger>
          <Menubar.Content>
            <Menubar.Item>아이템3</Menubar.Item>
            <Menubar.Item>아이템4</Menubar.Item>
            <Menubar.Item>아이템5</Menubar.Item>
          </Menubar.Content>
        </Menubar.Menu>
        <Menubar.Menu menuKey="menu3">
          <Menubar.Trigger>메뉴3</Menubar.Trigger>
          <Menubar.Content>
            <Menubar.Item>아이템3</Menubar.Item>
            <Menubar.Item>아이템4</Menubar.Item>
            <Menubar.Item>아이템5</Menubar.Item>
          </Menubar.Content>
        </Menubar.Menu>
        <Menubar.Menu menuKey="menu4">
          <Menubar.Trigger>메뉴4</Menubar.Trigger>
          <Menubar.Content>abcqwdwd</Menubar.Content>
        </Menubar.Menu>
      </Menubar>
    </div>
  )
}
