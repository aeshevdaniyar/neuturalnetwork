import { Text } from "@components/atoms/Text";
import { FC, useCallback } from "react";
import { NavLink } from "react-router-dom";

interface ProfileSidebarLinkItemProps {
  pageLink: string;
  text: string;
  icon: JSX.Element;
  activeIcon: JSX.Element;
}

export const ProfileSidebarLinkItem: FC<ProfileSidebarLinkItemProps> = ({
  icon,
  pageLink,
  text,
  activeIcon,
}) => {
  const styles = "group rounded-full flex  items-center px-6 py-3 gap-3";
  const activeStyles = "border-2 border-puple-200 is-active";

  const classNameFn = useCallback(
    ({ isActive }: { isActive: boolean }) =>
      isActive ? `${styles} ${activeStyles}` : styles,
    []
  );

  return (
    <NavLink to={pageLink} className={classNameFn}>
      <span className="items-start group-[.is-active]:hidden block">
        {icon}
      </span>
      <span className="items-start group-[.is-active]:block hidden">
        {activeIcon}
      </span>
      <Text className="inter-lg-medium  group-[.is-active]:text-[#141718] text-[#6C7275]">
        {text}
      </Text>
    </NavLink>
  );
};
