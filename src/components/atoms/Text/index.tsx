import { cn } from "@/lib/cn";
import { VariantProps, cva } from "class-variance-authority";
import { FC } from "react";

const textVariants = cva("text-gray-200", {
  variants: {
    size: {
      xs: "inter-xs-semibold",
      sm: "inter-sm-semibold",
      md: "inter-base-semibold",
      lg: "inter-lg-semibold",
    },
  },

  defaultVariants: {
    size: "md",
  },
});
export interface TextProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof textVariants> {}

export const Text: FC<TextProps> = ({ className, size, ...props }) => {
  return <p className={cn(textVariants({ size, className }))} {...props} />;
};
