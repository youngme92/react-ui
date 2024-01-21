// TODO: add size prop 정의하기

type variantType =
  | "default"
  | "secondary"
  | "destructive"
  | "outline"
  | "ghost"
  | "link"

type sizeType = "default" | "sm" | "lg" | "icon"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  variant?: variantType
  size?: sizeType
}

export default function Button({
  children,
  variant = "default",
  ...props
}: ButtonProps) {
  return (
    <button className={`button button-${variant}`} {...props}>
      {children}
    </button>
  )
}
