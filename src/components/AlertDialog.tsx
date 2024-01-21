import React, { useState, createContext } from "react"

// TODO: style dialog 닫을때 animation 기능 추가 하기

type ReactNodeProps = {
  children: React.ReactNode
}

interface AlertDialogProps extends ReactNodeProps {}
interface TriggerProps extends ReactNodeProps {}
interface ContentProps extends ReactNodeProps {}
interface HeaderProps extends ReactNodeProps {}
interface TitleProps extends ReactNodeProps {}
interface DescriptionProps extends ReactNodeProps {}
interface FooterProps extends ReactNodeProps {}
interface ActionProps extends ReactNodeProps {}
interface CancelProps extends ReactNodeProps {}

type AlertDialogContext = {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const AlertDialogContext = createContext<AlertDialogContext | null>(null)

export default function AlertDialog({ children }: AlertDialogProps) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <AlertDialogContext.Provider value={{ isOpen, setIsOpen }}>
      {isOpen && <Overlay />}
      {children}
    </AlertDialogContext.Provider>
  )
}
function Overlay() {
  return <div className="dialog-alert__overlay" />
}
/** --------------------------------
 * AlertDialogTrigger TODO: asChild 구현 하기
 * @param children  ReactNode 또는 string 가능하다.
 * 
 ----------------------------------- */
function Trigger({ children }: TriggerProps) {
  const context = React.useContext(AlertDialogContext)
  if (!context) {
    throw new Error("Trigger must be used within a AlertDialog")
  }
  const { isOpen, setIsOpen } = context
  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return <div onClick={handleClick}>{children}</div>
}

AlertDialog.Trigger = Trigger

/** --------------------------------
 * AlertDialogContent 
 * @param children  ReactNode 또는 string 가능하다.
 * 
 ----------------------------------- */
function Content({ children }: ContentProps) {
  const context = React.useContext(AlertDialogContext)
  if (!context) {
    throw new Error("Content must be used within a AlertDialog")
  }
  const { isOpen } = context
  return isOpen && <div className="dialog-alert__content">{children}</div>
}

AlertDialog.Content = Content

/** --------------------------------
 * AlertDialogHeader 
 * @param children  ReactNode 또는 string 가능하다.
 * 
 ----------------------------------- */
function Header({ children }: HeaderProps) {
  return <div>{children}</div>
}

AlertDialog.Header = Header

/** --------------------------------
 * AlertDialogTitle 
 * @param children  ReactNode 또는 string 가능하다.
 * 
 ----------------------------------- */
function Title({ children }: TitleProps) {
  return <div className="dialog-alert__title">{children}</div>
}

AlertDialog.Title = Title

/** --------------------------------
 * AlertDialogDescription 
 * @param children  ReactNode 또는 string 가능하다.
 * 
 ----------------------------------- */
function Description({ children }: DescriptionProps) {
  return <div className="dialog-alert__description">{children}</div>
}

AlertDialog.Description = Description

/** --------------------------------
 * AlertDialogFooter 
 * @param children  ReactNode 또는 string 가능하다.
 * 
 ----------------------------------- */
function Footer({ children }: FooterProps) {
  return <div className="dialog-alert__footer">{children}</div>
}
AlertDialog.Footer = Footer

/** --------------------------------
 * AlertDialogAction 
 * @param children  ReactNode 또는 string 가능하다.
 * 
 ----------------------------------- */
function Action({ children }: ActionProps) {
  const context = React.useContext(AlertDialogContext)
  if (!context) {
    throw new Error("Action must be used within a AlertDialog")
  }
  const { setIsOpen } = context
  const handleClick = () => {
    setIsOpen(false)
  }
  return (
    <div className="dialog-alert__action" onClick={handleClick}>
      {children}
    </div>
  )
}
AlertDialog.Action = Action

/** --------------------------------
 * AlertDialogCancel 
 * @param children  ReactNode 또는 string 가능하다.
 * 
 ----------------------------------- */
function Cancel({ children }: CancelProps) {
  const context = React.useContext(AlertDialogContext)
  if (!context) {
    throw new Error("Cancel must be used within a AlertDialog")
  }
  const { setIsOpen } = context
  const handleClick = () => {
    setIsOpen(false)
  }
  return (
    <div className="dialog-alert__cancel" onClick={handleClick}>
      {children}
    </div>
  )
}
AlertDialog.Cancel = Cancel
