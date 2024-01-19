import React from "react"
import { Terminal, Info, Warning } from "@/icons/Icon"

type AlertVariants = "warning" | "info" | "terminal"

interface AlertProps {
  varient?: AlertVariants
  children: React.ReactNode
}
interface AlertTitleProps extends AlertProps {}

interface AlertDescriptionProps extends AlertProps {}

const setIcon = (varient: AlertVariants | undefined) => {
  switch (varient) {
    case "warning":
      return <Warning />
    case "terminal":
      return <Terminal />
    default:
      return <Info />
  }
}

export default function Alert({ varient, children }: AlertProps) {
  return (
    <div>
      {varient && setIcon(varient)}
      {children}
    </div>
  )
}

function Title({ children }: AlertTitleProps) {
  return <h5>{children}</h5>
}

Alert.Title = Title

function Description({ children }: AlertDescriptionProps) {
  return <div>{children}</div>
}

Alert.Description = Description
