import { Sidebar } from "@components/organisms/sidebar";
import { FC, PropsWithChildren } from "react";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="inter-base-regular text-grey-90 flex h-screen w-full">
      <Sidebar />
      <div className="flex flex-1 flex-col py-6 pr-6 bg-[#141718]">
        <div className="px-10 py-20 bg-[#FEFEFE] rounded-3xl min-h-content h-full overflow-y-auto">
          <main className="w-full h-full">{children}</main>
        </div>
      </div>
    </div>
  );
};
