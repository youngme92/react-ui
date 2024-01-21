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
/**
 *
 * @param varient 값에 따라 아이콘을 변경할수 있다.
 * @param children children은 alert.Title, alert.Description 사용가능
 * @returns
 */
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
