import { cn } from "@/lib/cn";
import { FC, HTMLAttributes } from "react";
export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {}
export const Container: FC<ContainerProps> = ({ className, ...props }) => {
  return <div className={cn(className, "rounded-3xl")} {...props} />;
};
