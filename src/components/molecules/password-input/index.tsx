import { cn } from "@/lib/cn";
import { LockIcon } from "@components/atoms/Icon";
import {
  Input,
  InputGroup,
  InputLeftElement,
  InputProps,
} from "@components/atoms/input";
import { forwardRef } from "react";

export const PasswordInput = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <InputGroup>
        <InputLeftElement>
          <LockIcon />
        </InputLeftElement>
        <Input
          type={type}
          ref={ref}
          className={cn("pl-12", className)}
          {...props}
        />
      </InputGroup>
    );
  }
);
