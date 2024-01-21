type BadgeVarient = "default" | "secondary" | "outline" | "destructive"
interface BadgeProps {
  varient?: BadgeVarient
  children: React.ReactNode
}

export default function Badge({ children, varient = "default" }: BadgeProps) {
  return <div className={`badge badge-${varient}`}>{children}</div>
}
