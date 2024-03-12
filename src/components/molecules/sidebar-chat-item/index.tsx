import { Badge } from "@components/atoms/Badge";
import { FolderIcon } from "@components/atoms/Icon";
import { Text } from "@components/atoms/Text";
import { FC, useCallback } from "react";
import { NavLink } from "react-router-dom";

type SidebarChatItemProps = {
  pageLink: string;
  text: string;

  count?: number;
};

export const SidebarChatItem: FC<SidebarChatItemProps> = ({
  pageLink,
  text,
  count,
}) => {
  const styles =
    "group rounded-lg flex hover:bg-[#323337] items-center px-3 py-2 gap-2";
  const activeStyles = "bg-[#323337] is-active";

  const classNameFn = useCallback(
    ({ isActive }: { isActive: boolean }) =>
      isActive ? `${styles} ${activeStyles}` : styles,
    []
  );

  return (
    <NavLink to={pageLink} className={classNameFn}>
      <span className="items-start p-1 bg-[#8E55EA] rounded-md">
        <FolderIcon />
      </span>
      <Text size={"sm"}>{text}</Text>
      {count && <Badge className="ml-auto">{count}</Badge>}
    </NavLink>
  );
};
