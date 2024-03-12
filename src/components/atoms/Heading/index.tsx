import { cn } from "@/lib/cn";
import { VariantProps, cva } from "class-variance-authority";
import { FC } from "react";

export const headingVariants = cva("text-black-200", {
  variants: {
    level: {
      default: "inter-5xl-bold",
      h2: "inter-5xl-bold",
      h3: "inter-4xl-bold",
      h4: "inter-3xl-bold",
    },
  },

  defaultVariants: {
    level: "default",
  },
});

export interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {}

export const Heading: FC<HeadingProps> = ({ level, className, ...props }) => {
  if (level == "h2") {
    <h2 className={cn(headingVariants({ level, className }))} {...props} />;
  }
  if (level == "h3") {
    <h3 className={cn(headingVariants({ level, className }))} {...props} />;
  }
  if (level == "h4") {
    <h3 className={cn(headingVariants({ level, className }))} {...props} />;
  }
  return <></>;
};
