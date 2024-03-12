import { FC, PropsWithChildren } from "react";

export const BodyCard: FC<PropsWithChildren> = ({ children }) => {
  return <div className="rounded-3xl">{children}</div>;
};
