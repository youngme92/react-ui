import React, { useState, useContext } from "react"

interface ReactNode {
  children: React.ReactNode
}
interface CollapsibleProps extends ReactNode {}
interface TriggerProps extends ReactNode {}

interface CollapsibleContextType {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}
const CollapsibleContext = React.createContext<CollapsibleContextType | null>(
  null
)
export default function Collapsible({ children }: CollapsibleProps) {
  const [open, setOpen] = useState(false)
  return (
    <CollapsibleContext.Provider value={{ open, setOpen }}>
      <div className="collapsible">{children}</div>
    </CollapsibleContext.Provider>
  )
}

function Trigger({ children }: TriggerProps) {
  const context = useContext(CollapsibleContext)
  if (!context) {
    throw new Error("Trigger must be used within a Collapsible")
  }
  const { open, setOpen } = context
  return (
    <div className="collapsible__trigger" onClick={() => setOpen(!open)}>
      {children}
    </div>
  )
}

Collapsible.Trigger = Trigger

function Content({ children }: ReactNode) {
  const context = useContext(CollapsibleContext)
  if (!context) {
    throw new Error("Content must be used within a Collapsible")
  }
  const { open } = context
  return open && <div className="collapsible__content">{children}</div>
}

Collapsible.Content = Content
