import { cva } from "class-variance-authority";
import { cn } from "../../lib/utils";

const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-2 rounded-full text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-white px-5 py-3 text-black hover:-translate-y-0.5 hover:bg-white/90",
        outline: "border border-white/15 bg-white/[0.04] px-5 py-3 text-white hover:-translate-y-0.5 hover:bg-white/[0.09]",
        ghost: "px-3 py-2 text-white/65 hover:bg-white/[0.06] hover:text-white",
        dark: "bg-black px-5 py-3 text-white hover:-translate-y-0.5 hover:bg-black/90",
      },
      size: { default: "min-h-11", sm: "min-h-9 text-xs", lg: "min-h-12 px-6" },
    },
    defaultVariants: { variant: "default", size: "default" },
  },
);

export function Button({ className, variant, size, ...props }) {
  return <button className={cn(buttonVariants({ variant, size, className }))} {...props} />;
}
