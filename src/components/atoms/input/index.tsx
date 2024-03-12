import { cn } from "@/lib/cn";
import { FC, HTMLAttributes, InputHTMLAttributes, forwardRef } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex bg-[#F3F5F7] w-full rounded-xl  outline-none px-4 py-3 file:border-0 file:bg-transparent text-sm font-medium placeholder:text-[#6C7275]/50  disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export interface InputGroupProps extends HTMLAttributes<HTMLDivElement> {}

const InputGroup: FC<InputGroupProps> = ({ className, ...props }) => {
  return <div className={cn("relative ", className)} {...props} />;
};

InputGroup.displayName = "InputGroup";
export interface InputElementProps extends HTMLAttributes<HTMLDivElement> {}
const InputLeftElement: FC<InputElementProps> = ({ className, ...props }) => {
  return (
    <div
      className={cn(
        "absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none",
        className
      )}
      {...props}
    />
  );
};

const InputRightElement: FC<InputElementProps> = ({ className, ...props }) => {
  return (
    <div
      className={cn(
        "absolute inset-y-0 end-0 flex items-center ps-3.5 pointer-events-none",
        className
      )}
      {...props}
    />
  );
};
InputLeftElement.displayName = "InputLeftElement";
InputRightElement.displayName = "InputRightElement";
export { Input, InputGroup, InputLeftElement, InputRightElement };
