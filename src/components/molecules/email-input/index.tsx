import { cn } from "@/lib/cn";
import { UserIcon } from "@components/atoms/Icon";
import {
  Input,
  InputGroup,
  InputLeftElement,
  InputProps,
} from "@components/atoms/input";

import { forwardRef } from "react";

export const EmailInput = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <InputGroup>
        <InputLeftElement>
          <UserIcon />
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
