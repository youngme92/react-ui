import { CloseButton } from "@/icons/Icon"
import React, { useState, createContext } from "react"

// TODO: style dialog 닫을때 animation 기능 추가 하기

type ReactNodeProps = {
  children: React.ReactNode
}

interface DialogProps extends ReactNodeProps {}
interface TriggerProps extends ReactNodeProps {}
interface ContentProps extends ReactNodeProps {}
interface HeaderProps extends ReactNodeProps {}
interface TitleProps extends ReactNodeProps {}
interface DescriptionProps extends ReactNodeProps {}
interface FooterProps extends ReactNodeProps {}
interface CloseProps extends ReactNodeProps {}

type DialogContext = {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const DialogContext = createContext<DialogContext | null>(null)

export default function Dialog({ children }: DialogProps) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <DialogContext.Provider value={{ isOpen, setIsOpen }}>
      {isOpen && <Overlay />}
      {children}
    </DialogContext.Provider>
  )
}
function Overlay() {
  const context = React.useContext(DialogContext)
  if (!context) {
    throw new Error("Overlay must be used within a Dialog")
  }
  const { setIsOpen } = context
  const handleClick = () => {
    setIsOpen(false)
  }

  return <div className="dialog-general__overlay" onClick={handleClick} />
}
/** --------------------------------
 * AlertDialogTrigger TODO: asChild 구현 하기
 * @param children  ReactNode 또는 string 가능하다.
 * 
 ----------------------------------- */
function Trigger({ children }: TriggerProps) {
  const context = React.useContext(DialogContext)
  if (!context) {
    throw new Error("Trigger must be used within a Dialog")
  }
  const { isOpen, setIsOpen } = context
  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return <div onClick={handleClick}>{children}</div>
}

Dialog.Trigger = Trigger

/** --------------------------------
 * DialogContent 
 * @param children  ReactNode 또는 string 가능하다.
 * 
 ----------------------------------- */
function Content({ children }: ContentProps) {
  const context = React.useContext(DialogContext)
  if (!context) {
    throw new Error("Content must be used within a Dialog")
  }
  const { isOpen, setIsOpen } = context
  return (
    isOpen && (
      <div className="dialog-general__content">
        <div
          onClick={() => setIsOpen(false)}
          className="dialog-general__content__close"
        >
          <CloseButton />
        </div>
        {children}
      </div>
    )
  )
}

Dialog.Content = Content

/** --------------------------------
 * DialogHeader 
 * @param children  ReactNode 또는 string 가능하다.
 * 
 ----------------------------------- */
function Header({ children }: HeaderProps) {
  return <div>{children}</div>
}

Dialog.Header = Header

/** --------------------------------
 * AlertDialogTitle 
 * @param children  ReactNode 또는 string 가능하다.
 * 
 ----------------------------------- */
function Title({ children }: TitleProps) {
  return <div className="dialog-general__title">{children}</div>
}

Dialog.Title = Title

/** --------------------------------
 * DialogDescription 
 * @param children  ReactNode 또는 string 가능하다.
 * 
 ----------------------------------- */
function Description({ children }: DescriptionProps) {
  return <div className="dialog-general__description">{children}</div>
}

Dialog.Description = Description

/** --------------------------------
 * DialogFooter 
 * @param children  ReactNode 또는 string 가능하다.
 * 
 ----------------------------------- */
function Footer({ children }: FooterProps) {
  return <div className="dialog-general__footer">{children}</div>
}
Dialog.Footer = Footer

/** --------------------------------
 * DialogClose
 * @param children  ReactNode 또는 string 가능하다.
 * 
 ----------------------------------- */
function Close({ children }: CloseProps) {
  const context = React.useContext(DialogContext)
  if (!context) {
    throw new Error("Close must be used within a Dialog")
  }
  const { setIsOpen } = context
  const handleClick = () => {
    setIsOpen(false)
  }
  return (
    <div className="dialog-general__close" onClick={handleClick}>
      {children}
    </div>
  )
}
Dialog.Close = Close
