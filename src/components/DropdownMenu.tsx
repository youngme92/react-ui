import React, { useState, useEffect, createContext } from "react"

// TODO: style dropdownMenu 열고 닫을때 animation 기능 추가 하기
// TODO: data-side 를 어떻게 구현할것인가 -> prop을 받아서 구현하면 될듯
// TODO: 중복으로 dropdownMenu를 사용할 때, 하나의 dropdownMenu를 닫으면 다른 dropdownMenu 닫기

type ReactNodeProps = {
  children: React.ReactNode
}

interface DropdownMenuProps extends ReactNodeProps {}
interface TriggerProps extends ReactNodeProps {}
interface ContentProps extends ReactNodeProps {}
interface LabelProps extends ReactNodeProps {}
interface ItemProps extends ReactNodeProps {}

type DropdownMenuContext = {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const DropdownMenuContext = createContext<DropdownMenuContext | null>(null)

export default function DropdownMenu({ children }: DropdownMenuProps) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      console.log("클릭 이벤트 발생")
      console.log(event.target)
      if ((event.target as Element).closest(".dropdownMenu__trigger")) {
        console.log("DropdownMenuTrigger 클릭")
        // 클릭이 DropdownMenu 내부에서 발생한 경우
        return
      }
      // 클릭이 DropdownMenu 바깥에서 발생한 경우
      setIsOpen(false)
    }

    if (isOpen) {
      // DropdownMenu가 열릴 때 클릭 이벤트 리스너 등록
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      // 컴포넌트가 언마운트될 때 클릭 이벤트 리스너 제거
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isOpen, setIsOpen])

  return (
    <DropdownMenuContext.Provider value={{ isOpen, setIsOpen }}>
      <div className="dropdownMenu">{children}</div>
    </DropdownMenuContext.Provider>
  )
}
/** --------------------------------
 * DropdownMenuTrigger TODO: asChild 구현 하기
 * @param children  ReactNode 또는 string 가능하다.
 * 
 ----------------------------------- */
function Trigger({ children }: TriggerProps) {
  const context = React.useContext(DropdownMenuContext)
  if (!context) {
    throw new Error("Trigger must be used within a DropdownMenu")
  }
  const { isOpen, setIsOpen } = context
  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="dropdownMenu__trigger" onClick={handleClick}>
      {children}
    </div>
  )
}

DropdownMenu.Trigger = Trigger

/** --------------------------------
 * DropdownMenuContent 
 * @param children  ReactNode 또는 string 가능하다.
 * 
 ----------------------------------- */
function Content({ children }: ContentProps) {
  const context = React.useContext(DropdownMenuContext)
  if (!context) {
    throw new Error("Content must be used within a DropdownMenu")
  }
  const { isOpen } = context

  return isOpen && <div className="dropdownMenu__content">{children}</div>
}
DropdownMenu.Content = Content

/** --------------------------------
 * DropdownMenuLabel
 * @param children  ReactNode 또는 string 가능하다.
 *
 * ----------------------------------- */
function Label({ children }: LabelProps) {
  return <div className="dropdownMenu__label">{children}</div>
}

DropdownMenu.Label = Label

/** --------------------------------
 * DropdownMenuSeparator
 *
 * ----------------------------------- */
function Separator() {
  return <div className="dropdownMenu__separator" />
}

DropdownMenu.Separator = Separator

/** --------------------------------
 * DropdownMenuItem
 * @param children  ReactNode 또는 string 가능하다.
 *
 * ----------------------------------- */
function Item({ children }: ItemProps) {
  return <div className="dropdownMenu__item">{children}</div>
}

DropdownMenu.Item = Item
