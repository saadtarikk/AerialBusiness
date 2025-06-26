import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
        glass: "glassmorphism rounded-full px-6 py-2 text-sm font-medium border border-white/10 bg-white/5 backdrop-blur-sm text-white/90",
        glass_hero: "glassmorphism rounded-full px-6 py-2.5 text-sm font-medium border border-white/10 bg-white/5 backdrop-blur-sm text-black/90",
        popular: "bg-gradient-to-r from-aireal-purple to-gradient-pink text-white px-6 py-2 rounded-full text-sm font-semibold glassmorphism",
        footer: "bg-white text-[#1B0C25] rounded-full px-6 py-2 text-sm font-medium border border-[#D588FB] shadow-[0px_2px_5px_rgba(0,0,0,0.07),_0px_8px_8px_rgba(0,0,0,0.06),_0px_19px_11px_rgba(0,0,0,0.04)]"
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
