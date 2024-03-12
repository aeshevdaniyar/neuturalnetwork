import { cn } from "@/lib/cn";
import { VariantProps, cva } from "class-variance-authority";

import { ReactNode, forwardRef } from "react";

const buttonVariants = cva(
  "inline-flex items-center gap-2 inter-base-semibold text-white justify-center whitespace-nowrap rounded-xl text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-violet",
        filled: "bg-violet",
        outline: "border-2 border-[#343839]",
        ghost: "",
      },
      size: {
        default: "py-3 px-6",
      },
    },

    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  isLoading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      children,
      size,
      isLoading = false,
      leftIcon,
      rightIcon,
      ...props
    },
    ref
  ) => {
    return (
      <button
        className={cn(
          buttonVariants({
            variant,
            size,
            className,
          })
        )}
        ref={ref}
        {...(isLoading && {
          disabled: true,
        })}
        {...props}
      >
        {leftIcon}
        {children}
        {rightIcon}
      </button>
    );
  }
);
