import React, { createContext, useContext, useState } from "react"

// TODO: openMenu 상태값이 있는경우 trigger에 hover 했을때 openMenu 변경되도록 설정
// TODO: trigger 외부 영역을 클릭했을때 openMenu 값 null로 변경하기
// TODO: menubar 세부 컴포넌트 추가로 구현하기
interface ReactNodeProps {
  children: React.ReactNode
}

interface MenubarProps extends ReactNodeProps {}
interface MenuProps extends ReactNodeProps {
  menuKey: string
}
interface TriggerProps extends ReactNodeProps {
  menuKey?: string
  handleTriggerClick?: () => void
}
interface ContentProps extends ReactNodeProps {
  menuKey?: string
}
interface ItemProps extends ReactNodeProps {}

interface MenubarContextProps {
  openMenu: string | null
  setOpenMenu: React.Dispatch<React.SetStateAction<string | null>>
}

const MenubarContext = createContext<MenubarContextProps | null>(null)

export default function Menubar({ children }: MenubarProps) {
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  return (
    <MenubarContext.Provider value={{ openMenu, setOpenMenu }}>
      <div className="menubar">{children}</div>
    </MenubarContext.Provider>
  )
}

// menu trigger content item

/** --------------------------------
 * MenubarMenu
 * @param children  ReactNode 또는 string 가능하다.
 * 
 ----------------------------------- */
function Menu({ children, menuKey }: MenuProps) {
  const context = useContext(MenubarContext)
  if (!context) throw new Error("MenubarContext is null")
  const { openMenu, setOpenMenu } = context
  const handleTriggerClick = () => {
    if (openMenu === menuKey) {
      setOpenMenu(null)
    } else {
      setOpenMenu(menuKey)
      console.log("handleTriggerClick")
    }
  }
  const childrenWithProps = React.Children.map(children, (child) =>
    React.cloneElement(child as React.ReactElement, {
      // 여기에 전달하고 싶은 props를 추가합니다.
      handleTriggerClick,
      menuKey,
    })
  )

  return <div className="menubar-menu">{childrenWithProps}</div>
}

Menubar.Menu = Menu

/** --------------------------------
 * MenubarTrigger 
 * @param children  ReactNode 또는 string 가능하다.
 * @param handleTriggerClick  trigger 클릭시 실행할 함수
 * 
 ----------------------------------- */
function Trigger({ children, handleTriggerClick }: TriggerProps) {
  const handleClick = () => {
    // TODO 상위 컴포넌트 menu 에 trigger 전달
    handleTriggerClick && handleTriggerClick()
  }
  return (
    <div className="menubar__trigger" onClick={handleClick}>
      {children}
    </div>
  )
}

Menubar.Trigger = Trigger

/** --------------------------------
 * MenubarContent
 * @param children  ReactNode 또는 string 가능하다.
 *
 * ----------------------------------- */
function Content({ children, menuKey }: ContentProps) {
  const context = useContext(MenubarContext)
  if (!context) throw new Error("MenubarContext is null")
  const { openMenu } = context
  // openMenu 값이 변경되었는데 리렌더링이 안돼
  return (
    <div
      data-state={menuKey === openMenu ? "open" : "close"}
      className={`menubar__content`}
    >
      {children}
    </div>
  )
}

Menubar.Content = Content

/** --------------------------------
 * MenubarItem
 * @param children  ReactNode 또는 string 가능하다.
 *
 * ----------------------------------- */
function Item({ children }: ItemProps) {
  return <div className="menubar__item">{children}</div>
}

Menubar.Item = Item

function Seperator() {
  return <div className="menubar__seperator"></div>
}

Menubar.Seperator = Seperator
